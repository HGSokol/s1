import { useRef, useLayoutEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import React, { useContext } from 'react';
import axios from 'axios';
import { Profile } from '../../App';
import useScript from '../util/useScript';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

// const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement;
// const MetaContent = metaTag.content;

declare global {
	interface Window {
		handleCredentialResponse?: any;
	}
}

export const GoogleLogin1 = ({ onGoogleSignIn = () => {} }) => {
	// const googleSignInButton = useRef(null);
	const { setUser, deviceName, setUserPaymentMethod, setActiveSub, activeSub } =
		useContext(Profile);
	const navigate = useNavigate();

	useScript('https://accounts.google.com/gsi/client', () => {
		//@ts-ignore
		window.google.accounts.id.initialize({
			client_id: `1021272275946-6nkj7bbvatts5nhf9s2jm3jphjf7v9fc.apps.googleusercontent.com`,
			callback: onGoogleSignIn,
		});
	});

	useLayoutEffect(() => {
		const googleBtn = document.getElementById('custom-google-btn');
		//@ts-ignore
		googleBtn?.addEventListener('click', () => {
			//@ts-ignore
			document.querySelector('.g_id_signin div[role=button]').click();
		});
	}, []);

	const fs = useRef<any>();

	window.handleCredentialResponse = handleCredentialResponse;

	function handleCredentialResponse(event: any) {
		console.log(event.credential);

		// axios
		// 	.post('https://stage.fitnesskaknauka.com/api/auth/google', {
		// 		idToken: `${event.credential}`,
		// 		deviceName,
		// 	})
		// 	.then((res) => {
		// 		localStorage.setItem(
		// 			'user',
		// 			JSON.stringify({
		// 				token: res.data.token,
		// 			}),
		// 		);

		// 		axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

		// 		axios
		// 			.get('https://stage.fitnesskaknauka.com/api/customer')
		// 			.then((res) => {
		// 				console.log(res);
		// 				//@ts-ignore
		// 				setUser((prev) => ({
		// 					...prev,
		// 					email: res.data.email,
		// 					name: res.data.name,
		// 					lastName: res.data.lastName,
		// 					avatar: res.data.avatar,
		// 					uuid: res.data.uuid,
		// 				}));
		// 				axios
		// 					.get(`https://stage.fitnesskaknauka.com/api/customer/subscriptions/active`)
		// 					.then((res) => {
		// 						let typeSubs: any;

		// 						res.data.internalSubscription
		// 							? (typeSubs = res.data.internalSubscription)
		// 							: res.data.externalSubscription.appleSubscription
		// 							? (typeSubs = res.data.externalSubscription.appleSubscription)
		// 							: res.data.free
		// 							? (typeSubs = res.data.free)
		// 							: (typeSubs = null);

		// 						if (typeSubs) {
		// 							if (
		// 								typeSubs === res.data.internalSubscription ||
		// 								typeSubs === res.data.externalSubscription.appleSubscription
		// 							) {
		// 								setUserPaymentMethod({
		// 									cardType: typeSubs.userPaymentMethod.cardType,
		// 									expireMonth: typeSubs.userPaymentMethod.expireMonth,
		// 									expireYear: typeSubs.userPaymentMethod.expireYear,
		// 									last4: typeSubs.userPaymentMethod.last4,
		// 								});
		// 							}
		// 							//@ts-ignore
		// 							setActiveSub((prev) => ({
		// 								...prev,
		// 								name: typeSubs.plan.name,
		// 								duration: typeSubs.plan.invoicePeriod,
		// 								price: typeSubs.plan.price,
		// 								id: typeSubs.plan.id,
		// 								id2: typeSubs.id,
		// 								isFromApple: typeSubs === res.data.externalSubscription.appleSubscription,
		// 								endsAt: typeSubs.endsAt,
		// 								error:
		// 									typeSubs !== res.data.free &&
		// 									typeSubs.userPaymentMethod.status === 'has_error' &&
		// 									typeSubs.userPaymentMethod.lastError === 'insufficient_funds'
		// 										? true
		// 										: false,
		// 								type: res.data.internalSubscription
		// 									? 'internal'
		// 									: res.data.externalSubscription.appleSubscription
		// 									? 'external'
		// 									: 'free',
		// 							}));
		// 						} else {
		// 							setActiveSub(null);
		// 						}
		// 					})
		// 					.catch((error) => {
		// 						console.log(error);
		// 					});
		// 				navigate(
		// 					window.innerWidth >= 1024
		// 						? `${activeSub ? '/cabinet' : '/cabinet/changeSubs'}`
		// 						: '/cabinet',
		// 				);
		// 			})
		// 			.catch((error) => {
		// 				console.log(error.response.data);
		// 				if (error.response.status === 401) {
		// 					navigate('/login');
		// 				}
		// 			});
		// 	});
	}

	return (
		<>
			<div className="hidden">
				<div
					id="g_id_onload"
					data-client_id={`1021272275946-6nkj7bbvatts5nhf9s2jm3jphjf7v9fc.apps.googleusercontent.com`}
					data-auto_prompt="false"
					data-callback="handleCredentialResponse"></div>
			</div>
			<div
				className="g_id_signin"
				data-type="icon"
				data-size="large"
				data-theme="outline"
				data-text="sign_in_with"
				data-shape="rectangular"
				ref={fs}
				data-logo_alignment="left"></div>
			<button id="custom-google-btn" /* onClick={() => console.log(fs?.current)} */>
				<div className=" w-[50rem] h-[50rem] rounded-[10rem] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64rem] lg:h-[64rem]">
					<FcGoogle className="w-[24rem] h-[24rem] lg:w-[34.5rem] lg:h-[34.5rem]" />
				</div>
			</button>
		</>
	);
};
