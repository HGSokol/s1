import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "../components/CardInfo";


type TypeDataHistory = {
  data:string,
  type:string,
  description:string,
  price:string,
}

const Payment = () => {
  const navigate = useNavigate()

  document.title = 'Детали платежей'
  const dataHistory:TypeDataHistory[] = [
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
    {data: '10.12.2023', type: 'Год', description: 'Год', price: '30000'},
  ]

  return (
    <div className='mx-[16rem] lg:mx-[0rem]'>
    <div className='pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[23rem]'
      onClick={() => navigate('/cabinet')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]'>Детали платежей</div>
    </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Детали платежей</div>
    <p className='font-bodyalt font-[600] text-[16rem] leaing-[30rem] text-[#1F2117] mb-[16rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Способы оплаты</p>
    <div className='w-full lg:w-[441rem]'>
      <CardInfo />
    </div>
    <div>
      <p className='font-bodyalt font-[600] text-[16rem] leaing-[30rem] text-[#1F2117] mb-[24rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem] lg:text-[#1F2117] lg:mb-[75rem]'>История платежей</p>
      <div className='w-full flex flex-col lg:w-[920rem] lg:flex lg:flex-col'>
        <div className='hidden lg:grid lg:grid-cols-4 lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:text-[#AAAAAA]'>
          <div>Дата</div>
          <div>Тип подписки</div>
          <div>Описание</div>
          <div>Сумма</div>
        </div>
        {
          dataHistory.map((e,i) => {
            return (
              <div key={i} className={`grid grid-rows-4 py-[18rem] font-bodyalt font-[400] text-[#1F2117] text-[15rem] leading-[21rem] lg:grid lg:grid-rows-1 lg:grid-cols-4 lg:py-[18rem] lg:font-bodyalt lg:font-[400] lg:text-[#1F2117] lg:text-[18rem] lg:leading-[21rem]
              ${dataHistory.length-1 !== i? ' border-b-[1px] border-[#E4E4E4]': ''}`}>
                <div className='flex flex-row justify-between mb-[12rem] lg:mb-[0rem] lg:block'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Дата</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e.data}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Тип подписки</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e.type}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Описание</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e.description}</div>
                </div>
                <div className='flex flex-row justify-between'>
                  <div className='font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:hidden'>Сумма</div>
                  <div className='font-bodyalt font-[400] text-[14rem] leaiding-[17rem] text-[#1F2117] lg:text-[18rem]'>{e.price} руб.</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Payment