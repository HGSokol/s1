import {useState} from 'react'

import IMG3 from '../images/eat3.png'
import Group from '../images/group.png'
import Shadow from '../images/Ellipse.png'


type Data = string[]

const frameInteractive = [
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
]

const data: Data = ['Питание', 'Тренировки']

export const Progress = () => {
  const [active, setActive] = useState(0) 

  const activeButton =(item: number) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[h-max_h-min] grid-cols-1 mb-[120px] 
  md:grid-rows-[auto_auto] 
  lg:grid-cols-[1fr_1fr] lg:mb-[150px]
  2lg:grid-cols-[1fr_1fr] 2lg:mb-[150px]'>
    <div className='2lg:pt-[90px]'>
      <div className='mb-[24px] flex flex-row gap-[8px] 
      lg:mb-[32px] lg:mr-[10px]
      2lg:mb-[32px] 2lg:mr-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt w-max h-[30px] py-[8px] text-[12px] px-[12px] leading-[14.32px] rounded-[40px] font-[400] duration-[600ms]
                md:w-max md:h-max md:mr-[10px] md:text-[25px] md:leading-[19px] md:px-[20px] md:py-[20px] 
                lg:w-[132px] lg:h-[43px] lg:text-[16px] lg:leading-[19px] lg:px-[0px] lg:py-[0px]
                2lg:w-[132px] 2lg:h-[43px] 2lg:text-[16px] 2lg:leading-[19px] 2lg:px-[0px] 2lg:py-[0px]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] h-[114px] mb-[24px] text-[#1F2117]
      md:text-[70px] md:leading-[75.14px] md:h-max md:mb-[24px] 
      lg:text-[64px] lg:leading-[75.14px]  lg:w-[842px] lg:h-[150px] lg:mb-[32px]
      2lg:text-[64px] 2lg:leading-[75.14px]  2lg:w-[842px] 2lg:h-[150px] 2lg:mb-[32px]'>Отслеживай прогресс. Становись лучше. </h2>
      <div className='font-bodyalt font-[400] text-[14px] leading-[16.71px] text-[#777872] tracking-[0.02em]
      md:text-[29px] md:leading-[32px] md:h-max 
      lg:text-[22px] lg:leading-[32px]  lg:w-[734px] lg:h-[128px]
      2lg:text-[22px] 2lg:leading-[32px]  2lg:w-[734px] 2lg:h-[128px] '>Отмечай каждую тренировку и просматривай статистику. Отслеживание прогресса&nbsp;
        <div className='inline-block relative'>
          <div className='z-10 relative'>
          стало проще&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[92px] h-[10px] -translate-y-[5px] -translate-x-[5px]  
            md:w-[250px] md:h-[19px] md:-translate-y-[5px] md:-translate-x-[40px] 
            lg:w-[140px] lg:h-[20px] lg:-translate-y-[13px] lg:-translate-x-[6px] 
            2lg:w-[140px] 2lg:h-[20px] 2lg:-translate-y-[13px] 2lg:-translate-x-[6px]' viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M139.442 5.92856C139.442 5.92856 139.55 6.01054 139.398 6.39583C139.321 6.44551 139.026 6.69522 138.287 7.13798C137.198 8.0372 95.1992 4.45432 70.7533 7.1798L0.338651 13.9959C-0.312099 14.0494 0.195353 13.3267 0.195353 13.3267C9.334 9.64635 18.7088 5.73614 43.2855 3.67244C60.1605 1.53381 91.4798 0.0107194 97.859 0.43919C107.387 0.775029 127.612 3.38827 139.442 5.92856Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
    благодаря собранной в одном месте статистике по питанию и тренировкам.</div>
    </div>
    <div className='relative order-last mx-auto 
    lg:mx-[0]
    2lg:mx-[0]'>
      <div className='absolute w-[45px] h-[40px] translate-x-[197px] translate-y-[25px] 
      md:translate-x-[400px] md:w-[118px] md:h-[108px] md:translate-y-[40px] 
      lg:translate-x-[570px] lg:w-[118px] lg:h-[108px] lg:translate-y-[45px]
      2lg:translate-x-[570px] 2lg:w-[118px] 2lg:h-[108px] 2lg:translate-y-[45px]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46px] h-[45px] -translate-x-[18px] translate-y-[240px] 
      md:-translate-x-[40px] md:w-[103px] md:h-[99px] md:translate-y-[500px] 
      lg:translate-x-[70px] lg:w-[103px] lg:h-[99px] lg:translate-y-[540px]
      2lg:translate-x-[70px] 2lg:w-[103px] 2lg:h-[99px] 2lg:translate-y-[540px]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[95px] translate-y-[30px] 
      md:translate-x-[195px] md:w-[59px] md:h-[61px] md:translate-y-[60px] 
      lg:translate-x-[340px] lg:w-[59px] lg:h-[61px] lg:translate-y-[65px]
      2lg:translate-x-[340px] 2lg:w-[59px] 2lg:h-[61px] 2lg:translate-y-[65px]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[120px] translate-y-[285px] rotate-[180deg]
      md:translate-x-[255px] md:w-[59px] md:h-[61px] md:translate-y-[590px] 
      lg:translate-x-[410px] lg:w-[59px] lg:h-[61px] lg:translate-y-[630px]
      2lg:translate-x-[410px] 2lg:w-[59px] 2lg:h-[61px] 2lg:translate-y-[630px] '><img src={Group} alt='group'/></div>
      <div className='absolute w-[240px] h-[8.57px] translate-x-[5px] translate-y-[305px] 
      md:-translate-x-[10px] md:w-[555px] md:h-[107px] md:translate-y-[650px] 
      lg:translate-x-[130px] lg:w-[555px] lg:h-[107px] lg:translate-y-[700px]
      2lg:translate-x-[130px] 2lg:w-[555px] 2lg:h-[107px] 2lg:translate-y-[700px]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='mx-auto w-[252px] 
      md:w-[523px] md:h-max md:mx-auto 
      lg:w-[562px]
      2lg:w-[562px]'
        src={IMG3} alt='eat1'/>
    </div>
  </div>
  )
}