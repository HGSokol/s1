import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChangeCardPopup } from '../components/ChangeCardPopup';
import { CancelSubPopup } from '../components/CancelSubPopup';
import { ResumeSubPopup } from '../components/ResumeSubPopup';
import { UpdateSubPopup } from '../components/UpdateSubPopup';
import { SubCard } from '../components/SubCard';
import { ActiveSub, Profile } from '../../App';
import axios from 'axios';
import { CardInfo } from '../components/CardInfo';

export type Sub = {
	text: string[];
	price: string;
	top?: string;
	active?: string;
	info?: ActiveSub;
};

interface Subscribe {
	currency?: string;
	description?: string;
	id?: number;
	invoicePeriod?: number;
	isBestChoice?: boolean;
	name?: string;
	price?: number;
	productId?: string;
	properties?: {
		card?: string[];
		pricePerMonth?: number;
	};
	tier?: number;
	trialPeriod?: number;
}

const Subs = () => {
	const { activeSub, setReload } = useContext(Profile);
	const navigate = useNavigate();
	const [activeChangeCardPopup, setActiveChangeCardPopup] = useState(false);
	const [activeCancelSubPopup, setActiveCancelPopup] = useState(false);
	const [activeResumeSubPopup, setActiveResumePopup] = useState(false);
	const [activeUpdateSubPopup, setActiveUpdatePopup] = useState(false);
	const [sub, setSub] = useState<Subscribe[] | null>(null);

	useEffect(() => {
		if (!activeSub) {
			setActiveChangeCardPopup(false);
			setActiveCancelPopup(false);
			setActiveResumePopup(false);
			setActiveUpdatePopup(false);
			navigate('/cabinet/changeSubs');
		}
	}, []);

	useEffect(() => {
		axios
			.get('https://stage.fitnesskaknauka.com/api/plans')
			.then((res) => {
				setSub(res.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}, []);

	return (
		<div className="mx-[16rem] lg:mx-[0rem]">
			{activeSub?.isFromApple ? (
				<>
					<div className="w-full flex flex-row relative mb-[24rem] lg:hidden">
						<div className="absolute translate-y-[20.5rem]" onClick={() => navigate('/cabinet')}>
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
						<div className="my-[20.5rem] w-full text-center font-bodyalt font-[600] text-[16rem] leading-[19rem] text-[#1F2117]">
							Подписки
						</div>
					</div>
					<div className="hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]">
						Подписки
					</div>
					<p className="mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]">
						Текущая подписка
					</p>
					<div className=" mb-[24rem] flex flex-col gap-[24rem] lg:flex-row lg:justify-between lg:mb-[48rem] lg:w-[472rem]">
						<div className="w-full flex justify-between items-center lg:items-start flex-row lg:flex-col lg:justify-start">
							<p className="font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[20rem] lg:leading-[23rem] lg:text-[#1F2117] lg:mb-[12rem]">
								{activeSub?.name}
							</p>
							<p className="font-bodyalt font-[400] text-[14rem] leading-[17rem] text-[#777872] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:text-[#777872]">{`${
								activeSub?.price
							} руб/${
								activeSub?.duration === 1 ? 'мес.' : activeSub?.duration === 3 ? '3 мес.' : 'год'
							}`}</p>
						</div>
						<div className="flex flex-row w-full gap-[16rem] items-center">
							<div>
								<svg
									className="w-[77rem] h-[45rem] lg:w-[86rem] lg:h-[52rem]"
									viewBox="0 0 77 45"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19.5056 14.4783C19.6125 12.8202 20.702 11.2697 22.3225 10.4694C22.8696 10.1993 23.4726 10 23.7432 10H24.2133L24.1262 10.8225C23.8939 13.0158 22.1406 14.9097 20.037 15.2394L19.4505 15.3314L19.5056 14.4783Z"
										fill="black"
									/>
									<path
										d="M10.0151 23.0321C9.80693 19.2996 11.7725 16.2845 14.7934 15.7021C15.9336 15.4823 16.5422 15.5768 18.5784 16.2902L19.616 16.6536L21.3259 16.0908C22.9272 15.5637 23.1084 15.5318 24.1751 15.5892C25.6668 15.6696 26.6405 16.0437 27.5923 16.9025C27.9979 17.2685 28.3299 17.626 28.3299 17.6967C28.3299 17.7675 27.9996 18.1234 27.596 18.4877C27.1155 18.9212 26.7106 19.4538 26.4233 20.0302C26.0155 20.8483 25.9846 21.0044 25.9862 22.2359C25.9878 23.3974 26.033 23.6564 26.351 24.3299C26.7517 25.1783 27.9072 26.388 28.5794 26.663C28.8108 26.7575 29 26.879 29 26.933C29 27.2944 28.0498 29.1772 27.3247 30.2525C25.4884 32.9754 24.2482 33.4997 21.8967 32.5475C20.4852 31.9758 19.6636 31.9746 17.9989 32.5421C15.9034 33.2564 15.2404 33.1713 14.0036 32.0293C11.8878 30.0755 10.1949 26.2569 10.0151 23.0321Z"
										fill="black"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M35 22.4792V29.9583L36.1505 29.9322L37.301 29.9061L37.326 27.3853L37.351 24.8643L39.4862 24.8213C41.1615 24.7876 41.7325 24.7435 42.1379 24.6168C44.6905 23.8188 46.0549 21.3962 45.4751 18.691C45.0935 16.9102 43.6465 15.468 41.875 15.1026C41.5683 15.0394 40.1536 15 38.1887 15H35V22.4792ZM41.3062 17.1333C42.0442 17.3596 42.4851 17.7111 42.8409 18.3568C43.0682 18.7694 43.1216 18.9903 43.1538 19.6527C43.2103 20.8163 43.0171 21.4088 42.3817 22.0206C41.6456 22.7294 41.3151 22.8165 39.1559 22.8708L37.348 22.9162V19.9333V16.9503H39.0287C40.4363 16.9503 40.8063 16.9801 41.3062 17.1333ZM50.3558 18.8664C48.3832 19.1687 46.9713 20.3382 46.6985 21.8958L46.6375 22.2441H47.7145H48.7916L48.8993 21.9213C49.0444 21.4865 49.7376 20.8984 50.2573 20.769C51.1283 20.552 52.0794 20.6836 52.6342 21.0977C53.1178 21.4586 53.3143 21.9363 53.3143 22.7512C53.3143 23.4154 53.3034 23.4514 53.103 23.4516C52.263 23.4522 49.6727 23.6667 49.1349 23.7802C47.8774 24.0455 46.9789 24.6298 46.5524 25.4594C46.2195 26.1071 46.1741 27.2798 46.4533 28.0159C47.2321 30.0686 50.2003 30.7791 52.2295 29.3985C52.4679 29.2363 52.8306 28.8939 53.0355 28.6375L53.4082 28.1712V29.0619V29.9525H54.491H55.5738L55.5476 25.7036L55.5214 21.4547L55.2696 20.9234C54.8346 20.0056 53.9687 19.3376 52.8131 19.0285C52.2991 18.891 50.8284 18.794 50.3558 18.8664ZM56.6015 19.0686C56.6015 19.1099 57.4908 21.5806 58.5777 24.5591L60.554 29.9746L60.3562 30.5623C59.954 31.7574 59.5337 32.0966 58.3729 32.1631L57.6346 32.2054V33.063V33.9205L58.1384 33.9791C58.8384 34.0604 60.012 33.8961 60.5834 33.6367C61.2953 33.3136 61.904 32.6472 62.3792 31.6707C62.6028 31.211 63.718 28.2388 64.8574 25.0658C65.9967 21.8929 66.9559 19.2273 66.9889 19.1423C67.0431 19.0024 66.9351 18.9903 65.8409 19.0139L64.633 19.04L63.2685 23.3586C62.518 25.7338 61.8825 27.7332 61.8562 27.8017C61.8299 27.8702 61.1781 25.9164 60.4078 23.4599L59.0074 18.9935H57.8045C57.1428 18.9935 56.6015 19.0273 56.6015 19.0686ZM53.3133 25.7036C53.3115 27.0796 52.5374 27.9901 51.1245 28.2781C49.8157 28.5449 48.6861 27.984 48.5529 27.0014C48.4833 26.488 48.5671 26.2088 48.9058 25.8274C49.3782 25.2953 50.3447 25.0948 52.6803 25.044L53.3143 25.0303L53.3133 25.7036Z"
										fill="black"
									/>
									<rect x="0.5" y="0.5" width="76" height="44" rx="5.5" stroke="#1F2117" />
								</svg>
							</div>
							<div className=" font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#777872] lg:w-[181rem]">
								Оплачено в приложении с помощью Apple Pay
							</div>
						</div>
					</div>
					<div className="w-full gap-[17rem] flex flex-row lg:gap-[15rem] lg:w-[380rem]">
						<div>
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.9993 4.13681C9.44731 4.13681 4.13583 9.44829 4.13583 16.0003C4.13583 22.5524 9.44731 27.8638 15.9993 27.8638C22.5514 27.8638 27.8629 22.5524 27.8629 16.0003C27.8629 9.44829 22.5514 4.13681 15.9993 4.13681ZM2.66602 16.0003C2.66602 8.63653 8.63555 2.66699 15.9993 2.66699C23.3631 2.66699 29.3327 8.63653 29.3327 16.0003C29.3327 23.3641 23.3631 29.3337 15.9993 29.3337C8.63555 29.3337 2.66602 23.3641 2.66602 16.0003Z"
									fill="#AAAAAA"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M16.0775 23.374C15.5252 23.374 15.0775 22.9263 15.0775 22.374L15.0775 14.374C15.0775 13.8217 15.5252 13.374 16.0775 13.374C16.6298 13.374 17.0775 13.8217 17.0775 14.374L17.0775 22.374C17.0775 22.9263 16.6298 23.374 16.0775 23.374Z"
									fill="#AAAAAA"
								/>
								<path
									d="M16.0384 11.3337C15.7732 11.3337 15.5188 11.2283 15.3313 11.0408C15.1438 10.8532 15.0384 10.5989 15.0384 10.3337C15.0384 10.0684 15.1438 9.81409 15.3313 9.62655C15.5188 9.43901 15.7732 9.33366 16.0384 9.33366C16.3036 9.33366 16.558 9.43902 16.7455 9.62655C16.9331 9.81409 17.0384 10.0684 17.0384 10.3337C17.0384 10.5989 16.9331 10.8532 16.7455 11.0408C16.558 11.2283 16.3036 11.3337 16.0384 11.3337Z"
									fill="#AAAAAA"
								/>
							</svg>
						</div>
						<div className="font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#AAAAAA]">
							Для того, чтобы оплатить подписку картой, отмените подписку в Apple
						</div>
					</div>
				</>
			) : (
				<>
					{activeChangeCardPopup ? (
						<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
							<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
								<ChangeCardPopup setActiveChangeCardPopup={setActiveChangeCardPopup} />
							</div>
						</div>
					) : null}
					{activeCancelSubPopup ? (
						<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
							<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
								<CancelSubPopup setActiveCancelPopup={setActiveCancelPopup} />
							</div>
						</div>
					) : null}
					{activeResumeSubPopup ? (
						<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
							<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
								<ResumeSubPopup setActiveResumePopup={setActiveResumePopup} />
							</div>
						</div>
					) : null}
					{activeUpdateSubPopup ? (
						<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
							<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
								<UpdateSubPopup setActiveUpdatePopup={setActiveUpdatePopup} />
							</div>
						</div>
					) : null}
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
					<div className="hidden lg:flex lg:font-body lg:font-[600] lg:text-[40rem] lg:leading-[47rem] lg:text-[#1F2117] lg:mb-[32rem]">
						Подписки
					</div>
					<p className="mb-[24rem] font-bodyalt font-[600] text-[22rem] leading-[26rem] text-[#1F2117] lg:font-body lg:font-[600] lg:text-[26rem] lg:leaing-[30rem] lg:text-[#1F2117] lg:mb-[32rem]">
						{activeSub && activeSub.type === 'free' ? 'Бесплатная подписка' : 'Способ оплаты'}
					</p>
					<div
						className={`flex flex-col lg:flex-row gap-[20rem] ${
							activeSub && activeSub.type === 'internal' ? '' : ' hidden'
						}`}>
						<div>
							<div className="w-full lg:w-[356rem]">
								<CardInfo />
							</div>
							<div className=" mb-[24rem] flex flex-col gap-[24rem] lg:flex-row lg:justify-between lg:mb-[48rem] lg:w-max ">
								<div className="">
									<button
										onClick={() => {
											setActiveChangeCardPopup(true);
											setReload(true);
										}}
										className="bg-white border-[1px] border-[#1F2117] w-full lg:w-[356rem] lg:h-[56rem] py-[14rem] text-[16rem] font-bodyalt text-[#1F2117] font-[600] rounded-[40rem] lg:px-[24rem] hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
										Изменить платежные данные
									</button>
								</div>
							</div>
						</div>
						<div>
							{activeSub && activeSub.error ? (
								<div className="text-[16rem] text-red-600 mb-[20rem]">
									<div>последняя попытка списания была не успешна</div>
									<div className=" mb-[24rem] flex flex-col gap-[24rem] lg:flex-row lg:justify-between lg:mb-[48rem] lg:w-max">
										<div className="">
											<button className="bg-white border-[1px] border-[#1F2117] w-full lg:w-[356rem] lg:h-[56rem] py-[14rem] text-[16rem] font-bodyalt text-[#1F2117] font-[600] rounded-[40rem] lg:px-[24rem] hover:duration-[200ms] tracking-[0.04em] hover:border-[#FFB700] hover:text-[#FFB700]">
												Повторить попытку с текущей карты
											</button>
										</div>
									</div>
								</div>
							) : null}
						</div>
					</div>
					<div className="mb-[30rem] flex flex-col lg:grid lg:grid-cols-3 gap-[24rem] lg:w-[1370rem] lg:gap-[40rem]">
						{sub?.map((e, i) => {
							return (
								<div key={i}>
									<SubCard
										items={e}
										active={activeSub?.price === e.price ? 'active' : undefined}
										landing={false}
										setActiveCancelPopup={setActiveCancelPopup}
										setActiveResumePopup={setActiveResumePopup}
										setActiveUpdatePopup={setActiveUpdatePopup}
									/>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default Subs;
