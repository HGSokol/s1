import React, { useRef, ChangeEvent, useEffect, useLayoutEffect } from 'react';
import { useState, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeSlash } from 'react-icons/bs';
import axios from 'axios';
import { Profile } from '../../App';
import UnknownUser from '../../img/unknownUser.png';

interface IFormInputs {
	avatar: File;
	name: string;
	lastName: string;
}

const CabinetInfo = () => {
	const { user, reload, setReload, setUser } = useContext(Profile);

	document.title = 'Общая информация';

	useEffect(() => {
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
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, [reload]);

	const [type, setType] = useState(true);
	const filePicker = useRef<HTMLInputElement | null>(null);
	const [nameChanges, setNamechanges] = useState(false);
	const [lastNameChanges, setLastNameChanges] = useState(false);
	const [avatar, setAvatar] = useState<File | null>(null);

	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm<IFormInputs>({ mode: 'onSubmit' });

	const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
		const { name, lastName } = data;
		let fromData = new FormData();
		fromData.append('avatar', avatar!);

		if (avatar) {
			axios
				.put('https://stage.fitnesskaknauka.com/api/customer', fromData)
				.then((res) => {
					setReload(true);
					setAvatar(null);
				})
				.catch((err) => {
					console.log(err.response.data);
				});
		}

		axios
			.put('https://stage.fitnesskaknauka.com/api/customer', {
				name: name === '' ? user?.name : name,
				lastName: lastName === '' ? user?.lastName : lastName,
			})
			.then((res) => {
				setReload(true);
				setNamechanges(false);
				setLastNameChanges(false);
			})
			.catch((err) => {
				console.log(err.response.data);
			});

		reset();
	};

	const onClickChangeType = () => {
		setType((prev) => !prev);
	};

	// update img
	const getPhoto = async (data: ChangeEvent<HTMLInputElement>) => {
		// let fromData = new FormData();
		if (data.target && data.target.files && data.target.files[0]) {
			setAvatar(data.target.files[0]);
		}
	};

	const getPhotoTest = () => {
		filePicker?.current?.click();
	};

	return (
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
					Общая информация
				</div>
			</div>
			<div className="hidden lg:flex font-body font-[600] text-[40rem] leading-[47rem] text-[#1F2117] mb-[32rem]">
				Общая информация
			</div>
			<form className="upload" onSubmit={handleSubmit(onSubmit)}>
				<div
					onClick={getPhotoTest}
					className={`cursor-pointer mb-[20rem] w-full p-[16rem] flex flex-row items-center bg-[#FFFFFF] border-[1px] ${
						avatar !== null ? ' border-[#009245]' : ' border-[#1F211714] hover:border-[#777872]'
					}  rounded-[8rem] lg:mb-[20rem] lg:w-[441rem] lg:p-[16rem] lg:flex lg:flex-row lg:items-center lg:bg-[#FFFFFF] lg:border-[1px] lg:border-[rgba(31_33_23_0.08)] lg:rounded-[8rem]`}>
					<div className="w-[60rem] h-[60rem] mr-[20rem] lg:mr-[28rem]">
						{!user?.avatar ? (
							<img
								src={UnknownUser}
								alt="avatar"
								className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]"
							/>
						) : (
							<img
								src={user.avatar}
								alt="avatar"
								className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]"
							/>
						)}
					</div>
					<div className="mr-[14rem] lg:mr-[16rem]">
						<input
							type="file"
							name="uploadFile"
							className="overflow-hidden opacity-0 h-[0rem] w-[0rem] leading-[0rem] p-[0rem] m-[0rem]"
							accept=".jpg,.jpeg,.png"
							// {...register('avatar')}
							ref={filePicker}
							onChange={getPhoto}
						/>
						<svg
							className="w-[24rem] h-[24rem] "
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.0625 10.3125L12 14.25L15.9375 10.3125"
								stroke="#FFB700"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12 3.75V14.25"
								stroke="#FFB700"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
								stroke="#FFB700"
								strokeWidth="1.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className="w-[189rem] font-bodyalt font-[400] text-[16rem] text-[#1F2117]/60 leading-[19rem] lg:w-max lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#1F2117]/60 lg:leading-[19rem]">
						Загрузить другое изображение
					</div>
				</div>
				<div className="flex flex-col gap-[16rem] w-full mb-[24rem] lg:flex lg:flex-row lg:flex-wrap lg:gap-[20rem] lg:w-[1000rem] lg:mb-[48rem]">
					<div className="w-full lg:w-[441rem]">
						<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#AAAAAA] lg:leading-[19rem] lg:mb-[14rem]">
							Имя
						</p>
						<input
							{...register('name', {
								onChange: (e) => {
									e.target.value !== '' ? setNamechanges(true) : setNamechanges(false);
								},
							})}
							placeholder={user?.name !== null ? user?.name : ''}
							className={`flex items-center text-[14rem] placeholder:text-[#1F2117] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] 
								lg:text-[16rem] lg:h-[56rem] lg:px-[16rem] lg:rounded-[8rem]
                ${
									nameChanges ? ' border-[#009245]' : ' border-[#1F211714] hover:border-[#777872]'
								}`}></input>
					</div>
					<div className="w-full lg:w-[441rem]">
						<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#AAAAAA] lg:leading-[19rem] lg:mb-[14rem]">
							Фамилия
						</p>
						<input
							{...register('lastName', {
								onChange: (e) => {
									e.target.value !== '' ? setLastNameChanges(true) : setLastNameChanges(false);
								},
							})}
							placeholder={user?.lastName !== null ? user?.lastName : ''}
							className={`flex items-center text-[14rem] placeholder:text-[#1F2117]  outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] 
								lg:text-[16rem] lg:h-[56rem] lg:px-[16rem] lg:rounded-[8rem]
                ${
									lastNameChanges
										? ' border-[#009245]'
										: ' border-[#1F211714] hover:border-[#777872]'
								}`}></input>
					</div>
					<div className="w-full lg:w-[441rem]">
						<p className="font-bodyalt font-[400] text-[14rem] text-[#AAAAAA] leading-[19rem] mb-[12rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:text-[#AAAAAA] lg:leading-[19rem] lg:mb-[14rem]">
							E-mail
						</p>
						<div
							className="flex items-center text-[14rem]  hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] 
								lg:text-[16rem] lg:h-[56rem] lg:px-[16rem] lg:rounded-[8rem]">
							{user?.email}
						</div>
					</div>
				</div>
				<div className="w-full lg:w-[1000rem]">
					<p className="font-bodyalt font-[600] text-[16rem] leaing-[19rem] text-[#1F2117] mb-[24rem] lg:font-body lg:font-[600] lg:text-[26rem] lg:text-[#1F2117] lg:leading-[30rem] lg:mb-[32rem]">
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
								placeholder="Введите старый пароль"
								type={`${type === true ? 'password' : 'text'}`}
								className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
								lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]`}
							/>
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
								placeholder="Введите новый пароль"
								type={`${type === true ? 'password' : 'text'}`}
								className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
								lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
								`}
							/>
							{/* {errors.password ? (
								<p className="text-red-600 h-[24rem] text-[15rem]">{errors.password?.message}</p>
							) : null} */}
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
								placeholder="Введите новый пароль"
								type={`${type === true ? 'password' : 'text'}`}
								className={`text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
								lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem] mb-[32rem]
								`}
							/>
							{/* {errors.password2 ? (
								<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
									{errors.password2?.message}
								</p>
							) : null} */}
							<div className="mb-[15rem] lg:mb-[26rem]">
								{/* {oldPassError ? (
									<p className="lg:text-red-600 lg:h-[24rem] lg:text-[15rem]">{oldPassError}</p>
								) : null} */}
								<button
									type="submit"
									disabled={!nameChanges && !lastNameChanges && !avatar}
									className={` font-bodyalt bg-[#FFB700] lg:mb-[24rem] w-full h-[51rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]
                  ${
										!nameChanges && !lastNameChanges && !avatar ? ' bg-yellow-300' : ' bg-[#FFB700]'
									}`}>
									Изменить пароль
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CabinetInfo;
