import { Outlet } from "react-router-dom";
import { HeaderForm } from "../components/HeaderForm";


const Login = () => {

  return (
    <div className='font-bodyalt h-[100vh] w-full lg:grid lg:grid-cols-[1fr_1fr] '>
      <div>
        <HeaderForm />
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </div>
      <div className='hidden lg:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center'></div>
    </div>
  );
}

export default Login