import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import CardIcon from '../components/CardIcon'
import HeaderOrder from "../components/HeaderOrder";



const Ordering = () => {
  const navigate = useNavigate()


  return (
  <div className='mx-[16rem] lg:mx-[0rem] lg:w-full'>
    <HeaderOrder/>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <p className='mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Оформление заказа</p>
    <div className='lg:grid lg:grid-cols-[1fr_1fr] lg:w-full'>
      <div className='mb-[24rem] lg:order-2'>
        <p className='mb-[16rem] font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leaing-[23rem] lg:text-[#1F2117] lg:mb-[28rem]'>Информация о заказе</p>
        <div className='w-full flex flex-row justify-between mb-[12rem] lg:w-[357rem] lg:mb-[16rem]'>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Вид подписки:</div>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>Подписка на год</div>
        </div>
        <div className='w-full flex flex-row justify-between lg:w-[357rem] lg:mb-[16rem]'>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Сумма:</div>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>30 000 руб.</div>
        </div>
      </div>
      <div className=' lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]'>
        <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]'>Способ оплаты</div>
        <div className='w-full lg:w-[441rem] '>
          <div className='w-full px-[20rem] py-[20rem] mb-[16rem] flex justify-between shadow-drop rounded-[14rem] lg:px-[20rem] lg:py-[25rem] lg:mb-[24rem] lg:flex lg:justify-between lg:shadow-drop lg:rounded-[14rem]'>
            <div className=''>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.15545H17.5001V20.8443H10.5V7.15545Z" fill="#FF5F00"/>
                <path d="M10.7046 13.9999C10.7046 11.2669 12.0035 8.84278 14.0001 7.27423C12.5328 6.13351 10.6806 5.44434 8.65997 5.44434C3.87283 5.44434 0 9.27051 0 13.9999C0 18.7292 3.87283 22.5554 8.65986 22.5554C10.6805 22.5554 12.5327 21.8663 14.0001 20.7254C12.0035 19.1807 10.7046 16.7329 10.7046 13.9999Z" fill="#EB001B"/>
                <path d="M28 13.9999C28 18.7292 24.1272 22.5554 19.3402 22.5554C17.3196 22.5554 15.4674 21.8663 14.0001 20.7254C16.0207 19.157 17.2956 16.7329 17.2956 13.9999C17.2956 11.2669 15.9966 8.84278 14.0001 7.27423C15.4673 6.13351 17.3196 5.44434 19.3402 5.44434C24.1272 5.44434 28 9.29433 28 13.9999Z" fill="#F79E1B"/>
              </svg>
            </div>
            <div className='flex flex-row items-center'>
              <p className='font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#777872] lg:mr-[12rem] lg:font-bodyalt lg:font-[600] lg:text-[16rem] lg:text-[#777872] lg:leading-[19rem]'>**</p>
              <p className='font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#777872] lg:font-bodyalt lg:font-[600] lg:text-[16rem] lg:text-[#777872] lg:leading-[19rem]'>1234</p>
            </div>
          </div>
          <p onClick={() => window.innerWidth >=1024 ? navigate('/cabinet/ordering') : navigate('/cabinet/order')} className=' mb-[26rem] text-start font-bodyalt font-[600] text-[12rem] text-[#FFB700] leading-[14rem] cursor-pointer lg:text-[16rem] lg:leading-[19rem] lg:mb-[32rem]'>Ввести данные другой карты</p>
          <div >
            <button onClick={() => window.innerWidth >=1024 ? navigate('/cabinet/ordering3') : navigate('/cabinet/order3')} className={`bg-[#FFB700] mb-[30rem] lg:mb-[24rem] w-full h-[42rem] flex items-center justify-center rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ordering