import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";


const PaymentsStatus = () => {
  document.title = 'Подтверждение оплаты'
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Ожидание оплаты')
  const navigate = useNavigate()

  useEffect(() => {
      axios.get(`https://stage.fitnesskaknauka.com/api/customer/payments/status/${searchParams.get('paymentId')}`)
      .then((res) => {
        console.log(res,'токен')
        if(res.status === 202) {
          setStatus(res.data.message)
          navigate('/cabinet')
        }
  
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  },[])

  
  return (
  <>
    <div className='mt-[70rem] font-bodyalt font-[600] text-[22rem] text-[#1F2117] leading-[26rem] flex flex-col justify-center items-center
      lg:mt-[171rem] lg:absolute lg:translate-x-[300rem]'>
      <div className='mb-[32rem]'>
        <svg className='w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]' viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M39 75.038C58.9032 75.038 75.038 58.9032 75.038 39C75.038 19.0968 58.9032 2.96203 39 2.96203C19.0968 2.96203 2.96203 19.0968 2.96203 39C2.96203 58.9032 19.0968 75.038 39 75.038ZM39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78Z" fill="#FFB700"/>
          <path d="M39 18V39.0004L56 56.0004" stroke="#FFB700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='mb-[24rem] font-body font-[600] text-[20rem] leading-[23rem] text-center text-[#1F2117]
      lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem]'>{status}</div>
      <div className='mb-[32rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-center text-[#777872] whitespace-pre-wrap
      lg:font-bodyalt lg:font-[400] lg:text-[22rem] lg:leading-[32rem] ' >{`${searchParams.get('paymentId')}`}</div>
      </div>s
  </>
  )
}

export default PaymentsStatus
