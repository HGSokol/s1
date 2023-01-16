import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Profile } from '../App'

import UnknownUser from '../images/unknownUser.png'
import axios from "axios";
import HeaderOrder from "../components/HeaderOrder";
import { ExitPopup } from "../components/ExitPopup";


type dataLink = {
  name: string,
  link: string
}

let data:dataLink[]; 

window.innerWidth >= 1024? data = [
  {name:'Подписки', link: ''},
  {name:'Общая информация', link: '/cabinetInfo'},
  {name:'Детали платежей', link: '/payment'},
]: data = [
  {name:'Подписки', link: '/subs1'},
  {name:'Общая информация', link: '/cabinetInfo1'},
  {name:'Детали платежей', link: '/payment1'},
]

const MyProfile = () => {
  const navigate = useNavigate()
  const { user, setUser, setIsAuthenticated } = useContext(Profile)
  const location = useLocation()
  const [active, setActive] = useState(data[0].link)
  const [ activePopup, setActivePopup] = useState(false)

  useEffect(() => {
    const currentLink = data.map((e,i) => location.pathname.includes(e.link)? e.link: '').filter(e => e !== '').join('')
    setActive(currentLink)
  })

  const logout = () => {
    axios.post('https://stage.fitnesskaknauka.com/api/auth/logout')
    .then((res) => {
      setUser(null)
      setIsAuthenticated(false)
      localStorage.clear()
      
      navigate('/login')
    })
}

  return (
  <div className='h-full mx-[16rem] lg:mx-[0rem]'>
    {
    activePopup? (
      <div className='absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50'>
        <div className='absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  '>
          <ExitPopup setActivePopup={setActivePopup}/>
        </div>
      </div>
      ) : null
    }
    <div className='w-full flex flex-row relative lg:hidden'
    onClick={() => navigate('/')}>
      <HeaderOrder/>
    </div>
    <div className='mb-[36rem] pt-[20rem] lg:hidden'>
      <div className='flex flex-row gap-[12rem]'
      onClick={() => setActive('')}>
        <div>
          {!user?.avatar ? (<img src={UnknownUser} alt='avatar' className='rounded-full w-[60rem] h-[60rem]'/>): user?.avatar}
        </div>
        <div className='py-[5rem]'>
          <p className='font-bodyalt font-[500] text-[#1F2117] text-[18rem] lg:text-end' >{`${user?.name} ${user?.lastName}`}</p>
          <p className='font-bodyalt font-[400] text-[#1F2117]/60 text-[14rem] lg:text-end'>{user?.email}</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col lg:w-[487rem] lg:h-[47rem] lg:p-[2rem] lg:rounded-[10rem] lg:bg-[#F4F4F4] lg:mb-[32rem] lg:flex-row lg:cursor-pointer'>
      <div className='flex flex-col gap-[35rem] lg:h-full lg:gap-[0rem] lg:flex-row'>
        {
          data.map((e,i)=> {
            return (
              <Link to={`/cabinet${e.link}`} key={i} >
                <div className={` flex flex-row justify-between items-center font-bodyalt font-[400] text-[16rem] text-[#1F2117] lg:flex lg:h-full lg:justify-center lg:items-center lg:px-[24rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:rounded-[8rem]
                ${active === e.link ? ' lg:bg-[#FFFFFF] ': ' '}`}
                  onClick={() => {
                    setActive(e.link)
                  }}>
                      {e.name}
                  <div className='mr-[5rem] lg:hidden'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4">
                        <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
      <div onClick={() =>setActivePopup(true)} className='absolute bottom-[150rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#CB1D1D] lg:hidden'>
        Выход
      </div>
      <div onClick={logout} className='absolute bottom-[110rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#1F2117] lg:hidden'>
        Удалить аккаунт
      </div>
    </div>
    <div className='hidden lg:flex'>
      <Outlet/>
    </div>
  </div>
  )
}

export default MyProfile