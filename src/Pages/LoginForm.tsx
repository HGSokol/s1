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
  const [ errorMessage, setErrorMessage ] = useState<string | null>(null)
  const { deviceName, setUser, setIsAuthenticated } = useContext(Profile)
  const [ type, setType ] = useState(true)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });


  const onSubmit = (data: IFormInputs) => {
    const userInfo= {
      ...data,
      deviceName: deviceName
    }
    localStorage.setItem('password', JSON.stringify(data.password))

    axios.post('https://stage.fitnesskaknauka.com/api/auth/login', userInfo)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify({
        token: res.data.token,
      }))
      localStorage.setItem('authenticated', JSON.stringify(true))
      
      setUser({
        email: res.data.email,
        name: res.data.name,
        lastName: res.data.lastName,
        token: res.data.token,
      })
      setIsAuthenticated(true)

      navigate('/cabinet')
    })
    .catch((error) => {
      console.log(error.response.data)
      if(error.response.status === 401){
        setErrorMessage(error.response.data.message)
      }
    })



    reset()
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }

  return (
  <div className='w-[343rem] lg:w-[441rem] mx-auto mt-[24rem] lg:mt-[155rem] mb-[20rem]'>
    <h1 className='font-bodyalt font-[600] text-[24rem] leading-[29rem] text-center mb-[32rem] 
    lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[48rem]'>Вход</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <div className='mb-[16rem] lg:mb-[24rem]'>
        <input 
          placeholder='Ваш e-mail'
          type='text' 
          {...register("email")} 
          className={`font-bodyalt font-[400] text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
          ${errors.email? ' hover:border-[#CB1D1D]': ' '}`}/>
          {
            errors.email? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.email?.message}</p> : null
          }
      </div>
      <div className='relative mb-[16rem]'>
        <div className='absolute 
        translate-x-[305rem] translate-y-[15rem]
        lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer' 
          onClick={onClickChangeType}>
            {
              type ? (<BsEyeSlash color='#AAAAAA' className='h-[20rem] w-[20rem]'/>) : (<AiOutlineEye color='#AAAAAA' className='h-[20rem] w-[20rem]'/>)
            }
          </div>
        <input 
          placeholder='Ваш пароль' 
          type={`${type === true ? 'password' : 'text'}`}
          {...register("password")} 
          className={`font-bodyalt font-[400] text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
          ${errors.password? ' hover:border-[#CB1D1D]': ' '}`}/>
          {
            errors.password? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.password?.message}</p> : null
          }
      </div> 
      <Link to='/login/step1' className='mb-[10rem] lg:mb-[48rem]'>
        <p className='font-bodyalt text-[14rem] leading-[17rem] text-[#777872] font-[600] text-end lg:text-[16rem] lg:leading-[23rem]'>Забыли пароль?</p>
      </Link>  
      <p className='w-full flex justify-center h-[20rem] mb-[5rem]'>
      {
        errorMessage ? (<p className='text-[11px] text-[#CB1D1D] text-center h-[30rem] lg:h-[30rem] md:text-[15px] leading-[10rem] lg:text-[15rem]'>{errorMessage}</p>) : null
      } 
      </p>
      <div className='mb-[36rem]'>
        <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[24rem] w-full h-[51rem] py-[14rem] text-[16rem] text-white font-bodyalt font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
          Войти
        </button>
        <div className='flex flex-row justify-center rem-[8.5rem] gap-[8rem] lg:mb-[20rem]'>
          <p className='font-bodyalt text-[14rem] text-[#777872] font-[400] lg:text-[16rem]'>У вас нет аккаунта? </p>
          <Link to='/login/registration'>
            <p className='font-bodyalt text-[14rem] text-[#000000] font-[600] lg:text-[16rem]'>Зарегистрироваться</p>
          </Link>
        </div>
      </div>
      <AlternativeLogin>
        <h4 className='text-center text-[14rem] text-[#777872] font-[400] mb-[14rem] lg:mb-[24rem lg:text-[16rem]'>Войти с помощью</h4>
      </AlternativeLogin>
    </form>
  </div>
  )
}

export default LoginForm