// import { AppleAuth } from './appleLogin';
// import { GoogleLogin1 } from './googleLogin';

interface AtlLogin {
	children: JSX.Element;
}

export const AlternativeLogin = ({ children }: AtlLogin) => {
	return (
		<>
			{children}
			<div className="flex flex-row gap-[30rem] justify-center lg:gap-[24rem]">
				{/* <GoogleLogin1 />
				<AppleAuth /> */}
			</div>
		</>
	);
};
