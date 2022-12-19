import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Spinner from './components/Spinner'

const Login = lazy(() => import('./Pages/Login'))
const LoginForm = lazy(() => import('./layouts/LoginForm'))
const Register = lazy(() => import('./layouts/Registration'))
const ChangePassword = lazy(() => import('./layouts/ChangePassword'))
const ChangePassword2 = lazy(() => import('./layouts/ChangePassword2'))
const ChangePassword3 = lazy(() => import('./layouts/ChangePassword3'))
const NotFound = lazy(() => import('./Pages/PageNotFound'))


function App() {
  return (
    <div className='font-body'>
      <Suspense fallback={<Spinner/>}>
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
      </Suspense>
    </div>
  );
}

export default App;
