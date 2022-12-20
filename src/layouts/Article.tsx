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
  <div className='grid grid-rows-[auto_274px] grid-col-1 mb-[116.52px] 
  md:grid-rows-[auto_auto] md:mb-[216.52px] 
  lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[100px]
  2lg:grid-cols-[1fr_1fr] 2lg:grid-rows-1 2lg:mb-[150px]'>
    <div className='relative order-2 duration-300 mx-auto
    lg:order-1'>
      <div className='absolute w-[45px] h-[40px] translate-x-[200px] -translate-y-[10px] 
      md:translate-x-[430px] md:w-[118px] md:h-[108px] md:-translate-y-[35px]
      lg:translate-x-[228px] lg:w-[62.54px] lg:h-[57.24px] lg:-translate-y-[18px]
      2lg:translate-x-[430px] 2lg:w-[118px] 2lg:h-[108px] 2lg:-translate-y-[35px]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46px] h-[45px] -translate-x-[20px] translate-y-[215px]
      md:-translate-x-[50px] md:w-[103px] md:h-[99px] md:translate-y-[470px] 
      lg:-translate-x-[38px] lg:w-[54.59px] lg:h-[52.47px] lg:translate-y-[248px]
      2lg:-translate-x-[70px] 2lg:w-[103px] 2lg:h-[99px] 2lg:translate-y-[470px]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[95px] -translate-y-[5px] 
      md:translate-x-[210px] md:w-[59px] md:h-[61px] md:-translate-y-[20px]
      lg:translate-x-[110px] lg:w-[31.27px] lg:h-[32px] lg:-translate-y-[10px]
      2lg:translate-x-[210px] 2lg:w-[59px] 2lg:h-[61px] 2lg:-translate-y-[20px]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[120px] translate-y-[250px] rotate-[180deg]
      md:translate-x-[270px] md:w-[59px] md:h-[61px] md:translate-y-[560px]
      lg:translate-x-[140px] lg:w-[31.27px] lg:h-[32px] lg:translate-y-[295px]
      2lg:translate-x-[270px] 2lg:w-[59px] 2lg:h-[61px] 2lg:translate-y-[560px] '><img src={Group} alt='group'/></div>
      <div className='absolute w-[240px] h-[8.57px] translate-x-[5px] translate-y-[270px] 
      md:translate-x-[0px] md:w-[555px] md:h-[107px] md:translate-y-[620px]
      lg:-translate-x-[5px] lg:w-[294.15px] lg:h-[107px] lg:translate-y-[330px]
      2lg:translate-x-[0px] 2lg:w-[555px] 2lg:h-[107px] 2lg:translate-y-[620px]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='mx-auto w-[241.3px] h-[273.93px] 
      md:w-[537px] md:h-max md:mx-auto
      lg:w-[284.61px] lg:h-max lg:mx-auto
      2lg:w-[537px] 2lg:h-[607px] 2lg:mx-auto '
        src={IMG1} alt='eat1'/>
    </div>
    <div className='order-1 mb-[49px] 
    md:mb-[90px]
    lg:pt-[60px]
    2lg:pt-[90px]'>
      <div className='mb-[32px]  flex flex-row gap-[8px] 
      lg:mb-[17px]
      2lg:w-[814px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt w-[64px] h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px] rounded-[40px] font-[400] duration-[600ms] whitespace-nowrap
                md:w-max md:h-max md:mr-[10px] md:text-[25px] md:leading-[19px] md:px-[20px] md:py-[20px]
                lg:w-max lg:h-[23px] lg:mr-[0px] lg:text-[8.5px] lg:leading-[10px] lg:px-[12px] lg:py-[0px]
                2lg:w-max 2lg:h-[43px] 2lg:mr-[10px] 2lg:text-[16px] 2lg:leading-[19px] 2lg:px-[24px] 2lg:py-[0px]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] text-[#1F2117] 
      md:text-[70px] md:leading-[75.14px] md:h-max md:mb-[24px] 
      lg:text-[34px] lg:leading-[37px] lg:h-min lg:mb-[17px] 
      2lg:text-[64px] 2lg:leading-[75.14px] 2lg:w-[842px] 2lg:h-[150px] 2lg:mb-[32px]'>Получай ценные знания каждый день.</h2>
      <div className=' font-bodyalt font-[400] text-[14px] leading-[16.71px] h-[68px] tracking-[0.02em] 
      md:text-[29px] md:leading-[32px] md:h-max 
      lg:text-[11.66px] lg:leading-[18px] lg:h-min lg:w-[370px]
      2lg:text-[22px] 2lg:leading-[32px] text-[#777872] 2lg:w-[734px] 2lg:h-[128px]'>В нашем приложение собраны 
        <div className='inline-block relative'>
          <div className='z-10 relative'>
            &nbsp;тысячи&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[60px] h-[7px] -translate-y-[5px] -translate-x-[2px] 
            md:w-[140px] md:h-[12px] md:-translate-y-[5px] md:-translate-x-[12px] 
            lg:w-[91px] lg:h-[12px] lg:-translate-y-[6px] lg:-translate-x-[3px]
            2lg:w-[167px] 2lg:h-[17px] 2lg:-translate-y-[11px] 2lg:-translate-x-[3px]' viewBox="0 0 153 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.226 5.87917C152.226 5.87917 152.345 5.96151 152.18 6.34634C152.096 6.39578 151.774 6.64456 150.969 7.08498C149.783 7.98078 103.914 4.26149 77.2313 6.90812L0.3698 13.497C-0.34056 13.5484 0.211171 12.8273 0.211171 12.8273C10.1775 9.17608 20.4009 5.29578 47.2288 3.31143C65.6471 1.22719 99.8388 -0.194657 106.805 0.254519C117.21 0.621249 139.301 3.30028 152.226 5.87917Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
        статей и лекций на темы спорта и здоровья. Изуйчай новую информацию, чтобы лучше разбираться в том, как работает наше тело.</div>
    </div>
  </div>
  )
}