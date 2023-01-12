import { useNavigate } from "react-router-dom";

import CardIcon from '../components/CardIcon'
import HeaderOrder from "../components/HeaderOrder";


const Ordering = () => {
  const navigate = useNavigate()


  return (
  <div className='mx-[16rem] lg:mx-[0rem] lg:w-full'>
    <HeaderOrder />
    <div className='h-[70vh] font-bodyalt font-[600] text-[22rem] text-[#1F2117] leading-[26rem] flex justify-center items-center lg:w-full'>
      Оформление заказа...
    </div>
  </div>
  )
}

export default Ordering