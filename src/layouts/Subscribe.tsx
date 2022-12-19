import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubCard } from '../components/SubCard'


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
  const [active, setActive] = useState<number | null>(null)

  return (
  <div className='flex flex-col mb-[120px] 
  lg:mb-[200px]
  2lg:mb-[200px]'>
    <p className='
      font-[600] text-[32px] leading-[37.57px] mb-[32px] text-[#1F2117] 
      md:text-[64px] md:leading-[75.14px] md:h-[75px] md:mb-[100px] 
      lg:text-[64px] lg:leading-[75.14px] lg:w-[842px] lg:h-[75px] lg:text-center lg:mx-auto lg:mb-[127px]
      2lg:text-[64px] 2lg:leading-[75.14px] 2lg:w-[842px] 2lg:h-[75px] 2lg:text-center 2lg:mx-auto 2lg:mb-[127px]'>Подписки</p>
    <div className='grid grid-rows-3 grid-cols-1 mx-auto gap-[16px] mb-[32px] whitespace-pre-line 
    md:gap-[40px] md:mb-[64px] 
    lg:gap-[40px] lg:mb-[64px] lg:grid-cols-3 lg:grid-rows-1 lg:h-[207px] 
    2lg:gap-[40px] 2lg:mb-[64px] 2lg:grid-cols-3 2lg:grid-rows-1 2lg:h-[207px] '>
      {
        subsData.map((item,i) => {
          return(
            <div key={i} onClick={() => setActive(i)}>
              <SubCard item={item} active={active === i ? 'active': ''}/>
            </div>
          )
        })
      }
    </div>
    <Link to='/login'>
      <div className='font-bodyalt flex justify-center'>
        <button className='bg-[#FFB700] text-[12px] w-full leading-[14.32px] h-[42px] rounded-full text-center text-white tracking-[0.04em] flex flex-row items-center justify-center hover:bg-[rgba(255,209,101,1)]
        md:w-[550px] md:h-[67px] md:text-[16px] 
        lg:w-[349px] lg:h-[56px] lg:text-[16px]
        2lg:w-[349px] 2lg:h-[56px] 2lg:text-[16px] '>
          <p className='font-[600] text-[14px] leading-[14.32px] text-[#FAFAFA] tracking-[0.04em] mr-[14px]
          md:leading-[19.09px] md:text-[16px] 
          lg:leading-[19.09px] lg:text-[16px]
          2lg:leading-[19.09px] 2lg:text-[16px]'>Оплатить подписку</p>
          <svg className='w-[18px] h-[18px] 
          md:w-[24px] md:h-[24px] 
          lg:w-[24px] lg:h-[24px]
          2lg:w-[24px] 2lg:h-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12L20.25 12" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>  
      </div>
    </Link>
  </div>
  )
}