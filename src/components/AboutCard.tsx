import { dataAboutCard } from '../layouts/About'

interface TextItem {
  item: dataAboutCard
}

export const AboutCard = ({item}: TextItem) => {
  const { text, img, idName } = item

  return (
    <a href={`#${idName}`} className='mx-auto w-[343rem] h-[200rem] rounded-[20rem] relative overflow-hidden group/about 
    lg:w-[390rem] lg:h-[390rem] lg:rounded-[24rem] '>
      <div className={`w-[343rem] h-[200rem] duration-[400ms] bg-cover bg-no-repeat bg-center rounded-[20rem] flex flex-row items-end space-x-4 absolute z-1 overflow-hidden group-hover/about:scale-[1.2] 
      lg:w-[390rem] lg:h-[390rem] lg:rounded-[24rem] `}
      style={{ backgroundImage:`url(${img})` }}>
        <div className='w-full h-full z-5 bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms]'></div>
      </div>
      <div className='w-full h-full p-[16rem] flex flex-row justify-between items-end space-x-4 z-10 
      lg:p-[32rem]'>
        <p className='font-[600] text-[28rem] text-[#FAFAFA] z-10 w-[230rem]
        lg:text-[36rem] lg:w-[238rem]'>{`${text}`}</p>
        <button className='rounded-full bg-[#FAFAFA] w-[42rem] h-[42rem] flex justify-center items-center rotate-[45deg] group-hover/about:bg-[#FFB700] 
        lg:w-[50rem] lg:h-[50rem]'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[18rem] h-[18rem]
          lg:w-[25rem] lg:h-[25rem]'>
            <path d="M3.75 12L20.25 12" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
            <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className='group-hover/about:stroke-white'/>
          </svg>
        </button>
      </div>
    </a>
  )
}