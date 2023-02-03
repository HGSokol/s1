import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
// import { GoogleLogin } from "react-google-login";
import { FcGoogle } from 'react-icons/fc'
import { Profile } from '../App'


// const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement
// const MetaContent = metaTag.content
  
export function GoogleLogin1() {
  const { setUser, deviceName, setReload, activeSub } = useContext(Profile)
  const navigate = useNavigate() 

  // const responseGoogle = (response:any) => {
  //   console.log(response);
  //   console.log(response.tokenId);

  //   axios.post('/api/auth/google', {
  //     idToken:`${response.tokenId}`,
  //     deviceName,
  //   })
  //   .then((res) => {
  //     localStorage.setItem('user', JSON.stringify({
  //       token: res.data.token,
  //     }))
  //     console.log(res)
  //     setUser({
  //       email: res.data.email,
  //       name: res.data.name,
  //       lastName: res.data.lastName,
  //       token: res.data.token,
  //     })
  //     setReload(true)

  //     navigate(`${activeSub? '/cabinet' : '/cabinet/changeSubs'}`)
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data)
  //   })
  // };

  return (
    <div className="App">
        {/* <GoogleLogin
          clientId={"690913230835-7gqha5d9kt9seh5imsdgaht12rpj3sj9.apps.googleusercontent.com"}
          render={renderProps => ( */}
            <button 
            // onClick={renderProps.onClick}
            // disabled={renderProps.disabled}
            className=' w-[50rem] h-[50rem] rounded-[10rem] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64rem] lg:h-[64rem]'>
              <FcGoogle className='w-[24rem] h-[24rem] lg:w-[34.5rem] lg:h-[34.5rem]' />
            </button>      
          {/* )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle} */}
        {/* /> */}
    </div>
  );
}