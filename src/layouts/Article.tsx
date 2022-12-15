import { useState } from 'react'

import IMG1 from '../images/article.png'
import Group from '../images/group.png'
import Shadow from '../images/Ellipse.png'


type buttonName = string[]

const frameInteractive = [
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
]

const data: buttonName = [
  'Статьи', 
  'Лекции',   
]

export const Article = () => {
  const [active, setActive] = useState(0) 

  const activeButton =(item: number) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[auto_274px] grid-col-1 mb-[116.52px] md:grid-cols-[1fr_1fr] md:grid-rows-1 md:mb-[150px]'>
    <div className='relative order-2 duration-300 mx-auto md:order-1'>
      <div className='absolute w-[45px] h-[40px] translate-x-[200px] -translate-y-[10px] md:translate-x-[430px] md:w-[118px] md:h-[108px] md:-translate-y-[35px]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46px] h-[45px] -translate-x-[20px] translate-y-[215px] md:-translate-x-[70px] md:w-[103px] md:h-[99px] md:translate-y-[470px]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[95px] -translate-y-[5px] md:translate-x-[210px] md:w-[59px] md:h-[61px] md:-translate-y-[20px]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[120px] translate-y-[250px] md:translate-x-[270px] md:w-[59px] md:h-[61px] md:translate-y-[560px] rotate-[180deg]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[240px] h-[8.57px] translate-x-[5px] translate-y-[270px] md:translate-x-[0px] md:w-[555px] md:h-[107px] md:translate-y-[620px]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='mx-auto w-[241.3px] h-[273.93px] md:w-[537px] md:h-[607px] md:mx-auto '
        src={IMG1} alt='eat1'/>
    </div>
    <div className='order-1 mb-[49px] md:pt-[90px]'>
      <div className='mb-[32px]  flex flex-row gap-[8px] md:w-[814px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt w-[64px] h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px] rounded-[40px] font-[400]  md:w-[132px] md:h-[43px] md:mr-[10px] md:text-[16px] md:leading-[19px] duration-[600ms]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] text-[#1F2117] md:text-[64px] md:leading-[75.14px] md:w-[842px] md:h-[150px] md:mb-[32px]'>Получай ценные знания каждый день.</h2>
      <div className=' font-bodyalt font-[400] text-[14px] leading-[16.71px] h-[68px] tracking-[0.02em] md:text-[22px] md:leading-[32px] text-[#777872] md:w-[734px] md:h-[128px]'>В нашем приложение собраны 
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