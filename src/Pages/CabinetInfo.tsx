import React from "react";
import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs';
import axios from 'axios'

import { Profile } from '../App'

import UnknownUser from '../images/unknownUser.png'

interface IFormInputs {
  oldpassword: string
  password: string
  password2: string
}

const schema = yup.object({
  password: yup.string()
    .required('Обязательное поле') 
    .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
    .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы'),
  password2: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
}).required();


const CabinetInfo = () => {
  const { user, deviceName } = useContext(Profile)

  const dataInfo = [
    {label: 'Имя', data: user?.name},
    {label: 'Фамилия', data: user?.lastName},
    {label: 'E-mail', data: user?.email},
  ]

  const [oldPassError, setOldPassError] = useState<string | null>(null)
  const [type, setType] = useState(true)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const token = localStorage.getItem('user')
  const oldPass = localStorage.getItem('password')

  
  const onSubmit = (data: IFormInputs) => {
    reset()
    if(oldPass&& token && data.oldpassword === JSON.parse(oldPass) && data.password !== JSON.parse(oldPass)) {



      // const userInfo = {
      //   password: data.password,
      //   email: `${user?.email}`,
      //   token: `${token? JSON.parse(token).token : ''}`,
      //   deviceName,
      // }
  
      // axios.put('/api/auth/reset-password', userInfo)
      // .then((res) => {
      //   console.log(res)
      //   reset()
      // })
      // .catch((error) => {
      //   // console.log(error.response.data)
      // })
    }
    if(oldPass && data.password === JSON.parse(oldPass)) {
      setOldPassError('Старый и новый пароль должны быть различны')
    } 
    // setOldPassError('Не правильный настоящий пароль')


  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }

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
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]'>Общая информация</div>
    </div>
    <div className='hidden lg:flex font-body font-[600] text-[40rem] leading-[47rem] text-[#1F2117] mb-[32rem]'>Общая информация</div>
    <div className='mb-[20rem] w-full p-[16rem] flex flex-row items-center bg-[#FFFFFF] border-[1px] border-[rgba(31_33_23_0.08)] rounded-[8rem] lg:mb-[20rem] lg:w-[441rem] lg:p-[16rem] lg:flex lg:flex-row lg:items-center lg:bg-[#FFFFFF] lg:border-[1px] lg:border-[rgba(31_33_23_0.08)] lg:rounded-[8rem]'>
      <div className='w-[60rem] h-[60rem] mr-[20rem] lg:mr-[28rem]'>
        {!user?.avatar ? (<img src={UnknownUser} alt='avatar' className='rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]'/>): user?.avatar}
      </div>
      <div className='mr-[14rem] lg:mr-[16rem]'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.0625 10.3125L12 14.25L15.9375 10.3125" stroke="#FFB700" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3.75V14.25" stroke="#FFB700" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25" stroke="#FFB700" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className='w-min font-bodyalt font-[400] text-[16rem] text-[#1F2117]/60 leading-[19rem] lg:w-max lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#1F2117]/60 lg:leading-[19rem]'>Загрузить другое изображение</div>
    </div>
    <div className='flex flex-col gap-[20rem] w-full mb-[48rem] lg:flex lg:flex-row lg:flex-wrap lg:gap-[20rem] lg:w-[1000rem] lg:mb-[48rem]'>
      {
        dataInfo.map((e,i) => {
          return(
            <div key={i} className='w-full lg:w-[441rem]'>
              <p className='font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[10rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#AAAAAA] lg:leading-[19rem] lg:mb-[14rem]'>{e.label}</p>
              <div className='flex items-center text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] 
              lg:text-[16rem] lg:h-[56rem] lg:px-[16rem] lg:rounded-[8rem]'>{e.data}</div>
            </div>
            )
        })
      }
    </div>
    <div className='w-full lg:w-[1000rem]'>
      <p className='font-bodyalt font-[600] text-[22rem] leaing-[30rem] text-[#1F2117] mb-[32rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:text-[#1F2117] lg:leading-[30rem] lg:mb-[32rem]'>Изменение пароля</p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[20rem] w-full lg:flex-row lg:flex-wrap lg:gap-[20rem] lg:w-[1000rem]'>
          <div className='relative lg:w-[441rem]'>
            <div className='absolute translate-x-[250rem] translate-y-[41rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer' 
              onClick={onClickChangeType}>
                {
                  type ? (<BsEyeSlash color='#AAAAAA' className='w-[20rem] h-[20rem]'/>) : (<AiOutlineEye color='#AAAAAA' className='w-[20rem] h-[20rem]'/>)
                }  
              </div>
            <p className='font-bodyalt font-[400] text-[16rem] text-[#AAAAAA] leading-[19rem] mb-[8rem] lg:mb-[14rem]'>Пароль</p>
            <input 
              placeholder='Ваш пароль' 
              {...register("oldpassword")} 
              type={`${type === true ? 'password' : 'text'}`}
              className={`text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
              lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]`}/>
          </div>
          <div className='relative lg:w-[441rem]'>
            <div className='absolute translate-x-[250rem] translate-y-[41rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer' 
              onClick={onClickChangeType}>
                {
                  type ? (<BsEyeSlash color='#AAAAAA' className='w-[20rem] h-[20rem]'/>) : (<AiOutlineEye color='#AAAAAA' className='w-[20rem] h-[20rem]'/>)
                }  
              </div>
            <p className='font-bodyalt font-[400] text-[16rem] text-[#AAAAAA] leading-[19rem] mb-[8rem] lg:mb-[14rem]'>Новый пароль</p>
            <input 
              placeholder='Ваш пароль' 
              type={`${type === true ? 'password' : 'text'}`}
              {...register("password")} 
              className={`text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
              lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
              ${errors.password? ' hover:border-[#CB1D1D]': ' '}`}/>
              {
                errors.password? <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.password?.message}</p> : null
              }
          </div>
          <div className='relative lg:flex lg:flex-col lg:w-[441rem]'>
            <div className='absolute translate-x-[250rem] translate-y-[41rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer' 
              onClick={onClickChangeType}>
                {
                  type ? (<BsEyeSlash color='#AAAAAA' className='w-[20rem] h-[20rem]'/>) : (<AiOutlineEye color='#AAAAAA' className='w-[20rem] h-[20rem]'/>)
                }  
              </div>
            <p className='font-bodyalt font-[400] text-[16rem] text-[#AAAAAA] leading-[19rem] mb-[8rem] lg:mb-[14rem]'>Повторите новый пароль</p>
            <input 
              placeholder='Подтвердите пароль' 
              type={`${type === true ? 'password' : 'text'}`}
              {...register("password2")} 
              className={`text-[12rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
              lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem] mb-[32rem]
              ${errors.password2? ' hover:border-[#CB1D1D]': ' '}`}/>
              {
                errors.password2? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.password2?.message}</p> : null
              }
            <div className='mb-[26rem]'>
              {
                oldPassError? <p className='lg:text-red-600 lg:h-[24rem] lg:text-[15rem]'>{oldPassError}</p> : null
              }
              <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} font-bodyalt  lg:mb-[24rem] w-full py-[14rem] rem-[18rem] text-[14rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
                Изменить пароль
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default CabinetInfo