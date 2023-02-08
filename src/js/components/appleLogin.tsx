import { useState, useCallback, useLayoutEffect, useEffect } from 'react';
import { BsApple } from 'react-icons/bs';
import useScript from '../util/useScript';

export const AppleAuth = () => {
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
		const googleBtn = document.getElementById('custom-apple-btn');
		//@ts-ignore
		googleBtn?.addEventListener('click', () => {
			//@ts-ignore
			document.querySelector('#appleid-signin div[role=button]').click();
		});
	}, []);

	const singInApple = async () => {
		//@ts-ignore
		const response = await window.AppleID.auth.signIn();
		console.log(response);
	};

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
