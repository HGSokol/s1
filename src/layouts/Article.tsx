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
  <div className='grid grid-rows-[auto_274rem] grid-col-1 mb-[116.52rem] 
  lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[150rem]'>
    <div className='relative order-2 duration-300 mx-auto
    lg:order-1'>
      <div className='absolute w-[45rem] h-[40rem] translate-x-[200rem] -translate-y-[10rem] 
      lg:translate-x-[430rem] lg:w-[118rem] lg:h-[108rem] lg:-translate-y-[35rem]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46rem] h-[45rem] -translate-x-[20rem] translate-y-[215rem]
      lg:-translate-x-[70rem] lg:w-[103rem] lg:h-[99rem] lg:translate-y-[470rem]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26rem] h-[27rem] translate-x-[95rem] -translate-y-[5rem] 
      lg:translate-x-[210rem] lg:w-[59rem] lg:h-[61rem] lg:-translate-y-[20rem]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26rem] h-[27rem] translate-x-[120rem] translate-y-[250rem] rotate-[180deg]
      lg:translate-x-[270rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[560rem] '><img src={Group} alt='group'/></div>
      <div className='absolute w-[240rem] h-[8.57rem] translate-x-[5rem] translate-y-[270rem] 
      lg:translate-x-[0rem] lg:w-[555rem] lg:h-[107rem] lg:translate-y-[620rem]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='mx-auto w-[241.3rem] h-[273.93rem] 
      lg:w-[537rem] lg:h-[607rem] lg:mx-auto '
        src={IMG1} alt='eat1'/>
    </div>
    <div className='order-1 mb-[49rem] 
    lg:pt-[90rem]'>
      <div className='mb-[32rem]  flex flex-row gap-[8rem] 
      lg:w-[814rem] lg:mb-[32rem]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt w-[64rem] h-[30rem] py-[8rem] text-[12rem] rem-[12rem] leading-[14.32rem] rounded-[40rem] font-[400] duration-[600ms] whitespace-nowrap
                md:w-max md:h-max md:mr-[10rem] md:text-[25rem] md:leading-[19rem] md:rem-[20rem] md:py-[20rem]
                lg:w-max lg:h-[43rem] lg:mr-[10rem] lg:text-[16rem] lg:leading-[19rem] lg:rem-[24rem] lg:py-[0rem]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32rem] leading-[37.57rem] h-[114rem] mb-[24rem] text-[#1F2117] 
      lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]'>Получай ценные знания каждый день.</h2>
      <div className=' font-bodyalt font-[400] text-[14rem] leading-[16.71rem] h-[68rem] tracking-[0.02em] 
      lg:text-[22rem] lg:leading-[32rem] text-[#777872] lg:w-[734rem] lg:h-[128rem]'>В нашем приложение собраны 
        <div className='inline-block relative'>
          <div className='z-10 relative'>
            &nbsp;тысячи&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[60rem] h-[7rem] -translate-y-[5rem] -translate-x-[2rem] 
            lg:w-[167rem] lg:h-[17rem] lg:-translate-y-[11rem] lg:-translate-x-[3rem]' viewBox="0 0 153 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.226 5.87917C152.226 5.87917 152.345 5.96151 152.18 6.34634C152.096 6.39578 151.774 6.64456 150.969 7.08498C149.783 7.98078 103.914 4.26149 77.2313 6.90812L0.3698 13.497C-0.34056 13.5484 0.211171 12.8273 0.211171 12.8273C10.1775 9.17608 20.4009 5.29578 47.2288 3.31143C65.6471 1.22719 99.8388 -0.194657 106.805 0.254519C117.21 0.621249 139.301 3.30028 152.226 5.87917Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
        статей и лекций на темы спорта и здоровья. Изуйчай новую информацию, чтобы лучше разбираться в том, как работает наше тело.</div>
    </div>
  </div>
  )
}