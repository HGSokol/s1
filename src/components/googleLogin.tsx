  import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
  import { GoogleLogin, GoogleLogout } from "react-google-login";
  import { FcGoogle } from 'react-icons/fc'
  import { Profile } from '../App'

// const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement
// const MetaContent = metaTag.content

  
  export function GoogleLogin1() {
    const { setUser, setIsAuthenticated, deviceName } = useContext(Profile)
    const navigate = useNavigate() 
  
    const responseGoogle = (response:any) => {
      console.log(response.tokenId);



        axios.post('https://stage.fitnesskaknauka.com/api/auth/google', {
          idToken:`${response.tokenId}`,
          deviceName,
        })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify({
            token: res.data.token,
          }))
          localStorage.setItem('authenticated', JSON.stringify(true))
          setUser({
            email: res.data.email,
            name: res.data.name,
            lastName: res.data.lastName,
            avatar: res.data.avatar,
            uuid: res.data.uuid,
          })
          navigate('/cabinet')
        })
        .catch((error) => {
          console.log(error.response.data)
        }) 
    };


    const logout = () => {
      console.log("logout");

    };
    return (
      <div className="App">
          <GoogleLogin
            // clientId={MetaContent}
            clientId="690913230835-7gqha5d9kt9seh5imsdgaht12rpj3sj9.apps.googleusercontent.com"
            render={renderProps => (
              <button 
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className=' w-[50px] h-[50px] rounded-[10px] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64px] lg:h-[64px]'>
                <FcGoogle className='w-[24px] h-[24px] lg:w-[34.5px] lg:h-[34.5px]' />
              </button>      
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          {/* <GoogleLogin
            clientId="690913230835-7gqha5d9kt9seh5imsdgaht12rpj3sj9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
          {/* <div>
            <GoogleLogout
              clientId="690913230835-7gqha5d9kt9seh5imsdgaht12rpj3sj9.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            />
          </div> */}
      </div>
    );
  }