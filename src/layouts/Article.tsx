import {useState} from 'react'
import IMG1 from '../images/article.png'

type DataT = string[]

const data: DataT = [
    'Статьи', 
    'Лекции',   
  ]

export const Article = () => {
  const [active, setActive] = useState('Статьи') 

  const activeButton =(item: string) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[auto_274px] grid-col-1 mb-[116.52px] md:grid-cols-[1fr_1fr] md:grid-rows-1 md:mb-[150px]'>
    <div className='order-2 md:order-1'>
      <img className ='mx-auto w-[241.3px] h-[273.93px] md:w-[537px] md:h-[607px] md:mx-auto '
        src={IMG1} alt='eat1'/>
    </div>
    <div className='md:pt-[90px] order-1 mb-[49px] md '>
      <div className='mb-[32px] md:w-[814px] flex flex-row gap-[8px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`font-bodyalt w-[64px] h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px]  md:w-[132px] md:h-[43px] md:mr-[10px] rounded-[40px] font-[400] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Получай ценные знания каждый день.</h2>
      <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] h-[68px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>В нашем приложение собраны тысячи статей и лекций на темы спорта и здоровья. Изуйчай новую информацию, чтобы лучше разбираться в том, как работает наше тело.</p>
    </div>
  </div>
  )
}