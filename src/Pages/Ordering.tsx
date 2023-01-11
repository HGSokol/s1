import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubCard } from "../components/SubLandingCard";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'

import { Profile } from '../App'



export type Sub = {
  text: string,
  price: string,
  top?: string,
  active?: string,
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
    active: 'active'
  }
]

const schema = yup.object({
  cardNumber: yup.string(),
}).required();

interface IFormInputs {
  cardNumber: string
}


const Ordering = () => {
  const navigate = useNavigate()
  const refNumberCard = useRef<HTMLInputElement | null>(null)

  const [numberCard, setNumberCard] = React.useState('');


  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    console.log('numberCard',numberCard)
    setNumberCard('')



    // axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo)
    // .then((res) => {
    //   console.log(res)
    //   navigate("/login/step2");
    // })
    // .catch((error) => {
    //   console.log(error)
    //   setErrorMessage(error.response.data.message)
    //   reset()

    // })
  };

  const handleSubmitt = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    let cardCode:any = refNumberCard?.current?.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';

    setNumberCard(cardCode)
  }


  return (
  <div className='mx-[16rem] lg:mx-[0rem]'>
    <div className='w-full flex flex-row relative mb-[24rem] lg:hidden'>
      <div className='absolute translate-y-[20.5rem]'
      onClick={() => navigate('/cabinet/subs1')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]'>Подписки</div>
    </div>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <div className='mb-[24rem]'>
      <p className='mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Оформление заказа</p>
      <p className='mb-[16rem] font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Информация о заказе</p>
      <div className='w-full flex flex-row justify-between mb-[12rem]'>
        <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem]'>Вид подписки:</div>
        <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem]'>Подписка на год</div>
      </div>
      <div className='w-full flex flex-row justify-between'>
        <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem]'>Сумма:</div>
        <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem]'>30 000 руб.</div>
      </div>
    </div>
    <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem]'>Способ оплаты</div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288rem] mx-auto lg:w-[441rem]'>
        <div className='mb-[16rem]'>
          <div className='relative'>
            <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem]'>Номер краты</p>
            <div className='absolute translate-x-[245rem] translate-y-[10rem]'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.15545H17.5001V20.8443H10.5V7.15545Z" fill="#FF5F00"/>
                <path d="M10.7046 13.9999C10.7046 11.2669 12.0035 8.84278 14.0001 7.27423C12.5328 6.13351 10.6806 5.44434 8.65997 5.44434C3.87283 5.44434 0 9.27051 0 13.9999C0 18.7292 3.87283 22.5554 8.65986 22.5554C10.6805 22.5554 12.5327 21.8663 14.0001 20.7254C12.0035 19.1807 10.7046 16.7329 10.7046 13.9999Z" fill="#EB001B"/>
                <path d="M28 13.9999C28 18.7292 24.1272 22.5554 19.3402 22.5554C17.3196 22.5554 15.4674 21.8663 14.0001 20.7254C16.0207 19.157 17.2956 16.7329 17.2956 13.9999C17.2956 11.2669 15.9966 8.84278 14.0001 7.27423C15.4673 6.13351 17.3196 5.44434 19.3402 5.44434C24.1272 5.44434 28 9.29433 28 13.9999Z" fill="#F79E1B"/>
              </svg>
            </div>
          </div>
          <div>
            <input 
              ref={refNumberCard}
              value={numberCard}
              onChange={handleSubmitt}
              maxLength={19}
              placeholder='XXXX XXXX XXXX XXXX'
              // pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
              type='text' 
              className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
              lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
              `}/>
              {
                errors.cardNumber? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.cardNumber?.message}</p> : null
              }
          </div>
        </div>
        {/* {
          errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
        } */}
        <div className='mb-[36rem]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20rem] lg:mb-[24rem] w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
            Добавление карты
          </button>
        </div>
      </form>
  </div>
  )
}

export default Ordering