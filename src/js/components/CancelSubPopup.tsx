import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Profile } from '../../App';
import { ReactComponent as Loader } from '../../img/loader.svg';

interface Props {
	setActiveCancelPopup: Dispatch<SetStateAction<boolean>>;
}

export const CancelSubPopup = (props: Props) => {
	const { activeSub, setReload } = useContext(Profile);
	const [load, setLoad] = useState(false);
	const { setActiveCancelPopup } = props;

	const resetSub = () => {
		setLoad(true);
		axios
			.delete(
				`https://stage.fitnesskaknauka.com/api/customer/subscriptions/internal/${activeSub?.id2}`,
			)
			.then((res) => {
				setActiveCancelPopup(false);
				setReload(true);
			})
			.catch((error) => {
				console.log(error.response.data);
				if (error.response.status === 401) {
					localStorage.clear();
				}
			})
			.finally(() => {
				setLoad(false);
			});
	};

	return (
		<div className="flex flex-col w-[343rem] h-[271rem] px-[16rem] pt-[32rem] lg:w-[604rem] lg:h-[368rem] rounded-[20rem] lg:px-[70rem] lg:py-[50rem] shadow-drop bg-white">
			<div className="text-[20rem] leading-[23rem] mb-[32rem] lg:mb-[24rem] font-body font-[600] lg:text-[26rem] lg:leading-[30rem] text-center text-[#1F2117]">
				Вы уверены, что хотите отключить автопродление подписки?
			</div>
			<div className="text-[14rem] leading-[17rem] mb-[32rem] lg:mb-[32rem] font-bodyalt font-[400] lg:text-[22rem] lg:leading-[32rem] text-center text-[#777872]">
				Подписка будет действовать до конца оплаченного периода. По истечение этого срока данные
				привязанной карты будут удалены
			</div>
			<div className="w-full grid grid-cols-2 gap-[16rem] lg:gap-[24rem]">
				<div
					onClick={() => setActiveCancelPopup(false)}
					className="flex justify-center items-center h-[51rem] text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] lg:leading-[19rem] font-bodyalt font-[400] border-[1px] border-[#1F2117] rounded-full cursor-pointer hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
					Нет
				</div>
				<button
					onClick={() => resetSub()}
					disabled={load}
					className={`flex justify-center items-center text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] text-[#FAFAFA] lg:leading-[19rem] font-bodyalt font-[400] ${
						load ? ' bg-[#FFB700]/50' : ' bg-[#FFB700]'
					} rounded-full cursor-pointer hover:duration-[200ms] hover:bg-[#F0AD04]`}>
					{!load ? (
						'Да'
					) : (
						<div className="w-[32rem] h-[32rem]">
							<Loader />
						</div>
					)}
				</button>
			</div>
		</div>
	);
};
