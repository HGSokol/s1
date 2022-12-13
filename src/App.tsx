import {Route, Routes} from 'react-router-dom'

import HomePage from './Pages/Home'
import Login from './Pages/Login'
import Register from './layouts/Register'
import ChangePassword from './layouts/ChangePassword'
import ChangePassword2 from './layouts/ChangePassword2'
import ChangePassword3 from './layouts/ChangePassword3'
import NotFound from './Pages/PageNotFound'
import { LoginForm } from './layouts/LoginForm'


function App() {
  return (
    <div className='font-body bg-[#fafafa]'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} >
          <Route index element={<LoginForm/>} />
          <Route path='/login/registration' element={<Register/>} />
          <Route path='/login/stage1' element={<ChangePassword/>} />
          <Route path='/login/stage2' element={<ChangePassword2/>} />
          <Route path='/login/stage3' element={<ChangePassword3/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
