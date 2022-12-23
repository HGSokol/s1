import { useState, useCallback, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'
import axios from 'axios'

import { Profile, User } from '../App'


const _appId = '1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do'

export const GoogleLogin = () => {
  const { setUser, setIsAuthenticated, isAuthenticated,  countryId, user, deviceName } = useContext(Profile)
  const navigate = useNavigate()
  const googleUser = useRef<User | null>(null)
  const onLoginStart = useCallback(() => {
    // alert('login start');
  }, []);
  
  
  useEffect(() => {
      googleUser.current = user

      if(googleUser.current && googleUser.current.token){
        axios.post('https://stage.fitnesskaknauka.com/api/auth/google', {
          idToken: `${googleUser.current?.token}`,
          deviceName,
        }, {
          headers: {
          'Content-type':'application/json',
          'Timezone': `${countryId}`
          }
          })
          .then((res) => {
          console.log(res)
          console.log(res.data, 'jndtn')
          })
          .catch((error) => {
          console.log(error.response.data)
          })
      }


        // setUser({
        //   ...googleUser.current
        // })
        // setIsAuthenticated(true)


      // navigate(isAuthenticated === true? '/account' : '/login')

  }, [user])

  const onLogout = useCallback(() => {}, []);
  
  return ( 
  <>
    <div className='cursor-pointer'>
      <LoginSocialGoogle
        client_id={_appId || ''}
        onLoginStart={onLoginStart}
        redirect_uri={'https://localhost:3000/'}
        discoveryDocs="claims_supported"
        access_type="online"
        onResolve={({ data }: IResolveParams) => {
          if(data){
            setUser({
              token: data.access_token,
              email: data.email,
              name: data.family_name,
              lastName: data.given_name,
            })          
          }
        }}
        onReject={err => {
          console.log(err);
        }}
      >
        <button className=' w-[50px] h-[50px] rounded-[10px] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64px] lg:h-[64px]'>
          <FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' />
        </button>
      </LoginSocialGoogle>
    </div>
    </>
  )
}
