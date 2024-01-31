// import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
// import axios from 'axios';
// import { FcGoogle } from 'react-icons/fc';
// import { useNavigate } from 'react-router-dom';
// import { Profile } from '../../App';
// import useScript from './useScript';

// // const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement;
// // const metaClientId = metaTag.content;

// declare global {
// 	interface Window {
// 		handleCredentialResponse?: any;
// 	}
// }

export const GoogleLogin1 = () => {
// 	const { setUser, deviceName, setUserPaymentMethod, setActiveSub, activeSub, setErrorMessage } =
// 		useContext(Profile);
// 	const navigate = useNavigate();

// 	useScript('https://accounts.google.com/gsi/client', () => {
// 		//@ts-ignore
// 		window.google.accounts.id.initialize({
// 			client_id: '690913230835-7gqha5d9kt9seh5imsdgaht12rpj3sj9.apps.googleusercontent.com',
// 			callback: handleCredentialResponse,
// 		});

// 		//@ts-ignore
// 		window.google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
// 			theme: 'outline',
// 			size: 'large',
// 		});
// 	});

// 	useEffect(() => {
// 		const googleBtn = document.getElementById('custom-google-btn');
// 		//@ts-ignore
// 		googleBtn?.addEventListener('click', () => {
// 			//@ts-ignore
// 			document.querySelector('#buttonDiv div div div').click();
// 		});
// 		return () => {
// 			googleBtn?.removeEventListener('click', () => {
// 				//@ts-ignore
// 				document.querySelector('#buttonDiv div div div').click();
// 			});
// 		};
// 	});

// 	function handleCredentialResponse(event: any) {
// 		axios
// 			.post('https://stage.fitnesskaknauka.com/api/auth/google', {
// 				idToken: `${event.credential}`,
// 				deviceName,
// 			})
// 			.then((res) => {
// 				localStorage.setItem(
// 					'user',
// 					JSON.stringify({
// 						token: res.data.token,
// 					}),
// 				);

// 				axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

// 				axios
// 					.get('https://stage.fitnesskaknauka.com/api/customer')
// 					.then((res) => {
// 						console.log(res);
// 						//@ts-ignore
// 						setUser((prev) => ({
// 							...prev,
// 							email: res.data.email,
// 							name: res.data.name,
// 							lastName: res.data.lastName,
// 							avatar: res.data.avatar,
// 							uuid: res.data.uuid,
// 							isExternalRegistration: res.data.isExternalRegistration,
// 						}));
// 						axios
// 							.get(`https://stage.fitnesskaknauka.com/api/customer/subscriptions/active`)
// 							.then((res) => {
// 								let typeSubs: any;

// 								res.data.internalSubscription
// 									? (typeSubs = res.data.internalSubscription)
// 									: res.data.externalSubscription.appleSubscription
// 									? (typeSubs = res.data.externalSubscription.appleSubscription)
// 									: res.data.free
// 									? (typeSubs = res.data.free)
// 									: (typeSubs = null);

// 								if (typeSubs) {
// 									if (typeSubs === res.data.internalSubscription) {
// 										setUserPaymentMethod({
// 											cardType: typeSubs.userPaymentMethod.cardType,
// 											expireMonth: typeSubs.userPaymentMethod.expireMonth,
// 											expireYear: typeSubs.userPaymentMethod.expireYear,
// 											last4: typeSubs.userPaymentMethod.last4,
// 										});
// 									}
// 									//@ts-ignore
// 									setActiveSub((prev) => ({
// 										...prev,
// 										name: typeSubs.plan.name,
// 										duration: typeSubs.plan.invoicePeriod,
// 										price: typeSubs.plan.price,
// 										id: typeSubs.plan.id,
// 										id2: typeSubs.id,
// 										isFromApple: typeSubs === res.data.externalSubscription.appleSubscription,
// 										endsAt: typeSubs === res.data.internalSubscription ? typeSubs.endsAt : '',
// 										error:
// 											typeSubs !== res.data.free &&
// 											typeSubs !== res.data.externalSubscription.appleSubscription &&
// 											typeSubs.openInvoice &&
// 											typeSubs.openInvoice.id,
// 										type: res.data.internalSubscription
// 											? 'internal'
// 											: res.data.externalSubscription.appleSubscription
// 											? 'external'
// 											: 'free',
// 									}));
// 								} else {
// 									setActiveSub(null);
// 								}
// 							})
// 							.catch((error) => {
// 								if (error.response.status === 401) {
// 									localStorage.clear();
// 									navigate('/');
// 								}
// 							});
// 						navigate(
// 							window.innerWidth >= 1024
// 								? `${activeSub ? '/cabinet' : '/cabinet/plans'}`
// 								: '/cabinet',
// 						);
// 					})
// 					.catch((error) => {
// 						if (error.response.status === 401) {
// 							localStorage.clear();
// 							navigate('/');
// 						}
// 					});
// 			})
// 			.catch((error) => {
// 				if (error.response.status === 422) {
// 					if (error.response.data.errors && error.response.data.errors.email) {
// 						setErrorMessage(error.response.data.errors.email);
// 					}
// 				} else {
// 					setErrorMessage(error.response.data.message);
// 				}
// 				if (error.response.status === 401) {
// 					localStorage.clear();
// 					navigate('/');
// 				}
// 			});
// 	}

// 	return (
// 		<>
// 			<div className="hidden" id="buttonDiv"></div>
// 			<button id="custom-google-btn">
// 				<div className=" w-[50rem] h-[50rem] rounded-[10rem] bg-white grid place-content-center drop-shadow-md cursor-pointer lg:w-[64rem] lg:h-[64rem]">
// 					<FcGoogle className="w-[24rem] h-[24rem] lg:w-[34.5rem] lg:h-[34.5rem]" />
// 				</div>
// 			</button>
// 		</>
// 	);
};
