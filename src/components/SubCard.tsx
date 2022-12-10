import { IoIosCheckmark } from 'react-icons/io'

import { subsDataType } from '../layouts/Subscribe'


export const SubCard = ({subsData}: subsDataType) => {
  const {text, price, top='null'} = subsData

  return (
    <div className='
      h-[126px] w-[288px] py-[24px] px-[32px]
      md:h-[207px] md:w-[533px] md:py-[36px] md:px-[32px] relative overflow-hidden border-white cursor-pointer border-[1px] hover:border-[#FFB700]
      flex flex-col justify-between shadow-2xl rounded-[20px]'>
        {
          top === 'top' ? (
            <div className='
              font-bodyalt absolute bg-[#FFB700] w-[150px] h-[18px] translate-x-[147px] -translate-y-[7px] md:translate-x-[340px] md:-translate-y-[7px]
              font-[400] text-[10px] md:text-[16px] text-[#FAFAFA] text-center rotate-[38deg] 
              group-hover/card:bg-white group-hover/card:text-[#1F2117]'>
                лучший выбор
            </div>
          ) : null
        }
      <div className='flex flex-col justify-center gap-[24px]'>
        <p className='font-[600] text-[24px] leading-[28.18px] md:text-[40px] md:leading-[46.96px] text-[#1F2117] text-center'>{price}</p>
        <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] md:text-[22px] md:leading-[32px] text-[#777872] text-center'>{text}</p>
      </div>
    </div>
  )
}