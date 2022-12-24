import { useState, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'
import axios from 'axios'

import { Profile, User } from '../App'


import { useGoogleLogin } from '@react-oauth/google';


const _appId = '1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do'

export const GoogleLogin = () => {
  const { setUser, setIsAuthenticated, isAuthenticated,  countryId, user, deviceName } = useContext(Profile)
  const navigate = useNavigate()  
  // console.log(user)
  const onLogout = useCallback(() => {}, []);
  



  const login = useGoogleLogin({
    onSuccess: (tokenResponse ) => {
      // console.log(tokenResponse )

      const token = tokenResponse.code

      axios.post('https://stage.fitnesskaknauka.com/api/auth/google', {
        idToken:`${token}`,
        deviceName,
      }, {
        headers: {
          'Accept': 'application/json',
          'Timezone': `${countryId}`
        }
      })
      .then((res) => {
        console.log(res)
        console.log(res.data, 'jndtn')

        localStorage.setItem('authenticated', JSON.stringify(true))
        setIsAuthenticated(true)
        navigate('/account')
      })
      .catch((error) => {
        console.log(error.response.data)
      })







    },
    flow: 'auth-code',
  });

  return ( 
    <>
       <button 
       onClick={() =>login()}
       className=' w-[50px] h-[50px] rounded-[10px] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64px] lg:h-[64px]'>
         <FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' />
       </button>
    </>
    



  // <>
  //   <div className='cursor-pointer'>
  //     <LoginSocialGoogle
  //       isOnlyGetToken={false}
  //       access_type = 'online'
  //       client_id={_appId || ''}
  //       redirect_uri={'https://localhost:3000/'}
  //       // discoveryDocs="claims_supported"
  //       // access_type="online"
  //       onResolve={({ data }: IResolveParams) => {
  //         if(data){
  //           console.log(data, 'дата')
  //           // localStorage.setItem('user', JSON.stringify({
  //           //   token: `${data.access_token}`,
  //           //   email: data.email,
  //           //   name: data.family_name,
  //           //   lastName: data.given_name,
  //           // }))

  //           // setUser({
  //           //   token: `${data.access_token}`,
  //           //   email: data.email,
  //           //   name: data.family_name,
  //           //   lastName: data.given_name,
  //           // })  
            
            
  //           axios.post('https://stage.fitnesskaknauka.com/api/auth/google', {
  //             idToken:`${data.sub}`,
  //             deviceName,
  //           }, {
  //             headers: {
  //               // 'Authorization': `Bearer ${data.access_token}`,
  //               // 'Accept': 'application/json',
  //               // 'Content-Type': 'application/x-www-form-urlencoded',
  //               'Timezone': `${countryId}`
  //             }
  //           })
  //           .then((res) => {
  //             console.log(res)
  //             console.log(res.data, 'jndtn')

  //             localStorage.setItem('authenticated', JSON.stringify(true))
  //             setIsAuthenticated(true)
  //             navigate('/account')
  //           })
  //           .catch((error) => {
  //             console.log(error.response.data)
  //           })
  //           }
  //       }}
  //       onReject={err => {
  //         console.log(err);
  //       }}
  //     >
  //       <button className=' w-[50px] h-[50px] rounded-[10px] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64px] lg:h-[64px]'>
  //         <FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' />
  //       </button>
  //     </LoginSocialGoogle>
  //   </div>
  //   </>
  )
}
