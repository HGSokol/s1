import { useState } from 'react' 
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login"
import { FcGoogle } from 'react-icons/fc'


const _clientID = '1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do.apps.googleusercontent.com'

export const GooglleLogin = () => {
  const [loginailed, setLoginFailed] = useState<boolean>(); 

  const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  }

  return ( 
    <GoogleLogin 
      clientId={`${_clientID}`}
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='cursor-pointer w-[50px] h-[50px] rounded-[10px] bg-white border-[1px] grid place-content-center lg:w-[64px] lg:h-[64px]'>
          <FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' />
        </button>
      )}
      buttonText="Login"
      onSuccess={onSuccess} 
      onFailure={(response: any) => { 
      setLoginFailed(true); 
      }} 
      cookiePolicy={'single_host_origin'}
      responseType='code,token'
    /> 
  )
}
