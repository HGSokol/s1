import { useContext, useRef } from "react"
import { Profile } from '../App'
import CardIcon from "./CardIcon"


export const CardInfo = () => {
  const { cardInfo } = useContext(Profile)

  const lastCardNumber = useRef<string | null>(null)

  if(cardInfo) {
    const { numberCard } = cardInfo
    lastCardNumber.current = numberCard.substring(15, numberCard.length)

  }

  return (
    <>
    {
      cardInfo ? (
    <div className='w-full px-[20rem] py-[20rem] mb-[16rem] flex justify-between shadow-drop rounded-[14rem] lg:px-[20rem] lg:py-[25rem] lg:mb-[24rem] lg:flex lg:justify-between lg:shadow-drop lg:rounded-[14rem]'>
      <div className={`w-[28rem] h-[28rem] ${cardInfo &&  cardInfo.numberCard[0] === '2'? ' translate-y-[12rem] lg:translate-y-[20rem]':''}`}>
        {
        cardInfo ? (<CardIcon cardNumber={cardInfo.numberCard}/>) : null
        }
      </div>
      <div className='flex flex-row items-center'>
        <p className='font-bodyalt flex flex-row mr-[4rem] gap-[2rem] font-[400] text-[16rem] leading-[19rem] text-[#777872] lg:mr-[12rem] lg:font-bodyalt lg:font-[600] lg:text-[16rem] lg:text-[#777872] lg:leading-[19rem]'>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#777872"/>
          </svg>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#777872"/>
          </svg>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#777872"/>
          </svg>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#777872"/>
          </svg>
        </p>
        <p className='font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#777872] lg:font-bodyalt lg:font-[600] lg:text-[16rem] lg:text-[#777872] lg:leading-[19rem]'>{lastCardNumber.current}</p>
      </div>
    </div>) : '-'
    }
    </>
  )
}