import React from 'react'

interface TextItem {
  item: string
}

export const AboutCard = ({item}: TextItem) => {

  return (
    <div className='w-[534px] h-[420px] overflow-hidden rounded-[24px] relative group/about'>
      <div className='w-[534px] h-[420px] group-hover/about:scale-[1.2] duration-[400ms] bg-[url("images/ss.png")] bg-cover bg-no-repeat bg-center rounded-[24px] flex flex-row items-end space-x-4 absolute z-1 overflow-hidden'>
        <div className='w-full h-full z-5 group-hover/about:bg-yellow-500/30 duration-[400ms]'></div>
      </div>
      <div className='w-full h-full flex flex-row items-end space-x-4 p-[32px] z-10'>
        <p className='font-[600] text-[40px] text-[#FAFAFA] w-[338px] mr-[76px] z-10'>{item}</p>
        <button className='rounded-full bg-white w-[56px] h-[56px] flex justify-center items-center rotate-[45deg] group-hover/about:bg-[#FFB700]'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 12L20.25 12" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" className='group-hover/about:stroke-white'/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" className='group-hover/about:stroke-white'/>
          </svg>
        </button>
      </div>
    </div>
  )
}