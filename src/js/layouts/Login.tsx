import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderForm } from '../components/HeaderForm';
import Spinner from '../components/Spinner';

const Login = () => {
	return (
		<div className="font-bodyalt h-[100vh] lg:grid lg:grid-cols-[50%_50%] ">
			<div>
				<HeaderForm />
				<div className="flex justify-center w-full">
					<Suspense fallback={<Spinner />}>
						<Outlet />
					</Suspense>
				</div>
			</div>
			<div className="hidden  bg-cover bg-no-repeat bg-center"></div>
		</div>
	);
};
// lg:block bg-[url("../img/authorization.png")]
export default Login;
