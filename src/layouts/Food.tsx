import {useState} from 'react'

import IMG2 from '../images/img1.png'
import Group from '../images/group.png'
import Shadow from '../images/Ellipse.png'


const frameInteractive = [
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
]

type buttonName = string[]

const data: buttonName = [
    'Веганская диета', 
    'Кето-диета', 
    'Низкоуглеводная диета', 
    'Веганская диетаы', 
    'Кето-диета', 
    'Низкоуглеводная диета', 
    'Веганская диетаф',  
  ]

export const Food = () => {
  const [active, setActive] = useState(0) 

  const activeButton =(item: number) => {
    setActive(item)
  }

  return (
  <div className='relative grid grid-rows-[auto_274px] grid-col-1 mb-[122px] 
  md:grid-rows-[auto_auto] 
  lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[100px]
  2lg:grid-cols-[1fr_1fr] 2lg:grid-rows-1 2lg:mb-[150px]'>
    <div className='relative order-2  mx-auto 
    lg:order-1
    2lg:order-1 2lg:mx-[0]'>
      <div className='z-10 absolute w-[45px] h-[40px] translate-x-[195px] translate-y-[0px] 
      md:translate-x-[435px] md:w-[118px] md:h-[108px] md:-translate-y-[10px] 
      lg:translate-x-[230px] lg:w-[62.54px] lg:h-[57.24px] lg:-translate-y-[5px]
      2lg:translate-x-[515px] 2lg:w-[118px] 2lg:h-[108px] 2lg:-translate-y-[30px]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46px] h-[45px] -translate-x-[15px] translate-y-[205px] 
      md:-translate-x-[15px] md:w-[103px] md:h-[99px] md:translate-y-[470px] 
      lg:-translate-x-[26px] lg:w-[54.59px] lg:h-[52.47px] lg:translate-y-[242px]
      2lg:translate-x-[15px] 2lg:w-[103px] 2lg:h-[99px] 2lg:translate-y-[470px]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[95px] translate-y-[5px] 
      md:translate-x-[227px] md:w-[59px] md:h-[61px] md:-translate-y-[0px] 
      lg:translate-x-[117px] lg:w-[31.27px] lg:h-[32px] lg:translate-y-[3px]
      2lg:translate-x-[295px] 2lg:w-[59px] 2lg:h-[61px] 2lg:-translate-y-[10px]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26px] h-[27px] translate-x-[125px] translate-y-[245px] 
      md:translate-x-[285px] md:w-[59px] md:h-[61px] md:translate-y-[560px] 
      lg:translate-x-[150px] lg:w-[31.27px] lg:h-[32px] lg:translate-y-[295px] 
      2lg:translate-x-[355px] 2lg:w-[59px] 2lg:h-[61px] 2lg:translate-y-[560px] rotate-[180deg]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[240px] h-[8.57px] translate-x-[5px] translate-y-[270px] 
      md:translate-x-[0px] md:w-[555px] md:h-[107px] md:translate-y-[620px] 
      lg:-translate-x-[0px] lg:w-[294.15px] lg:h-[107px] lg:translate-y-[330px]
      2lg:translate-x-[80px] 2lg:w-[555px] 2lg:h-[107px] 2lg:translate-y-[620px]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='z-0 w-[252px] mx-auto 
      md:w-[573px] md:h-max md:mx-auto 
      lg:w-[303px] lg:h-max lg:mx-auto
      2lg:w-min 2lg:-translate-x-[60px] 2lg:-translate-y-[20px] '
        src={IMG2} alt='eat1'/>
    </div>
    <div className='order-1 
    lg:pt-[50px]
    2lg:pt-[90px] 2lg:order-2'>
      <div className='mb-[24px] flex flex-wrap gap-[8px] 
      lg:mb-[17px]
      2lg:mb-[32px] 2lg:w-[814px] 2lg:gap-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt py-[8px] px-[12px] w-max text-[12px] leading-[14.32px] rounded-[40px] font-[400] duration-[600ms]
                md:w-max md:h-max md:mr-[10px] md:text-[25px] md:leading-[19px] md:px-[20px] md:py-[20px]
                lg:w-max lg:h-[23px] lg:mr-[0px] lg:text-[8.5px] lg:leading-[10px] lg:px-[8px] lg:py-[0px]
                2lg:w-max 2lg:h-[43px] 2lg:text-[16px] 2lg:leading-[19px] 2lg:px-[20px] 2lg:py-[0px]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] mb-[24px] text-[#1F2117]
      md:text-[70px] md:leading-[75.14px] md:h-max md:mb-[24px] 
      lg:text-[34px] lg:leading-[37px] lg:h-min lg:mb-[17px] 
      2lg:text-[64px] 2lg:leading-[75.14px] 2lg:w-[842px] 2lg:h-[150px] 2lg:mb-[32px]'>Питайся вкусно, полезно и разнообразно </h2>
      <div className='font-bodyalt font-[400] text-[14px] leading-[16.71px] mb-[17px] text-[#777872] tracking-[0.02em]
      md:text-[29px] md:leading-[32px] md:h-max 
      lg:text-[11.66px] lg:leading-[18px] lg:h-min lg:w-[370px] 
      2lg:text-[22px] 2lg:leading-[32px] 2lg:w-[734px] 2lg:h-[128px] '>Ежедневный индивидуальный план питания с учетом вашего здоровья, образа жизни и целей.&nbsp;
        <div className='inline-block relative'>
          <div className='z-10 relative'>
          Более 1000&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[88px] h-[10px] -translate-y-[5px] -translate-x-[8px] 
            md:w-[300px] md:h-[16px] md:-translate-y-[5px] md:-translate-x-[70px] 
            lg:w-[76px] lg:h-[12px] lg:-translate-y-[6px] lg:-translate-x-[6px]                                                                          
            2lg:w-[140px] 2lg:h-[20px] 2lg:-translate-y-[13px] 2lg:-translate-x-[14px]' viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M139.442 5.92856C139.442 5.92856 139.55 6.01054 139.398 6.39583C139.321 6.44551 139.026 6.69522 138.287 7.13798C137.198 8.0372 95.1992 4.45432 70.7533 7.1798L0.338651 13.9959C-0.312099 14.0494 0.195353 13.3267 0.195353 13.3267C9.334 9.64635 18.7088 5.73614 43.2855 3.67244C60.1605 1.53381 91.4798 0.0107194 97.859 0.43919C107.387 0.775029 127.612 3.38827 139.442 5.92856Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
       вкусных и легких рецептов.</div>
    </div>
  </div>
  )
}