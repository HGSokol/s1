import { FaFacebook } from 'react-icons/fa'
import { useState, useCallback } from 'react'
import { LoginSocialFacebook, IResolveParams } from 'reactjs-social-login'


export const FacebookLogin = () => {
  const _appId = '5621216601330090'

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
            <img src={profile.picture.data.url} alt='ss' />
          </div>
          <div>{profile.first_name}</div>
        </div>
        <button onClick={onLogoutSuccess}>Выход</button>
      </div>
    )}
    <div className='cursor-pointer'>
      <LoginSocialFacebook
        appId={_appId || ''}
        fieldsProfile={
          'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
        }
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        redirect_uri={'http://localhost:3000/login'}
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
          console.log(data)
        }}
        onReject={err => {
          console.log(err);
        }}
      >
        <div className='drop-shadow-md w-[50px] h-[50px] rounded-[10px] bg-[#1877F2] grid place-content-center lg:w-[64px] lg:h-[64px]'>
          <FaFacebook className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' fill='white'/>
        </div>
      </LoginSocialFacebook>
    </div>
    </>
  )
}
