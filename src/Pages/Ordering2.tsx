import React, { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HeaderOrder from "../components/HeaderOrder";
import { CardInfo } from "../components/CardInfo";
import { Checkout } from '../util/Checkout'
import { Profile } from "../App";


const Ordering = () => {
  document.title = 'Оформление заказа'
  const { orderCard, setYandexToken } = useContext(Profile)
  const navigate = useNavigate()

  const CreateYandexToken = () => {
    if(orderCard){
      Checkout(/* cardInfo */).then((res) => {
        console.log(res)
        if(res.status === 'success') {
          console.log(res.data, 'ответ яндекса')
          setYandexToken(res.data.response.paymentToken)
          navigate('/cabinet/ordering3')
        }
        if(res.status === 'error') {
          res.error.params.forEach((e:any) => {
            console.log(e.message, '----ошибки яндекса')
          })
        }
      })  
    }
  }

 
  return (
    <div className='mx-[16rem] lg:mx-[0rem] lg:w-full'>
    <HeaderOrder/>
    <div className='hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]'>Подписки</div>
    <p className='mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]'>Оформление заказа</p>
    <div className='lg:grid lg:grid-cols-[1fr_1fr] lg:w-full'>
      <div className='mb-[24rem] lg:order-2'>
        <p className='mb-[16rem] font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leaing-[23rem] lg:text-[#1F2117] lg:mb-[28rem]'>Информация о заказе</p>
        <div className='w-full flex flex-row justify-between mb-[12rem] lg:w-[357rem] lg:mb-[16rem]'>
          <div className='font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Вид подписки:</div>
          <div className='font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>{orderCard?.name}</div>
        </div>
        <div className='w-full flex flex-row justify-between lg:w-[357rem] lg:mb-[16rem]'>
          <div className='font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]'>Сумма:</div>
          <div className='font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]'>{`${orderCard?.price} руб.`}</div>
        </div>
      </div>
      <div className=' lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]'>
        <div className=' mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]'>Способ оплаты</div>
        <div className='w-full lg:w-[441rem] '>
          <CardInfo />
          <p onClick={() => navigate('/cabinet/ordering')} className=' mb-[32rem] text-end font-bodyalt font-[500] text-[16rem] text-[#FFB700] leading-[14rem] cursor-pointer lg:text-[16rem] lg:leading-[19rem] lg:mb-[32rem]'>Ввести данные другой карты</p>
          <div >
            <button onClick={CreateYandexToken} className={`bg-[#FFB700] mb-[30rem] lg:mb-[24rem] w-full h-[51rem] flex items-center justify-center rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ordering