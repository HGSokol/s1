import React, { useContext, useEffect, useState } from 'react';
import HeaderOrder from '../components/HeaderOrder';
import { ChangePaymentData } from '../components/ChangePaymentData';
import { Profile } from '../../App';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Loader } from '../../img/loader.svg';

const Ordering = () => {
	document.title = 'Оформление заказа';
	const { selectedPlan, activeSub, errorLoadCheckout } = useContext(Profile);

	const navigate = useNavigate();

	useEffect(() => {
		if (selectedPlan === null || activeSub) {
			navigate('/cabinet');
		}
	}, []);
	console.log(errorLoadCheckout);

	return (
		<div className="relative">
			{errorLoadCheckout === null ? (
				<div className="mx-[16rem]">
					<HeaderOrder />
					<div className="mt-[121rem] lg:mt-[171rem] lg:translate-x-[300rem] absolute text-center lg:w-max h-[200rem] text-[16rem] lg:text-[18rem] text-black flex items-center jusitfy-center gap-[15rem] flex-row">
						<div>Устанавливается связь с платежным шлюзом</div>
						<div className="w-[32rem] h-[32rem] ">
							<Loader />
						</div>
					</div>
				</div>
			) : errorLoadCheckout === true ? (
				<div className="mx-[16rem]">
					<HeaderOrder />
					<div className="mt-[151rem] lg:mt-[171rem] mx-[16rem] lg:translate-x-[300rem] text-center lg:w-max h-[300rem] text-[18rem] text-red-600 flex items-center jusitfy-center gap-[15rem] flex-col">
						<div>
							<svg
								className="w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]"
								viewBox="0 0 78 78"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M39 75.038C58.9032 75.038 75.038 58.9032 75.038 39C75.038 19.0968 58.9032 2.96203 39 2.96203C19.0968 2.96203 2.96203 19.0968 2.96203 39C2.96203 58.9032 19.0968 75.038 39 75.038ZM39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78Z"
									fill="#CB1D1D"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M26.5983 26.5983C27.1767 26.02 28.1144 26.02 28.6928 26.5983L39 36.9055L49.3072 26.5983C49.8856 26.02 50.8233 26.02 51.4017 26.5983C51.98 27.1767 51.98 28.1144 51.4017 28.6928L41.0945 39L51.4017 49.3072C51.98 49.8856 51.98 50.8233 51.4017 51.4017C50.8233 51.98 49.8856 51.98 49.3072 51.4017L39 41.0945L28.6928 51.4017C28.1144 51.98 27.1767 51.98 26.5983 51.4017C26.02 50.8233 26.02 49.8856 26.5983 49.3072L36.9055 39L26.5983 28.6928C26.02 28.1144 26.02 27.1767 26.5983 26.5983Z"
									fill="#CB1D1D"
								/>
							</svg>
						</div>
						<div>Проблемы на стороне платежного шлюза</div>
					</div>
				</div>
			) : (
				<>
					<div className="mx-[16rem] lg:mx-[0rem] lg:w-full">
						<HeaderOrder />
						<div className="hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]">
							Подписки
						</div>
						<div className="">
							<p className="mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]">
								Оформление заказа
							</p>
						</div>
						<div className="lg:grid lg:grid-cols-[1fr_1fr] lg:w-full">
							<div className="mb-[24rem] lg:order-2">
								<p className="mb-[16rem] font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leaing-[23rem] lg:text-[#1F2117] lg:mb-[28rem]">
									Информация о заказе
								</p>
								<div className="w-full flex flex-row justify-between mb-[12rem] lg:w-[357rem] lg:mb-[16rem]">
									<div className="font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]">
										Вид подписки:
									</div>
									<div className="font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]">
										{selectedPlan?.name}
									</div>
								</div>
								<div className="w-full flex flex-row justify-between lg:w-[357rem]">
									<div className="font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]">
										Сумма:
									</div>
									<div className="font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]">{`${selectedPlan?.price} руб.`}</div>
								</div>
							</div>
							<div className=" lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]">
								<div className=" mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]">
									Способ оплаты
								</div>
								<ChangePaymentData />
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Ordering;
