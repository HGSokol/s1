import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HeaderForm } from "../components/HeaderForm";
import { redirect } from "react-router-dom";

import IMG from '../images/authorization.png'
import { useState } from "react";

interface IFormInputs {
  email: string
}

const schema = yup.object({
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
}).required();

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });

  const onSubmit = (data: IFormInputs) => {
      alert(JSON.stringify(data))
      redirect("/registration/stage2");
  };


  return (
    <div className='font-bodyalt mx-[16px] md:mx-[0px]  md:grid md:grid-cols-[1fr_1fr]'>
      <div className='mb-[347px]'>
        <HeaderForm />
        <div className='w-[288px] md:w-[492px] mx-auto'>
          <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[32px] md:text-[40px] md:leading-[46.96px] md:mb-[24px]'>Восстановление пороля</h1>
          <h3 className='font-body text-[#777872] font-[600] text-[22px] leading-[26.25px] text-center mb-[32px] md:text-[22px] md:leading-[32px] md:mb-[48px]'>На указанный Email  будет отправлен код для восстановления пароля</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288px] md:w-[441px] mx-auto'>
            <div className='mb-[16px] md:mb-[48px]'>
              <input 
                placeholder='Ваш e-mail'
                type='text' 
                {...register("email")} 
                className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
                <p className='text-red-600'>{errors.email?.message}</p>
            </div>
 
            <div className='mb-[36px]'>
              <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] md:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] md:h-[56px] md:py-[16px] md:px-[24px] md:text-[16px]`}>
                Отправить код подтверждения
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='hidden md:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center h-full'></div>
    </div>
  );
}

export default ChangePassword