import React from "react"
import HeaderOrder from "../components/HeaderOrder"
import { ChangePaymentData } from "../components/ChangePaymentData"


const ChangePayment = () => {
  document.title = 'Изменение платежных данных'
  
  return (
    <div className='mx-[16rem] lg:mx-[0rem] lg:w-full'>
    <HeaderOrder />
    <p className='mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Изменение платежных данных</p>
    <div className=''>
      <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]'>Введите данные карты</div>
      <ChangePaymentData ChangeCard={true}/>
    </div>
  </div>
  )
}

export default ChangePayment