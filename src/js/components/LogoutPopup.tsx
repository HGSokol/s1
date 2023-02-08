import React, { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../../App';

interface Props {
	setActivePopup: Dispatch<SetStateAction<boolean>>;
}

export const LogoutPopup = (props: Props) => {
	const { setUser, setActiveSub, setSelectedPlan, setCardInfo } = useContext(Profile);
	const navigate = useNavigate();
	const { setActivePopup } = props;

	const logout = () => {
		axios.post('https://stage.fitnesskaknauka.com/api/auth/logout').then((res) => {
			setUser(null);
			setActiveSub(null);
			setSelectedPlan(null);
			setCardInfo(null);
			localStorage.clear();
			navigate('/');
		});
	};

	return (
		<div className="flex flex-col w-[343rem] h-[193rem] px-[20rem] pt-[32rem] lg:w-[604rem] lg:h-[309rem] rounded-[20rem] lg:px-[80rem] lg:py-[70rem] shadow-drop bg-white">
			<div className="text-[20rem] leading-[23rem] mb-[32rem] lg:mb-[62rem] font-body font-[600] lg:text-[26rem] lg:leading-[30rem] text-center text-[#1F2117]">
				Вы уверены, что хотите выйти?
			</div>
			<div className="w-full grid grid-cols-2 gap-[16rem] lg:gap-[24rem]">
				<div
					onClick={() => setActivePopup(false)}
					className="cursor-pointer flex justify-center items-center h-[51rem] text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] lg:leading-[19rem] font-bodyalt font-[400] border-[1px] border-[#1F2117] rounded-full hover:duration-[200ms] hover:border-[#FFB700] hover:text-[#FFB700]">
					Нет
				</div>
				<div
					onClick={() => logout()}
					className="cursor-pointer flex justify-center items-center text-[16rem] leading-[19rem] lg:h-[56rem] lg:px-[24rem] lg:text-[16rem] text-[#FAFAFA] lg:leading-[19rem] font-bodyalt font-[400] bg-[#FFB700] rounded-full hover:duration-[200ms] hover:bg-[#F0AD04]">
					Да
				</div>
			</div>
		</div>
	);
};
