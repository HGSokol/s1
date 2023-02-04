import React, { useEffect, useState, useContext, useRef, useLayoutEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Profile } from '../App';
import UnknownUser from '../images/unknownUser.png';
import HeaderOrder from '../components/HeaderOrder';
import { LogoutPopup } from '../components/LogoutPopup';

type dataLink = {
	name: string;
	link: string;
};

const MyProfile = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activePopup, setActivePopup] = useState(false);
	const { activeSub, user, reload, setReload } = useContext(Profile);
	const dataRef = useRef<dataLink[]>(
		window.innerWidth >= 1024
			? [
					{ name: 'Подписки', link: `${activeSub ? '' : '/changeSubs'}` },
					{ name: 'Общая информация', link: '/profile' },
					{ name: 'Детали платежей', link: '/payments' },
			  ]
			: [
					{ name: 'Подписки', link: `${activeSub ? '/subs' : '/changeSubs'}` },
					{ name: 'Общая информация', link: '/profile' },
					{ name: 'Детали платежей', link: '/payments' },
			  ],
	);
	const [active, setActive] = useState(dataRef.current[0].link);

	useLayoutEffect(() => {
		window.innerWidth >= 1024
			? (dataRef.current = [
					{ name: 'Подписки', link: `${activeSub ? '' : '/changeSubs'}` },
					{ name: 'Общая информация', link: '/profile' },
					{ name: 'Детали платежей', link: '/payments' },
			  ])
			: (dataRef.current = [
					{ name: 'Подписки', link: `${activeSub ? '/subs' : '/changeSubs'}` },
					{ name: 'Общая информация', link: '/profile' },
					{ name: 'Детали платежей', link: '/payments' },
			  ]);
	}, [activeSub, reload]);

	useLayoutEffect(() => {
		if (location.pathname !== '/cabinet/payments' && location.pathname !== '/cabinet/profile') {
			setReload(true);
		}
	}, [active]);

	if (window.innerWidth < 1024) {
		document.title = 'Профиль';
	}

	useLayoutEffect(() => {
		const f = dataRef.current
			.map((e) =>
				e.link.includes(location.pathname.replace('/cabinet', '')) === true ? true : null,
			)
			.filter((e) => e !== null);
		setActive((prev) =>
			f.length >= 1
				? location.pathname.replace('/cabinet', '')
				: `${activeSub ? '' : '/changeSubs'}`,
		);
	}, [activeSub, reload]);

	return (
		<div className="h-full mx-[16rem] lg:mx-[0rem]">
			{activePopup ? (
				<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
					<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
						<LogoutPopup setActivePopup={setActivePopup} />
					</div>
				</div>
			) : null}
			<div className="w-full flex flex-row relative lg:hidden" onClick={() => navigate('/')}>
				<HeaderOrder />
			</div>
			<div className="mb-[36rem] pt-[20rem] lg:hidden">
				<div className="flex flex-row gap-[12rem]" onClick={() => setActive('')}>
					<div>
						{!user?.avatar ? (
							<img
								src={UnknownUser}
								alt="avatar"
								className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]"
							/>
						) : (
							<img
								src={user.avatar}
								alt="avatar"
								className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem]"
							/>
						)}
					</div>
					<div className="py-[5rem]">
						<p className="font-bodyalt font-[500] text-[#1F2117] text-[18rem] lg:text-end">{`${user?.name} ${user?.lastName}`}</p>
						<p className="font-bodyalt font-[400] text-[#1F2117]/60 text-[14rem] lg:text-end">
							{user?.email}
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:w-[487rem] lg:h-[47rem] lg:p-[2rem] lg:rounded-[10rem] lg:bg-[#F4F4F4] lg:mb-[32rem] lg:flex-row lg:cursor-pointer">
				<div className="flex flex-col gap-[35rem] lg:h-full lg:gap-[0rem] lg:flex-row">
					{dataRef?.current.map((e, i) => {
						return (
							<Link to={`/cabinet${e.link}`} key={i}>
								<div
									className={` flex flex-row justify-between items-center font-bodyalt font-[400] text-[16rem] text-[#1F2117] lg:flex lg:h-full lg:justify-center lg:items-center lg:px-[24rem] lg:font-bodyalt lg:font-[400] lg:text-[16rem] lg:leading-[19rem] lg:rounded-[8rem]
                ${active === e.link ? ' lg:bg-[#FFFFFF] ' : ' '}`}
									onClick={() => {
										setActive((prev) => e.link);
									}}>
									{e.name}
									<div className="mr-[5rem] lg:hidden">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<g opacity="0.4">
												<path
													d="M6 3L11 8L6 13"
													stroke="black"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</g>
										</svg>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
				<div
					onClick={() => setActivePopup(true)}
					className="absolute bottom-[100rem] font-bodyalt font-[400] text-[16rem] leading-[19rem] text-[#CB1D1D] sm:static sm:my-[40rem] lg:hidden">
					Выход
				</div>
			</div>
			<div className="hidden lg:flex">
				<Outlet />
			</div>
		</div>
	);
};

export default React.memo(MyProfile);
