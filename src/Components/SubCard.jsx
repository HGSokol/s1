import { FcCheckmark } from 'react-icons/fc'


export const SubCard = (props) => {
  const {text, data, price, top='null'} = props.subsData

  return (
    <div className='
      h-[623px] w-[413px] p-[32px] relative overflow-hidden group/card hover:bg-[#FFB700] duration-[1000ms]
      flex flex-col justify-between shadow-2xl rounded-[20px] '>
        {
          top === 'top' ? (
            <div className='
              absolute bg-[#FFB700] w-[170px] h-[30px] translate-x-[245px]
              font-[400] text-[16px] text-[#FAFAFA] text-center rotate-[45deg] 
              group-hover/card:bg-white group-hover/card:text-[#1F2117]'>
                Лучший выбор
            </div>
          ) : null
        }
      <div>
        <p className='font-[600] text-[40px] mb-[48px] group-hover/card:text-white duration-[1000ms]'>{text}</p>
        <div className='relative'>
          {
            data.map(e => {
              return (
                <div className='flex flex-row'>
                  <div className='absolute translate-y-[7px]'><FcCheckmark/></div>
                  <p className='ml-[25px] font-[400] text-[#777872] text-[22px] leading-[32px] group-hover/card:text-white duration-[1000ms]'>{e}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <p className='mb-[42px] font-[600] text-[#FFB700] text-[40px] leading-[46.96px] group-hover/card:text-white duration-[1000ms]'>{price}</p>
        <button className='w-full h-[56px] rounded-full bg-[#FFB700] text-[16px] text-white group-hover/card:bg-white group-hover/card:text-[#1F2117] duration-[1000ms]'>Начать</button>
      </div>
    </div>
  )
}