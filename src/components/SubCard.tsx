import { subsDataType } from '../layouts/Subscribe'

interface SubCard {
  children: JSX.Element,
  top: string
}


export const SubCard = ({children, top = 'null'}: SubCard) => {
  return (
    <div className='relative overflow-hidden rounded-[20px] shadow-xl' >
      <div className='
      bg-white h-[126px] w-[288px] py-[24px] px-[32px]
        md:h-[207px] md:w-[533px] md:py-[36px] md:px-[32px] overflow-hidden border-[1px] border-transparent hover:border-[1px] cursor-pointer hover:border-[#FFB700]
        flex flex-col justify-between rounded-[20px]'>
          {
            top === 'top' ? (
              <div className='
                flex justify-center items-center
                font-bodyalt absolute bg-[#FFB700] w-[150px] h-[18px] translate-x-[147px] -translate-y-[7px] 
                font-[400] text-[10px] text-center md:text-[16px] md:h-[42px] md:w-[220px] md:translate-x-[335px] md:-translate-y-[12px]  text-[#FAFAFA] rotate-[38deg] 
                group-hover/card:bg-white group-hover/card:text-[#1F2117]'>
                  лучший выбор
              </div>
            ) : null
          }
          {children}
      </div>
    </div>
  )
}