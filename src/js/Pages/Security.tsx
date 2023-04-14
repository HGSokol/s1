import React, { useContext, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { Profile } from '../../App';
import { handleKeyDown, handleChange } from '../Pages/LoginForm';

interface IFormInputs {
	password: number;
	newPassword: string;
	newPasswordConfirmation: string;
}

const schema = yup
	.object({
		password: yup.string().min(8).required('Обязательное поле'),
		newPassword: yup.string().min(8).required('Обязательное поле'),
		newPasswordConfirmation: yup.string().min(8).required('Обязательное поле'),
	})
	.required();

const Security = () => {
	document.title = 'Безопасность';
	const { deviceName, user, reload, setReload, setUser } = useContext(Profile);
	const [type, setType] = useState(true);
	const navigate = useNavigate();
	const [errPasswod, setErrPassword] = useState<string | null>(null);
	const [errNewPasswod, setErrNewPassword] = useState<string | null>(null);
	const [errNewPasswodConfirm, setErrNewPasswordConfirm] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		formState: { isValid },
		reset,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onClickChangeType = () => {
		setType((prev) => !prev);
	};

	const onSubmit = (data: IFormInputs) => {
		setErrPassword(null);
		setErrNewPassword(null);
		setErrNewPasswordConfirm(null);

		const fetchData = {
			...data,
			deviceName,
		};

		axios
			.put('/api/auth/change-password', fetchData)
			.then((res) => {
				localStorage.setItem(
					'user',
					JSON.stringify({
						token: res.data.token,
					}),
				);

				axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

				setReload(true);
				reset();
			})
			.catch((err) => {
				if (err.response.status === 503) {
					localStorage.clear();
					navigate('/maintenance');
				}
				if (err.response.status === 422) {
					if (err.response.data.errors && err.response.data.errors.password) {
						setErrPassword(err.response.data.errors.password);
					}
					if (err.response.data.errors && err.response.data.errors.newPassword) {
						setErrNewPassword(err.response.data.errors.newPassword);
					}
					if (err.response.data.errors && err.response.data.errors.newPasswordConfirmation) {
						setErrNewPasswordConfirm(err.response.data.errors.newPasswordConfirmation);
					}
				}
				if (err.response.status === 401) {
					localStorage.clear();
					navigate('/');
				}
			});
	};

	return (
		<>
			<div className="mx-[16rem] lg:mx-[0rem]">
				<div className="pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden">
					<div
						className="absolute translate-y-[23rem] cursor-pointer"
						onClick={() => navigate('/cabinet')}>
						<svg
							width="18"
							height="15"
							viewBox="0 0 18 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z"
								fill="#1F2117"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z"
								fill="#1F2117"
							/>
						</svg>
					</div>
					<div className="my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]">
						Безопасность
					</div>
				</div>
				<div className="hidden lg:flex font-body font-[600] text-[40rem] leading-[47rem] text-[#1F2117] mb-[32rem]">
					Безопасность
				</div>
				{user && user?.isExternalRegistration ? (
					<p className="font-bodyalt font-[600] text-[16rem] leaing-[19rem] text-[#1F2117] mb-[24rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:text-[#1F2117] lg:leading-[30rem] lg:mb-[32rem]">
						Вы зарегистрированы через внешний сервис
					</p>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="w-full lg:w-[1000rem]">
							<p className="font-bodyalt font-[600] text-[22rem] leaing-[19rem] text-[#1F2117] mb-[24rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:text-[#1F2117] lg:leading-[30rem] lg:mb-[32rem]">
								Изменение пароля
							</p>
							<div className="flex flex-col gap-[20rem] w-full lg:flex-row lg:flex-wrap lg:gap-[20rem] lg:w-[1000rem]">
								<div className="relative lg:w-[441rem]">
									<div
										className="absolute translate-x-[305rem] translate-y-[47rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer"
										onClick={onClickChangeType}>
										{type ? (
											<BsEyeSlash color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										) : (
											<AiOutlineEye color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										)}
									</div>
									<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:mb-[14rem]">
										Старый пароль
									</p>
									<input
										onKeyDown={handleKeyDown}
										{...register('password', {
											onChange: (e) => handleChange(e),
										})}
										placeholder="Введите старый пароль"
										type={`${type === true ? 'password' : 'text'}`}
										className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                      lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]`}
									/>
									{errPasswod ? (
										<p className="text-red-600 h-[24rem] text-[15rem]">{errPasswod}</p>
									) : null}
								</div>
								<div className="relative lg:w-[441rem]">
									<div
										className="absolute translate-x-[305rem] translate-y-[47rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer"
										onClick={onClickChangeType}>
										{type ? (
											<BsEyeSlash color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										) : (
											<AiOutlineEye color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										)}
									</div>
									<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:mb-[14rem]">
										Введите новый пароль
									</p>
									<input
										onKeyDown={handleKeyDown}
										{...register('newPassword', {
											onChange: (e) => handleChange(e),
										})}
										placeholder="Введите новый пароль"
										type={`${type === true ? 'password' : 'text'}`}
										className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                      lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                      `}
									/>
									{errNewPasswod ? (
										<p className="text-red-600 h-[24rem] text-[15rem]">{errNewPasswod}</p>
									) : null}
								</div>
								<div className="relative lg:flex lg:flex-col lg:w-[441rem]">
									<div
										className="absolute translate-x-[305rem] translate-y-[47rem] lg:translate-x-[400rem] lg:translate-y-[50rem] cursor-pointer"
										onClick={onClickChangeType}>
										{type ? (
											<BsEyeSlash color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										) : (
											<AiOutlineEye color="#AAAAAA" className="w-[20rem] h-[20rem]" />
										)}
									</div>
									<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:mb-[14rem]">
										Повторите новый пароль
									</p>
									<input
										onKeyDown={handleKeyDown}
										{...register('newPasswordConfirmation', {
											onChange: (e) => handleChange(e),
										})}
										placeholder="Введите новый пароль"
										type={`${type === true ? 'password' : 'text'}`}
										className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                      lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                      `}
									/>
									{errNewPasswodConfirm ? (
										<p className="text-red-600 h-[24rem] text-[15rem]">{errNewPasswodConfirm}</p>
									) : null}
								</div>
							</div>
							<div className="mt-[32rem] mb-[15rem] lg:mb-[26rem] w-full lg:w-[441rem]">
								<button
									type="submit"
									disabled={!isValid}
									className={` font-bodyalt bg-[#FFB700] lg:mb-[24rem] w-full h-[51rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]
                      ${!isValid ? ' bg-yellow-300' : ' bg-[#FFB700]'}`}>
									Изменить пароль
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</>
	);
};

export default Security;
