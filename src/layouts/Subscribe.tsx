import { Link } from 'react-router-dom'
import { SubCard } from '../components/SubCard'

export type Sub = {
  text: string,
  price: string,
  top?: string,
}

export interface subsDataType {
  [key: string]: Sub
}

const subsData: subsDataType = {
  sub1: {
    text: 'Подписка на 1 месяц',
    price: '1200 руб./ мес.',
  },
  sub2: {
    text: 'При подписке на 3 месяца. 3000 руб. за 3 месяца',
    price: '1000 руб./ мес.',
  },
  sub3: {
    text: 'При подписке на год. 9600 руб. в год',
    price: '800 руб./ мес.',
    top: 'top'
  }
}

export const Subscribe = () => {

  return (
  <div className='flex flex-col mb-[120px] md:mb-[200px]'>
    <p className='
      font-[600] text-[32px] leading-[37.57px] mb-[32px] md:text-[64px] text-[#1F2117] md:leading-[75.14px]
      md:w-[842px] md:h-[75px] md:text-center md:mx-auto md:mb-[127px]'>Подписки</p>
    <div className='grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 md:h-[207px] mx-auto gap-[16px] md:gap-[40px] mb-[32px] md:mb-[64px]'>
      <SubCard subsData={subsData.sub1}/>
      <SubCard subsData={subsData.sub2}/>
      <SubCard subsData={subsData.sub3}/> 
    </div>
    <Link to='/login'>
      <div className='font-bodyalt flex justify-center'>
        <button className='bg-[#FFB700] text-[12px] w-full leading-[14.32px] h-[42px] rounded-full md:w-[349px] md:h-[56px] md:text-[16px] text-center text-white tracking-[0.04em] flex flex-row items-center justify-center hover:bg-[rgba(255,209,101,1)]'>
          <p className='font-[600] text-[14px] leading-[14.32px] md:leading-[19.09px] md:text-[16px] text-[#FAFAFA] tracking-[0.04em] mr-[14px]'>Оплатить подписку</p>
          <svg className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12L20.25 12" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="#FAFAFA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>  
      </div>
    </Link>
  </div>
  )
}