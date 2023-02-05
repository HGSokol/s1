import { Dispatch, SetStateAction, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Profile } from '../../App';

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

interface SubCard {
	items: Subscribe;
	active: string | undefined;
	landing: boolean;
	setActiveCancelPopup?: Dispatch<SetStateAction<boolean>>;
	setActiveResumePopup?: Dispatch<SetStateAction<boolean>>;
	setActiveUpdatePopup?: Dispatch<SetStateAction<boolean>>;
}

export const SubCard = ({
	items,
	active,
	landing,
	setActiveCancelPopup,
	setActiveResumePopup,
	setActiveUpdatePopup,
}: SubCard) => {
	const { cardInfo, setSelectedPlan, activeSub, setReload } = useContext(Profile);
	const { isBestChoice, name, price, properties, invoicePeriod, id } = items;
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div
			onClick={() => {
				//@ts-ignore
				setSelectedPlan((prev) => ({
					...prev,
					name,
					duration: invoicePeriod!,
					price: price?.toString() as string,
					id: id!,
				}));
				if (landing && window.innerWidth >= 1024 && location.pathname !== '/') {
					navigate(`${cardInfo ? '/cabinet/ordering2' : '/cabinet/ordering'}`);
				}
			}}
			className="relative overflow-hidden rounded-[20rem] drop-shadow-drop duration-[400ms]">
			<div
				className={` bg-white  h-max w-full py-[20rem] px-[20rem] overflow-hidden border-[1px] border-transparent cursor-pointer flex flex-col justify-between rounded-[20rem] 
        ${
					landing
						? ' lg:h-[452rem]'
						: activeSub && activeSub.type === 'internal'
						? ' lg:h-[535rem]'
						: ' lg:lg:h-[452rem]'
				} lg:w-full lg:py-[40rem] lg:px-[40rem] duration-[400ms] hover:border-[1px] ${
					active === 'active' ? ' border-[#FFB700]' : 'hover:border-[#CBCBCB]'
				}`}>
				{isBestChoice === true && landing ? (
					<div
						className="
              flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150rem] h-[22rem] translate-x-[205rem] -translate-y-[0rem] font-[400] text-[12rem] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
              lg:text-[16rem] lg:h-[42rem] lg:w-[220rem] lg:top-0 lg:right-0  lg:translate-x-[60rem] lg:translate-y-[20rem] ">
						лучший выбор
					</div>
				) : isBestChoice === true && !activeSub ? (
					<div
						className="
                flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150rem] h-[22rem] translate-x-[205rem] -translate-y-[0rem] font-[400] text-[12rem] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
                lg:text-[16rem] lg:h-[42rem] lg:w-[220rem] lg:top-0 lg:right-0  lg:translate-x-[60rem] lg:translate-y-[20rem] ">
						лучший выбор
					</div>
				) : active === 'active' && !landing ? (
					<div
						className="
              flex justify-center items-center font-bodyalt absolute bg-[#FFB700] w-[150rem] h-[22rem] translate-x-[205rem] translate-y-[1rem] font-[400] text-[12rem] text-center text-[#FAFAFA] rotate-[38deg]  group-hover/card:bg-white group-hover/card:text-[#1F2117] 
              lg:text-[16rem] lg:h-[42rem] lg:w-[220rem] lg:top-0 lg:right-0  lg:translate-x-[60rem] lg:translate-y-[20rem] ">
						Активная
					</div>
				) : null}
				<div
					className="flex flex-col justify-center gap-[20rem]
        lg:gap-[24rem]">
					<p
						className="font-body font-[600] text-[24rem] leading-[28.18rem] text-[#1F2117] text-start 
          lg:text-[40rem] lg:leading-[46.96rem] lg:text-center">
						{`${price} руб./${
							invoicePeriod === 1 ? 'мес.' : invoicePeriod === 3 ? '3 мес.' : 'год'
						}`}
					</p>
					<div className="flex flex-col gap-[15rem] lg:gap-[24rem]">
						{properties?.card?.map((e, i) => {
							return (
								<div key={i} className="flex flex-row items-start">
									<div className="lg:pt-[3rem]">
										<svg
											className="w-[20rem] h-[20rem] mr-[12rem] lg:w-[24rem] lg:h-[24rem] lg:mr-[24rem]"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M19.6711 6.34571C20.1096 6.80666 20.1096 7.554 19.6711 8.01494L10.5015 17.6543C10.0631 18.1152 9.35214 18.1152 8.91366 17.6543L4.32886 12.8346C3.89038 12.3737 3.89038 11.6263 4.32886 11.1654C4.76735 10.7044 5.47827 10.7044 5.91675 11.1654L9.7076 15.1504L18.0832 6.34571C18.5217 5.88476 19.2327 5.88476 19.6711 6.34571Z"
												fill="#FFB700"
											/>
										</svg>
									</div>
									<div
										className="text-start font-bodyalt font-[400] text-[14rem] leading-[16.71rem] text-[#777872]  
                  lg:text-[22rem] lg:leading-[32rem]">
										{e}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="">
					{activeSub && activeSub.type === 'internal' ? (
						<>
							{active && !landing && activeSub && activeSub.endsAt === null ? (
								<div
									onClick={() => {
										setActiveCancelPopup?.(true);
										setReload(true);
									}}
									className="font-bodyalt font-[600] text-[12rem] leading-[14rem] text-[#1F2117] mr-[13rem]
                      lg:text-[16rem] lg:leading-[19rem] h-[51rem] mt-[16rem] border-[1px] border-[#1F2117] w-full rounded-full bg-white flex flex-row justify-center items-center lg:h-[56rem] hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
									Отключить автопродление
								</div>
							) : activeSub && activeSub.endsAt && active && !landing ? (
								<div
									onClick={() => {
										setActiveResumePopup?.(true);
										setReload(true);
									}}
									className="h-[51rem] mt-[16rem] w-full rounded-full bg-[#FFB700] flex flex-row justify-center items-center lg:h-[56rem] hover:bg-[#F0AD04]">
									<p
										className="font-bodyalt font-[600] text-[12rem] leading-[14rem] text-[#FAFAFA] mr-[13rem]
                      lg:text-[16rem] lg:leading-[19rem] ">
										Включить автопродление
									</p>
								</div>
							) : !landing && activeSub ? (
								<div
									onClick={() => {
										setActiveUpdatePopup?.(true);
										setReload(true);
									}}
									className="font-bodyalt font-[600] text-[12rem] leading-[14rem] text-[#1F2117] mr-[13rem]
                    lg:text-[16rem] lg:leading-[19rem] h-[51rem] mt-[16rem] border-[1px] border-[#1F2117] w-full rounded-full bg-white flex flex-row justify-center items-center lg:h-[56rem] hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
									Сменить подписку
								</div>
							) : null}
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};
