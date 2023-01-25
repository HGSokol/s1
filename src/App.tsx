import { lazy, Suspense, createContext, useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { deviceType } from 'react-device-detect'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Helmet } from "react-helmet"


import axios from 'axios'
import HomePage from './Pages/Home'
import Spinner from './components/Spinner'

const Login = lazy(() => import('./layouts/Login'))
const Cabinet = lazy(() => import('./layouts/Cabinet'))
const Usefull = lazy(() => import('./Pages/Usefull'))
const Activity = lazy(() => import('./Pages/Activity'))
const Statistics = lazy(() => import('./Pages/Statistics'))
const Nutrition = lazy(() => import('./Pages/Nutrition'))
const MyProfile = lazy(() => import('./Pages/Profile'))
const Subs = lazy(() => import('./Pages/Subs'))
const ChangeSubs = lazy(() => import('./Pages/ChangeSubs'))
const ChangePayment = lazy(() => import('./Pages/ChangePayment'))
const Ordering = lazy(() => import('./Pages/Ordering'))
const Ordering2 = lazy(() => import('./Pages/Ordering2'))
const Ordering3 = lazy(() => import('./Pages/Ordering3'))
const CabinetInfo = lazy(() => import('./Pages/CabinetInfo'))
const Payment = lazy(() => import('./Pages/Payment'))
const LoginForm = lazy(() => import('./Pages/LoginForm'))
const Register = lazy(() => import('./Pages/Registration'))
const ChangePassword = lazy(() => import('./Pages/ChangePassword'))
const ChangePassword2 = lazy(() => import('./Pages/ChangePassword2'))
const ChangePassword3 = lazy(() => import('./Pages/ChangePassword3'))
const NotFound = lazy(() => import('./Pages/PageNotFound'))

// const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement
// const MetaContent = metaTag.content

export interface User {
  avatar?:string | null,
  country?:string | null,
  countryId?:string | null,
  dateOfBirth?:Date,
  difficultyLevel?:string | null,  
  email?: string | null,
  gender?: string | null,
  height?: string | null,
  id?: number | null,
  name?: string | null,
  lastName?: string | null,
  subscription?: string | null,
  target?: string | null,
  uuid?: string | null,
  weight?: string | null,
  password?: string | null,
  token?: string | null,
}

interface CardInfo {
  numberCard: string,
  nameCard: string,
  dateCard:{
    month: string,
    year:string,
  },
  cvv: string
}

export interface ActiveSub {
  name?: string
  duration: number,
  price: string,
  id: number
  isFromApple?: boolean
}

interface ProfileContext {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setUser: (user: User | null) => void,
  timezone: string,
  deviceName: string,
  cardInfo: CardInfo | null
  setCardInfo: (cardInfo: CardInfo) => void
  activeSub: ActiveSub | null,
  setActiveSub: (activeSub: ActiveSub | null) => void
  orderCard: ActiveSub | null,
  setOrderCard: (activeSub: ActiveSub | null) => void
  yandexToken: string | null,
  setYandexToken: (token: string | null) => void
}

const ProfileUser: ProfileContext = {
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => {},
  setUser: () => {},
  timezone: '',
  deviceName: '',
  cardInfo: null,
  setCardInfo: () => {},
  activeSub: null,
  setActiveSub: () => {},
  orderCard: null,
  setOrderCard: () => {},
  yandexToken: null,
  setYandexToken: () => {}
}

