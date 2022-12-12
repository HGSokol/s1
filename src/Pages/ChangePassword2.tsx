import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HeaderForm } from "../components/HeaderForm";
import { useNavigate } from "react-router-dom";

import IMG from '../images/authorization.png'
import { useState } from "react";

interface IFormInputs {
  n1: number,
  n2: number,
  n3: number,
  n4: number,
}

const schema = yup.object({
  n1: yup.number(),
  n2: yup.number(),
  n3: yup.number(),
  n4: yup.number(),
}).required();

const ChangePassword2 = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onBlur'
  });

  const onSubmit = (data: IFormInputs) => {
    const key = {
      key: [data.n1, data.n2, data.n3, data.n4].join('')
    }

    alert(JSON.stringify(key))
    navigate("/changePassword/stage3");
    reset()
  };


  return (
    <div className='font-bodyalt mx-[16px] md:mx-[0px]  md:grid md:grid-cols-[1fr_1fr]'>
      <div className='mb-[347px]'>
        <HeaderForm />
        <div className='w-[288px] md:w-[492px] mx-auto'>
          <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[14px] md:text-[40px] md:leading-[46.96px] md:mb-[24px]'>Восстановление пароля</h1>
          <h3 className='font-body text-[#777872] font-[600] text-[14px] leading-[26.25px] text-center mb-[32px] md:text-[22px] md:leading-[32px] md:mb-[48px]'>Введите код подтверждения, который мы отправили Вам на указанный Email </h3>
          <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-[1fr_56px] md:grid-rows-[1fr_80px] w-[288px] md:w-[441px] mx-auto place-items-center'>
            <div className='flex flex-row gap-[20px] w-[275px] mb-[32px] md:mb-[48px]'>
              <div className='h-[48px] md:h-[56px]'>
                <input 
                  placeholder='-'
                  type='text'
                  maxLength={1}
                  {...register("n1")} 
                  className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
              </div>
              <div className='h-[48px] md:h-[56px]'>
                <input 
                  placeholder='-'
                  type='text' 
                  maxLength={1}
                  {...register("n2")} 
                  className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
              </div>
              <div className='h-[48px] md:h-[56px]'>
                <input 
                  placeholder='-'
                  type='text' 
                  maxLength={1}
                  {...register("n3")} 
                  className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
              </div>
              <div className='h-[48px] md:h-[56px]'>
                <input 
                  placeholder='-'
                  type='text' 
                  maxLength={1}
                  {...register("n4")} 
                  className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] md:h-[56px] md:placeholder:text-[16px]  '/>
              </div>
            </div>
            <div className='w-full'>
              <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] md:h-[56px] md:py-[16px] md:px-[24px] md:text-[16px]`}>
               Подтвердить
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-row justify-center px-[8.5px] gap-[8px]'>
          <p className='text-[12px] text-[#777872] font-[400] md:text-[16px]'>Не пришел код?</p>
          <p className='text-[12px] text-[#000000] font-[600] md:text-[16px]'>Отправить код снова</p>
        </div>
      </div>
      <div className='hidden md:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center h-full'></div>
    </div>
  );
}

export default ChangePassword2