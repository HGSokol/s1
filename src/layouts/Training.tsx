import {useState} from 'react'
import IMG1 from '../images/eat1.png'

type DataType = string[]

const data: DataType = ['Похудение', 'Набор массы']

export const Training = () => {
  const [active, setActive] = useState('Похудение') 

  const activeButton =(item: string) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[auto_h-min] mb-[117px] grid-cols-1 md:grid-cols-[auto_auto] md:grid-rows-1 md:mb-[169px]'>
    <div className='md:pt-[90px] '>
      <div className='md:mb-[32px] flex flex-row gap-[8px] md:gap-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt px-[12px] py-[8px] w-max h-[30px] font-[400] text-[12px] leading-[14.32px] rounded-[40px] mb-[24px] md:text-[16px] md:leading-[19px] md:w-[132px] md:h-[43px] md:mr-[10px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Тренируйся. Будь сильнее. Укрепи здоровье.</h2>
      <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] mb-[22px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>Уровень твоей подготовки не имеет значения. Наши программы выстроены под любой уровень физической подготовки. 
        Более чем 1500 тренировок, с помощью которых вы быстрее достигнете своей цели.</p>
    </div>
    <div className='order-last'>
      <img className ='w-[236.37px] mx-auto' 
        src={IMG1} alt='eat1'/>
    </div>
  </div>
  )
}