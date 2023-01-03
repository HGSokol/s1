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
  <div id='food' className='relative grid grid-rows-[auto_274rem] grid-col-1 mb-[122rem] 
  lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[150rem]'>
    <div className='relative order-2  mx-auto 
    lg:order-1 lg:mx-[0]'>
      <div className='z-10 absolute w-[45rem] h-[40rem] translate-x-[195rem] translate-y-[0rem] 
      lg:translate-x-[515rem] lg:w-[118rem] lg:h-[108rem] lg:-translate-y-[30rem]'><img src={frameInteractive[active].img1} alt='heart'/></div>
      <div className='absolute w-[46rem] h-[45rem] -translate-x-[15rem] translate-y-[205rem] 
      lg:translate-x-[15rem] lg:w-[103rem] lg:h-[99rem] lg:translate-y-[470rem]'><img src={frameInteractive[active].img2} alt='frame'/></div>
      <div className='absolute w-[26rem] h-[27rem] translate-x-[95rem] translate-y-[5rem] 
      lg:translate-x-[295rem] lg:w-[59rem] lg:h-[61rem] lg:-translate-y-[10rem]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[26rem] h-[27rem] translate-x-[125rem] translate-y-[245rem] 
      lg:translate-x-[355rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[560rem] rotate-[180deg]'><img src={Group} alt='group'/></div>
      <div className='absolute w-[240rem] h-[8.57rem] translate-x-[5rem] translate-y-[270rem] 
      lg:translate-x-[80rem] lg:w-[555rem] lg:h-[107rem] lg:translate-y-[620rem]'><img src={Shadow} alt='ellipse'/></div>
      <img className ='z-0 w-[252rem] mx-auto 
      lg:h-[656rem] lg:w-[594rem] lg:mx-auto  lg:-translate-x-[60rem] lg:-translate-y-[20rem] '
        src={IMG2} alt='eat1'/>
    </div>
    <div className='order-1 
    lg:pt-[90rem] lg:order-2'>
      <div className='mb-[24rem] flex flex-wrap gap-[8rem] 
      lg:mb-[32rem] lg:w-[814rem] lg:gap-[18rem]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt py-[8rem] rem-[12rem] w-max text-[12rem] leading-[14.32rem] rounded-[40rem] font-[400] duration-[600ms] whitespace-nowrap
                lg:h-[43rem] lg:text-[16rem] lg:leading-[19rem] lg:rem-[24rem] lg:py-[12rem] lg:w-max lg:px-[24rem]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32rem] leading-[37.57rem] mb-[24rem] text-[#1F2117]
      lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]'>Питайся вкусно, полезно и разнообразно </h2>
      <div className='font-bodyalt font-[400] text-[14rem] leading-[16.71rem] mb-[17rem] text-[#777872] tracking-[0.02em]
      lg:text-[22rem] lg:leading-[32rem] lg:w-[734rem] lg:h-[128rem] '>Ежедневный индивидуальный план питания с учетом вашего здоровья, образа жизни и целей.&nbsp;
        <div className='inline-block relative'>
          <div className='z-10 relative'>
          Более 1000&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[88rem] h-[10rem] -translate-y-[5rem] -translate-x-[8rem] 
            lg:w-[140rem] lg:h-[20rem] lg:-translate-y-[13rem] lg:-translate-x-[14rem]' viewBox="0 0 140 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M139.442 5.92856C139.442 5.92856 139.55 6.01054 139.398 6.39583C139.321 6.44551 139.026 6.69522 138.287 7.13798C137.198 8.0372 95.1992 4.45432 70.7533 7.1798L0.338651 13.9959C-0.312099 14.0494 0.195353 13.3267 0.195353 13.3267C9.334 9.64635 18.7088 5.73614 43.2855 3.67244C60.1605 1.53381 91.4798 0.0107194 97.859 0.43919C107.387 0.775029 127.612 3.38827 139.442 5.92856Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
       вкусных и легких рецептов.</div>
    </div>
  </div>
  )
}