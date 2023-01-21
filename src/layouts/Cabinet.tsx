import React,{ useState, useContext, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios'

import { Profile } from '../App'
import { HeaderForm } from '../components/HeaderForm'

import {ReactComponent as UsefulIcon} from '../images/useful.svg';
import {ReactComponent as ActivityIcon} from '../images/activity.svg';
import {ReactComponent as StatisticIcon} from '../images/statistic.svg';
import {ReactComponent as NutritionIcon} from '../images/nutrition.svg';
import {ReactComponent as ProfileIcon} from '../images/profile.svg';
import {ReactComponent as Logout} from '../images/logout.svg';
import UnknownUser from '../images/unknownUser.png'
import { ExitPopup } from '../components/ExitPopup';


type NavType = {
  name: string,
  img: any
  link:string
}

const Cabinet = () => {
  document.title = 'Подписки'
  const { user, setUser, setIsAuthenticated, activeSub } = useContext(Profile)
  const ref = useRef<HTMLDivElement | null>(null)
  const refNav = useRef<NavType[]>([
    {name: 'Полезное', img: <UsefulIcon />, link: '/usefull'},
    {name: 'Активность', img: <ActivityIcon />, link: '/activity'},
    {name: 'Статистика', img: <StatisticIcon />, link: '/statistic'},
    {name: 'Питание', img: <NutritionIcon />, link: '/nutrition'},
    {name: 'Профиль', img: <ProfileIcon />, link: `${activeSub? '' : '/changeSubs'}`},
  ])
  const [ active, setActive ] = useState(`${activeSub? '' : '/changeSubs'}`)
  const [ activePopup, setActivePopup] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    refNav.current = [
      {name: 'Полезное', img: <UsefulIcon />, link: '/usefull'},
      {name: 'Активность', img: <ActivityIcon />, link: '/activity'},
      {name: 'Статистика', img: <StatisticIcon />, link: '/statistic'},
      {name: 'Питание', img: <NutritionIcon />, link: '/nutrition'},
      {name: 'Профиль', img: <ProfileIcon />, link: `${activeSub? '' : '/changeSubs'}`},
    ]

    setActive(refNav.current[4].link)
  
},[activeSub])



  // const logout = () => {
  //     axios.post('https://stage.fitnesskaknauka.com/api/auth/logout')
  //     .then((res) => {
  //       setUser(null)
  //       setIsAuthenticated(false)
  //       localStorage.clear()
        
  //       navigate('/login')
  //     })
  // }

  // useEffect(() => {
  //   const currentLink = refNav?.current?.map((e,i) => location.pathname.includes(e.link)? e.link: '').filter(e => e !== '').join('')
  //   if(currentLink){
  //     setActive(currentLink)
  //   }

  //   if(ref.current){
  //     // const heightVisibleBlock = window.innerHeight - ref.current?.clientHeight
  //     // setVisibleBlock(ref.current?.offsetHeight)
  //   }
  // },[activeSub])
  

  return (
    <div className='relative'>
      <div className={`z-0 grid grid-rows-[calc(100vh-80rem)_80rem] lg:grid lg:grid-rows-1 lg:grid-cols-[360rem_auto] lg:w-[1920rem]`}>
        <div ref={ref} className='z-[100] bg-[#FFFFFF] border-t-[1px] shadow-[0px_2px_8px_rgba(0_0_0_0.04)] flex flex-col my-auto w-full  order-2 b-[0rem] lg:relative lg:order-1 lg:border-r-[1px] lg:border-[#EEF1F6] lg:h-[100vh] lg:grid lg:grid-rows-[121rem_auto]'>
          <div className='hidden lg:block'>
            <HeaderForm/>
          </div>
          <div className=' lg:mt-[39rem] lg:ml-[120rem] lg:flex lg:flex-col lg:justify-between'>
            <div className='my-[13rem] flex flex-row gap-[10rem]  justify-center lg:my-[0rem] lg:flex lg:flex-col'>
            {
              refNav?.current?.map((e,i) => {
                return (
                  <Link to={`/cabinet${e.link}`}  key={i}>
                    <div className={`h-full w-[59rem] gap-[6rem] flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-center lg:gap-[24rem] lg:mb-[47rem] lg:group/link`}
                    onClick={() => setActive(e.link)}>
                      <div className={`flex flex-col justify-center items-center  lg:mt-[0rem] h-[20rem] w-[20rem] lg:w-[23rem] lg:h-[22rem] lg:group-hover/link:fill-[#1F2117] 
                      ${active === e.link? ' fill-[#1F2117] ': 'fill-[#AAAAAA]'}`}>
                        {
                          e.img
                        }
                      </div>
                      <p className={`font-bodyalt font-[500] lg:mt-[0rem] text-[10rem] leading-[12rem] text-[#1F2117] lg:font-bodyalt lg:font-[400] lg:leading-[21px] lg:group-hover/link:text-[#1F2117]
                      ${active === e.link? '  lg:text-[20rem] text-[#1F2117] lg:leading-[24px]': 'lg:flex lg:text-[18rem] text-[#AAAAAA] lg:leading-[21px]'}`}>{e.name}</p>
                    </div>
                  </Link>
                )
                })
              }
            </div>
            <button  onClick={() => setActivePopup(prev => !prev)} className='hidden lg:flex lg:flex-row lg:gap-[24rem] lg:mb-[84rem] lg:group/logout'>
              <div className='lg:w-[20rem] lg:h-[20rem] lg:fill-[#AAAAAA] lg:group-hover/logout:fill-[#1F2117]'>
                <Logout />
              </div>
              <p className='lg:font-bodyalt lg:font-[400] lg:text-[#AAAAAA] lg:text-[18rem] lg:leading-[21px] lg:group-hover/logout:text-[#1F2117]'>Выход</p>
            </button>
          </div>
          <div className='w-full flex justify-center lg:hidden'>
            <div className='h-[5rem] w-[114rem] bg-[#1F2117] rounded-full mb-[8rem]'></div>
          </div>
        </div>
        <div className='order-1 h-full lg:order-2 lg:grid lg:grid-rows-[121rem_calc(100vh-121rem)] lg:mr-[120rem]'>
          <div className='hidden lg:mt-[32rem] lg:flex lg:flex-row lg:justify-end lg:h-[60rem] '>
            <Link to={`${activeSub? '/cabinet' : '/cabinet/changeSubs'}`}>
              <div className='lg:flex lg:flex-row lg:gap-[12rem]'
              onClick={() => setActive(`${activeSub? '' : '/changeSubs'}`)}>
                <div className='lg:py-[5rem]'>
                  <p className='lg:font-bodyalt lg:font-[500] lg:text-[#1F2117] lg:text-[18rem] lg:text-end' >{`${user?.name} ${user?.lastName}`}</p>
                  <p className='lg:font-bodyalt lg:font-[400] lg:text-[#1F2117]/60 lg:text-[14rem]  lg:text-end'>{user?.email}</p>
                </div>
                <div>
                {!user?.avatar ? (<img src={UnknownUser} alt='avatar' className='rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]'/>): (<img src={user.avatar} alt='avatar' className='rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]'/>)}
                </div>
              </div>
            </Link>
          </div>
          <div className='overflow-y-scroll h-full lg:ml-[32rem] lg:overflow-y-scroll'>
            <Outlet/>
          </div>
        </div>
      </div>
      {
        activePopup? (
          <div className='absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50'>
            <div className='absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  '>
              <ExitPopup setActivePopup={setActivePopup}/>
            </div>
          </div>
          ) : null
        }
    </div>
  )
}

export default Cabinet