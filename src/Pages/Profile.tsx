import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Profile } from '../App'

import UnknownUser from '../images/unknownUser.png'
import axios from "axios";


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
    <div className='w-full flex flex-row relative lg:hidden'>
      <div className='absolute translate-y-[20.5rem]'
      onClick={() => navigate('/')}>
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z" fill="#1F2117"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z" fill="#1F2117"/>
        </svg>
      </div>
      <div className='my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]'>Личный кабинет</div>
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
      <div onClick={logout} className='absolute bottom-[110rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#CB1D1D] lg:hidden'>
        Выход
      </div>
    </div>
    <div className='hidden lg:flex'>
      <Outlet/>
    </div>
  </div>
  )
}

export default MyProfile