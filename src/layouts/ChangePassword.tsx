import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useContext } from "react";

import { Profile } from '../App'



interface IFormInputs {
  email: string
}

const schema = yup.object({
  email: yup.string().email('Не правильный email').required('Обязательное поле'),
}).required();

const ChangePassword = () => {
  const { countryId, setUser, user } = useContext(Profile)
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
    
    axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo, {
      headers: {
        'Content-type':'application/json',
        'Timezone': `${countryId}`
      }
    })
    .then((res) => {
      navigate("/login/stage2");
    })
    .catch((error) => {
      reset()

      console.log(error)
      console.log(error.response.data)
    })
  };


  return (
    <div className='w-[288px] mx-auto mt-[24px] lg:w-[492px] lg:mt-[223px]'>
      <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[14px] lg:text-[40px] lg:leading-[46.96px] lg:mb-[24px]'>Восстановление пароля</h1>
      <h3 className='font-body text-[#777872] font-[600] text-[14px] leading-[26.25px] text-center mb-[32px] lg:text-[22px] lg:leading-[32px] lg:mb-[48px]'>На указанный Email  будет отправлен код для восстановления пароля</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288px] mx-auto lg:w-[441px]'>
        <div className='mb-[17px] lg:mb-[33px]'>
          <input 
            placeholder='Ваш e-mail'
            type='text' 
            {...register("email")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            <p className='text-red-600 h-[24px] text-[15px]'>{errors.email?.message}</p>
        </div>

        <div className='mb-[36px]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20px] lg:mb-[24px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] lg:h-[56px] lg:py-[16px] lg:px-[24px] lg:text-[16px]`}>
            Отправить код подтверждения
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword