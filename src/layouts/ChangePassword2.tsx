import { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Profile } from '../App'


interface IFormInputs {
  n1: number,
  n2: number,
  n3: number,
  n4: number,
  n5: number,
  n6: number,
}

const schema = yup.object({
  n1: yup.number().required(),
  n2: yup.number().required(),
  n3: yup.number().required(),
  n4: yup.number().required(),
  n5: yup.number().required(),
  n6: yup.number().required(),
}).required();

const ChangePassword2 = () => {
  const { user, countryId } = useContext(Profile)
  const [rightCode, setRightCode] = useState<boolean | null>(null)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset, setFocus } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    const key = Number([data.n1, data.n2, data.n3, data.n4, data.n5, data.n6].join(''))

    const userInfo= JSON.stringify({
      email: user?.email,
      token: key,
    })

    axios.put('https://stage.fitnesskaknauka.com/api/auth/confirm-reset-code', userInfo, {
      headers: {
        'Content-type':'application/json',
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


    // if(rightCode === true) {
    //   navigate("/login/stage3");
    // }
    // reset()
  };

  const sendCode = () => {
    const userInfo= {
      email: 'g.w.sokolov98@mail.ru'
    }

    axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo, {
      headers: {
        'Content-type':'application/json',
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

  }

 

  return (
    <>
      <div className='w-[288px] mx-auto mt-[24px] lg:w-[492px] lg:mt-[223px]'>
        <h1 className='font-body font-[600] text-[22px] leading-[26.25px] text-center mb-[14px] lg:text-[40px] lg:leading-[46.96px] lg:mb-[24px]'>Восстановление пароля</h1>
        <h3 className='font-body text-[#777872] font-[600] text-[14px] leading-[26.25px] text-center mb-[32px] lg:text-[22px] lg:leading-[32px] lg:mb-[48px]'>Введите код подтверждения, который мы отправили Вам на указанный Email </h3>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-[1fr_56px] w-[288px] lg:w-[441px] mx-auto place-items-center lg:grid-rows-[1fr_65px] lg:mb-[24px]'>
          <div className='flex flex-row gap-[20px] w-min mb-[32px] lg:mb-[48px]'>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n1")}   
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n2'): setFocus('n1')}            
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n2")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n3'): setFocus('n1')} 
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n3")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n4'): setFocus('n2')} 
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n4")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n5'): setFocus('n3')} 
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n5")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n6'): setFocus('n4')} 
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
            <div className='h-[48px] lg:h-[56px] w-[56px]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n6")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n6'): setFocus('n5')} 
                className='outline-none w-full text-center h-[56px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56px] lg:placeholder:text-[16px]  '/>
            </div>
          </div>
          <div className='w-full'>
            <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px] lg:h-[56px] lg:py-[16px] lg:px-[24px] lg:text-[16px]`}>
              Подтвердить
            </button>
          </div>
          {/* {
            rightCode === false ? <p>не правильный код</p> : null
          } */}
        </form>
        <div className='flex flex-row justify-center px-[8.5px] gap-[8px]'>
          <p className='text-[12px] text-[#777872] font-[400] lg:text-[16px]'>Не пришел код?</p>
          <p className='text-[12px] text-[#000000] font-[600] lg:text-[16px] cursor-pointer'
          onClick={sendCode}>Отправить код снова</p>
        </div>
      </div>
    </>
  );
}

export default ChangePassword2