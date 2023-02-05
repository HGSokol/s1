import axios from 'axios';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../../App';
import { ReactComponent as Loader } from '../../img/loader.svg';

interface Props {
	setActiveUpdatePopup: Dispatch<SetStateAction<boolean>>;
}

export const UpdateSubPopup = (props: Props) => {
	const { activeSub, selectedPlan, setReload } = useContext(Profile);
	const navigate = useNavigate();
	const [load, setLoad] = useState(false);
	const { setActiveUpdatePopup } = props;

	const updateSub = () => {
		setLoad(true);
		axios
			.put(
				`https://stage.fitnesskaknauka.com/api/customer/subscriptions/internal/${activeSub?.id2}/plan/${selectedPlan?.id}`,
			)
			.then((res) => {
				// console.log(res,'ыы')
				setActiveUpdatePopup(false);
				setReload(true);
			})
			.catch((error) => {
				console.log(error.response.data);
				navigate('/cabinet');
			})
			.finally(() => {
				setLoad(false);
			});
	};

	return (
		<div className="flex flex-col w-[343rem] h-[271rem] px-[16rem] pt-[32rem] lg:w-[604rem] lg:h-[308rem] rounded-[20rem] lg:px-[70rem] lg:py-[50rem] shadow-drop bg-white">
			<div className="text-[20rem] leading-[23rem] mb-[32rem] lg:mb-[24rem] font-body font-[600] lg:text-[26rem] lg:leading-[30rem] text-center text-[#1F2117]">
				Вы действительно хотите сменить тариф
			</div>
			<div className="text-[14rem] leading-[17rem] mb-[32rem] lg:mb-[32rem] font-bodyalt font-[400] lg:text-[22rem] lg:leading-[32rem] text-center text-[#777872]">
				Ваша подписка будет заменена на новую
			</div>
			<div className="w-full grid grid-cols-2 gap-[16rem] lg:gap-[24rem]">
				<div
					onClick={() => setActiveUpdatePopup(false)}
					className="flex justify-center items-center h-[51rem] text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] lg:leading-[19rem] font-bodyalt font-[400] border-[1px] border-[#1F2117] rounded-full cursor-pointer hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
					Нет
				</div>
				<button
					onClick={() => updateSub()}
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
