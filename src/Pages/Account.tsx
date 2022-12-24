import { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"

import { Profile } from '../App'


const Account = () => {
  const { user, setUser, setIsAuthenticated } = useContext(Profile)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    setUser(null)
    setIsAuthenticated(false)
    
    navigate('/login')
  }

  return (
    <>
      <div className=''>
        <p>{user?.name}</p>
        <p>{user?.lastName}</p>
        <p>{user?.email}</p>
      </div>
      <div className='flex flex-row gap-[15px]'>
        <button onClick={logout} className='cursor-pointer w-[150px] h-[40px] bg-yellow-400 rounded-full' >
          Выход
        </button>
        <Link to='/'>
          <button className='cursor-pointer w-[150 px] h-[40px] bg-yellow-400 rounded-full' >
            На Главную
          </button>
        </Link>
      </div>
    </>
  )
}

export default Account