import { useState, useCallback } from 'react'
import { BsApple } from 'react-icons/bs'
// import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'


export const AppleAuth = () => {
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
      client_id={_appId || ''}
      scope={'name email'}
      redirect_uri={'http://localhost:3000'}
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }: IResolveParams) => {
        setProvider(provider);
        setProfile(data);
      }}
      onReject={err => {
        // console.log(err);
      }}
    > */}
        <div className='w-[40px] h-[40px] rounded-[4px] drop-shadow-md bg-black grid place-content-center '>
          <BsApple className='w-[20px] h-[20px]' fill='white'/>
        </div>
    </div>
    </>
  )
}