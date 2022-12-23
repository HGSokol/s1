import { useState, useContext } from 'react'
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
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone


  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    const userInfo = JSON.stringify({
      password: data.password,
      email: user?.email,
      token: "46|qgrWEcYvlgeud95THCFXOcgQBZNS7IfvXqPKWVZE",
      deviceName,
    })

    console.log(userInfo, user)

    axios.put('https://stage.fitnesskaknauka.com/api/auth/reset-password', userInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Timezone': `${countryId}`
      }
    })
    .then((res) => {
      console.log(res)
      console.log(res.data)

    })
    .catch((error) => {
      console.log(error)
      console.log(error.response.data)
    })


    // navigate("/login");
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }


  return (
    <div className='w-[288px] mx-auto mt-[24px] lg:w-[492px] lg:mt-[223px]'>
      <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[14px] lg:text-[40px] lg:leading-[46.96px] lg:mb-[24px]'>Восстановление пароля</h1>
      <h3 className='font-body text-[#777872] font-[600] text-[14px] leading-[26.25px] text-center mb-[32px] lg:text-[22px] lg:leading-[32px] lg:mb-[48px]'>Введите новый пароль</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288px] lg:w-[441px] mx-auto'>
        <div className='relative mb-[16px] lg:mb-[20px]'>
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
              <p className='text-red-600 h-[24px] text-[15px]'>{errors.password?.message}</p>
        </div>
        <div className='relative mb-[32px] lg:mb-[48px]'>
          <div className='absolute translate-x-[250px] translate-y-[14px] lg:translate-x-[400px] lg:translate-y-[18px] cursor-pointer' 
            onClick={onClickChangeType}>
              {
                type ? (<BsEyeSlash size='20px' color='#AAAAAA'/>) : (<AiOutlineEye size='20px' color='#AAAAAA'/>)
              }  
            </div>
          <input 
            placeholder='Подтвердите пароль' 
            type={`${type === true ? 'password' : 'text'}`}
            {...register("password2")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]'/>
            <p className='text-red-600 h-[24px] text-[15px]'>{errors.password2?.message}</p>
        </div>
        <div className='mb-[36px]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] lg:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] lg:h-[56px] lg:py-[16px] lg:px-[24px] lg:text-[16px]`}>
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword3