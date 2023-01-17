import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'

import CardIcon from '../components/CardIcon'


const schema = yup.object({
  cardNumber: yup.string(),
  name: yup.string().uppercase().required(),
  date: yup.string(),
  cvv: yup.number(),
}).required();

interface IFormInputs {
  cardNumber: string
  name: string
  date: string,
  cvv: string,
}

export const ChangePaymentData = () => {
  const navigate = useNavigate()
  const refNumberCard = useRef<HTMLInputElement | null>(null)
  const refDateCard = useRef<HTMLInputElement | null>(null)

  const [numberCard, setNumberCard] = useState('');
  const [dateCard, setDateCard] = useState('');
  const [checkbox, setCheckbox] = useState(true);


  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    console.log({
      'numberCard': numberCard,
      'dateCard': dateCard,
      'checkbox': checkbox,
      ...data
    })
    setNumberCard('')
    setDateCard('')
    setCheckbox(false)
    reset()

    window.innerWidth >=1024 ? navigate('/cabinet/ordering2') : navigate('/cabinet/order2')

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

  const handleSubmitNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    let cardCode:any = refNumberCard?.current?.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';

    setNumberCard(cardCode)
  }
  const handleSubmitDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    let cardCode:any = refDateCard?.current?.value.replace(/[^\d]/g, '').substring(0,4);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : '';

    setDateCard(cardCode)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:mx-[0rem]  lg:w-[441rem]'>
          <div className='mb-[16rem]'>
            <div className='relative'>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Номер карты</p>
              <div className={`absolute translate-x-[295rem] ${numberCard[0] === '2'? ' translate-y-[21rem] lg:translate-y-[24rem]':'translate-y-[14rem] lg:translate-y-[18rem]'} w-[20rem] h-[12rem] lg:translate-x-[390rem]`}>
                <CardIcon cardNumber={numberCard}/>
              </div>
            </div>
            <div>
              <input 
                ref={refNumberCard}
                value={numberCard}
                onChange={handleSubmitNumber}
                maxLength={19}
                minLength={19}
                placeholder='XXXX XXXX XXXX XXXX'
                type='text' 
                className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                `}/>
                {/* {
                  errors.cardNumber? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.cardNumber?.message}</p> : null
                } */}
            </div>
          </div>
          <div className='mb-[16rem]'>
            <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Имя держателя карты</p>
            <div>
              <input 
                placeholder='ИМЯ ФАМИЛИЯ'
                type='text' 
                {...register('name')}
                className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                `}/>
                {/* {
                  errors.name? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.name?.message}</p> : null
                } */}
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-[16rem] mb-[20rem]'>
            <div>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Дата окончания</p>
              <div>
                <input 
                  ref={refDateCard}
                  value={dateCard}
                  onChange={handleSubmitDate}
                  placeholder='ММ/ГГ'
                  type='text' 
                  maxLength={5}
                  className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}/>
                  {/* {
                    errors.date? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.name?.message}</p> : null
                  } */}
              </div>
            </div>
            <div>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>CVV</p>
              <div>
                <input 
                  placeholder='CVV'
                  type='text' 
                  maxLength={3}
                  {...register('cvv')}
                  className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}/>
                  {/* {
                    errors.cvv? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.name?.message}</p> : null
                  } */}
              </div>
            </div>
          </div>
          <div className='mb-[32rem]'>
            <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] lg:text-[16rem] lg:leading-[19rem]'>Для привязки вашей карты с нее будут списаны средства в размере 1 рубля и возвращены обратно</p>
          </div>
          {/* {
            errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
          } */}
          <div >
            <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[30rem] lg:mb-[24rem] w-full h-[42rem] flex items-center justify-center rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
              Оплатить
            </button>
          </div>
        </form>
      </>
  )
}