import {useState} from 'react'
import IMG3 from '../images/eat3.png'

type Data = string[]

const data: Data = ['Питание', 'Тренировки']

export const Progress = () => {
  const [active, setActive] = useState('Питание') 

  const activeButton =(item: string) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[h-max_h-min] grid-cols-1 mb-[120px] md:grid-cols-[1fr_1fr] md:mb-[150px]'>
    <div className='md:pt-[90px]'>
      <div className='mb-[24px] md:mb-[32px] flex flex-row gap-[8px] md:mr-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt w-max h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px]  md:w-[132px] md:h-[43px] rounded-[40px] font-[400] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Отслеживай прогресс. Становись лучше. </h2>
      <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>Отмечай каждую тренировку и просматривай статистику. Отслеживание прогресса&nbsp;
        <p className='inline-block relative'>
          <div className='z-10 relative'>
          стало проще&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[92px] h-[10px] -translate-y-[5px] -translate-x-[5px] md:w-[140px] md:h-[20px] md:-translate-y-[13px] md:-translate-x-[6px]' viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M139.442 5.92856C139.442 5.92856 139.55 6.01054 139.398 6.39583C139.321 6.44551 139.026 6.69522 138.287 7.13798C137.198 8.0372 95.1992 4.45432 70.7533 7.1798L0.338651 13.9959C-0.312099 14.0494 0.195353 13.3267 0.195353 13.3267C9.334 9.64635 18.7088 5.73614 43.2855 3.67244C60.1605 1.53381 91.4798 0.0107194 97.859 0.43919C107.387 0.775029 127.612 3.38827 139.442 5.92856Z" fill="#FFB700"/>
            </svg>
          </div>
        </p>
    благодаря собранной в одном месте статистике по питанию и тренировкам.</p>
    </div>
    <div className='order-last'>
      <img className ='mx-auto w-[252px] md:w-[562px]'
        src={IMG3} alt='eat1'/>
    </div>
  </div>
  )
}