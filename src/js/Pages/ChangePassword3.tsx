import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeSlash } from 'react-icons/bs';
import { Profile } from '../../App';
import { handleKeyDown, handleChange } from './LoginForm';

interface IFormInputs {
	password: string;
	password2: string;
}

const schema = yup
	.object({
		password: yup
			.string()
			.required('Обязательное поле')
			.min(8, 'Пароль слишком короткий - минимум 8 знаков.')
			.matches(/[a-zA-Z0-9]/, 'Пароль может содержать только латинские буквы'),
		password2: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
	})
	.required();

const ChangePassword3 = () => {
	const { deviceName } = useContext(Profile);
	const [type, setType] = useState(true);
	const [email, setEmail] = useState(true);
	const [token, setToken] = useState(true);
	const navigate = useNavigate();
	document.title = 'Восстановление пароля';
	const localUserEmail = localStorage.getItem('email');
	const localUserToken = localStorage.getItem('token');

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	useEffect(() => {
		if (!localUserEmail || !localUserToken) {
			navigate('/login/step1');
		}
		if (localUserEmail && localUserToken) {
			setEmail(JSON.parse(localUserEmail).email);
			setToken(JSON.parse(localUserToken).token);
		}
	}, []);

	const onSubmit = (data: IFormInputs) => {
		const userInfo = {
			password: data.password,
			email: `${email}`,
			token: `${token}`,
			deviceName,
		};

		axios
			.put('/api/auth/reset-password', userInfo)
			.then((res) => {
				reset();
				navigate('/login');
			})
			.catch((error) => {
				if (error.response.status === 503) {
					localStorage.clear();
					navigate('/maintenance');
				}
				if (error.response.status === 401) {
					localStorage.clear();
					navigate('/');
				}
			});
	};

	const onClickChangeType = () => {
		setType((prev) => !prev);
	};

	return (
		<div className="w-[343rem] mx-auto mt-[24rem] lg:w-[492rem] lg:mt-[223rem]">
			<h1 className="font-body font-[600] text-[24rem] leading-[26.25rem] text-center mb-[24rem] lg:text-[40rem] lg:leading-[46.96rem] ">
				Восстановление пароля
			</h1>
			<h3 className="font-body text-[#777872] font-[600] text-[16rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[22rem] lg:leading-[32rem] lg:mb-[48rem]">
				Введите новый пароль
			</h3>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-[343rem] lg:w-[441rem] mx-auto">
				<div className="relative mb-[16rem] lg:mb-[20rem]">
					<div
						className="absolute translate-x-[305rem] translate-y-[14rem] lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer"
						onClick={onClickChangeType}>
						{type ? (
							<BsEyeSlash color="#AAAAAA" className="w-[20rem] h-[20rem]" />
						) : (
							<AiOutlineEye color="#AAAAAA" className="w-[20rem] h-[20rem]" />
						)}
					</div>
					<input
						placeholder="Ваш пароль"
						type={`${type === true ? 'password' : 'text'}`}
						onKeyDown={handleKeyDown}
						{...register('password', {
							onChange: (e) => handleChange(e),
						})}
						className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
              lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
              ${errors.password ? ' hover:border-[#CB1D1D]' : ' '}`}
					/>
					{errors.password ? (
						<p className="text-red-600 h-[24rem] text-[15rem]">{errors.password?.message}</p>
					) : null}
				</div>
				<div className="relative mb-[32rem] lg:mb-[48rem]">
					<div
						className="absolute translate-x-[305rem] translate-y-[14rem] lg:translate-x-[400rem] lg:translate-y-[18rem] cursor-pointer"
						onClick={onClickChangeType}>
						{type ? (
							<BsEyeSlash color="#AAAAAA" className="w-[20rem] h-[20rem]" />
						) : (
							<AiOutlineEye color="#AAAAAA" className="w-[20rem] h-[20rem]" />
						)}
					</div>
					<input
						placeholder="Подтвердите пароль"
						type={`${type === true ? 'password' : 'text'}`}
						onKeyDown={handleKeyDown}
						{...register('password2', {
							onChange: (e) => handleChange(e),
						})}
						className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
            lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
            ${errors.password2 ? ' hover:border-[#CB1D1D]' : ' '}`}
					/>
					{errors.password2 ? (
						<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
							{errors.password2?.message}
						</p>
					) : null}
				</div>
				<div className="mb-[36rem]">
					<button
						type="submit"
						disabled={!isValid}
						className={`${
							isValid === true ? ' bg-[#FFB700]' : ' bg-[#FFB700]/50'
						} mb-[20rem] lg:mb-[24rem] w-full h-[51rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
						Сохранить
					</button>
				</div>
			</form>
		</div>
	);
};

export default ChangePassword3;
