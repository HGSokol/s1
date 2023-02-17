import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import axios from 'axios';
import { AlternativeLogin } from '../components/AlternativeLogin';

interface IFormInputs {
	name: string;
	lastName: string;
	email: string;
	password: number;
}

const schema = yup
	.object({
		name: yup.string().required('Обязательное поле'),
		lastName: yup.string().required('Обязательное поле'),
		email: yup.string().email('Не правильный email').required('Обязательное поле'),
		password: yup.string().required('Обязательное поле'),
	})
	.required();

const Login = () => {
	const [type, setType] = useState(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [errEmail, setErrEmail] = useState<string | null>(null);
	const [errPassword, setErrPassword] = useState<string | null>(null);
	const navigate = useNavigate();

	document.title = 'Регистрация';

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = (data: IFormInputs) => {
		setErrEmail(null);
		setErrPassword(null);
		const userInfo = {
			...data,
			deviceName: 'deckstop',
		};

		axios
			.post('https://stage.fitnesskaknauka.com/api/auth/register', userInfo)
			.then((res) => {
				navigate('/login');
			})
			.catch((error) => {
				console.log(error.response);
				if (error.response.status === 422) {
					if (error.response.data.errors && error.response.data.errors.email) {
						setErrEmail(error.response.data.errors.email);
					}
					if (error.response.data.errors && error.response.data.errors.password) {
						setErrPassword(error.response.data.errors.password);
					}
				}
			});
	};

	const onClickChangeType = () => {
		setType((prev) => !prev);
	};

	return (
		<div className="w-[343rem] mt-[24rem] lg:w-[441rem] mx-auto lg:mt-[109rem]">
			<h1 className="font-body font-[600] text-[22rem] leading-[26.25rem] text-center mb-[32rem] lg:text-[40rem] lg:leading-[46.96rem] lg:mb-[48rem]">
				Регистрация
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
				<div className="mb-[16rem] lg:mb-[24rem]">
					<input
						placeholder="Ваше имя"
						type="text"
						{...register('name')}
						className="px-[16rem] font-bodyalt font-[400] text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] lg:h-[56rem] lg:placeholder:text-[16rem] lg:text-[16rem]"
					/>
					{errors.name ? (
						<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
							{errors.name?.message}
						</p>
					) : null}
				</div>
				<div className="mb-[16rem] lg:mb-[24rem]">
					<input
						placeholder="Ваша фамилия"
						type="text"
						{...register('lastName')}
						className="px-[16rem] font-bodyalt font-[400] text-[14rem] outline-none w-full h-[48rem] rounded-[8rem] bg-white border-[1rem] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] hover:border-[#777872] lg:text-[16rem]  lg:h-[56rem] lg:placeholder:text-[16rem]  "
					/>
					{errors.lastName ? (
						<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
							{errors.lastName?.message}
						</p>
					) : null}
				</div>
				<div className="mb-[16rem] lg:mb-[24rem]">
					<input
						placeholder="Ваш e-mail"
						type="text"
						{...register('email')}
						className={`font-bodyalt font-[400] text-[14rem]  hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
          ${errors.email ? ' hover:border-[#CB1D1D]' : ' '}`}
					/>
					{errEmail ? <p className="text-red-600 h-[24rem] text-[15rem]">{errEmail}</p> : null}
				</div>
				<div className="relative mb-[32rem] lg:mb-[24rem]">
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
						{...register('password')}
						className={`font-bodyalt font-[400] text-[14rem] hover:border-[#777872] outline-none w-full h-[48rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
          lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
          ${errors.email ? ' hover:border-[#CB1D1D]' : ' '}`}
					/>
					{errPassword ? (
						<p className="text-red-600 h-[24rem] text-[15rem]">{errPassword}</p>
					) : null}
				</div>
				<div className="mb-[36rem]">
					<button
						type="submit"
						disabled={!isValid}
						className={`${
							isValid === true ? ' bg-[#FFB700]' : ' bg-[#FFB700]/50'
						} font-bodyalt mb-[20rem] lg:mb-[24rem] w-full h-[51rem] py-[14rem] rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
						Зарегистрироваться
					</button>
					<div className="flex flex-row justify-center rem-[8.5rem] gap-[8rem] lg:mb-[20rem]">
						<p className="font-bodyalt text-[14rem] text-[#777872] font-[400] lg:text-[16rem]">
							У вас уже есть аккаунт?{' '}
						</p>
						<Link to="/login">
							<p className="font-bodyalt text-[14rem] text-[#000000] font-[600] lg:text-[16rem]">
								Войти
							</p>
						</Link>
					</div>
				</div>
				<div className="mb-[20rem]">
					<AlternativeLogin>
						<h4 className="text-center text-[14rem] text-[#777872] font-[400] mb-[14rem] lg:mb-[24rem lg:text-[16rem]">
							Зарегистрироваться с помощь
						</h4>
					</AlternativeLogin>
				</div>
			</form>
		</div>
	);
};

export default Login;
