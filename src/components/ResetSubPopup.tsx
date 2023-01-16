import { Dispatch, SetStateAction } from 'react'
import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Profile } from "../App"


interface Props {
  setActiveResetPopup: Dispatch<SetStateAction<boolean>>
}


export const ResetSubPopup = (props: Props) => {
  const { user, setUser, setIsAuthenticated } = useContext(Profile)
  const navigate = useNavigate()
  const { setActiveResetPopup } = props



  return (
    <div className='flex flex-col w-[343rem] h-[251rem] px-[16rem] pt-[32rem] lg:w-[604rem] lg:h-[338rem] rounded-[20rem] lg:px-[70rem] lg:py-[50rem] shadow-drop bg-white'>
      <div className='text-[20rem] leading-[23rem] mb-[32rem] lg:mb-[24rem] font-body font-[600] lg:text-[26rem] lg:leading-[30rem] text-center text-[#1F2117]'>Вы уверены, что хотите отменить подписку?</div>
      <div className='text-[14rem] leading-[17rem] mb-[32rem] lg:mb-[32rem] font-bodyalt font-[400] lg:text-[22rem] lg:leading-[32rem] text-center text-[#777872]'>Подписка будет активна до конца месяца. По истечение этого срока данные привязанной карты будут удалены</div>
      <div className='w-full grid grid-cols-2 gap-[16rem] lg:gap-[24rem]'>
        <div onClick={() => setActiveResetPopup(false)} className='flex justify-center items-center h-[51rem] text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] lg:leading-[19rem] font-bodyalt font-[400] border-[1px] border-[#1F2117] rounded-full'>Нет</div>
        <div onClick={() => navigate(`${window.innerWidth < 1024 ? '/cabinet/changeSubs1' : '/cabinet/changeSubs'}`)} className='flex justify-center items-center text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] text-[#FAFAFA] lg:leading-[19rem] font-bodyalt font-[400] bg-[#FFB700] rounded-full'>Да</div>
      </div>
    </div>
  )
}