import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import { HeaderForm } from "../components/HeaderForm";
import { Link } from "react-router-dom";

import IMG from '../images/authorization.png'
import { useState } from "react";

interface IFormInputs {
  firstName: string,
  lastName:string,
  email: string,
  password: number,
}

const schema = yup.object({
  firstName: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
  password: yup.string()
  .required('Обязательное поле') 
  .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
  .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы')
}).required();

const Login = () => {
  const [type, setType] = useState(true)

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });

  const onSubmit = (data: IFormInputs) => {
      alert(JSON.stringify(data))
      reset()
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }



  return (
    <div className='w-[288px] lg:w-[441px] mx-auto'>
      <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[32px] lg:text-[40px] lg:leading-[46.96px] lg:mb-[48px]'>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <div className='mb-[16px] lg:mb-[20px]'>
          <input 
            placeholder='Ваше имя'
            type='text' 
            {...register("firstName")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            <p className='text-red-600'>{errors.firstName?.message}</p>
        </div> <div className='mb-[16px] lg:mb-[20px]'>
          <input 
            placeholder='Ваша фамилия'
            type='text' 
            {...register("lastName")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            <p className='text-red-600'>{errors.lastName?.message}</p>
        </div>
        <div className='mb-[16px] lg:mb-[20px]'>
          <input 
            placeholder='Ваш e-mail'
            type='text' 
            {...register("email")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            <p className='text-red-600'>{errors.email?.message}</p>
        </div>
        <div className='relative mb-[14px] lg:mb-[16px]'>
          <div className='absolute translate-x-[250px] translate-y-[14px] lg:translate-x-[400px] lg:translate-y-[18px] cursor-pointer' 
            onClick={onClickChangeType}><AiOutlineEye size='20px' color='#AAAAAA'/></div>
          <input 
            placeholder='Ваш пароль' 
            type={`${type === true ? 'password' : 'text'}`}
            {...register("password")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]'/>
            <p className='text-red-600'>{errors.password?.message}</p>
        </div> 
        <Link to='/login/stage1' className='mb-[32px] lg:mb-[48px]'>
          <p className='font-bodyalt text-[12px] text-[#777872] font-[600] text-end lg:text-[16px]'>Забыли пароль?</p>
        </Link>  
        <div className='mb-[36px]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] lg:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] lg:h-[56px] lg:py-[16px] lg:px-[24px] lg:text-[16px]`}>
            Зарегистрироваться
          </button>
          <div className='flex flex-row justify-center px-[8.5px] gap-[8px] lg:mb-[64px]'>
            <p className='text-[12px] text-[#777872] font-[400] lg:text-[16px]'>У вас уже есть аккаунт? </p>
            <Link to='/login'>
              <p className='text-[12px] text-[#000000] font-[600] lg:text-[16px]'>Войти</p>
            </Link>
          </div>
        </div>
        <div className='mb-[162px]'>
          <h4 className='text-center text-[12px] text-[#777872] font-[400] mb-[14px] lg:mb-[24px] lg:text-[16px]'>Зарегистрироваться с помощь</h4>
          <div className='flex flex-row gap-[30px] justify-center lg:gap-[24px]'>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-[#1877F2] grid place-content-center lg:w-[64px] lg:h-[64px]'><FaFacebook className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' fill='white'/></div>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-white border-[1px] grid place-content-center lg:w-[64px] lg:h-[64px]'><FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' /></div>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-black grid place-content-center lg:w-[64px] lg:h-[64px]'><BsApple className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' fill='white'/></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login