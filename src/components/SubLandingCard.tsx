import {Sub} from '../layouts/Subscribe'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface SubCard {
  item: Sub
  active:string
  landing: boolean
}

export const SubCard = ({item, active, landing}: SubCard) => {
  const navigate = useNavigate()

  const {text, price, top = ''} = item

  const navigateToOrdering = () => {
    if(landing && window.innerWidth >= 1024){
      navigate('/cabinet/ordering')
    }
  }
  return (
    <div onClick={() =>navigateToOrdering()} className='relative overflow-hidden rounded-[20rem] drop-shadow-drop duration-[400ms]' >
      <div className={` bg-white ${active && landing ? ' h-max': ' h-[126rem]'} w-[288rem] py-[24rem] px-[32rem] overflow-hidden border-[1px] border-transparent cursor-pointer flex flex-col justify-between rounded-[20rem] 
        lg:h-[207rem] lg:w-full lg:py-[36rem] lg:px-[32rem] duration-[400ms] hover:border-[1px] ${active === 'active'? ' border-[#FFB700]': 'hover:border-[#CBCBCB]'}`}>
          {
            top === 'top' ? (
              <div className='
                flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150rem] h-[18rem] translate-x-[147rem] -translate-y-[7rem] font-[400] text-[10rem] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
                lg:text-[16rem] lg:h-[42rem] lg:w-[220rem] lg:top-0 lg:right-0  lg:translate-x-[60rem] lg:translate-y-[20rem] '>
                лучший выбор
              </div>
            ) : null
          }
          <div className='flex flex-col justify-center gap-[24rem]
          lg:gap-[24rem]'>
            <p className='font-[600] text-[24rem] leading-[28.18rem] text-[#1F2117] text-center 
            lg:text-[40rem] lg:leading-[46.96rem]'>
           {price} 
            </p>
            <p className='font-bodyalt font-[400] text-[14rem] leading-[16.71rem] text-[#777872] text-center 
            lg:text-[22rem] lg:leading-[32rem]'>
            {text}
            </p>
        </div>
        <div className='lg:hidden'>
          {
            active && landing ? (
              <div onClick={() => navigate('/cabinet/order')} className='mt-[16rem] py-[14rem] w-full rounded-full bg-[#FFB700] flex flex-row justify-center items-center'>
                <p className='font-bodyalt font-[600] text-[12rem] leading-[14rem] text-[#FAFAFA] mr-[13rem]'>Оплатить подписку</p>
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.8125 9L15.1875 9" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.125 14.0625L15.1875 9L10.125 3.9375" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}