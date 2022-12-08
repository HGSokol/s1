import { IoIosCheckmark } from 'react-icons/io'

import { subsDataType } from '../layouts/Subscribe'


export const SubCard = ({subsData}: subsDataType) => {
  const {text, data, price, top='null'} = subsData

  return (
    <div className='
      h-[623px] w-[413px] p-[32px] relative overflow-hidden group/card hover:bg-[#FFB700] duration-[200ms]
      flex flex-col justify-between shadow-2xl rounded-[20px]'>
        {
          top === 'top' ? (
            <div className='
              absolute bg-[#FFB700] w-[200px] h-[30px] translate-x-[225px]
              font-[400] text-[16px] text-[#FAFAFA] text-center rotate-[38deg] 
              group-hover/card:bg-white group-hover/card:text-[#1F2117]'>
                Лучший выбор
            </div>
          ) : null
        }
      <div>
        <p className='font-[600] text-[40px] mb-[48px] group-hover/card:text-white duration-[200ms]'>{text}</p>
        <div className='relative'>
          {
            data.map(item => {
              return (
                <div className='flex flex-row '>
                  <div className='absolute translate-y-[4px] -translate-x-[10px] rounded-full p-[2px] border-[1px] border-black
                   group-hover/card:bg-white group-hover/card:border-[0px] '>
                    <IoIosCheckmark size='20px' className='fill-black group-hover/card:fill-[#FFB700] duration-[200ms]'/>
                  </div>
                  <p className='ml-[25px] font-[400] text-[#777872] text-[22px] leading-[32px] group-hover/card:text-white duration-[200ms]'>{item}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <p className='mb-[42px] font-[600] text-[#FFB700] text-[40px] leading-[46.96px] group-hover/card:text-white duration-[1000ms]'>{price}</p>
        <button className='w-full h-[56px] rounded-full bg-[#FFB700] text-[16px] text-white group-hover/card:bg-white group-hover/card:text-[#1F2117] duration-[1000ms] cursor-pointer'>Начать</button>
      </div>
    </div>
  )
}