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
                className={`bg-white font-bodyalt w-[64px] h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px]  md:w-[132px] md:h-[43px] md:mr-[10px] rounded-[40px] font-[400] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === item? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(item)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] md:text-[64px] md:leading-[75.14px] text-[#1F2117] md:w-[842px] md:h-[150px] md:mb-[32px]'>Получай ценные знания каждый день.</h2>
      <div className=' font-bodyalt font-[400] text-[14px] leading-[16.71px] h-[68px] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px] tracking-[0.02em]'>В нашем приложение собраны 
        <div className='inline-block relative'>
          <div className='z-10 relative'>
            &nbsp;тысячи&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[60px] h-[7px] -translate-y-[5px] -translate-x-[2px] md:w-[167px] md:h-[17px] md:-translate-y-[11px] md:-translate-x-[3px]' viewBox="0 0 153 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.226 5.87917C152.226 5.87917 152.345 5.96151 152.18 6.34634C152.096 6.39578 151.774 6.64456 150.969 7.08498C149.783 7.98078 103.914 4.26149 77.2313 6.90812L0.3698 13.497C-0.34056 13.5484 0.211171 12.8273 0.211171 12.8273C10.1775 9.17608 20.4009 5.29578 47.2288 3.31143C65.6471 1.22719 99.8388 -0.194657 106.805 0.254519C117.21 0.621249 139.301 3.30028 152.226 5.87917Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
         статей и лекций на темы спорта и здоровья. Изуйчай новую информацию, чтобы лучше разбираться в том, как работает наше тело.</div>
    </div>
  </div>
  )
}