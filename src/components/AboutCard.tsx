import { dataAboutCard } from '../layouts/About'

interface TextItem {
  item: dataAboutCard
}

export const AboutCard = ({item}: TextItem) => {
  const { text, img } = item


  return (
    <div className='mx-auto w-[288px] h-[200px] rounded-[24px] relative overflow-hidden group/about md:w-[390px] md:h-[390px]  '>
      <div className={`w-[288px] h-[200px] duration-[400ms] bg-cover bg-no-repeat bg-center rounded-[24px] flex flex-row items-end space-x-4 absolute z-1 overflow-hidden group-hover/about:scale-[1.2] md:w-[390px] md:h-[390px] `}
      style={{ backgroundImage:`url(${img})` }}>
        <div className='w-full h-full z-5 bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms]'></div>
      </div>
      <div className='w-full h-full p-[16px] flex flex-row justify-between items-end space-x-4  z-10 md:p-[32px] '>
        <p className='font-[600] text-[24px] text-[#FAFAFA] z-10 md:text-[36px] '>{`${text}`}</p>
        <button className='rounded-full bg-[#FAFAFA] w-[42px] h-[42px] flex justify-center items-center rotate-[45deg] group-hover/about:bg-[#FFB700] md:w-[50px] md:h-[50px]'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px]'>
            <path d="M3.75 12L20.25 12" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
          </svg>
        </button>
      </div>
    </div>
  )
}