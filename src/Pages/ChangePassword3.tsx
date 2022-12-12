import { useState, useRef } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HeaderForm } from "../components/HeaderForm";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai'


interface IFormInputs {
  password: string
  password2: string
}


// password: yup.string()
// .required('Обязательное поле') 
// .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
// .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы'),
// password2: yup.string()
// .required('Обязательное поле') 
// .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
// .matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы')


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
  const ref = useRef()
  const [type, setType] = useState(true)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    alert(JSON.stringify(data))
    navigate("/login");
  };

  const onClickChangeType = () => {
    setType(prev => !prev)
  }


  return (
    <div className='font-bodyalt mx-[16px] md:mx-[0px]  md:grid md:grid-cols-[1fr_1fr]'>
      <div className='mb-[347px]'>
        <HeaderForm />
        <div className='w-[288px] md:w-[492px] mx-auto'>
          <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[14px] md:text-[40px] md:leading-[46.96px] md:mb-[24px]'>Восстановление пароля</h1>
          <h3 className='font-body text-[#777872] font-[600] text-[14px] leading-[26.25px] text-center mb-[32px] md:text-[22px] md:leading-[32px] md:mb-[48px]'>Введите новый пароль</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288px] md:w-[441px] mx-auto'>
            <div className='relative mb-[16px] md:mb-[20px]'>
                <div className='absolute translate-x-[250px] translate-y-[14px] md:translate-x-[400px] md:translate-y-[18px] cursor-pointer' 
                  onClick={onClickChangeType}><AiOutlineEye size='20px' color='#AAAAAA'/></div>
                <input 
                  placeholder='Ваш пароль' 
                  type={`${type === true ? 'password' : 'text'}`}
                  {...register("password")} 
                  className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]'/>
                  <p className='text-red-600'>{errors.password?.message}</p>
            </div>
            <div className='relative mb-[32px] md:mb-[48px]'>
              <div className='absolute translate-x-[250px] translate-y-[14px] md:translate-x-[400px] md:translate-y-[18px] cursor-pointer' 
                onClick={onClickChangeType}><AiOutlineEye size='20px' color='#AAAAAA'/></div>
              <input 
                placeholder='Подтвердите пароль' 
                type={`${type === true ? 'password' : 'text'}`}
                {...register("password2")} 
                className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]'/>
                <p className='text-red-600'>{errors.password2?.message}</p>
            </div>
            <div className='mb-[36px]'>
              <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] md:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] md:h-[56px] md:py-[16px] md:px-[24px] md:text-[16px]`}>
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden md:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center h-full'></div>
    </div>
  );
}

export default ChangePassword3