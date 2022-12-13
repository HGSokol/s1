import { Outlet } from "react-router-dom";
import { HeaderForm } from "../components/HeaderForm";


const Login = () => {

  return (
    <div className='font-bodyalt h-full w-full lg:grid lg:grid-cols-[1fr_1fr] '>
      <div>
        <HeaderForm />
        <Outlet />
      </div>
      <div className='hidden lg:block bg-[url("images/authorization.png")] bg-cover bg-no-repeat bg-center h-full'></div>
    </div>
  );
}

export default Login