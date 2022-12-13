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
      <div className='font-bodyalt font-[400] text-[14px] leading-[16.71px] mb-[22px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>Уровень твоей подготовки не имеет значения. Наши программы выстроены под любой уровень физической подготовки.&nbsp;
        <div className='inline-block relative'>
          <div className='z-10 relative'>
            Более чем 1500&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[110px] h-[7px] -translate-y-[5px] -translate-x-[2px] md:w-[170px] md:h-[20px] md:-translate-y-[13px] md:-translate-x-[3px]' viewBox="0 0 112 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111.674 3.59188C111.674 3.59188 111.762 3.62723 111.645 3.78426C111.585 3.80373 111.351 3.90281 110.765 4.07554C109.904 4.432 76.1864 2.3762 56.6266 3.16656L0.271759 5.01591C-0.249185 5.02908 0.147705 4.73758 0.147705 4.73758C7.42328 3.34289 14.885 1.85651 34.5588 1.34126C48.0574 0.689425 73.1438 0.489928 78.2636 0.754385C85.9067 1.02377 102.156 2.38046 111.674 3.59188Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
      тренировок, с помощью которых вы быстрее достигнете своей цели.</div>
    </div>
    <div className='order-last'>
      <img className ='w-[236.37px] mx-auto md:w-[523px]' 
        src={IMG1} alt='eat1'/>
    </div>
  </div>
  )
}