import { useState } from 'react'

import IMG1 from '../images/eat1.png'
import Group from '../images/group.png'
import Shadow from '../images/Ellipse.png'


type DataType = string[]

const frameInteractive = [
  {img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
  {img1: require('../images/gr2.png'), img2: require('../images/g2.png')},
]

const data: DataType = ['Похудение', 'Набор массы']

export const Training = () => {
  const [active, setActive] = useState(0) 

  const activeButton =(item: number) => {
    setActive(item)
  }

  return (
  <div className='grid grid-rows-[auto_h-min] mb-[117px] grid-cols-1 
  md:grid-rows-[auto_auto] 
  lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[100px]
  2lg:grid-cols-[auto_auto] 2lg:grid-rows-1 2lg:mb-[169px]'>
    <div className='
    lg:pt-[80px]
    2lg:pt-[90px] '>
      <div className='flex flex-row gap-[8px]
      lg:mb-[17px]
      2lg:mb-[32px] 2lg:gap-[10px]'>
        {
          data.map((item,i) => {
            return (
              <button 
                key={i}
                className={`bg-white font-bodyalt px-[12px] py-[8px] w-max h-[30px] font-[400] text-[12px] leading-[14.32px] rounded-[40px] mb-[24px] duration-[600ms]
                md:w-max md:h-max md:mr-[10px] md:text-[25px] md:leading-[19px] md:px-[20px] md:py-[20px]
                lg:w-max lg:h-[23px] lg:mr-[0px] lg:text-[8.5px] lg:leading-[10px] lg:px-[8px] lg:py-[0px] lg:mb-[0px]
                2lg:text-[16px] 2lg:leading-[19px] 2lg:w-[132px] 2lg:h-[43px] 2lg:mr-[10px] 2lg:px-[0px] 2lg:py-[0px]
                ${active === i? ' bg-[#FFB700] text-[#FAFAFA]': ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-md'}`}
                onClick={() => activeButton(i)}>{item}</button>
            )
          })
        }
      </div>
      <h2 className='font-[600] text-[32px] leading-[37.57px] mb-[24px] text-[#1F2117]
      md:text-[70px] md:leading-[75.14px] md:h-max md:mb-[24px] 
      lg:text-[34px] lg:leading-[37px] lg:h-min lg:mb-[17px] 
      2lg:text-[64px] 2lg:leading-[75.14px] 2lg:w-[842px] 2lg:h-[150px] 2lg:mb-[32px]'>Тренируйся. Будь сильнее. Укрепи здоровье.</h2>
      <div className='font-bodyalt font-[400] text-[14px] leading-[16.71px] mb-[22px] text-[#777872] tracking-[0.02em]
      md:text-[29px] md:leading-[32px] md:h-max 
      lg:text-[11.66px] lg:leading-[18px] lg:h-min lg:w-[370px]
      2lg:text-[22px] 2lg:leading-[32px]  2lg:w-[734px] 2lg:h-[128px] '>Уровень твоей подготовки не имеет значения. Наши программы выстроены под любой уровень физической подготовки.&nbsp;
        <div className='inline-block relative'>
          <div className='z-10 relative'>
            Более чем 1500&nbsp;
          </div>
          <div className='-z-0 absolute'>
            <svg className='w-[110px] h-[7px] -translate-y-[5px] -translate-x-[2px] 
            md:w-[250px] md:h-[14px] md:-translate-y-[5px] md:-translate-x-[12px] 
            lg:w-[100px] lg:h-[17px] lg:-translate-y-[11px] lg:-translate-x-[3px]
            2lg:w-[170px] 2lg:h-[20px] 2lg:-translate-y-[13px] 2lg:-translate-x-[3px]' viewBox="0 0 112 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111.674 3.59188C111.674 3.59188 111.762 3.62723 111.645 3.78426C111.585 3.80373 111.351 3.90281 110.765 4.07554C109.904 4.432 76.1864 2.3762 56.6266 3.16656L0.271759 5.01591C-0.249185 5.02908 0.147705 4.73758 0.147705 4.73758C7.42328 3.34289 14.885 1.85651 34.5588 1.34126C48.0574 0.689425 73.1438 0.489928 78.2636 0.754385C85.9067 1.02377 102.156 2.38046 111.674 3.59188Z" fill="#FFB700"/>
            </svg>
          </div>
        </div>
      тренировок, с помощью которых вы быстрее достигнете своей цели.</div>
    </div>
      <div className='order-last relative mx-auto'>
        <div className='absolute w-[45px] h-[40px] translate-x-[190px] -translate-y-[0px] 
        md:translate-x-[408px] md:w-[118px] md:h-[108px] md:-translate-y-[10px] 
        lg:translate-x-[223px] lg:w-[62.54px] lg:h-[57.24px] lg:-translate-y-[7px]
        2lg:translate-x-[408px] 2lg:w-[118px] 2lg:h-[108px] 2lg:-translate-y-[10px]'><img src={frameInteractive[active].img1} alt='heart'/></div>
        <div className='absolute w-[46px] h-[45px] -translate-x-[25px] translate-y-[215px] 
        md:-translate-x-[60px] md:w-[103px] md:h-[99px] md:translate-y-[480px] 
        lg:-translate-x-[47px] lg:w-[54.59px] lg:h-[52.47px] lg:translate-y-[260px]
        2lg:-translate-x-[90px] 2lg:w-[103px] 2lg:h-[99px] 2lg:translate-y-[480px]'><img src={frameInteractive[active].img2} alt='frame'/></div>
        <div className='absolute w-[26px] h-[27px] translate-x-[87px] -translate-y-[0px] 
        md:translate-x-[190px] md:w-[59px] md:h-[61px] md:-translate-y-[0px] 
        lg:translate-x-[102px] lg:w-[31.27px] lg:h-[32px] lg:-translate-y-[0px]
        2lg:translate-x-[190px] 2lg:w-[59px] 2lg:h-[61px] 2lg:-translate-y-[0px]'><img src={Group} alt='group'/></div>
        <div className='absolute w-[26px] h-[27px] translate-x-[115px] translate-y-[260px] rotate-[180deg]
        md:translate-x-[245px] md:w-[59px] md:h-[61px] md:translate-y-[570px] 
        lg:translate-x-[135px] lg:w-[31.27px] lg:h-[32px] lg:translate-y-[315px]
        2lg:translate-x-[245px] 2lg:w-[59px] 2lg:h-[61px] 2lg:translate-y-[570px] '><img src={Group} alt='group'/></div>
        <div className='absolute w-[240px] h-[8.57px] translate-x-[5px] translate-y-[280px] 
        md:-translate-x-[25px] md:w-[555px] md:h-[107px] md:translate-y-[630px] 
        lg:-translate-x-[5px] lg:w-[294.15px] lg:h-[107px] lg:translate-y-[350px]
        2lg:-translate-x-[10px] 2lg:w-[555px] 2lg:h-[107px] 2lg:translate-y-[630px]'><img src={Shadow} alt='ellipse'/></div>
        <img className ='w-[236.37px] mx-auto 
        md:w-[523px] md:h-max md:mx-auto
        lg:w-[284.61px] lg:h-max lg:mx-auto
        2lg:w-[523px]' 
          src={IMG1} alt='eat1'/>
      </div>
  </div>
  )
}