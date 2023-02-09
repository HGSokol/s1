import { useState, useCallback, useLayoutEffect, useEffect, useContext } from 'react';
import { BsApple } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useScript from './useScript';
import { Profile } from '../../App';
import axios from 'axios';

export const AppleAuth = () => {
	const { setUser, deviceName, setUserPaymentMethod, setActiveSub, activeSub } =
		useContext(Profile);
	const navigate = useNavigate();
	const [code, setCode] = useState<string | null>(null);
	const [idToken, setIdToken] = useState<string | null>(null);

	useScript(
		'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
		() => {
			//@ts-ignore
			window.AppleID.auth.init({
				clientId: 'com.fitnesskaknauka.fkn', // This is the service ID we created.
				scope: 'name email', // To tell apple we want the user name and emails fields in the response it sends us.
				redirectURI: 'https://stage.fitnesskaknauka.com/api/auth/apple/redirect', // As registered along with our service ID
				state: 'origin:web', // Any string of your choice that you may use for some logic. It's optional and you may omit it.
				usePopup: true, // Important if we want to capture the data apple sends on the client side.
			});
		},
	);

	useLayoutEffect(() => {
		const apllebtn = document.getElementById('custom-apple-btn');
		//@ts-ignore
		apllebtn?.addEventListener('click', () => {
			//@ts-ignore
			document.querySelector('#appleid-signin div[role=button]').click();
		});

		return () => {
			//@ts-ignore
			apllebtn.removeEventListener('click', () => {
				//@ts-ignore
				document.querySelector('.g_id_signin div[role=button]').click();
			});
		};
	}, []);

	useEffect(() => {
		document.addEventListener('AppleIDSignInOnSuccess', (event) => {
			//@ts-ignore
			console.log(event.detail);
			//@ts-ignore
			setCode(event.detail.authorization.code);
			//@ts-ignore
			setIdToken(event.detail.authorization.id_token);
		});
		document.addEventListener('AppleIDSignInOnFailure', (event) => {
			//@ts-ignore
			console.log(event.detail.error);
		});

		return () => {
			document.removeEventListener('AppleIDSignInOnSuccess', (event) => {
				//@ts-ignore
				console.log(event.detail.error);
			});
			document.removeEventListener('AppleIDSignInOnFailure', (event) => {
				//@ts-ignore
				console.log(event.detail.error);
			});
		};
	}, []);

	useEffect(() => {
		if (code && idToken) {
			console.log('запрос эпл');
			axios
				.post('https://stage.fitnesskaknauka.com/api/auth/apple/redirect', {
					idToken: `${code}`,
					code: `${idToken}`,
					deviceName,
				})
				.then((res) => {
					localStorage.setItem(
						'user',
						JSON.stringify({
							token: res.data.token,
						}),
					);
					axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
					axios
						.get('https://stage.fitnesskaknauka.com/api/customer')
						.then((res) => {
							console.log(res);
							//@ts-ignore
							setUser((prev) => ({
								...prev,
								email: res.data.email,
								name: res.data.name,
								lastName: res.data.lastName,
								avatar: res.data.avatar,
								uuid: res.data.uuid,
							}));
							axios
								.get(`https://stage.fitnesskaknauka.com/api/customer/subscriptions/active`)
								.then((res) => {
									let typeSubs: any;
									res.data.internalSubscription
										? (typeSubs = res.data.internalSubscription)
										: res.data.externalSubscription.appleSubscription
										? (typeSubs = res.data.externalSubscription.appleSubscription)
										: res.data.free
										? (typeSubs = res.data.free)
										: (typeSubs = null);
									if (typeSubs) {
										if (
											typeSubs === res.data.internalSubscription ||
											typeSubs === res.data.externalSubscription.appleSubscription
										) {
											setUserPaymentMethod({
												cardType: typeSubs.userPaymentMethod.cardType,
												expireMonth: typeSubs.userPaymentMethod.expireMonth,
												expireYear: typeSubs.userPaymentMethod.expireYear,
												last4: typeSubs.userPaymentMethod.last4,
											});
										}
										//@ts-ignore
										setActiveSub((prev) => ({
											...prev,
											name: typeSubs.plan.name,
											duration: typeSubs.plan.invoicePeriod,
											price: typeSubs.plan.price,
											id: typeSubs.plan.id,
											id2: typeSubs.id,
											isFromApple: typeSubs === res.data.externalSubscription.appleSubscription,
											endsAt: typeSubs.endsAt,
											error:
												typeSubs !== res.data.free &&
												typeSubs.userPaymentMethod.status === 'has_error' &&
												typeSubs.userPaymentMethod.lastError === 'insufficient_funds'
													? true
													: false,
											type: res.data.internalSubscription
												? 'internal'
												: res.data.externalSubscription.appleSubscription
												? 'external'
												: 'free',
										}));
									} else {
										setActiveSub(null);
									}
								})
								.catch((error) => {
									console.log(error);
								});
							navigate(
								window.innerWidth >= 1024
									? `${activeSub ? '/cabinet' : '/cabinet/changeSubs'}`
									: '/cabinet',
							);
						})
						.catch((error) => {
							console.log(error.response.data);
							if (error.response.status === 401) {
								navigate('/login');
							}
						});
				});
		}
	}, [code, idToken]);

	return (
		<>
			<div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
			<button id="custom-apple-btn">
				<div className="w-[50rem] h-[50rem] rounded-[10rem]  bg-black grid place-content-center drop-shadow-md cursor-pointer lg:w-[64rem] lg:h-[64rem]">
					<BsApple className="w-[24rem] h-[24rem] lg:w-[34.5rem] lg:h-[34.5rem]" fill="white" />
				</div>
			</button>
		</>
	);
};
