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

const Login = () => {
  const [type, setType] = useState(true)

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(JSON.stringify(data))
      // alert(JSON.stringify(data))
      reset()
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }



  return (
    <div className='font-bodyalt mx-[16px] md:mx-[0px]  md:grid md:grid-cols-[1fr_1fr]'>
      <div>
        <HeaderForm />
        <div className='w-[288px] md:w-[441px] mx-auto'>
          <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[32px] md:text-[40px] md:leading-[46.96px] md:mb-[48px]'>Вход</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <div className='mb-[16px] md:mb-[20px]'>
              <input 
                placeholder='Ваш e-mail'
                type='text' 
                {...register("email")} 
                className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
                <p className='text-red-600'>{errors.email?.message}</p>
            </div>
            <div className='relative mb-[14px] md:mb-[16px]'>
              <div className='absolute translate-x-[400px] translate-y-[18px] cursor-pointer' 
                onClick={onClickChangeType}><AiOutlineEye size='20px' color='#AAAAAA'/></div>
              <input 
                placeholder='Ваш пароль' 
                type={`${type === true ? 'password' : 'text'}`}
                {...register("password")} 
                className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]'/>
                <p className='text-red-600'>{errors.password?.message}</p>
            </div> 
            <Link to='/changePassword/stage1' className='mb-[32px] md:mb-[48px]'>
              <p className='font-bodyalt text-[12px] text-[#777872] font-[600] text-end md:text-[16px]'>Забыли пароль?</p>
            </Link>  
            <div className='mb-[36px]'>
              <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] md:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] md:h-[56px] md:py-[16px] md:px-[24px] md:text-[16px]`}>
                Войти
              </button>
              <div className='flex flex-row justify-center px-[8.5px] gap-[8px] md:mb-[64px]'>
                <p className='text-[12px] text-[#777872] font-[400] md:text-[16px]'>У вас нет аккаунта? </p>
                <Link to='/registration'>
                  <p className='text-[12px] text-[#000000] font-[600] md:text-[16px]'>Зарегистрироваться</p>
                </Link>
              </div>
            </div>
            <div className='mb-[162px]'>
              <h4 className='text-center text-[12px] text-[#777872] font-[400] mb-[14px] md:mb-[24px] md:text-[16px]'>Войти с помощью</h4>
              <div className='flex flex-row gap-[30px] justify-center md:gap-[24px]'>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-[#1877F2] grid place-content-center md:w-[64px] md:h-[64px]'><FaFacebook className='w-[24px] h-[24px] md:w-[34.5px] md:h-[34.5px]' fill='white'/></div>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-white border-[1px] grid place-content-center md:w-[64px] md:h-[64px]'><FcGoogle className='w-[24px] h-[24px] md:w-[34.5px] md:h-[34.5px]' /></div>
                <div className='w-[50px] h-[50px] rounded-[10px] bg-black grid place-content-center md:w-[64px] md:h-[64px]'><BsApple className='w-[24px] h-[24px] md:w-[34.5px] md:h-[34.5px]' fill='white'/></div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden md:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center h-full'></div>
    </div>
  );
}

export default Login