import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineEye } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs'
import axios from "axios";

import { AlternativeLogin } from "../components/AlternativeLogin";
import { Profile } from '../App'


interface IFormInputs {
  email: string
  password: number
}

const schema = yup.object({
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
  password: yup.string()
  .required('Обязательное поле') 
  .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
  .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы')
}).required();

const LoginForm = () => {
  const { countryId, deviceName, setUser, user } = useContext(Profile)
  const [ type, setType ] = useState(true)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });


  const onSubmit = (data: IFormInputs) => {
    const userInfo= {
      ...data,
      deviceName: deviceName
    }

    axios.post('https://stage.fitnesskaknauka.com/api/auth/login', userInfo, {
      headers: {
        'Content-type':'application/json',
        'Timezone': `${countryId}`
      }
    })
    .then((res) => {
      // console.log(res)
      // console.log(res.data)

      localStorage.setItem('user', JSON.stringify({
        email: res.data.email,
        name: res.data.name,
        lastName: res.data.lastName,
        token: res.data.token,
      }))
      localStorage.setItem('authenticated', JSON.stringify(true))
      
      setUser({
        email: res.data.email,
        name: res.data.name,
        lastName: res.data.lastName,
        token: res.data.token,
      })

      navigate('/account')
    })
    .catch((error) => {
      console.log(error.response.data)
    })



    reset()
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }

  return (
  <div className='w-[288rem] lg:w-[441rem] mx-auto mt-[24rem] lg:mt-[155rem] mb-[20rem]'>
    <h1 className='font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[32rem] 
    lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[48rem]'>Вход</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <div className=''>
        <input 
          placeholder='Ваш e-mail'
          type='text' 
          {...register("email")} 
          className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
          <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.email?.message}</p>
      </div>
      <div className='relative '>
        <div className='absolute translate-x-[250rem] translate-y-[14rem] 
        lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer' 
          onClick={onClickChangeType}>
            {
              type ? (<BsEyeSlash className='h-[20rem] w-[20rem]' color='#AAAAAA'/>) : (<AiOutlineEye className='h-[20rem] w-[20rem]' color='#AAAAAA'/>)
            }
          </div>
        <input 
          placeholder='Ваш пароль' 
          type={`${type === true ? 'password' : 'text'}`}
          {...register("password")} 
          className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:h-[56rem] lg:placeholder:text-[16rem] lg:placeholder:text-start'/>
          <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.password?.message}</p>
      </div> 
      <Link to='/login/stage1' className='mb-[32rem] lg:mb-[48rem]'>
        <p className='font-bodyalt text-[12rem] text-[#777872] font-[600] text-end lg:text-[16rem]'>Забыли пароль?</p>
      </Link>  
      <div className='mb-[36rem]'>
        <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20rem] lg:mb-[24rem] w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
          Войти
        </button>
        <div className='flex flex-row justify-center rem-[8.5rem] gap-[8rem] lg:mb-[20rem]'>
          <p className='text-[12rem] text-[#777872] font-[400] lg:text-[16rem]'>У вас нет аккаунта? </p>
          <Link to='/login/registration'>
            <p className='text-[12rem] text-[#000000] font-[600] lg:text-[16rem]'>Зарегистрироваться</p>
          </Link>
        </div>
      </div>
      <AlternativeLogin>
        <h4 className='text-center text-[12rem] text-[#777872] font-[400] mb-[14rem] lg:mb-[24rem lg:text-[16rem]'>Войти с помощью</h4>
      </AlternativeLogin>
    </form>
  </div>
  )
}

export default LoginForm