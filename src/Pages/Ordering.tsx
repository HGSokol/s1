import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'

import HeaderOrder from "../components/HeaderOrder";
import { ChangePaymentData } from "../components/ChangePaymentData";
import { Profile } from "../App";




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
  const { orderCard } = useContext(Profile)
  const navigate = useNavigate()
  const refNumberCard = useRef<HTMLInputElement | null>(null)
  const refDateCard = useRef<HTMLInputElement | null>(null)

  const [numberCard, setNumberCard] = useState('');
  const [dateCard, setDateCard] = useState('');
  const [checkbox, setCheckbox] = useState(true);

  document.title = 'Оформление заказа'


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

   navigate('/cabinet/ordering2')

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
        <p className='mb-[16rem] font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leaing-[23rem] lg:text-[#1F2117] lg:mb-[28rem]'>Информация о заказе</p>
        <div className='w-full flex flex-row justify-between mb-[12rem] lg:w-[357rem] lg:mb-[16rem]'>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Вид подписки:</div>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>{`Подписка на ${orderCard?.duration}`}</div>
        </div>
        <div className='w-full flex flex-row justify-between lg:w-[357rem]'>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Сумма:</div>
          <div className='font-bodyalt font-[400] text-[14rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>{orderCard?.price}</div>
        </div>
      </div>
      <div className=' lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]'>
        <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]'>Способ оплаты</div>
        <ChangePaymentData />
      </div>
    </div>
  </div>
  )
}

export default Ordering