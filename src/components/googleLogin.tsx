import { useState, useCallback } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'

const _appId = '1018011035779-9cva0vmc8e8a6nanr5url7uk2b8lj8do'

export const GoogleLogin = () => {

  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);
  
  return ( 
    <>
    {provider && profile && (
      <div>
        <div>
          <div>
            <img src={profile.picture} alt='ss' />
          </div>
          <div>{profile.family_name}</div>
        </div>
        <button onClick={onLogoutSuccess}>Выход</button>
      </div>
    )}
    <div className='cursor-pointer'>
    <LoginSocialGoogle
      client_id={_appId || ''}
      onLoginStart={onLoginStart}
      redirect_uri={'https://cors.sh/localhost:3000/'}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="online"
      onResolve={({ provider, data }: IResolveParams) => {
        setProvider(provider);
        setProfile(data);
        console.log(data)
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
