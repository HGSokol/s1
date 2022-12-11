import React from 'react'

interface TextItem {
  item: string
}

export const AboutCard = ({item}: TextItem) => {

  return (
    <div className='mx-auto w-[288px] h-[200px] md:w-[390px] md:h-[390px] overflow-hidden rounded-[24px] relative group/about'>
      <div className='w-[288px] h-[200px] md:w-[390px] md:h-[390px] group-hover/about:scale-[1.2] duration-[400ms] bg-[url("images/ss.png")] bg-cover bg-no-repeat bg-center rounded-[24px] flex flex-row items-end space-x-4 absolute z-1 overflow-hidden'>
        <div className='w-full h-full z-5 bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms]'></div>
      </div>
      <div className='w-full h-full flex flex-row justify-between items-end space-x-4 p-[16px] md:p-[32px] z-10'>
        <p className='font-[600] text-[24px] text-[#FAFAFA] md:text-[36px] z-10'>{`${item}`}</p>
        <button className='rounded-full bg-[#FAFAFA] w-[42px] h-[42px] md:w-[50px] md:h-[50px] flex justify-center items-center rotate-[45deg] group-hover/about:bg-[#FFB700]'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px]'>
            <path d="M3.75 12L20.25 12" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
          </svg>
        </button>
      </div>
    </div>
  )
}