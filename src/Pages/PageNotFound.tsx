import { Link } from 'react-router-dom'

const NotFound = () => {
  return(
    <div className=' h-screen flex'>
      <div className='w-96 h-32 my-auto mx-auto text-center'>
        <h1>
          <span className=''>:(</span>
          <br/>
          Page Not Found!
        </h1>
        <p className=''>
          Sorry, this page is missing.</p>
        <Link to='/' className='text-blue-400 font-medium'>go to login page</Link>
      </div>
    </div>
  )
}

export default NotFound