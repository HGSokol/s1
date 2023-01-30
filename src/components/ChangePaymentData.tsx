import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Profile } from '../App'
import CardIcon from './CardIcon'


const schema = yup.object({
  cardNumber: yup.string(),
  nameCard: yup.string().uppercase().matches(/[A-Z]+/, "Введите имя держателя заглавными буквами").required('Поле Имя держателя карты обязательно'),
  date: yup.string(),
  cvv: yup.number(),
}).required();

interface IFormInputs {
  cardNumber: string
  nameCard: string
  date: string,
  cvv: string,
}

interface ChangeCard {
  ChangeCard?: boolean
}

export const ChangePaymentData = (props?: ChangeCard) => {
  const { setCardInfo, activeSub } = useContext(Profile)
  const navigate = useNavigate()
  const refNumberCard = useRef<HTMLInputElement | null>(null)
  const refDateCard = useRef<HTMLInputElement | null>(null)

  const [numberCard, setNumberCard] = useState('');
  const [dateCard, setDateCard] = useState('');

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  const onSubmit = (data: IFormInputs) => {
    const { nameCard, cvv} = data
    const cardInfo = {
      numberCard: numberCard.replace(/\s+/g,''),
      nameCard,
      dateCard: {
        month: dateCard.slice(0,2),
        year: dateCard.slice(3,5),
      },
      cvv
    }
    setCardInfo(cardInfo)
    setNumberCard('')
    setDateCard('')
    reset()

    props && props.ChangeCard ? navigate('/cabinet/ordering2') : navigate('/cabinet/ordering2')

    // axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo)
    // .then((res) => {
    //   console.log(res)
    //   navigate("/login/step2");
    // })
    // .catch((error) => {
    //   console.log(error)
    //   setErrorMessage(error.response.data.message)
    //   reset()

    // })
  };

  const handleSubmitNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    let cardCode:any = refNumberCard?.current?.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';

    setNumberCard(cardCode)
  }
  const handleSubmitDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    let cardCode:any = refDateCard?.current?.value.replace(/[^\d]/g, '').substring(0,4);
    cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : '';

    setDateCard(cardCode)
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full lg:mx-[0rem]  lg:w-[441rem]'>
          <div className='mb-[16rem]'>
            <div className='relative'>
              <p className='font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Номер карты</p>
              <div className={`absolute translate-x-[295rem] ${numberCard[0] === '2'? ' translate-y-[21rem] lg:translate-y-[24rem]':'translate-y-[14rem] lg:translate-y-[18rem]'} w-[20rem] h-[12rem] lg:translate-x-[390rem]`}>
                <CardIcon cardNumber={numberCard}/>
              </div>
            </div>
            <div>
              <input 
                ref={refNumberCard}
                value={numberCard}
                onChange={handleSubmitNumber}
                maxLength={19}
                minLength={19}
                placeholder='XXXX XXXX XXXX XXXX'
                type='text' 
                className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                `}/>
                {/* {
                  errors.cardNumber? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.cardNumber?.message}</p> : null
                } */}
            </div>
          </div>
          <div className='mb-[16rem]'>
            <p className='font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Имя держателя карты</p>
            <div>
              <input 
                placeholder='Имя Фамилия'
                type='text' 
                {...register('nameCard')}
                className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                `}/>
                {
                  errors.nameCard? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.nameCard?.message}</p> : null
                }
            </div>
          </div>
          <div className='w-full grid grid-cols-2 gap-[16rem] mb-[20rem]'>
            <div>
              <p className='font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>Дата окончания</p>
              <div>
                <input 
                  ref={refDateCard}
                  value={dateCard}
                  onChange={handleSubmitDate}
                  placeholder='ММ/ГГ'
                  type='text' 
                  maxLength={5}
                  minLength={5}
                  className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}/>
                  {/* {
                    errors.date? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.name?.message}</p> : null
                  } */}
              </div>
            </div>
            <div>
              <p className='font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]'>CVV</p>
              <div>
                <input 
                  placeholder='CVV'
                  type='text' 
                  maxLength={3}
                  minLength={3}
                  {...register('cvv')}
                  className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}/>
                  {/* {
                    errors.cvv? <p className='text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errors.name?.message}</p> : null
                  } */}
              </div>
            </div>
          </div>
          <div className='mb-[32rem]'>
            <p className='font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] lg:text-[16rem] lg:leading-[19rem]'>Для привязки вашей карты с нее будут списаны средства в размере 1 рубля и возвращены обратно</p>
          </div>
          {/* {
            errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
          } */}
          <div >
            <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/50'} mb-[30rem] lg:mb-[24rem] w-full h-[51rem] flex items-center justify-center rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem] cursor-pointer`}>
            {
              activeSub? (<p>Изменить карту</p>): (<p>Оплатить</p>)
            }
            </button>
          </div>
        </form>
      </>
  )
}