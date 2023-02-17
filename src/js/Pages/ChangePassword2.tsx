import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Profile } from '../../App';
import { ReactComponent as Loader } from '../../img/loader.svg';

interface IFormInputs {
	n1: number;
	n2: number;
	n3: number;
	n4: number;
	n5: number;
	n6: number;
}

const schema = yup
	.object({
		n1: yup.number().required(),
		n2: yup.number().required(),
		n3: yup.number().required(),
		n4: yup.number().required(),
		n5: yup.number().required(),
		n6: yup.number().required(),
	})
	.required();

const ChangePassword2 = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const { setUser, user, timezone } = useContext(Profile);
	const [load, setLoad] = useState(false);
	const navigate = useNavigate();
	document.title = 'Восстановление пароля';

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		setFocus,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});
	const localUser = localStorage.getItem('email');

	useEffect(() => {
		if (!localUser) {
			navigate('/login/step1');
		}
	}, []);

	const onSubmit = (data: IFormInputs) => {
		setLoad(true);
		const key = [data.n1, data.n2, data.n3, data.n4, data.n5, data.n6].join('');

		if (localUser && JSON.parse(localUser).email) {
			const localUserEmail = JSON.parse(localUser).email;

			const userInfo = {
				email: localUserEmail,
				token: `${key}`,
			};

			axios
				.put('https://stage.fitnesskaknauka.com/api/auth/confirm-reset-code', userInfo)
				.then((res) => {
					reset();
					localStorage.setItem(
						'token',
						JSON.stringify({
							token: res.data.token,
						}),
					);
					navigate('/login/step3');
				})
				.catch((error) => {
					setErrorMessage(error.response.data.message);
				})
				.finally(() => {
					setLoad(false);
				});
		}
	};

	const sendCode = () => {
		const userInfo = {
			email: 'g.w.sokolov98@mail.ru',
		};

		axios
			.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo, {
				headers: {
					'Content-type': 'application/json',
					Timezone: `${timezone}`,
				},
			})
			.then((res) => {})
			.catch((error) => {
				if (error.response.status === 401) {
					localStorage.clear();
					navigate('/');
				}
				console.log(error.response.data);
			});
	};

	return (
		<>
			<div className="w-[343rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]">
				<h1
					className="font-bodyalt font-[600] text-[24rem] leading-[26.25rem] text-center mb-[14rem] 
      lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[24rem]">
					Восстановление пароля
				</h1>
				<h3
					className="font-bodyalt text-[#777872] font-[600] text-[16rem] leading-[26.25rem] text-center mb-[32rem] 
        lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem]">
					Введите код подтверждения, который мы отправили Вам на указанный Email{' '}
				</h3>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-rows-[1fr_56rem] w-[343rem] lg:w-[441rem] mx-auto place-items-center lg:grid-rows-[1fr_65rem] lg:mb-[24rem]">
					<div className="flex flex-row gap-[5rem] lg:gap-[20rem] w-min mb-[32rem] lg:mb-[48rem]">
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n1')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n2') : setFocus('n1'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem]"
							/>
						</div>
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n2')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n3') : setFocus('n1'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] "
							/>
						</div>
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n3')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n4') : setFocus('n2'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem]"
							/>
						</div>
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n4')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n5') : setFocus('n3'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem]"
							/>
						</div>
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n5')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n6') : setFocus('n4'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem]"
							/>
						</div>
						<div className="h-[48rem] w-[40rem] lg:h-[56rem] lg:w-[54rem]">
							<input
								placeholder="-"
								type="text"
								maxLength={1}
								{...register('n6')}
								onKeyUp={(e) => (e.code !== 'Backspace' ? setFocus('n6') : setFocus('n5'))}
								className="outline-none w-full text-center h-[56rem] rem-[16rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:text-center placeholder:font-[400] placeholder:text-[#AAAAAA] text-[14rem]  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem]"
							/>
						</div>
					</div>
					{errorMessage ? (
						<p className="text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
							{errorMessage}
						</p>
					) : null}
					<div className="w-full">
						<button
							type="submit"
							disabled={!isValid}
							className={`${
								isValid === true ? ' bg-[#FFB700]' : ' bg-[#FFB700]/50'
							} flex items-center justify-center w-full h-[51rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
							{!load ? (
								'Подтвердить'
							) : (
								<div className="w-[32rem] h-[32rem]">
									<Loader />
								</div>
							)}
						</button>
					</div>
				</form>
				<div className="flex flex-row justify-center rem-[8.5rem] gap-[8rem] mt-[10rem]">
					<p className="text-[14rem] text-[#777872] font-[400] lg:text-[16rem]">Не пришел код?</p>
					<p
						className="text-[14rem] text-[#000000] font-[600] lg:text-[16rem] cursor-pointer"
						onClick={sendCode}>
						Отправить код снова
					</p>
				</div>
			</div>
		</>
	);
};

export default ChangePassword2;
