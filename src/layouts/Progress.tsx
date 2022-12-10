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
                className={`font-sans w-max h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px]  md:w-[132px] md:h-[43px] rounded-[40px] font-[400] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Отслеживай прогресс. Становись лучше. </h2>
      <p className='font-sans font-[400] text-[14px] leading-[16.71px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>Отмечай каждую тренировку и просматривай статистику.
Отслеживание прогресса стало проще благодаря собранной в одном месте статистике по питанию и тренировкам.</p>
    </div>
    <div className='order-last'>
      <img className ='mx-auto w-[252px]'
        src={IMG3} alt='eat1'/>
    </div>
  </div>
  )
}