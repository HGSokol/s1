import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "../components/CardInfo";


type TypeDataHistory = {
  amount?: number,
  createdAt?: string,
  currency?: string,
  id?: number,
  isTrial?: boolean,
  paidPeriodEnd?: string,
  paidPeriodStart?: string,
  payment?: {
    id?: number, 
    transactionId?: string, 
    chargedAt?: string, 
    paymentProvider?: string
  }
  paymentMethod?: string,
  planName?: string,
  status?: string,
}

const Payment = () => {
  document.title = 'Детали платежей'
  const navigate = useNavigate()
  const [history, setHistory] = useState<TypeDataHistory[] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const lastPage = useRef(0)
  const length = useRef(0)

  useEffect(() => {
    axios.get(`https://stage.fitnesskaknauka.com/api/customer/invoices?page=${currentPage}`)
    .then((res) => {
      console.log(res,'история подписок')
      if(window.innerWidth >= 1024) {
        setHistory(res.data.data)
      } else {
        setHistory((prev) =>{
          if(prev){
            return [
              ...prev,
              ...res.data.data
            ]
          } else {
            return res.data.data
          }
        })
      }

      lastPage.current = res.data.meta.lastPage
      length.current = res.data.data.length
      
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  },[currentPage])

  function createPages(pages: number[], pagesCount:number, currentPage:number) {
    if(pagesCount > 3) {
        if(currentPage > 2) {
          if(currentPage !== lastPage.current){
            for (let i = currentPage-1; i <= currentPage+1; i++) {
                pages.push(i)
                if(i == pagesCount-1) break
            }
          } else {
            for(let s=1; s>=0; s--){
              pages.push(lastPage.current-1-s)
            }
          }
        }
        else {
            for (let i = 2; i <= 4; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
  }

  const pages = (k:any) => {
    let arr = Array.from({length: k}, (_, index) => index + 1);
    if(k === 0 || k === 1) {
      return []
    }
    return arr;
  }

  let ss1: number[] = []
  if(lastPage.current >=5){
    const pagggggg:any[] = []
    createPages(pagggggg,lastPage.current,currentPage)
    ss1 = [1,...pagggggg,lastPage.current]
  } else {
    ss1 = pages(lastPage.current)
  }

  return (
    <div className='mx-[16rem] lg:mx-[0rem]'>
    <div className='pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[23rem] cursor-pointer'
      onClick={() => navigate('/cabinet')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]'>Детали платежей</div>
    </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Детали платежей</div>
    <div>
      <p className='font-bodyalt font-[600] text-[22rem] leaing-[30rem] text-[#1F2117] mb-[24rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>История платежей</p>
      <div className='w-full flex flex-col lg:w-full lg:flex lg:flex-col lg:mb-[0rem]'>
        {
          length.current === 0? (
            <div className='font-bodyalt font-[400] text-[20rem]'>
              Вы пока не сделали ни одной покупки
            </div>
            ): (
            <div className='hidden lg:grid lg:grid-cols-[repeat(2,160rem)_200rem_repeat(4,160rem)] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:text-[#AAAAAA] w-full'>
              <div>Дата</div>
              <div>Тип подписки</div>
              <div>Описание</div>
              <div>Сумма</div>
              <div>Статус</div>
              <div>Начало</div>
              <div>Конец</div>
            </div>
          )
        }
        {
          history?.map((e,i) => {
            let typeSub;
            let trial;
            e.paymentMethod === 'internal'? typeSub = 'Внутренний': e.paymentMethod === 'external' ? typeSub ='Apple': typeSub ='Бесплатная'
            e.isTrial === true? trial='(пробный период)': trial=''
            return (
              <div key={i} className={`grid grid-rows-7 py-[18rem] font-bodyalt font-[400] text-[#1F2117] text-[15rem] leading-[21rem] lg:grid lg:grid-rows-1 lg:grid-cols-[repeat(2,160rem)_200rem_repeat(4,160rem)] lg:py-[18rem] lg:font-bodyalt lg:font-[400] lg:text-[#1F2117] lg:text-[18rem] lg:leading-[21rem]
              ${history.length-1 !== i? ' border-b-[1px] border-[#E4E4E4]': ''}`}>
                <div className='flex flex-row justify-between lg:mb-[0rem] lg:block'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Дата</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{new Date(e && e.createdAt? e.createdAt: '').toLocaleDateString()}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Тип подписки</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem] whitespace-pre text-end'>{`${typeSub}\n${trial}`}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Описание</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e && e.planName? e.planName: ''}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Сумма</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e && e.amount? e.amount: 0} руб</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Статус</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e && e.status? e.status: ''}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Начало</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem] whitespace-pre text-end'>{e && e.paidPeriodStart ? `${new Date(e.paidPeriodStart).toLocaleDateString()}\n${new Date(e.paidPeriodStart).toLocaleTimeString()}` : ''}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Конец</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem] whitespace-pre text-end'>{e && e.paidPeriodEnd? `${new Date(e.paidPeriodEnd).toLocaleDateString()}\n${new Date(e.paidPeriodEnd).toLocaleTimeString()}`: ''}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='hidden lg:w-full lg:flex lg:justify-end lg:mb-[20rem]'>
        {
          [...ss1].map((e,i) => {
            return(
              <div onClick={() =>setCurrentPage(Array.isArray(e) === true? e: e)} key={i} className='flex flex-row gap-[16rem] cursor-pointer w-max'>
                <div className={`font-bodyalt text-[16rem] leading-[19rem]  mr-[16rem]
                ${currentPage === e? ' font-[700] text-[#1F2117] border-b-[1rem] border-[#1F2117]': ' font-[400] text-[#AAAAAA]'}`}>
                {
                  (e === 1 && currentPage > 3)? `${1}  ...`: 
                  (e === lastPage.current && currentPage < lastPage.current-2? `... ${lastPage.current}`: e )
                }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={`text-[16rem] lg:hidden 
      ${currentPage && currentPage >= lastPage.current? ' hidden': ''}`}  
      onClick={() =>currentPage && currentPage >= lastPage.current?'': setCurrentPage((prev) => {
        if(prev){
          return prev + 1
        }
        else return prev
      })}>
        <div className=' mb-[24rem] flex flex-col gap-[24rem]'>
          <button className=' bg-white border-[1px] border-[#1F2117] w-full py-[14rem] text-[16rem] font-bodyalt text-[#1F2117] font-[600] rounded-[40rem] '>
            Показать больше
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Payment