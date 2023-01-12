import React from "react";
import { useNavigate } from "react-router-dom";


type TypeDataHistory = {
  data:string,
  type:string,
  description:string,
  price:string,
}

const Payment = () => {
  const navigate = useNavigate()
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
    <div className='w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[20.5rem]'
      onClick={() => navigate('/cabinet')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]'>Детали платежей</div>
    </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Детали платежей</div>
    <p className='font-bodyalt font-[600] text-[22rem] leaing-[30rem] text-[#1F2117] mb-[32rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Способы оплаты</p>
    <div className='w-full lg:w-[441rem]'>
      <div className='w-full px-[20rem] py-[20rem] mb-[32rem] flex justify-between shadow-drop rounded-[14rem] lg:px-[20rem] lg:py-[25rem] lg:mb-[32rem] lg:flex lg:justify-between lg:shadow-drop lg:rounded-[14rem]'>
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
      <button  className={`bg-[#FFB700] mb-[30rem] lg:mb-[24rem] w-full h-[42rem] flex items-center justify-center rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
        Изменить данные карты
      </button>
    </div>
    <div>
      <p className='font-bodyalt font-[600] text-[22rem] leaing-[30rem] text-[#1F2117] mb-[32rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem] lg:text-[#1F2117] lg:mb-[75rem]'>История платежей</p>
      <div className='w-full flex flex-col lg:w-[920rem] lg:flex lg:flex-col'>
        <div className='grid grid-cols-4 font-bodyalt font-[400] text-[14rem] leading-[19rem] text-[#AAAAAA] lg:grid lg:grid-cols-4 lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:text-[#AAAAAA]'>
          <div>Дата</div>
          <div>Тип подписки</div>
          <div>Описание</div>
          <div>Сумма</div>
        </div>
        {
          dataHistory.map((e,i) => {
            return (
              <div key={i} className={`grid grid-cols-4 py-[18rem] font-bodyalt font-[400] text-[#1F2117] text-[15rem] leading-[21rem] lg:grid lg:grid-cols-4 lg:py-[18rem] lg:font-bodyalt lg:font-[400] lg:text-[#1F2117] lg:text-[18rem] lg:leading-[21rem]
              ${dataHistory.length-1 !== i? ' border-b-[1px] border-[#E4E4E4]': ''}`}>
                <div>{e.data}</div>
                <div>{e.type}</div>
                <div>{e.description}</div>
                <div>{e.price} руб.</div>
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