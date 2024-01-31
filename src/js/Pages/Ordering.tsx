// import React, { useContext, useEffect } from 'react';
// import HeaderOrder from '../components/HeaderOrder';
// import { ChangePaymentData } from '../components/ChangePaymentData';
// import { Profile } from '../../App';
// import { useNavigate } from 'react-router-dom';
// import { ReactComponent as Loader } from '../../img/loader.svg';

const Ordering = () => {
// 	document.title = 'Оформление заказа';
// 	const { selectedPlan, activeSub, errorLoadCheckout } = useContext(Profile);
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		if (selectedPlan === null || activeSub) {
// 			navigate('/cabinet');
// 		}
// 	}, []);

// 	return (
// 		<div className="relative">
// 			{errorLoadCheckout === null ? (
// 				<div className="mx-[16rem]">
// 					<div className="pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden">
// 						<div
// 							className="absolute translate-y-[23rem] cursor-pointer"
// 							onClick={() => navigate('/cabinet/plans')}>
// 							<svg
// 								width="18"
// 								height="15"
// 								viewBox="0 0 18 15"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z"
// 									fill="#1F2117"
// 								/>
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z"
// 									fill="#1F2117"
// 								/>
// 							</svg>
// 						</div>
// 						<div className="my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]">
// 							Оформление заказа
// 						</div>
// 					</div>
// 					{/* <HeaderOrder /> */}
// 					<div className="mt-[121rem] lg:mt-[171rem] lg:translate-x-[300rem] lg:absolute text-center w-full lg:w-max h-[270rem] text-[18rem] lg:text-[18rem] text-black flex items-center jusitfy-center gap-[15rem] flex-col lg:flex-row">
// 						<div>Устанавливается связь с платежным шлюзом</div>
// 						<div className="w-[32rem] h-[32rem] ">
// 							<Loader />
// 						</div>
// 					</div>
// 				</div>
// 			) : errorLoadCheckout === true ? (
// 				<div className="mx-[16rem]">
// 					<div className="pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden">
// 						<div
// 							className="absolute translate-y-[23rem] cursor-pointer"
// 							onClick={() => navigate('/cabinet/plans')}>
// 							<svg
// 								width="18"
// 								height="15"
// 								viewBox="0 0 18 15"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z"
// 									fill="#1F2117"
// 								/>
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z"
// 									fill="#1F2117"
// 								/>
// 							</svg>
// 						</div>
// 						<div className="my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]">
// 							Оформление заказа
// 						</div>
// 					</div>
// 					{/* <HeaderOrder /> */}
// 					<div className="mt-[151rem] lg:mt-[171rem] mx-[16rem] lg:absolute lg:translate-x-[300rem] text-center lg:w-max h-[300rem] text-[18rem] text-red-600 flex items-center jusitfy-center gap-[15rem] flex-col">
// 						<div>
// 							<svg
// 								className="w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]"
// 								viewBox="0 0 78 78"
// 								fill="none"
// 								xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M39 75.038C58.9032 75.038 75.038 58.9032 75.038 39C75.038 19.0968 58.9032 2.96203 39 2.96203C19.0968 2.96203 2.96203 19.0968 2.96203 39C2.96203 58.9032 19.0968 75.038 39 75.038ZM39 78C60.5391 78 78 60.5391 78 39C78 17.4609 60.5391 0 39 0C17.4609 0 0 17.4609 0 39C0 60.5391 17.4609 78 39 78Z"
// 									fill="#CB1D1D"
// 								/>
// 								<path
// 									fillRule="evenodd"
// 									clipRule="evenodd"
// 									d="M26.5983 26.5983C27.1767 26.02 28.1144 26.02 28.6928 26.5983L39 36.9055L49.3072 26.5983C49.8856 26.02 50.8233 26.02 51.4017 26.5983C51.98 27.1767 51.98 28.1144 51.4017 28.6928L41.0945 39L51.4017 49.3072C51.98 49.8856 51.98 50.8233 51.4017 51.4017C50.8233 51.98 49.8856 51.98 49.3072 51.4017L39 41.0945L28.6928 51.4017C28.1144 51.98 27.1767 51.98 26.5983 51.4017C26.02 50.8233 26.02 49.8856 26.5983 49.3072L36.9055 39L26.5983 28.6928C26.02 28.1144 26.02 27.1767 26.5983 26.5983Z"
// 									fill="#CB1D1D"
// 								/>
// 							</svg>
// 						</div>
// 						<div>Проблемы на стороне платежного шлюза</div>
// 					</div>
// 				</div>
// 			) : (
// 				<>
// 					<div className="mx-[16rem] lg:mx-[0rem] lg:w-full">
// 						<div className="pt-[15rem] w-full flex flex-row relative mb-[24rem] lg:hidden">
// 							<div
// 								className="absolute translate-y-[23rem] cursor-pointer"
// 								onClick={() => navigate('/cabinet/plans')}>
// 								<svg
// 									width="18"
// 									height="15"
// 									viewBox="0 0 18 15"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg">
// 									<path
// 										fillRule="evenodd"
// 										clipRule="evenodd"
// 										d="M0 7.49151C0 7.10275 0.315151 6.7876 0.703911 6.7876H17.2961C17.6848 6.7876 18 7.10275 18 7.49151C18 7.88027 17.6848 8.19542 17.2961 8.19542H0.703911C0.315151 8.19542 0 7.88027 0 7.49151Z"
// 										fill="#1F2117"
// 									/>
// 									<path
// 										fillRule="evenodd"
// 										clipRule="evenodd"
// 										d="M7.98936 0.206171C8.26425 0.481065 8.26425 0.926756 7.98936 1.20165L1.69939 7.49162L7.98936 13.7816C8.26425 14.0565 8.26425 14.5022 7.98936 14.7771C7.71447 15.052 7.26877 15.052 6.99388 14.7771L0.206171 7.98936C-0.0687235 7.71447 -0.0687235 7.26877 0.206171 6.99388L6.99388 0.206171C7.26877 -0.0687235 7.71447 -0.0687235 7.98936 0.206171Z"
// 										fill="#1F2117"
// 									/>
// 								</svg>
// 							</div>
// 							<div className="my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[18rem] leading-[19rem] text-[#1F2117]">
// 								Оформление заказа
// 							</div>
// 						</div>
// 						<div className="hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]">
// 							Подписки
// 						</div>
// 						<div className="lg:grid lg:grid-cols-[1fr_1fr] lg:w-full">
// 							<div className="lg:ml-[50rem] mb-[24rem] lg:order-2">
// 								<p className="mb-[16rem] font-bodyalt font-[600] text-[22rem] leading-[19rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leaing-[23rem] lg:text-[#1F2117] lg:mb-[28rem]">
// 									Информация о заказе
// 								</p>
// 								<div className="w-full flex flex-row justify-between mb-[12rem] lg:w-[357rem] lg:mb-[16rem]">
// 									<div className="font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]">
// 										Вид подписки:
// 									</div>
// 									<div className="font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]">
// 										{selectedPlan?.name}
// 									</div>
// 								</div>
// 								<div className="w-full flex flex-row justify-between lg:w-[357rem]">
// 									<div className="font-bodyalt font-[400] text-[16rem] text-[#777872] leading-[17rem] lg:text-[16rem] lg:leading-[19rem]">
// 										Сумма:
// 									</div>
// 									<div className="font-bodyalt font-[400] text-[16rem] text-[#1F2117] leading-[17rem] lg:text-[20rem] lg:leading-[23rem]">{`${selectedPlan?.price} руб.`}</div>
// 								</div>
// 							</div>
// 							<div className=" lg:order-1 lg:w-[600rem] lg:border-r-[1px] lg:border-[#E4E4E4]">
// 								<div className=" mb-[16rem] font-bodyalt font-[600] text-[16rem] text-[#1F2117] leading-[19rem] lg:mb-[32rem] lg:font-body lg:text-[20rem] lg:leading-[23rem]">
// 									Способ оплаты
// 								</div>
// 								<ChangePaymentData />
// 							</div>
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
};

export default Ordering;
