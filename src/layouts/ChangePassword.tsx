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
    localStorage.setItem('resetEmail', JSON.stringify({
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
      // console.log(res)
      // console.log(res.data)

      reset()
      navigate("/login/stage2");
    })
    .catch((error) => {
      // console.log(error)
      // console.log(error.response.data)
    })
  };


  return (
    <div className='w-[288rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]'>
      <h1 className='font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[14rem] lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[24rem]'>Восстановление пароля</h1>
      <h3 className='font-body text-[#777872] font-[600] text-[14rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem]'>На указанный Email  будет отправлен код для восстановления пароля</h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[288rem] mx-auto lg:w-[441rem]'>
        <div className='mb-[17rem] lg:mb-[33rem]'>
          <input 
            placeholder='Ваш e-mail'
            type='text' 
            {...register("email")} 
            className='outline-none w-full h-[48rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            <p className='text-red-600 h-[24rem] text-[15rem]'>{errors.email?.message}</p>
        </div>

        <div className='mb-[36rem]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[20rem] lg:mb-[24rem] w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
            Отправить код подтверждения
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword