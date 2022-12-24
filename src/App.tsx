import { lazy, Suspense, createContext, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Spinner from './components/Spinner'

import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = lazy(() => import('./Pages/Login'))
const LoginForm = lazy(() => import('./layouts/LoginForm'))
const Register = lazy(() => import('./layouts/Registration'))
const ChangePassword = lazy(() => import('./layouts/ChangePassword'))
const ChangePassword2 = lazy(() => import('./layouts/ChangePassword2'))
const ChangePassword3 = lazy(() => import('./layouts/ChangePassword3'))
const Account = lazy(() => import('./Pages/Account'))
const NotFound = lazy(() => import('./Pages/PageNotFound'))



export interface User {
  name?: string | null,
  lastName?: string | null,
  email?: string | null,
  password?: string,
  gender?: string | null,
  dateOfBirth?: Date,
  token?: string | null
}

interface ProfileContext {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setUser: (user: User | null) => void,
  countryId: string,
  deviceName: string,
}

const ProfileUser: ProfileContext = {
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  countryId: '',
  deviceName: '',
}

export const Profile = createContext<ProfileContext>(ProfileUser);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const countryId = Intl.DateTimeFormat().resolvedOptions().timeZone
  const deviceName = 'mobile'

  useEffect(() => {
    const user = localStorage.getItem('user')
    const authenticated = localStorage.getItem('authenticated')

    if(user && authenticated) {
      setUser(JSON.parse(user))
      setIsAuthenticated(JSON.parse(authenticated))
    }
  },[])

  console.log(localStorage)
    return (
    <div className='font-body'>
      <GoogleOAuthProvider clientId="1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do.apps.googleusercontent.com">

      <Suspense fallback={<Spinner/>}>
        <Profile.Provider value={{ 
          isAuthenticated,
          setIsAuthenticated,
          user,
          setUser,
          countryId,
          deviceName
        }}>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            {
              isAuthenticated ? (
                <Route path='/account' element={<Account/>} />
              ) : (
                <Route path='/login' element={<Login/>} >
                  <Route index element={<LoginForm/>} />
                  <Route path='/login/registration' element={<Register/>} />
                  <Route path='/login/stage1' element={<ChangePassword/>} />
                  <Route path='/login/stage2' element={<ChangePassword2/>} />
                  <Route path='/login/stage3' element={<ChangePassword3/>} />
                </Route>
              )
            }
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Profile.Provider>
      </Suspense>

    </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
