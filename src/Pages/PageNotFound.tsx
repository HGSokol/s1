import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return(
    <div className=' h-screen flex'>
      <div className='w-[1536rem] h-[512rem] my-auto mx-auto text-center text-[16rem]'>
        <h1>
          <span className=''>:(</span>
          <br/>
          Page Not Found!
        </h1>
        <p className=''>
          Sorry, this page is missing.</p>
        <Link to='/' className='text-blue-400 font-medium text-[16rem]'>go to login page</Link>
      </div>
    </div>
  )
}

export default NotFound