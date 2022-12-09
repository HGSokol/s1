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
  <div className='grid grid-cols-[auto_auto] mb-[169px]'>
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
      <h2 className='font-[600] text-[64px] leading-[75.14px] text-[#1F2117] w-[842px] h-[150px] mb-[32px]'>Тренируйся. Будь сильнее. Укрепи здоровье.</h2>
      <p className='font-[400] text-[22px] leading-[32px] text-[#777872] w-[734px] h-[128px] tracking-[0.02em]'>Уровень твоей подготовки не имеет значения. Наши программы выстроены под любой уровень физической подготовки. 
        Более чем 1500 тренировок, с помощью которых вы быстрее достигнете своей цели.</p>
    </div>
    <div className='order-last'>
      <img className ='mx-auto'
        src={IMG1} alt='eat1'/>
    </div>
  </div>
  )
}