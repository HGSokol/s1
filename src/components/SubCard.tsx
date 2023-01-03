import {Sub} from '../layouts/Subscribe'

interface SubCard {
  item: Sub
  active:string
}

export const SubCard = ({item, active}: SubCard) => {
  const {text, price, top = ''} = item
  return (
    <div className='relative overflow-hidden rounded-[20rem] shadow-xl' >
      <div className={`bg-white h-[126rem] w-[288rem] py-[24rem] px-[32rem] overflow-hidden border-[1rem] border-transparent cursor-pointer flex flex-col justify-between rounded-[20rem] 
        lg:h-[207rem] lg:w-[533rem] lg:py-[36rem] lg:px-[32rem] hover:border-[1rem] ${active === 'active'? ' border-[#FFB700]': 'hover:border-[#CBCBCB]'}`}>
          {
            top === 'top' ? (
              <div className='
                flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150rem] h-[18rem] translate-x-[147rem] -translate-y-[7rem] font-[400] text-[10rem] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
                lg:text-[16rem] lg:h-[42rem] lg:w-[220rem] lg:translate-x-[335rem] lg:-translate-y-[12rem] '>
                лучший выбор
              </div>
            ) : null
          }
          <div className='flex flex-col justify-center gap-[24rem]
          lg:gap-[24rem]'>
            <p className='font-[600] text-[24rem] leading-[28.18rem] text-[#1F2117] text-center 
            lg:text-[40rem] lg:leading-[46.96rem]'>
           {price} 
            </p>
            <p className='font-bodyalt font-[400] text-[14rem] leading-[16.71rem] text-[#777872] text-center 
            lg:text-[22rem] lg:leading-[32rem]'>
            {text}
            </p>
        </div>
      </div>
    </div>
  )
}