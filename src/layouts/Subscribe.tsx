import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { SubCard } from '../components/SubCard'
import { Profile, ActiveSub } from '../App'


export type Sub = {
  text?: string[],
  price: string,
  top?: string,
  info?: ActiveSub
}

interface Subscribe {
  currency?: string,
  description?: string,
  id?: number,
  invoicePeriod?: number,
  isBestChoice?: boolean,
  name?: string,
  price?: number,
  productId?: string,
  properties?: {
    card?: string[], 
    pricePerMonth?: number,
  },
  tier?: number,
  trialPeriod?: number,
}

const subsData: Subscribe[] = [
  {
    properties: {
    card: [
      'Подписка на 1 месяц',
      'Доступ на один месяц ко всем тренировкам и планам питания, а так же более чем 1000 вкусных и полезных рецептов',
    ]},
    price: 1200,
    name: '1 месяц',
    id:1
    },
    {
      properties: {
      card: [
        'Подписка на 3 месяца',
        'Доступ на целый год ко всем тренировкам и планам питания, а так же более чем 1000 вкусных и полезных рецептов',
        'Экономь 17% при оплате 3-х месячной подписки',
      ]},
      price: 3000,
      name: '1 месяц',
      id:2
  },
  {
    properties: {
    card: [
      'Подписка на год',
      'Доступ на целый год ко всем тренировкам и планам питания, а так же более чем 1000 вкусных и полезных рецептов',
      'Экономь 34% при оплате годовой подписки',
    ]},
    price: 9600,
    name: '1 месяц',
    id:3,
    isBestChoice: true
    },
]

export const Subscribe = () => {
  const { user } = useContext(Profile)
  const [ active, setActive ] = useState<number>(2)

  return (
<div className='flex flex-col mb-[120rem] 
  lg:mb-[200rem]'>
    <p className='font-[600] text-[32rem] leading-[37.57rem] mb-[32rem] text-[#1F2117]  
    lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[75rem] lg:text-center lg:mx-auto lg:mb-[127rem]'>Подписки</p>
    <div className='flex flex-col gap-[16rem] mb-[32rem] whitespace-pre-line 
    lg:gap-[40rem] lg:mb-[0rem] lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:h-[419rem]'>
      {
        subsData.map((item,i) => {
          return(
            <div key={i} onClick={() => setActive(i)}>
              <SubCard items={item} active={item.id! - 1  === active? 'active': ''} landing={true}/>
            </div>
          )
        })
      }
    </div>
    <div className='lg:mt-[64rem] font-bodyalt lg:flex lg:justify-center'>
      <Link to={user ? '/cabinet' : '/login'}>
        <button className='bg-[#FFB700] text-[16rem] w-full leading-[14rem] h-[51rem] rounded-full text-center text-white tracking-[0.04em] flex flex-row items-center justify-center hover:bg-[#F0AD04]
        lg:w-[349rem] lg:h-[56rem] lg:text-[16rem]'>
          <p className='font-[600] text-[16rem] leading-[19rem] text-[#FAFAFA] tracking-[0.04em] mr-[10rem]
            lg:leading-[19.09rem] lg:text-[16rem] lg:mr-[14rem]'>Начать бесплатно</p>
          <svg className='w-[18rem] h-[18rem] 
          lg:w-[24rem] lg:h-[24rem]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12L20.25 12" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>  
      </Link>
    </div>
  </div>
  )
}