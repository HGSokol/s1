import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'

import CardIcon from '../components/CardIcon'
import HeaderOrder from "../components/HeaderOrder";

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


const Ordering = () => {
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


  return (
  <div className='mx-[16rem] lg:mx-[0rem] lg:w-full'>
    <HeaderOrder />
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <div className=''>
      <p className='mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Оформление заказа</p>
    </div>
    <div className='lg:grid lg:grid-cols-[1fr_1fr] lg:w-full'>
      <div className='mb-[24rem] lg:order-2'>
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
      <div className=' lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288rem] mx-auto lg:mx-[0rem]  lg:w-[441rem]'>
        <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem]'>Способ оплаты</div>
          <div className='mb-[16rem]'>
            <div className='relative'>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem]'>Номер краты</p>
              <div className={`absolute translate-x-[250rem] ${numberCard[0] === '2'? ' translate-y-[20rem]':' translate-y-[14rem]'} w-[20rem] h-[12rem]`}>
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
            <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem]'>Имя держателя карты</p>
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
          <div className='w-full grid grid-cols-2 gap-[16rem] mb-[32rem]'>
            <div>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem]'>Дата окончания</p>
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
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA] mb-[8rem]'>CVV</p>
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
          <div className='mb-[32rem] w-full grid grid-rows-2 gap-[12rem]'>
            <div className='flex flex-row items-center gap-[16rem]'>
              <div onClick={() =>setCheckbox(prev => !prev)} className={`w-[22rem] h-[22rem] border-[1px] border-[#1F211714] rounded-[4rem] flex justify-center items-center cursor-pointer 
              ${checkbox ? ' bg-[#FFB700]': ' border-[1px] border-[#1F211714]'}`}>
                {
                  checkbox ? (
                    <div className='w-[13rem] h-[13rem]'>
                      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4121 4.19287L5.79753 9.80745L2.99023 7.00016" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : null
                }
              </div>
              <p className='font-bodyalt font-[400] text-[14rem] leading-[17rem] text-[#1F2117]'>Сохранить данные карты</p>
            </div>
            <div>
              <p className='font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#AAAAAA]'>Для привязки вашей карты с нее будут списаны средства в размере 1 рубля и возвращены обратно</p>
            </div>
          </div>
          {/* {
            errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
          } */}
          <div >
            <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[30rem] lg:mb-[24rem] w-full h-[42rem] flex items-center justify-center rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
              Добавление карты
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Ordering