import {Sub} from '../layouts/Subscribe'

interface SubCard {
  item: Sub
  active:string
}

export const SubCard = ({item, active}: SubCard) => {
  const {text, price, top = ''} = item
  return (
    <div className='relative overflow-hidden rounded-[20px] shadow-xl' >
      <div className={`bg-white h-[126px] w-[288px] py-[24px] px-[32px] overflow-hidden border-[1px] border-transparent cursor-pointer flex flex-col justify-between rounded-[20px] 
        md:h-[207px] md:w-[533px] md:py-[36px] md:px-[32px]
        lg:h-[110px] lg:w-[283px] lg:py-[19px] lg:px-[16px]
        2lg:h-[207px] 2lg:w-[533px] 2lg:py-[36px] 2lg:px-[32px] hover:border-[1px] ${active === 'active'? ' border-[#FFB700]': ''}`}>
          {
            top === 'top' ? (
              <div className='
                flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150px] h-[18px] translate-x-[147px] -translate-y-[7px] font-[400] text-[10px] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
                md:text-[16px] md:h-[42px] md:w-[220px] md:translate-x-[335px] md:-translate-y-[12px]
                lg:text-[8.5px] lg:h-[22px] lg:w-[220px] lg:translate-x-[125px] lg:-translate-y-[5px] 
                2lg:text-[16px] 2lg:h-[42px] 2lg:w-[220px] 2lg:translate-x-[335px] 2lg:-translate-y-[12px] '>
                лучший выбор
              </div>
            ) : null
          }
          <div className='flex flex-col justify-center gap-[24px]
          lg:gap-[12px] 
          2lg:gap-[24px]'>
            <p className='font-[600] text-[24px] leading-[28.18px] text-[#1F2117] text-center 
            md:text-[40px] md:leading-[46.96px]
            lg:text-[21.2px] lg:leading-[26px]
            2lg:text-[40px] 2lg:leading-[46.96px]'>
           {price} 
            </p>
            <p className='font-bodyalt font-[400] text-[14px] leading-[16.71px] text-[#777872] text-center 
            md:text-[22px] md:leading-[32px]
            lg:text-[11.66px] lg:leading-[16px]
            2lg:text-[22px] 2lg:leading-[32px]'>
            {text}
            </p>
        </div>
      </div>
    </div>
  )
}