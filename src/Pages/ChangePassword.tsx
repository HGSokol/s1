import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useContext, useState } from "react";

import { Profile } from '../App'


interface IFormInputs {
  email: string
}

const schema = yup.object({
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
}).required();

const ChangePassword = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { setUser } = useContext(Profile)
  const navigate = useNavigate()


  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    setUser({
      email: data.email
    })
    localStorage.setItem('user', JSON.stringify({
      email: data.email
    }))

    const userInfo = {
      email: data.email
    }
    
    axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo)
    .then((res) => {
      console.log(res)
      navigate("/login/step2");
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage(error.response.data.message)
      reset()

    })
  };



  return (
    <div className='w-[343rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]'>
      <h1 className='font-bodyalt font-[600] text-[24rem] leading-[26.25rem] text-center mb-[14rem] lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[24rem]'>Восстановление пароля</h1>
      <h3 className='font-bodyalt text-[#777872] font-[400] text-[16rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem] lg:font-[600]'>На указанный Email  будет отправлен код для восстановления пароля</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[343rem] mx-auto lg:w-[441rem]'>
        <div className='mb-[32rem]'>
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
        {
          errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
        }
        <div className='mb-[36rem]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} font-bodyalt mb-[20rem] lg:mb-[24rem] w-full h-[51rem] py-[14rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
            Отправить код подтверждения
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword