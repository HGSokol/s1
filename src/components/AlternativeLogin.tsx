import { AppleLogin } from "./appleLogin"
import { GoogleLogin } from "./googleLogin"

interface AtlLogin {
  children: JSX.Element
}

export const AlternativeLogin = ({children}:AtlLogin) => {
  return (
    <>
      {children}
      <div className='flex flex-row gap-[30px] justify-center lg:gap-[24px]'>
        <GoogleLogin />
        <AppleLogin />
      </div>
    </>
  )
}