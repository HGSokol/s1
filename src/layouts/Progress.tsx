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
  <div className='grid grid-cols-[1fr_1fr] mb-[150px]'>
    <div className='pt-[90px]'>
      <div className='mb-[32px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`w-[132px] h-[43px] mr-[10px] rounded-[40px] font-[400] text-[16px] leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[64px] leading-[75.14px] text-[#1F2117] w-[842px] h-[150px] mb-[32px]'>Отслеживай прогресс. Становись лучше. </h2>
      <p className='font-[400] text-[22px] leading-[32px] text-[#777872] w-[734px] h-[128px] tracking-[0.02em]'>Отмечай каждую тренировку и просматривай статистику.
Отслеживание прогресса стало проще благодаря собранной в одном месте статистике по питанию и тренировкам.</p>
    </div>
    <div className='order-last'>
      <img className ='mx-auto'
        src={IMG3} alt='eat1'/>
    </div>
  </div>
  )
}