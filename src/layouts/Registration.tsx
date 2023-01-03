import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import axios from 'axios'

import { AlternativeLogin } from "../components/AlternativeLogin";


interface IFormInputs {
  name: string,
  lastName:string,
  email: string,
  password: number,
}

const schema = yup.object({
  name: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
  password: yup.string()
  .required('Обязательное поле') 
  .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
  .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы')
}).required();

const Login = () => {
  const [type, setType] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const navigate = useNavigate()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });

  const onSubmit = (data: IFormInputs) => {
    const userInfo= {
      ...data,
      deviceName: 'deckstop'
    }

    axios.post('https://stage.fitnesskaknauka.com/api/auth/register', userInfo, {
      headers: {
        'Content-type':'application/json',
        'Timezone': `${timezone}`
      }
    })
    .then((res) => {
      // console.log(res)
      // console.log(res.data)

      navigate('/login')
    })
    .catch((error) => {
      setErrorMessage(error.response.data.message)
    })


    reset()
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }



  return (
    <div className='w-[288rem] mt-[24rem] lg:w-[441rem] mx-auto lg:mt-[109rem]'>
      <h1 className='font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[48rem]'>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <div className=''>
          <input 
            placeholder='Ваше имя'
            type='text' 
            {...register("name")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.name?.message}</p>
        </div> <div className='first-line:'>
          <input 
            placeholder='Ваша фамилия'
            type='text' 
            {...register("lastName")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.lastName?.message}</p>
        </div>
        <div className=''>
          <input 
            placeholder='Ваш e-mail'
            type='text' 
            {...register("email")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.email?.message}</p>
        </div>
        <div className='relative mb-[24rem]'>
          <div className='absolute translate-x-[250rem] translate-y-[14rem] lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer' 
            onClick={onClickChangeType}>
            {
              type ? (<BsEyeSlash size='20rem' color='#AAAAAA'/>) : (<AiOutlineEye size='20rem' color='#AAAAAA'/>)
            }
          </div>
          <input 
            placeholder='Ваш пароль' 
            type={`${type === true ? 'password' : 'text'}`}
            {...register("password")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]'/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.password?.message}</p>
        </div>
        {
          errorMessage ? (<p className='text-[15rem] text-red-400 text-center'>{errorMessage}</p>) : null
        }  
        <div className='mb-[36rem]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20rem] lg:mb-[24rem] w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
            Зарегистрироваться
          </button>
          <div className='flex flex-row justify-center rem-[8.5rem] gap-[8rem] lg:mb-[20rem]'>
            <p className='text-[12rem] text-[#777872] font-[400] lg:text-[16rem]'>У вас уже есть аккаунт? </p>
            <Link to='/login'>
              <p className='text-[12rem] text-[#000000] font-[600] lg:text-[16rem]'>Войти</p>
            </Link>
          </div>
        </div>
        <div className='mb-[20rem]'>
          <AlternativeLogin>
            <h4 className='text-center text-[12rem] text-[#777872] font-[400] mb-[14rem] lg:mb-[24rem] lg:text-[16rem]'>Зарегистрироваться с помощь</h4>
          </AlternativeLogin>
        </div>
      </form>
    </div>
  );
}

export default Login