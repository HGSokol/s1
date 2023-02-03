import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubCard } from "../components/SubCard";
import { Profile, ActiveSub } from '../App'
import axios from "axios";


export type Sub = {
  text?: string[],
  price: string,
  top?: string,
  active?: string,
  info?: ActiveSub
}

interface Subscribe {
  currency?: string,
  description?: string,
  id?: number,
  invoicePeriod?: number,
  isBestChoice?: boolean,
  name?: string,
  price?: number,
  productId?: string,
  properties?: {
    card?: string[], 
    pricePerMonth?: number,
  },
  tier?: 1,
  trialPeriod?: 7,
}

const Subs = () => {
  const { activeSub ,cardInfo, setReload } = useContext(Profile)
  const [active, setActive] = useState<number | null>(null)
  const [sub, setSub] = useState<Subscribe[] |null>(null)

  const navigate = useNavigate()
  document.title = 'Подписки'

  
  useEffect(() => {
    setReload(true)
    axios.get('https://stage.fitnesskaknauka.com/api/plans')
    .then((res) => {
      setSub(res.data)
    })
    .catch((error) => {
      console.log(error.response.data)
    })
    // .finally(() => {
    //   if(activeSub){
    //     navigate('/cabinet')
    //   }
    // })
    
  },[])


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
        <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]'>Подписки</div>
      </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <p className='mb-[32rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Выберите подписку</p>
    <div className='flex flex-col mb-[32rem] gap-[16rem] lg:grid lg:grid-cols-3 lg:w-[1370rem] lg:gap-[40rem]'>
      {
        sub?.map((e,i) => {
          return (
            <div key={i} onClick={() => {
              setActive(i)
              }}>
              <SubCard items={e} active={active === i ? 'active': ''} landing={true}/>
            </div>
          )
        })
      }
    </div>
    <div onClick={() => navigate(`${cardInfo ? '/cabinet/ordering2' : '/cabinet/ordering'}`)} className='mb-[20rem] w-full h-[50rem] flex justify-center items-center rounded-full bg-[#FFB700] text-[16rem] font-bodyalt font-[700] leading-[19rem] text-[#FFFFFF] lg:hidden cursor-pointer'>
      Оплатить
    </div>
  </div>
  )
}

export default Subs