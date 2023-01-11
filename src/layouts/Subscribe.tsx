import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { SubCard } from '../components/SubLandingCard'
import { Profile } from '../App'



export type Sub = {
  text: string,
  price: string,
  top?: string,
}

const subsData: Sub[] = [
  {
    text: 'Подписка на 1 месяц',
    price: '1200 руб./ мес.',
  },
  {
    text: `При подписке на 3 месяца.\n3000 руб. за 3 месяца`,
    price: '1000 руб./ мес.',
  },
  {
    text: `При подписке на год.\n9600 руб. в год`,
    price: '800 руб./ мес.',
    top: 'top'
  }
]

export const Subscribe = () => {
  const { isAuthenticated } = useContext(Profile)
  const [ active, setActive ] = useState<number>(2)

  return (
  <div className='flex flex-col mb-[120rem] 
  lg:mb-[200rem]'>
    <p className='font-[600] text-[32rem] leading-[37.57rem] mb-[32rem] text-[#1F2117]  
    lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[75rem] lg:text-center lg:mx-auto lg:mb-[127rem]'>Подписки</p>
    <div className='flex flex-col mx-auto gap-[16rem] mb-[32rem] whitespace-pre-line 
    lg:gap-[40rem] lg:mb-[64rem] lg:grid  lg:grid-cols-3 lg:grid-rows-1 lg:h-[207rem] lg:w-[1679rem]'>
      {
        subsData.map((item,i) => {
          return(
            <div key={i} onClick={() => setActive(i)}>
              <SubCard item={item} active={active === i ? 'active': ''} landing={false}/>
            </div>
          )
        })
      }
    </div>
      <div className='font-bodyalt lg:flex lg:justify-center'>
        <Link to={isAuthenticated ? '/cabinet' : '/login'}>
          <button className='bg-[#FFB700] text-[12rem] w-full leading-[14rem] h-[42rem] rounded-full text-center text-white tracking-[0.04em] flex flex-row items-center justify-center hover:bg-[#F0AD04]
          lg:w-[349rem] lg:h-[56rem] lg:text-[16rem]'>
            <p className='font-[600] text-[14rem] leading-[14.32rem] text-[#FAFAFA] tracking-[0.04em] mr-[10rem]
             lg:leading-[19.09rem] lg:text-[16rem] lg:mr-[14rem]'>Оплатить подписку</p>
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