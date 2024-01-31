// import React, { useState, useContext, useEffect, useLayoutEffect, useRef, Suspense } from 'react';
// import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Profile } from '../../App';
// import { HeaderForm } from '../components/HeaderForm';
// import { LogoutPopup } from '../components/LogoutPopup';
// import { ReactComponent as UsefulIcon } from '../../img/useful.svg';
// import { ReactComponent as ActivityIcon } from '../../img/activity.svg';
// import { ReactComponent as StatisticIcon } from '../../img/statistic.svg';
// import { ReactComponent as NutritionIcon } from '../../img/nutrition.svg';
// import { ReactComponent as ProfileIcon } from '../../img/profile.svg';
// import { ReactComponent as Logout } from '../../img/logout.svg';
// import UnknownUser from '../../img/unknownUser.png';
// import Spinner from '../components/Spinner';
// import useScript from '../components/useScript';

// type NavType = {
// 	name: string;
// 	img: any;
// 	link: string;
// };

const Cabinet = () => {
// 	document.title = 'Подписки';
// 	const location = useLocation();
// 	const navigate = useNavigate();

// 	const {
// 		user,
// 		activeSub,
// 		reload,
// 		setReload,
// 		setActiveSub,
// 		setUserPaymentMethod,
// 		setErrorLoadCheckout,
// 	} = useContext(Profile);
// 	const ref = useRef<HTMLDivElement | null>(null);
// 	const refNav = useRef<NavType[]>(
// 		window.innerWidth >= 1024
// 			? [
// 					{ name: 'Полезное', img: <UsefulIcon />, link: '/usefull' },
// 					{ name: 'Активность', img: <ActivityIcon />, link: '/activity' },
// 					{ name: 'Статистика', img: <StatisticIcon />, link: '/statistic' },
// 					{ name: 'Питание', img: <NutritionIcon />, link: '/nutrition' },
// 					{ name: 'Профиль', img: <ProfileIcon />, link: `${activeSub ? '' : '/plans'}` },
// 			  ]
// 			: [
// 					{ name: 'Полезное', img: <UsefulIcon />, link: '/usefull' },
// 					{ name: 'Активность', img: <ActivityIcon />, link: '/activity' },
// 					{ name: 'Статистика', img: <StatisticIcon />, link: '/statistic' },
// 					{ name: 'Питание', img: <NutritionIcon />, link: '/nutrition' },
// 					{ name: 'Профиль', img: <ProfileIcon />, link: '' },
// 			  ],
// 	);
// 	const [activePopup, setActivePopup] = useState(false);
// 	const [active, setActive] = useState(refNav.current[4].link);

// 	const localUser = localStorage.getItem('user');

// 	useScript(
// 		'https://static.yoomoney.ru/checkout-js/v1/checkout.js',
// 		function () {
// 			setErrorLoadCheckout(false);
// 		},
// 		function () {
// 			setErrorLoadCheckout(true);
// 		},
// 	);

// 	useEffect(() => {
// 		if (reload && localUser && JSON.parse(localUser).token) {
// 			axios
// 				.get(`/api/customer/subscriptions/active`)
// 				.then((res) => {
// 					let typeSubs: any;

// 					res.data.internalSubscription
// 						? (typeSubs = res.data.internalSubscription)
// 						: res.data.externalSubscription.appleSubscription
// 						? (typeSubs = res.data.externalSubscription?.appleSubscription)
// 						: res.data.free
// 						? (typeSubs = res.data.free)
// 						: (typeSubs = '');

// 					if (typeSubs) {
// 						if (typeSubs === res.data.internalSubscription) {
// 							setUserPaymentMethod({
// 								cardType: typeSubs.userPaymentMethod.cardType,
// 								expireMonth: typeSubs.userPaymentMethod.expireMonth,
// 								expireYear: typeSubs.userPaymentMethod.expireYear,
// 								last4: typeSubs.userPaymentMethod.last4,
// 							});
// 						}
// 						//@ts-ignore
// 						setActiveSub((prev) => ({
// 							...prev,
// 							name: typeSubs.plan.name,
// 							duration: typeSubs.plan.invoicePeriod,
// 							price: typeSubs.plan.price,
// 							id: typeSubs.plan.id,
// 							id2: typeSubs.id,
// 							isFromApple: typeSubs === res.data.externalSubscription.appleSubscription,
// 							endsAt: typeSubs === res.data.internalSubscription ? typeSubs.endsAt : '',
// 							error:
// 								typeSubs !== res.data.free &&
// 								typeSubs !== res.data.externalSubscription.appleSubscription &&
// 								typeSubs.openInvoice &&
// 								typeSubs.openInvoice.id,
// 							type: res.data.internalSubscription
// 								? 'internal'
// 								: res.data.externalSubscription.appleSubscription
// 								? 'external'
// 								: 'free',
// 						}));
// 					} else {
// 						setActiveSub(null);
// 					}
// 				})
// 				.catch((error) => {
// 					if (error.response.status === 401) {
// 						localStorage.clear();
// 						navigate('/');
// 					}
// 					if (error.response.status === 503) {
// 						localStorage.clear();
// 						navigate('/maintenance');
// 					}
// 				});
// 		}
// 		setReload(false);
// 	}, [reload]);

// 	useLayoutEffect(() => {
// 		window.innerWidth >= 1024
// 			? (refNav.current = [
// 					{ name: 'Полезное', img: <UsefulIcon />, link: '/usefull' },
// 					{ name: 'Активность', img: <ActivityIcon />, link: '/activity' },
// 					{ name: 'Статистика', img: <StatisticIcon />, link: '/statistic' },
// 					{ name: 'Питание', img: <NutritionIcon />, link: '/nutrition' },
// 					{ name: 'Профиль', img: <ProfileIcon />, link: `${activeSub ? '' : '/plans'}` },
// 			  ])
// 			: (refNav.current = [
// 					{ name: 'Полезное', img: <UsefulIcon />, link: '/usefull' },
// 					{ name: 'Активность', img: <ActivityIcon />, link: '/activity' },
// 					{ name: 'Статистика', img: <StatisticIcon />, link: '/statistic' },
// 					{ name: 'Питание', img: <NutritionIcon />, link: '/nutrition' },
// 					{ name: 'Профиль', img: <ProfileIcon />, link: '' },
// 			  ]);
// 	}, [activeSub, reload]);

// 	useEffect(() => {
// 		if (activeSub && location.pathname.replace('/cabinet', '') === '/plans') {
// 			navigate('/cabinet');
// 		}
// 		if (!activeSub && location.pathname.replace('/cabinet', '') === '') {
// 			navigate('/cabinet/plans');
// 		}
// 	}, [activeSub]);

// 	useLayoutEffect(() => {
// 		const f = refNav.current
// 			.map((e) =>
// 				e.link.includes(location.pathname.replace('/cabinet', '')) === true ? true : null,
// 			)
// 			.filter((e) => e !== null);
// 		setActive((prev) =>
// 			f.length >= 1 ? location.pathname.replace('/cabinet', '') : `${activeSub ? '' : '/plans'}`,
// 		);
// 	}, [activeSub, reload]);

// 	return (
// 		<div className="relative">
// 			<div
// 				className={`z-0 grid grid-rows-[calc(100vh-65rem)_65rem] lg:grid lg:grid-rows-1 lg:grid-cols-[360rem_auto] lg:w-[1920rem]`}>
// 				<div
// 					ref={ref}
// 					className="z-[100] bg-[#FFFFFF] border-t-[1px] shadow-[0px_2px_8px_rgba(0_0_0_0.04)] flex flex-col my-auto w-full  order-2 b-[0rem] lg:relative lg:order-1 lg:border-t-[0px] lg:border-r-[1px] lg:border-[#EEF1F6] lg:h-[100vh] lg:grid lg:grid-rows-[121rem_auto]">
// 					<div className="hidden lg:block">
// 						<HeaderForm />
// 					</div>
// 					<div className=" lg:mt-[39rem] lg:ml-[100rem] lg:flex lg:flex-col lg:justify-between">
// 						<div className="my-[13rem] flex flex-row gap-[20rem] lg:gap-[10rem]  justify-center lg:my-[0rem] lg:flex lg:flex-col">
// 							{refNav?.current?.map((e, i) => {
// 								return (
// 									<div key={i} onClick={() => setActive((prev) => e.link)}>
// 										<Link to={`/cabinet${e.link}`}>
// 											<div
// 												className={`lg:hover:bg-gray-200 lg:hover:duration-[200ms] lg:pl-[20rem] lg:w-[200rem] h-full gap-[6rem] flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:items-center lg:gap-[24rem] lg:mb-[47rem] lg:group/link lg:rounded-[15rem]`}>
// 												<div className={`flex flex-col justify-center items-center  lg:mt-[0rem]`}>
// 													<svg
// 														className={`h-[20rem] w-[20rem] lg:w-[23rem] lg:h-[22rem] lg:group-hover/link:fill-[#1F2117] 
//                           ${active === e.link ? ' fill-[#1F2117] ' : 'fill-[#AAAAAA]'}`}>
// 														{e.img}
// 													</svg>
// 												</div>
// 												<p
// 													className={`font-bodyalt font-[500] lg:mt-[0rem] text-[10rem] leading-[12rem] text-[#1F2117] lg:font-bodyalt lg:font-[400] lg:leading-[21px] lg:group-hover/link:text-[#1F2117]
//                         ${
// 													active === e.link
// 														? '  lg:text-[20rem] text-[#1F2117] lg:leading-[24px]'
// 														: 'lg:flex lg:text-[18rem] text-[#AAAAAA] lg:leading-[21px]'
// 												}`}>
// 													{e.name}
// 												</p>
// 											</div>
// 										</Link>
// 									</div>
// 								);
// 							})}
// 						</div>
// 						<button
// 							onClick={() => setActivePopup((prev) => !prev)}
// 							className="hover:bg-gray-200 hover:duration-[200ms] lg:pl-[20rem] lg:w-[200rem] h-[70rem] hidden lg:flex lg:flex-row lg:items-center lg:gap-[24rem] lg:mb-[84rem] lg:group/logout lg:rounded-[15rem]">
// 							<div className="flex items-center lg:w-[20rem] lg:h-[20rem] lg:fill-[#AAAAAA] lg:group-hover/logout:fill-[#1F2117]">
// 								<Logout />
// 							</div>
// 							<p className=" lg:font-bodyalt lg:font-[400] lg:text-[#AAAAAA] lg:text-[18rem] lg:leading-[21px] lg:group-hover/logout:text-[#1F2117]">
// 								Выход
// 							</p>
// 						</button>
// 					</div>
// 				</div>
// 				<div className="order-1 h-full lg:order-2 lg:grid lg:grid-rows-[121rem_calc(100vh-121rem)] lg:mr-[120rem]">
// 					<div className="hidden lg:mt-[32rem] lg:flex lg:flex-row lg:justify-end lg:h-[60rem] ">
// 						<div className="lg:flex lg:flex-row lg:gap-[12rem]">
// 							<div className="lg:py-[5rem]">
// 								<p className="lg:font-bodyalt lg:font-[500] lg:text-[#1F2117] lg:text-[18rem] lg:text-end">{`${
// 									user?.name !== null ? user?.name : ''
// 								} ${user?.lastName !== null ? user?.lastName : ''}`}</p>
// 								<p className="lg:font-bodyalt lg:font-[400] lg:text-[#1F2117]/60 lg:text-[14rem]  lg:text-end">
// 									{user?.email}
// 								</p>
// 							</div>
// 							<div>
// 								{!user?.avatar ? (
// 									<img
// 										src={UnknownUser}
// 										alt="avatar"
// 										className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem] object-cover"
// 									/>
// 								) : (
// 									<img
// 										src={user.avatar}
// 										alt="avatar"
// 										className="rounded-full w-[60rem] h-[60rem] lg:w-[60rem] lg:h-[60rem] object-cover"
// 									/>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 					<div className="overflows overflow-y-scroll h-full lg:ml-[32rem] lg:overflow-y-scroll">
// 						<Suspense fallback={window.innerWidth >= 1024 ? <Spinner /> : null}>
// 							<Outlet />
// 						</Suspense>
// 					</div>
// 				</div>
// 			</div>
// 			{activePopup ? (
// 				<div className="absolute z-[1000] top-0 left-0 w-[100%] h-[100%] bg-gray-100/50">
// 					<div className="absolute z-[1000] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  ">
// 						<LogoutPopup setActivePopup={setActivePopup} />
// 					</div>
// 				</div>
// 			) : null}
// 		</div>
// 	);
};

export default Cabinet;
