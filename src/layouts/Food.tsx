import {useState} from 'react'
import IMG2 from '../images/eat2.png'

type DataT = string[]

const data: DataT = [
    'Веганская диета', 
    'Кето-диета', 
    'Низкоуглеводная диета', 
    'Веганская диетаы', 
    'Кето-диета', 
    'Низкоуглеводная диета', 
    'Веганская диетаф',  
  ]

export const Food = () => {
  const [active, setActive] = useState('Веганская диета') 

  const activeButton =(item: string) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[auto_274px] grid-col-1 mb-[92px] md:grid-cols-[1fr_1fr] md:grid-rows-1 md:mb-[150px]'>
    <div className='order-2 md:order-1'>
      <img className ='mx-auto w-[241.3px] h-[273.93px] md:w-[852px] md:h-[538px] md:mx-auto '
        src={IMG2} alt='eat1'/>
    </div>
    <div className='md:pt-[90px] order-1 md:order-2'>
      <div className='mb-[24px] md:mb-[32px] md:w-[814px] flex flex-wrap gap-[8px] md:gap-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt py-[8px] px-[12px] w-max md:w-[132px] text-[12px] leading-[14.32px] md:h-[43px] rounded-[40px] font-[400] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Питайся вкусно, полезно и разнообразно </h2>
      <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] mb-[17px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>Ежедневный индивидуальный план питания с учетом вашего здоровья, образа жизни и целей. Более 1000 вкусных и легких рецептов.</p>
    </div>
  </div>
  )
}