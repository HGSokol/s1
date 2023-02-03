import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Profile } from '../App';
import { Checkout } from '../util/Checkout';
import CardIcon from './CardIcon';
import { ReactComponent as Loader } from '../images/loader.svg';

const schema = yup
	.object({
		cardNumber: yup.string(),
		date: yup.string(),
		cvv: yup.number(),
	})
	.required();

interface IFormInputs {
	cardNumber: string;
	date: string;
	cvv: string;
}

interface ChangeCard {
	ChangeCard?: boolean;
}

export const ChangePaymentData = (props?: ChangeCard) => {
	const { setCardInfo, activeSub, selectedPlan, setYandexToken } = useContext(Profile);
	const navigate = useNavigate();
	const refNumberCard = useRef<HTMLInputElement | null>(null);
	const refDateCard = useRef<HTMLInputElement | null>(null);
	const [load, setLoad] = useState(false);
	const errorNumber = useRef<string | null>(null);
	const errorMonth = useRef<string | null>(null);
	const errorCVC = useRef<string | null>(null);

	const [numberCard, setNumberCard] = useState('');
	const [dateCard, setDateCard] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = (data: IFormInputs) => {
		const { cvv } = data;
		const cardInfo = {
			numberCard: numberCard.replace(/\s+/g, ''),
			dateCard: {
				month: dateCard.slice(0, 2),
				year: dateCard.slice(3, 5),
			},
			cvv,
		};
		setCardInfo(cardInfo);
		errorNumber.current = null;
		errorMonth.current = null;
		errorCVC.current = null;
		// setDateCard('')
		// reset()

		if (selectedPlan || activeSub) {
			setLoad(true);
			Checkout(cardInfo)
				.then((res) => {
					console.log(res);
					if (res.status === 'success') {
						console.log(res.data, 'ответ яндекса');
						setYandexToken(res.data.response.paymentToken);
						navigate('/cabinet/ordering3');
					}
					if (res.status === 'error') {
						console.log(res.status);
						res.error.params.forEach((e: any) => {
							if (e.code === 'invalid_number') {
								errorNumber.current = e.message;
							}
							if (e.code === 'invalid_expiry_month') {
								errorMonth.current = e.message;
							}
							if (e.code === 'invalid_cvc') {
								errorCVC.current = e.message;
							}
						});
					}
				})
				.finally(() => {
					setLoad(false);
				});
		}

		// axios.post('https://stage.fitnesskaknauka.com/api/auth/send-reset-code', userInfo)
		// .then((res) => {
		//   console.log(res)
		//   navigate("/login/step2");
		// })
		// .catch((error) => {
		//   console.log(error)
		//   setErrorMessage(error.response.data.message)
		//   reset()

		// })
	};

	const handleSubmitNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		let cardCode: any = refNumberCard?.current?.value.replace(/[^\d]/g, '').substring(0, 16);
		cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';

		setNumberCard(cardCode);
	};
	const handleSubmitDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		let cardCode: any = refDateCard?.current?.value.replace(/[^\d]/g, '').substring(0, 4);
		cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : '';

		setDateCard(cardCode);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-full lg:mx-[0rem]  lg:w-[441rem]">
				<div className="">
					<div className="relative">
						<p className="font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]">
							Номер карты
						</p>
						<div
							className={`absolute translate-x-[295rem] ${
								numberCard[0] === '2'
									? ' translate-y-[21rem] lg:translate-y-[24rem]'
									: 'translate-y-[14rem] lg:translate-y-[18rem]'
							} w-[20rem] h-[12rem] lg:translate-x-[390rem]`}>
							<CardIcon cardNumber={numberCard} />
						</div>
					</div>
					<div>
						<input
							ref={refNumberCard}
							value={numberCard}
							onChange={handleSubmitNumber}
							maxLength={19}
							minLength={19}
							placeholder="XXXX XXXX XXXX XXXX"
							type="text"
							className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                `}
						/>
						{errorNumber ? (
							<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
								{errorNumber.current}
							</p>
						) : null}
					</div>
				</div>
				<div className="w-full grid grid-cols-2 gap-[16rem] mb-[4rem]">
					<div>
						<p className="font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]">
							Дата окончания
						</p>
						<div>
							<input
								ref={refDateCard}
								value={dateCard}
								onChange={handleSubmitDate}
								placeholder="ММ/ГГ"
								type="text"
								maxLength={5}
								minLength={5}
								className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}
							/>
							{errorMonth ? (
								<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
									{errorMonth.current}
								</p>
							) : null}
						</div>
					</div>
					<div>
						<p className="font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] mb-[8rem] lg:text-[16rem] lg:leading-[19rem]">
							CVV
						</p>
						<div>
							<input
								placeholder="CVV"
								type="text"
								maxLength={3}
								minLength={3}
								{...register('cvv')}
								className={`font-bodyalt font-[400] leading-[14rem] text-[#1F2117] text-[14rem] hover:border-[#777872] outline-none w-full h-[50rem] px-[16rem] rounded-[8rem] bg-white border-[1px] border-[#1F211714] placeholder:text-[14rem] placeholder:font-[400] placeholder:text-[#AAAAAA] 
                  lg:text-[16rem] lg:h-[56rem] lg:placeholder:text-[16rem] lg:px-[16rem] lg:rounded-[8rem]
                  `}
							/>
							{errorCVC ? (
								<p className="text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]">
									{errorCVC.current}
								</p>
							) : null}
						</div>
					</div>
				</div>
				<div className="mb-[32rem]">
					<p className="font-bodyalt font-[400] text-[14rem] leading-[14rem] text-[#AAAAAA] lg:text-[16rem] lg:leading-[19rem]">
						Для привязки вашей карты с нее будут списаны средства в размере 1 рубля и возвращены
						обратно
					</p>
				</div>
				{/* {
            errorMessage ? (<p className='text-center text-[#CB1D1D] h-[24rem] text-[11rem] lg:text-[15rem]'>{errorMessage}</p>) : null
          } */}
				<div>
					<button
						type="submit"
						disabled={load}
						className={`${
							load ? ' bg-[#FFB700]/50' : ' bg-[#FFB700]'
						} mb-[30rem] lg:mb-[24rem] w-full h-[51rem] flex items-center justify-center rem-[18rem] text-[16rem] text-white font-[600] rounded-[40rem] lg:h-[56rem] lg:py-[16rem] lg:rem-[24rem] lg:text-[16rem]`}>
						{!load ? (
							activeSub ? (
								<p>Изменить карту</p>
							) : (
								<p>Оплатить</p>
							)
						) : (
							<div className="w-[32rem] h-[32rem]">
								<Loader />
							</div>
						)}
					</button>
				</div>
			</form>
		</>
	);
};
