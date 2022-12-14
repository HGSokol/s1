import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineEye } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { GoogleLogin } from "../components/googleLogin";
import { FacebookLogin } from "../components/facebookLogin";
import { AppleLogin } from "../components/appleLogin";


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

export const LoginForm = () => {
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
  <div className='w-[288px] lg:w-[441px] mx-auto mt-[24px] lg:mt-[155px]'>
    <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[32px] lg:text-[40px] lg:leading-[46.96px] lg:mb-[48px]'>Вход</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
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
          onClick={onClickChangeType}>
            {
              type ? (<BsEyeSlash size='20px' color='#AAAAAA'/>) : (<AiOutlineEye size='20px' color='#AAAAAA'/>)
            }
          </div>
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
          Войти
        </button>
        <div className='flex flex-row justify-center px-[8.5px] gap-[8px] lg:mb-[20px]'>
          <p className='text-[12px] text-[#777872] font-[400] lg:text-[16px]'>У вас нет аккаунта? </p>
          <Link to='/login/registration'>
            <p className='text-[12px] text-[#000000] font-[600] lg:text-[16px]'>Зарегистрироваться</p>
          </Link>
        </div>
      </div>
      <div className=''>
        <h4 className='text-center text-[12px] text-[#777872] font-[400] mb-[14px] lg:mb-[24px] lg:text-[16px]'>Войти с помощью</h4>
        <div className='flex flex-row gap-[30px] justify-center lg:gap-[24px]'>
          <FacebookLogin />
          <GoogleLogin />
          <AppleLogin />
        </div>
      </div>
    </form>
  </div>
  )
}