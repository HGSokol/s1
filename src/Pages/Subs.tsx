import React from "react";
import { useNavigate } from "react-router-dom";
import { SubCard } from "../components/SubLandingCard";


export type Sub = {
  text: string,
  price: string,
  top?: string,
}

const subsData: Sub[] = [
  {
    text: 'Подписка на 1 месяц',
    price: '1200 руб./ мес.',
  },
  {
    text: `При подписке на 3 месяца.\n3000 руб. за 3 месяца`,
    price: '1000 руб./ мес.',
  },
  {
    text: `При подписке на год.\n9600 руб. в год`,
    price: '800 руб./ мес.',
    top: 'top',
  }
]

const Subs = () => {
  const navigate = useNavigate()

  return (
  <div className='mx-[16rem] lg:mx-[0rem]'>
    <div className='w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[20.5rem]'
      onClick={() => navigate('/cabinet')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]'>Подписки</div>
    </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <p className='mb-[32rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Текущая подписка</p>
    <div className='mb-[32rem] flex flex-row lg:justify-between lg:w-[394rem] lg:mb-[48rem]'>
      <div className='w-full flex justify-between items-center lg:items-start flex-row lg:flex-col lg:justify-start'>
        <p className='font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leading-[23rem] lg:text-[#1F2117] lg:mb-[12rem]'>Год</p>
        <p className='font-bodyalt font-[400] text-[14rem] leading-[17rem] text-[#777872] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:text-[#777872]'>30000 руб./год</p>
      </div>
      <div className='hidden lg:block'>
        <button onClick={() => navigate('/cabinet/changeSubs')} className=' w-max lg:px-[24rem] lg:flex lg:items-center lg:h-[56rem] lg:bg-[#FFB700] lg:text-[16rem] lg:text-[#FAFAFA] lg:font-bodyalt lg:font-[600] lg:rounded-full'>
          Изменить подписку
        </button>
      </div>
    </div>
    <div className='hidden lg:grid lg:grid-cols-3 lg:w-[1370rem] lg:gap-[40rem]'>
      {
        subsData.map((e,i) => {
          return (
            <div key={i}>
              <SubCard item={e} active={''} landing={false}/>
            </div>
          )
        })
      }
    </div>
    <div className='mb-[32rem] lg:hidden'>
      <SubCard item={subsData[0]} active={''} landing={false}/>
    </div>
    <div className='lg:hidden'>
      <button onClick={() => navigate('/cabinet/changeSubs1')} className='bg-[#FFB700] w-full py-[14rem] text-[14rem] font-bodyalt text-white font-[600] rounded-[40rem] lg:px-[24rem] lg:flex lg:items-center lg:h-[56rem] lg:bg-[#FFB700] lg:text-[16rem] lg:text-[#FAFAFA] lg:font-bodyalt lg:font-[600] lg:rounded-full'>
        Изменить тарифный план
      </button>
    </div>
  </div>
  )
}

export default Subs