export const Profile = createContext<ProfileContext>(ProfileUser);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null)
  const [activeSub, setActiveSub] = useState<ActiveSub | null>(null)
  const [orderCard, setOrderCard] = useState<ActiveSub | null>(null)
  const [yandexToken, setYandexToken] = useState<string | null>(null)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const deviceName = deviceType
  const navigate = useNavigate()

  
  const localUser = localStorage.getItem('user')

  if(localUser){
    const token = JSON.parse(localUser).token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // axios.defaults.headers.common['Authorization'] = `Bearer 82|NSRa2iG9bYGwrMRGtQr0raK2MyRAHOTJd64mDLel`
  }
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Timezone'] = `${timezone}` 
  axios.defaults.headers.common['Client-Platform'] = 'web'
  
  useEffect(() => {
    if(localUser && JSON.parse(localUser).token){
        axios.get('https://stage.fitnesskaknauka.com/api/customer')
        .then((res) => {
          console.log(res)
          setUser({
            email: res.data.email,
            name: res.data.name,
            lastName: res.data.lastName,
            avatar: res.data.avatar,
            uuid: res.data.uuid,
          })
          if(res.data.subscription){
            setActiveSub({
              name: res.data.subscription.plan.name,
              duration: res.data.subscription.plan.invoicePeriod,
              price: res.data.subscription.plan.price,
              id: res.data.subscription.plan.id,
              isFromApple: res.data.subscription.isFromApple
            })
          }
          setIsAuthenticated(true)
          localStorage.setItem('authenticated', JSON.stringify(true))
        })
        .catch((error) => {
          console.log(error.response.data)
          if(error.response.status === 401){
            navigate('/login')
          }
        })
      }
    },[])
    
    document.title = 'Фитнес как наука'
  return (
      <div className='font-body'>
        <div>
          <Helmet>
            <script src="https://static.yoomoney.ru/checkout-js/v1/checkout.js" type="text/javascript" />
          </Helmet>
        </div>
        <GoogleOAuthProvider clientId={"148113392760-243a1pc16e8vbu20eqogoalrvppil48v.apps.googleusercontent.com"}>
          <Suspense fallback={<Spinner/>}>
            <Profile.Provider value={{ 
              isAuthenticated,
              setIsAuthenticated,
              user,
              setUser,
              timezone,
              deviceName,
              cardInfo,
              setCardInfo,
              activeSub,
              setActiveSub,  
              orderCard,
              setOrderCard,
              yandexToken,
              setYandexToken,
            }}>
              <Routes>
                <Route path='/' element={<HomePage/>} />
                {
                  isAuthenticated ? (
                    <Route path='/cabinet' element={<Cabinet/>} >
                      {
                        window.innerWidth >= 1024 ? (
                        <Route path='/cabinet' element={<MyProfile/>} >
                          <Route index element={<Subs/>} />
                          <Route path='/cabinet/changeSubs' element={<ChangeSubs/>} />
                          <Route path='/cabinet/payment' element={<Payment/>} />
                          <Route path='/cabinet/changePayment' element={<ChangePayment/>} />
                          <Route path='/cabinet/cabinetInfo' element={<CabinetInfo/>} />
                          <Route path='/cabinet/ordering' element={<Ordering/>} />
                          <Route path='/cabinet/ordering2' element={<Ordering2/>} />
                          <Route path='/cabinet/ordering3' element={<Ordering3/>} />
                        </Route>
                        ) : (
                          <>
                            <Route path='/cabinet' element={<MyProfile/>} />
                            <Route path='/cabinet/subs' element={<Subs/>} />
                            <Route path='/cabinet/ordering' element={<Ordering/>} />
                            <Route path='/cabinet/ordering2' element={<Ordering2/>} />
                            <Route path='/cabinet/ordering3' element={<Ordering3/>} />
                            <Route path='/cabinet/changeSubs' element={<ChangeSubs/>} />
                            <Route path='/cabinet/changePayment' element={<ChangePayment/>} />
                            <Route path='/cabinet/payment' element={<Payment/>} />
                            <Route path='/cabinet/cabinetInfo' element={<CabinetInfo/>} />
                          </>
                        )
                      }
                      <Route path='/cabinet/activity' element={<Activity/>} />
                      <Route path='/cabinet/statistic' element={<Statistics/>} />
                      <Route path='/cabinet/nutrition' element={<Nutrition/>} />
                      <Route path='/cabinet/usefull' element={<Usefull/>} />
                    </Route>
                  ) : (
                    <Route path='/login' element={<Login/>} >
                      <Route index element={<LoginForm/>} />
                      <Route path='/login/registration' element={<Register/>} />
                      <Route path='/login/step1' element={<ChangePassword/>} />
                      <Route path='/login/step2' element={<ChangePassword2/>} />
                      <Route path='/login/step3' element={<ChangePassword3/>} />
                    </Route>
                  )
                }
                <Route path='*' element={<NotFound/>} />
              </Routes>
            </Profile.Provider>
          </Suspense>
        </GoogleOAuthProvider>
      </div>
  );
}

export default App