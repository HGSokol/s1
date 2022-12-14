import { useState, useCallback } from 'react'
import { BsApple } from 'react-icons/bs'
// import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'


export const AppleLogin = () => {
  // const _appId = '1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do.apps.googleusercontent.com'

  // const [provider, setProvider] = useState('');
  // const [profile, setProfile] = useState<any>();

  // const onLoginStart = useCallback(() => {
  //   alert('login start');
  // }, []);

  // const onLogoutSuccess = useCallback(() => {
  //   setProfile(null);
  //   setProvider('');
  //   alert('logout success');
  // }, []);

  // const onLogout = useCallback(() => {}, []);
  
  return ( 
    <>
    {/* {provider && profile && (
      <div>
        <div>
          <div>
            <img src={profile.picture} alt='ss' />
          </div>
          <div>{profile.family_name}</div>
        </div>
        <button onClick={onLogoutSuccess}>Выход</button>
      </div>
    )} */}
    <div className='cursor-pointer'>
    {/* <LoginSocialApple
      client_id={process.env.REACT_APP_APPLE_ID || ''}
      scope={'name email'}
      redirect_uri={'http://localhost:3000'}
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }: IResolveParams) => {
        setProvider(provider);
        setProfile(data);
      }}
      onReject={err => {
        console.log(err);
      }}
    > */}
        <div className='drop-shadow-md w-[50px] h-[50px] rounded-[10px] bg-black grid place-content-center lg:w-[64px] lg:h-[64px]'>
          <BsApple className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' fill='white'/>
        </div>
      {/* </LoginSocialGoogle> */}
    </div>
    </>
  )
}
