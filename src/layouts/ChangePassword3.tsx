import { useState,useEffect , useContext } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs';
import axios from 'axios'

import { Profile } from '../App'


interface IFormInputs {
  password: string
  password2: string
}

const schema = yup.object({
  password: yup
    .string()
    .min(8, 'Минимум 8 символов')
    .matches(/[0-9]/, 'Пароль должен содержать 1 цифру')
    .matches(/[a-z]/, 'Пароль должен содержать 1 букву нижнего регистра')
    .matches(/[A-Z]/, 'Пароль должен содержать 1 заглавную букву'),
    password2: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
}).required();

const ChangePassword3 = () => {
  const { user, countryId, deviceName } = useContext(Profile)
  const [type, setType] = useState(true)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  useEffect(() => {   
    if(!user || !user.token) {
      navigate('/login/stage1')
    }
  },[]) 

  const onSubmit = (data: IFormInputs) => {
    const userInfo = {
      password: data.password,
      email: `${user?.email}`,
      token: `${user?.token}`,
      deviceName,
    }

    axios.put('https://stage.fitnesskaknauka.com/api/auth/reset-password', userInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Timezone': `${countryId}`
      }
    })
    .then((res) => {
      // console.log(res)
      // console.log(res.data)

      reset()
      navigate('/login')
    })
    .catch((error) => {
      // console.log(error)
      // console.log(error.response.data)
    })
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }


  return (
    <div className='w-[288rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]'>
      <h1 className='font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[14rem] lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[24rem]'>Восстановление пароля</h1>
      <h3 className='font-body text-[#777872] font-[600] text-[14rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem]'>Введите новый пароль</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288rem] lg:w-[441rem] mx-auto'>
        <div className='relative mb-[16rem] lg:mb-[20rem]'>
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
        <div className='relative mb-[32rem] lg:mb-[48rem]'>
          <div className='absolute translate-x-[250rem] translate-y-[14rem] lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer' 
            onClick={onClickChangeType}>
              {
                type ? (<BsEyeSlash size='20rem' color='#AAAAAA'/>) : (<AiOutlineEye size='20rem' color='#AAAAAA'/>)
              }  
            </div>
          <input 
            placeholder='Подтвердите пароль' 
            type={`${type === true ? 'password' : 'text'}`}
            {...register("password2")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]'/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.password2?.message}</p>
        </div>
        <div className='mb-[36rem]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20rem] lg:mb-[24rem] w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword3