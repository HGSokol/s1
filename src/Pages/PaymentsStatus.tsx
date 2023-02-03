import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams  } from "react-router-dom";
import { Profile } from '../App'


const PaymentsStatus = () => {
  document.title = 'Подтверждение оплаты'
  const { setReload, setYandexToken, activeSub, setCardInfo} = useContext(Profile)
  const [searchParams] = useSearchParams();
  const [statusCode, setStatusCode] = useState<number | null>(null)
  const [statusMessage, setStatusMessage] = useState('Ожидание оплаты')
  const [stateButton, setStateButton] = useState(false)

  const navigate = useNavigate()
  
  function payment () {
    setTimeout(() => {
      axios.get(`https://stage.fitnesskaknauka.com/api/customer/payments/status/${searchParams.get('paymentId')}`)
        .then((res) => {
          //@ts-ignore
          setStatusCode(prev =>res.status)
          if(res.status === 202) {
              console.log(res)
              //@ts-ignore
            setStatusMessage(prev => res.data.message)
            setYandexToken(null)
            setReload(true)
          }
          if(res.status === 200){
            setReload(true)
            payment()
          }
        })
        .catch((error) => {
          console.log(error.response)
          setStatusCode(prev => error.response.status)
          setStatusMessage('Платеж не одобрен')
        })
        .finally(() => {
          setCardInfo(null)
          setStateButton(true)
        })
    }, 2000);
  }

  useEffect(() => {
    payment()
  },[])

  const moveToCabinet = () => {
    setYandexToken(null)
    setReload(true)
    setCardInfo(null)
    if(statusCode === 202){
      navigate('/cabinet')
    } else {
      navigate('/cabinet/changeSubs')
    }
    // navigate(`${activeSub? '/cabinet' : '/cabinet/changeSubs'}`)
  }

  return (
  <div className='mx-[16rem] lg:mx-[0rem] lg:w-[700rem]'>
    <div className='pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[23rem] cursor-pointer'
      onClick={moveToCabinet}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]'>Подписки</div>
    </div>
    <div className='mt-[70rem] font-bodyalt font-[600] text-[22rem] text-[#1F2117] leading-[26rem] flex flex-col justify-center items-center
      lg:mt-[171rem] lg:absolute lg:translate-x-[300rem]'>
      <div className='mb-[32rem]'>
        {
          statusCode === 202? (
            <svg className='w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]' viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M30.5 57.7215C45.8102 57.7215 58.2215 45.3102 58.2215 30C58.2215 14.6898 45.8102 2.27848 30.5 2.27848C15.1898 2.27848 2.77848 14.6898 2.77848 30C2.77848 45.3102 15.1898 57.7215 30.5 57.7215ZM30.5 60C47.0685 60 60.5 46.5685 60.5 30C60.5 13.4315 47.0685 0 30.5 0C13.9315 0 0.5 13.4315 0.5 30C0.5 46.5685 13.9315 60 30.5 60Z" fill="#009245"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M43.0981 22.0002C43.5314 22.4563 43.513 23.1774 43.0568 23.6108L27.8669 38.0411C27.4272 38.4589 26.7373 38.4589 26.2976 38.0411L18.7027 30.8259C18.2465 30.3926 18.228 29.6715 18.6614 29.2153C19.0947 28.7592 19.8158 28.7407 20.272 29.174L27.0823 35.6438L41.4875 21.9589C41.9437 21.5255 42.6647 21.544 43.0981 22.0002Z" fill="#009245"/>
            </svg>
          ) : statusCode === 200 || statusCode === null ? (
            <svg className='w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]' viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M39 75.038C58.9032 75.038 75.038 58.9032 75.038 39C75.038 19.0968 58.9032 2.96203 39 2.96203C19.0968 2.96203 2.96203 19.0968 2.96203 39C2.96203 58.9032 19.0968 75.038 39 75.038ZM39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78Z" fill="#FFB700"/>
              <path d="M39 18V39.0004L56 56.0004" stroke="#FFB700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> ) : (
            <svg className='w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]' viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M39 75.038C58.9032 75.038 75.038 58.9032 75.038 39C75.038 19.0968 58.9032 2.96203 39 2.96203C19.0968 2.96203 2.96203 19.0968 2.96203 39C2.96203 58.9032 19.0968 75.038 39 75.038ZM39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78Z" fill="#CB1D1D"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M26.5983 26.5983C27.1767 26.02 28.1144 26.02 28.6928 26.5983L39 36.9055L49.3072 26.5983C49.8856 26.02 50.8233 26.02 51.4017 26.5983C51.98 27.1767 51.98 28.1144 51.4017 28.6928L41.0945 39L51.4017 49.3072C51.98 49.8856 51.98 50.8233 51.4017 51.4017C50.8233 51.98 49.8856 51.98 49.3072 51.4017L39 41.0945L28.6928 51.4017C28.1144 51.98 27.1767 51.98 26.5983 51.4017C26.02 50.8233 26.02 49.8856 26.5983 49.3072L36.9055 39L26.5983 28.6928C26.02 28.1144 26.02 27.1767 26.5983 26.5983Z" fill="#CB1D1D"/>
            </svg>
            )
        }
      </div>
      <div className='mb-[24rem] font-body font-[600] text-[20rem] leading-[23rem] text-center text-[#1F2117]
      lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem]'>{statusMessage}</div>
      <div className='mb-[32rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-center text-[#777872] whitespace-pre-wrap
      lg:font-bodyalt lg:font-[400] lg:text-[22rem] lg:leading-[32rem] ' >{
        statusCode === 402? 'Платеж отклонен' :
        statusCode === 404? 'Платеж не найден' :
        statusCode === 202? 'Оплата прошла успешно': 
        'Ожидание подтверждения оплаты'
      }</div>
      {
        stateButton? (        
        <div onClick={moveToCabinet} className='w-full h-[50rem] bg-[#FFB700] rounded-full flex flex-row items-center justify-center
        lg:w-[272rem] cursor-pointer'>
          <div className='mr-[12rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-white '>Вернуться к подпискам</div>
          <div>
            <svg className='w-[18rem] h-[18rem]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12L20.25 12" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div> ) : null
      }
    </div>
  </div>
  )
}

export default PaymentsStatus