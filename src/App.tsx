import { lazy, Suspense, createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Spinner from './components/Spinner'

const Login = lazy(() => import('./Pages/Login'))
const LoginForm = lazy(() => import('./layouts/LoginForm'))
const Register = lazy(() => import('./layouts/Registration'))
const ChangePassword = lazy(() => import('./layouts/ChangePassword'))
const ChangePassword2 = lazy(() => import('./layouts/ChangePassword2'))
const ChangePassword3 = lazy(() => import('./layouts/ChangePassword3'))
const Account = lazy(() => import('./Pages/Account'))
const NotFound = lazy(() => import('./Pages/PageNotFound'))


interface User {
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
  resetCode: string | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setUser: (user: User | null) => void,
  setResetCode: (token: string | null) => void,
  countryId: string,
  deviceName: string,
}

const ProfileUser: ProfileContext = {
  isAuthenticated: false,
  user: null,
  resetCode: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  setResetCode: () => {},
  countryId: '',
  deviceName: '',
}

export const Profile = createContext<ProfileContext>(ProfileUser);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [resetCode, setResetCode] = useState<string | null>(null)
  const countryId = Intl.DateTimeFormat().resolvedOptions().timeZone
  const deviceName = 'mobile'


  console.log(isAuthenticated, user)
    return (
    <div className='font-body'>
      <Suspense fallback={<Spinner/>}>
        <Profile.Provider value={{ 
          isAuthenticated,
          setIsAuthenticated,
          user,
          setUser,
          resetCode,
          setResetCode,
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
    </div>
  );
}

export default App;
