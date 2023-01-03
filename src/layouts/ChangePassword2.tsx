import { useState, useContext, useEffect } from 'react'
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { setUser, user, countryId } = useContext(Profile)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isValid }, reset, setFocus } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  useEffect(() => {   
    if(!user) {
      navigate('/login/stage1')
    }
  },[]) 
  
  const onSubmit = (data: IFormInputs) => {
    const key = [data.n1, data.n2, data.n3, data.n4, data.n5, data.n6].join('')


    // console.log(typeof(key), key)
    const userInfo = {
      email: user?.email,
      token:`${key}`,
    }

    if(user && user.email) {

      // console.log(userInfo)

      axios.put('https://stage.fitnesskaknauka.com/api/auth/confirm-reset-code', userInfo, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Timezone': `${countryId}`
        }
      })
      .then((res) => {
        // console.log(res)
        // console.log(res.data)

        localStorage.setItem('user', JSON.stringify({
          ...user,
          token: res.data.token
        }))
        setUser({
          ...user,
          token: res.data.token
        })

        navigate("/login/stage3");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message)
      })
    }

    reset()
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
      // console.log(res)
      // console.log(res.data)
    })
    .catch((error) => {
      // console.log(error)
      // console.log(error.response.data)
    })

  }

 

  return (
    <>
      <div className='w-[288rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]'>
        <h1 className='font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[14rem] 
        lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[24rem]'>Восстановление пароля</h1>
        <h3 className='font-body text-[#777872] font-[600] text-[14rem] leading-[26.25rem] text-center mb-[32rem] 
        lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem]'>Введите код подтверждения, который мы отправили Вам на указанный Email </h3>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-[1fr_56rem] w-[288rem] lg:w-[441rem] mx-auto place-items-center lg:grid-rows-[1fr_65rem] lg:mb-[24rem]'>
          <div className='flex flex-row gap-[20rem] w-min mb-[32rem] lg:mb-[48rem]'>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n1")}   
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n2'): setFocus('n1')}            
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n2")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n3'): setFocus('n1')} 
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n3")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n4'): setFocus('n2')} 
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text' 
                maxLength={1}
                {...register("n4")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n5'): setFocus('n3')} 
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n5")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n6'): setFocus('n4')} 
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
            <div className='h-[48rem] lg:h-[56rem] w-[56rem]'>
              <input 
                placeholder='-'
                type='text'
                maxLength={1}
                {...register("n6")} 
                onKeyUp={(e) => e.code !== 'Backspace' ?setFocus('n6'): setFocus('n5')} 
                className='outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[12rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem]  '/>
            </div>
          </div>
          {
            errorMessage ? (<p className='text-[15rem] text-red-400 text-center'>{errorMessage}</p>) : null
          }
          <div className='w-full'>
            <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} w-full h-[42rem] py-[14rem] rem-[18rem] text-[12rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
              Подтвердить
            </button>
          </div>
        </form>
        <div className='flex flex-row justify-center rem-[8.5rem] gap-[8rem]'>
          <p className='text-[12rem] text-[#777872] font-[400] lg:text-[16rem]'>Не пришел код?</p>
          <p className='text-[12rem] text-[#000000] font-[600] lg:text-[16rem] cursor-pointer'
          onClick={sendCode}>Отправить код снова</p>
        </div>
      </div>
    </>
  );
}

export default ChangePassword2