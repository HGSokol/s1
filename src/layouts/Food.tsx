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
  <div className='grid grid-cols-[1fr_1fr] mb-[150px]'>
    <div className=''>
      <img className ='mx-auto'
        src={IMG2} alt='eat1'/>
    </div>
    <div className='pt-[90px]'>
      <div className='mb-[32px] w-[814px]'>
        {
          data.map(item => {
            return (
              <button 
                className={`w-[132px] h-[43px] mr-[10px] rounded-[40px] font-[400] text-[16px] leading-[19px]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[64px] leading-[75.14px] text-[#1F2117] w-[842px] h-[150px] mb-[32px]'>Питайся вкусно, полезно и разнообразно </h2>
      <p className='font-[400] text-[22px] leading-[32px] text-[#777872] w-[734px] h-[128px] tracking-[0.02em]'>Ежедневный индивидуальный план питания с учетом вашего здоровья, образа жизни и целей. Более 1000 вкусных и легких рецептов.</p>
    </div>
  </div>
  )
}