import {Route, Routes} from 'react-router-dom'

import HomePage from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ChangePassword from './Pages/ChangePassword'
import NotFound from './Pages/PageNotFound'


function App() {
  return (
    <div className='font-body bg-[#fafafa] md:w-[1920px] md:mx-auto overflow-hidden'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Register/>} />
        <Route path='/changePassword/stage1' element={<ChangePassword/>} />
        <Route path='/changePassword/stage2' element={<ChangePassword/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
