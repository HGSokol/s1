import React, { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../../App';
import { ReactComponent as Loader } from '../../img/loader.svg';

interface Props {
	setActiveContinueSubPopup: Dispatch<SetStateAction<boolean>>;
}

export const ContinueSubPopup = (props: Props) => {
	const { setReload, activeSub } = useContext(Profile);
	const navigate = useNavigate();
	const [load, setLoad] = useState(false);
	const [errorResumeSub, setErrorResumeSub] = useState<string | null>(null);
	const [continueAgree, setContinueAgree] = useState(false);
	const { setActiveContinueSubPopup } = props;

	const onClickResumeSub = () => {
		setLoad(true);
		axios
			.put(`https://stage.fitnesskaknauka.com/api/customer/invoices/${activeSub?.error}`)
			.then((res) => {
				setReload(true);
				setContinueAgree(true);
				console.log(res, 'gjgsnrf cgbcfybz');
			})
			.catch((error) => {
				console.log(error.response.data);
				setErrorResumeSub(error.response.data.message);
			})
			.finally(() => {
				setLoad(false);
				setReload(true);
			});
	};

	return (
		<div className="flex flex-col w-[343rem] h-[223rem] px-[20rem] pt-[32rem] lg:w-[604rem] lg:h-[340rem] rounded-[20rem] lg:px-[80rem] lg:py-[70rem] shadow-drop bg-white">
			{continueAgree ? (
				<>
					<div className="font-bodyalt font-[600] text-[22rem] text-[#1F2117] leading-[26rem] flex flex-col justify-center items-center">
						<div className="mb-[22rem]">
							<svg
								className="w-[60rem] h-[60rem] lg:w-[78rem] lg:h-[78rem]"
								viewBox="0 0 61 60"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M30.5 57.7215C45.8102 57.7215 58.2215 45.3102 58.2215 30C58.2215 14.6898 45.8102 2.27848 30.5 2.27848C15.1898 2.27848 2.77848 14.6898 2.77848 30C2.77848 45.3102 15.1898 57.7215 30.5 57.7215ZM30.5 60C47.0685 60 60.5 46.5685 60.5 30C60.5 13.4315 47.0685 0 30.5 0C13.9315 0 0.5 13.4315 0.5 30C0.5 46.5685 13.9315 60 30.5 60Z"
									fill="#009245"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M43.0981 22.0002C43.5314 22.4563 43.513 23.1774 43.0568 23.6108L27.8669 38.0411C27.4272 38.4589 26.7373 38.4589 26.2976 38.0411L18.7027 30.8259C18.2465 30.3926 18.228 29.6715 18.6614 29.2153C19.0947 28.7592 19.8158 28.7407 20.272 29.174L27.0823 35.6438L41.4875 21.9589C41.9437 21.5255 42.6647 21.544 43.0981 22.0002Z"
									fill="#009245"
								/>
							</svg>
						</div>
						<div
							className="mb-[24rem] font-body font-[600] text-[20rem] leading-[23rem] text-center text-[#1F2117]
        lg:font-body lg:font-[600] lg:text-[26rem] lg:leading-[30rem]">
							Оплата прошла успешно
						</div>
						<div
							onClick={() => {
								setReload(true);
								setActiveContinueSubPopup(false);
							}}
							className="w-full h-[50rem] bg-[#FFB700] rounded-full flex flex-row items-center justify-center
        lg:w-[272rem] cursor-pointer">
							<div className="mr-[12rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-white ">
								Вернуться к подпискам
							</div>
							<div>
								<svg
									className="w-[18rem] h-[18rem]"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.75 12L20.25 12"
										stroke="#FAFAFA"
										strokeWidth="1.4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.5 18.75L20.25 12L13.5 5.25"
										stroke="#FAFAFA"
										strokeWidth="1.4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="text-[20rem] leading-[23rem] mb-[32rem] lg:mb-[62rem] font-body font-[600] lg:text-[26rem] lg:leading-[30rem] text-center text-[#1F2117]">
						{`${
							errorResumeSub ? errorResumeSub : 'Последняя попытка списания была неуспешной'
						}, повторить попытку?`}
					</div>
					<div className="w-full grid grid-cols-2 gap-[16rem] lg:gap-[24rem]">
						<div
							onClick={() => setActiveContinueSubPopup(false)}
							className="cursor-pointer flex justify-center items-center h-[51rem] text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] lg:leading-[19rem] font-bodyalt font-[400] border-[1px] border-[#1F2117] rounded-full hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
							Нет
						</div>
						<button
							onClick={() => onClickResumeSub()}
							disabled={load}
							className={`cursor-pointer flex justify-center items-center text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] text-[#FAFAFA] lg:leading-[19rem] font-bodyalt font-[400] rounded-full hover:duration-[200ms]  ${
								load ? ' bg-[#FFB700]/50' : ' bg-[#FFB700] hover:bg-[#F0AD04]'
							}`}>
							{!load ? (
								'Да'
							) : (
								<div className="w-[32rem] h-[32rem]">
									<Loader />
								</div>
							)}
						</button>
					</div>
				</>
			)}
		</div>
	);
};
