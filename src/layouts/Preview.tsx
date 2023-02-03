import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../App';
import IMG1 from '../images/preview1.png';
import IMG2 from '../images/preview2.svg';

export const Preview = () => {
	const { user, activeSub } = useContext(Profile);

	return (
		<div
			className="w-full h-min relative mb-[72rem] 
    lg:mb-[413rem] lg:pt-[93rem]">
			<img
				className="hidden 
      lg:block lg:absolute lg:translate-x-[920rem] lg:translate-y-[70rem] lg:w-[782rem]"
				src={IMG1}
				alt="logo"
			/>
			<div className="">
				<div
					className="font-bodyalt text-[#DE9F00] font-[600] h-[20rem] text-[16rem] mb-[18rem] tracking-[0.04em] leading-[16rem]
        lg:text-[20rem] lg:leading-[24rem] lg:mb-[24rem]">
					Секрет успеха — сделать первый шаг.
				</div>
				<div
					className="relative text-[#1F2117] font-[900] mb-[24rem] text-[35rem] leading-[42rem] z-100
        lg:text-[75rem] lg:mb-[48rem] lg:w-[1124rem] lg:leading-[73rem]">
					<div className="inline-block">
						<div className="z-10 relative">Построй здоровое&nbsp;</div>
						<div className="-z-0 absolute">
							<svg
								className="w-[200rem] h-[46rem] -translate-y-[42rem] translate-x-[142rem]  
              lg:w-[421rem] lg:h-[99rem] lg:-translate-y-[80rem] lg:translate-x-[310rem]"
								viewBox="0 0 421 99"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M196.819 0.477709C173.175 0.652874 146.207 3.50784 118.671 8.75097C81.0378 15.9169 44.7422 27.8126 24.4665 39.6267C4.48685 51.2684 -3.06474 62.7202 2.84573 72.4131C4.41259 74.9827 9.36331 79.7359 12.9067 82.0734C15.725 83.932 20.7943 86.3213 26.2196 88.3472C36.355 92.1321 49.4921 94.617 69.4007 96.5148C81.1563 97.6357 113.351 99.0051 127.659 98.9929C153.792 98.9709 179.077 97.8845 212.506 95.347C246.419 92.7729 271.538 89.9328 305.595 84.822C343.053 79.2008 360.527 75.893 377.95 71.1252C395.359 66.3609 405.761 61.9105 411.98 56.5668C417.394 51.9133 420.063 47.7003 420.247 43.5168C420.456 38.7726 418.32 36.1524 411.051 32.2357C405.855 29.4351 400.654 27.4385 391.196 24.6118C378.863 20.926 366.387 18.1181 351.322 15.6376C317.102 10.0035 294.871 8.51232 243.369 8.39672C228.004 8.36218 199.478 8.57548 198.17 8.7348C197.094 8.866 197.38 9.79987 198.63 10.2355C199.269 10.458 206.828 11.478 215.428 12.5021C230.751 14.3265 255.217 17.4008 290.145 21.8909C299.777 23.1289 312.871 24.7664 319.242 25.5295C345.28 28.6477 364.693 32.0486 379.456 36.077C390.861 39.1892 396.765 41.5624 396.692 43.0053C396.636 44.1063 395.379 46.0622 393.899 47.351C388.666 51.9075 371.951 57.9248 351.064 62.7711C334.926 66.5155 294.365 73.3778 264.789 77.3677C234.391 81.4681 199.514 84.6768 165.386 86.5129C138.579 87.9552 118.341 88.0569 90.8913 86.887C63.7489 85.7299 48.4143 83.9673 36.502 80.6345C21.1792 76.3473 14.0866 69.106 17.2062 60.9339C19.9998 53.6155 33.4048 43.9186 52.5 35.402C83.2728 21.6773 124.386 10.9669 165.679 5.91779C195.073 2.32363 226.036 2.39306 249.372 6.10526C252.312 6.57311 255.411 7.16073 256.258 7.41142C258.248 8.00044 258.272 7.56089 256.292 6.78333C252.063 5.12249 241.546 3.16777 230.648 2.01711C223.864 1.30102 204.522 0.420724 196.819 0.477709ZM137.804 11.5576C131.233 11.8207 129.798 11.9536 129.783 12.2995C129.74 13.309 130.941 13.3524 137.927 12.5937C141.67 12.1873 145.268 11.8173 145.923 11.7718C147.405 11.6685 148.038 11.2731 146.754 11.2524C146.233 11.2441 142.205 11.3815 137.804 11.5576Z"
									fill="#FFB700"
								/>
							</svg>
						</div>
					</div>
					и сильное тело вместе с нами
				</div>
				<p
					className="font-bodyalt hidden text-[#777872] 
        lg:block lg:text-[20rem] lg:font-[400] lg:mb-[48rem] lg:w-[493rem] lg:leading-[32rem] 2lg:tracking-[0.02em]">
					Следуй программам тренировок и питания, которые созданы настоящими профессионалами.
				</p>
				<div
					className="mb-[32px] md:mb-[64px] lg:mb-[0] border-black border-b-[1px] 
          lg:border-none">
					<img
						className="mx-auto w-[309rem] h-[255rem]
          lg:hidden"
						src={IMG2}
						alt="logo"
					/>
				</div>
				<div
					className="font-bodyalt flex flex-col mb-[48rem] 
        lg:mb-[96rem] lg:flex-row">
					<Link
						to={
							user
								? `${!activeSub && window.innerWidth >= 1024 ? '/cabinet/changeSubs' : '/cabinet'}`
								: '/login'
						}>
						<button
							className="bg-[#FFB700] text-[16rem] mb-[14rem] w-full leading-[19rem] h-[51rem] rounded-full 
          text-center text-[#FAFAFA] tracking-[0.04em] flex flex-row items-center justify-center hover:bg-[#F0AD04]
          lg:w-max lg:h-[56rem] lg:text-[16rem] lg:mr-[32rem] ">
							<p
								className="font-bodyalt font-[600] text-[16rem] text-[#FAFAFA] tracking-[0.04em] mr-[10rem]
            lg:text-[16rem] lg:mr-[14rem] lg:ml-[24rem]">
								Оплатить подписку
							</p>
							<svg
								className="w-[18rem] h-[18rem] 
            lg:w-[24rem] lg:h-[24rem] lg:mr-[21rem]"
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
						</button>
					</Link>
					<a
						href="#about"
						className="flex justify-center items-center bg-[#FAFAFA] p-auto rounded-full w-full h-[51rem] text-[16rem] leading-[19rem] text-center font-[600] text-[#1F2117] border-[1px] border-[#1F2117] hover:duration-[200ms] tracking-[0.04em] hover:border-[#FFB700] hover:text-[#FFB700]
          lg:w-[164rem] lg:h-[56rem] lg:text-[16rem]">
						Ознакомиться
					</a>
				</div>
				<div className="font-bodyalt flex flex-row items-center">
					<svg
						viewBox="0 0 194 56"
						xmlns="http://www.w3.org/2000/svg"
						className="group/svg bg-white rounded-[4rem] border-[1px] border-[#1F2117] hover:bg-black duration-[450ms] w-[158rem] h-[46rem]
          lg:rounded-[8rem] lg:w-[193.85rem] lg:h-[56rem]">
						<path
							d="M43.261 27.6979C43.2194 23.1857 47.0504 20.9905 47.2255 20.8883C45.0559 17.8041 41.693 17.3827 40.5113 17.3491C37.6869 17.0593 34.9472 18.9969 33.5084 18.9969C32.0409 18.9969 29.8253 17.3771 27.4374 17.4247C24.3646 17.4709 21.4899 19.2055 19.9133 21.8991C16.6596 27.3913 19.0863 35.4623 22.2036 39.9017C23.763 42.0759 25.5851 44.5035 27.9701 44.4181C30.3035 44.3243 31.1751 42.9677 33.9909 42.9677C36.7808 42.9677 37.5993 44.4181 40.0317 44.3635C42.5359 44.3243 44.1125 42.1795 45.6173 39.9857C47.4194 37.4937 48.1431 35.0395 48.1718 34.9135C48.1129 34.8939 43.3084 33.1061 43.261 27.6979Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M38.6661 14.4287C39.9211 12.8985 40.7798 10.8167 40.5414 8.7041C38.725 8.7825 36.4534 9.9291 35.1453 11.4257C33.988 12.7445 32.9541 14.9061 33.2212 16.9389C35.2616 17.0873 37.3566 15.9351 38.6661 14.4287Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M77.0288 44.1058H73.7679L71.9816 38.6332H65.7728L64.0713 44.1058H60.8965L67.0479 25.4746H70.8473L77.0288 44.1058ZM71.4431 36.3372L69.8278 31.4722C69.6569 30.9752 69.3367 29.8048 68.8643 27.9624H68.8068C68.6187 28.7548 68.3158 29.9252 67.8994 31.4722L66.3127 36.3372H71.4431Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M92.8482 37.2233C92.8482 39.5081 92.215 41.3141 90.9485 42.6399C89.8142 43.8201 88.4056 44.4095 86.7241 44.4095C84.9091 44.4095 83.6054 43.7739 82.8113 42.5027H82.7539V49.5797H79.6925V35.0939C79.6925 33.6575 79.6538 32.1833 79.5791 30.6713H82.2714L82.4423 32.8007H82.4997C83.5206 31.1963 85.07 30.3955 87.1492 30.3955C88.7746 30.3955 90.1315 31.0213 91.217 32.2743C92.3055 33.5287 92.8482 35.1779 92.8482 37.2233ZM89.7295 37.3325C89.7295 36.0249 89.4279 34.9469 88.822 34.0985C88.16 33.2137 87.2712 32.7713 86.1569 32.7713C85.4017 32.7713 84.7153 33.0177 84.1022 33.5035C83.4876 33.9935 83.0856 34.6333 82.8975 35.4257C82.8027 35.7953 82.7553 36.0977 82.7553 36.3357V38.5757C82.7553 39.5529 83.0626 40.3775 83.6772 41.0509C84.2917 41.7243 85.0901 42.0603 86.0722 42.0603C87.2253 42.0603 88.1227 41.6263 88.7645 40.7611C89.4078 39.8945 89.7295 38.7521 89.7295 37.3325Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M108.695 37.2233C108.695 39.5081 108.062 41.3141 106.794 42.6399C105.661 43.8201 104.253 44.4095 102.571 44.4095C100.756 44.4095 99.4526 43.7739 98.6599 42.5027H98.6025V49.5797H95.5412V35.0939C95.5412 33.6575 95.5024 32.1833 95.4277 30.6713H98.12L98.2909 32.8007H98.3483C99.3678 31.1963 100.917 30.3955 102.998 30.3955C104.622 30.3955 105.979 31.0213 107.067 32.2743C108.151 33.5287 108.695 35.1779 108.695 37.2233ZM105.577 37.3325C105.577 36.0249 105.274 34.9469 104.668 34.0985C104.006 33.2137 103.12 32.7713 102.004 32.7713C101.247 32.7713 100.563 33.0177 99.9479 33.5035C99.3334 33.9935 98.9328 34.6333 98.7447 35.4257C98.6513 35.7953 98.6025 36.0977 98.6025 36.3357V38.5757C98.6025 39.5529 98.9098 40.3775 99.5215 41.0509C100.136 41.7229 100.934 42.0603 101.919 42.0603C103.072 42.0603 103.97 41.6263 104.612 40.7611C105.255 39.8945 105.577 38.7521 105.577 37.3325Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M126.414 38.8806C126.414 40.4654 125.85 41.7548 124.717 42.7502C123.472 43.838 121.739 44.3812 119.512 44.3812C117.456 44.3812 115.807 43.9948 114.56 43.2206L115.269 40.7328C116.613 41.5252 118.088 41.9228 119.694 41.9228C120.847 41.9228 121.745 41.668 122.39 41.1612C123.031 40.6544 123.352 39.974 123.352 39.1256C123.352 38.3696 123.087 37.7326 122.558 37.216C122.031 36.6994 121.15 36.2192 119.921 35.7754C116.576 34.5588 114.904 32.7766 114.904 30.433C114.904 28.9014 115.49 27.6456 116.663 26.6684C117.832 25.6898 119.391 25.2012 121.341 25.2012C123.08 25.2012 124.525 25.4966 125.678 26.086L124.912 28.5192C123.835 27.948 122.618 27.6624 121.255 27.6624C120.178 27.6624 119.337 27.9214 118.734 28.4366C118.224 28.8972 117.968 29.4586 117.968 30.1236C117.968 30.86 118.26 31.469 118.846 31.9478C119.355 32.3902 120.282 32.869 121.626 33.3856C123.27 34.031 124.477 34.7856 125.254 35.6508C126.028 36.5132 126.414 37.5926 126.414 38.8806Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M136.537 32.9111H133.163V39.4337C133.163 41.0927 133.757 41.9215 134.949 41.9215C135.496 41.9215 135.95 41.8753 136.309 41.7829L136.393 44.0495C135.79 44.2693 134.996 44.3799 134.013 44.3799C132.804 44.3799 131.859 44.0201 131.177 43.3019C130.498 42.5823 130.156 41.3755 130.156 39.6801V32.9083H128.146V30.6683H130.156V28.2085L133.163 27.3237V30.6683H136.537V32.9111Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M151.761 37.278C151.761 39.343 151.155 41.0384 149.946 42.3642C148.678 43.7292 146.995 44.4096 144.897 44.4096C142.875 44.4096 141.266 43.7558 140.065 42.4482C138.865 41.1406 138.265 39.49 138.265 37.5006C138.265 35.4188 138.882 33.7136 140.121 32.3878C141.358 31.0606 143.026 30.397 145.124 30.397C147.146 30.397 148.773 31.0508 150 32.3598C151.175 33.6296 151.761 35.269 151.761 37.278ZM148.584 37.3746C148.584 36.1356 148.313 35.073 147.763 34.1868C147.121 33.1144 146.204 32.5796 145.015 32.5796C143.784 32.5796 142.849 33.1158 142.208 34.1868C141.658 35.0744 141.386 36.1538 141.386 37.4306C141.386 38.6696 141.658 39.7322 142.208 40.617C142.87 41.6894 143.794 42.2242 144.988 42.2242C146.156 42.2242 147.074 41.6782 147.736 40.589C148.3 39.686 148.584 38.6122 148.584 37.3746Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M161.713 33.2963C161.41 33.2417 161.087 33.2137 160.748 33.2137C159.671 33.2137 158.838 33.6099 158.252 34.4037C157.742 35.1037 157.487 35.9885 157.487 37.0567V44.1057H154.427L154.456 34.9021C154.456 33.3537 154.417 31.9439 154.341 30.6727H157.007L157.119 33.2431H157.204C157.527 32.3597 158.037 31.6485 158.735 31.1151C159.417 30.6349 160.153 30.3955 160.947 30.3955C161.23 30.3955 161.486 30.4151 161.713 30.4501V33.2963Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M175.404 36.7532C175.404 37.288 175.368 37.7388 175.292 38.107H166.108C166.143 39.4342 166.587 40.4492 167.44 41.1492C168.214 41.775 169.215 42.0886 170.444 42.0886C171.804 42.0886 173.044 41.8772 174.16 41.453L174.64 43.525C173.336 44.0794 171.797 44.3552 170.02 44.3552C167.884 44.3552 166.207 43.742 164.986 42.517C163.768 41.292 163.158 39.647 163.158 37.5834C163.158 35.5576 163.725 33.8706 164.861 32.5252C166.05 31.0888 167.657 30.3706 169.679 30.3706C171.664 30.3706 173.168 31.0888 174.189 32.5252C174.997 33.6662 175.404 35.0774 175.404 36.7532ZM172.484 35.979C172.504 35.0942 172.305 34.3298 171.89 33.6844C171.36 32.8542 170.546 32.4398 169.45 32.4398C168.449 32.4398 167.635 32.8444 167.014 33.6564C166.504 34.3018 166.201 35.076 166.108 35.9776H172.484V35.979Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M70.4304 14.0127C70.4304 15.6605 69.9235 16.9009 68.9112 17.7339C67.9736 18.5025 66.6411 18.8875 64.9151 18.8875C64.0593 18.8875 63.327 18.8511 62.7139 18.7783V9.77487C63.5137 9.64887 64.3752 9.58447 65.3057 9.58447C66.9498 9.58447 68.1889 9.93307 69.0246 10.6303C69.9608 11.4185 70.4304 12.5455 70.4304 14.0127ZM68.8437 14.0533C68.8437 12.9851 68.5537 12.1661 67.9736 11.5949C67.3935 11.0251 66.5463 10.7395 65.4306 10.7395C64.9567 10.7395 64.5533 10.7703 64.2187 10.8347V17.6793C64.4039 17.7073 64.7428 17.7199 65.2353 17.7199C66.3869 17.7199 67.2757 17.4077 67.9018 16.7833C68.5278 16.1589 68.8437 15.2489 68.8437 14.0533Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M78.8434 15.4519C78.8434 16.4669 78.5462 17.2985 77.9517 17.9509C77.3285 18.6215 76.5029 18.9561 75.4719 18.9561C74.4783 18.9561 73.6871 18.6355 73.0969 17.9915C72.5082 17.3489 72.2139 16.5383 72.2139 15.5611C72.2139 14.5391 72.5168 13.7005 73.1257 13.0495C73.7345 12.3985 74.5529 12.0723 75.5839 12.0723C76.5776 12.0723 77.3759 12.3929 77.9804 13.0355C78.5548 13.6599 78.8434 14.4663 78.8434 15.4519ZM77.2826 15.4995C77.2826 14.8905 77.1476 14.3683 76.8791 13.9329C76.5632 13.4065 76.1138 13.1433 75.5294 13.1433C74.9248 13.1433 74.4654 13.4065 74.1495 13.9329C73.8795 14.3683 73.746 14.8989 73.746 15.5261C73.746 16.1351 73.8809 16.6573 74.1495 17.0927C74.4754 17.6191 74.9292 17.8823 75.515 17.8823C76.0894 17.8823 76.5402 17.6149 76.8647 17.0787C77.1433 16.6349 77.2826 16.1085 77.2826 15.4995Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M90.1236 12.207L88.0056 18.8066H86.6272L85.7498 15.9408C85.5273 15.2254 85.3464 14.5142 85.2056 13.8086H85.1783C85.0477 14.5338 84.8668 15.2436 84.6341 15.9408L83.7022 18.8066H82.308L80.3164 12.207H81.8629L82.6282 15.3444C82.8134 16.0864 82.9656 16.7934 83.0877 17.4626H83.115C83.227 16.911 83.4122 16.2082 83.6735 15.3584L84.6341 12.2084H85.8604L86.7808 15.2912C87.0034 16.043 87.1843 16.7668 87.3236 17.464H87.3652C87.4672 16.785 87.6208 16.0612 87.8247 15.2912L88.646 12.2084H90.1236V12.207Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M97.9243 18.8066H96.4195V15.0266C96.4195 13.8618 95.9658 13.2794 95.0554 13.2794C94.6088 13.2794 94.2484 13.439 93.9684 13.7596C93.6913 14.0802 93.5506 14.4582 93.5506 14.8908V18.8052H92.0458V14.0928C92.0458 13.5132 92.0271 12.8846 91.9912 12.2042H93.3137L93.384 13.236H93.4257C93.6008 12.9154 93.8622 12.6508 94.2054 12.4394C94.6132 12.193 95.0698 12.0684 95.5695 12.0684C96.2012 12.0684 96.7268 12.2672 97.1446 12.6662C97.6644 13.1548 97.9243 13.8842 97.9243 14.853V18.8066Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M102.075 18.806H100.571V9.17822H102.075V18.806Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M110.934 15.4519C110.934 16.4669 110.637 17.2985 110.043 17.9509C109.419 18.6215 108.592 18.9561 107.563 18.9561C106.568 18.9561 105.776 18.6355 105.188 17.9915C104.599 17.3489 104.305 16.5383 104.305 15.5611C104.305 14.5391 104.608 13.7005 105.216 13.0495C105.825 12.3985 106.644 12.0723 107.673 12.0723C108.668 12.0723 109.465 12.3929 110.071 13.0355C110.646 13.6599 110.934 14.4663 110.934 15.4519ZM109.372 15.4995C109.372 14.8905 109.237 14.3683 108.968 13.9329C108.654 13.4065 108.203 13.1433 107.62 13.1433C107.014 13.1433 106.555 13.4065 106.24 13.9329C105.97 14.3683 105.837 14.8989 105.837 15.5261C105.837 16.1351 105.972 16.6573 106.24 17.0927C106.566 17.6191 107.02 17.8823 107.606 17.8823C108.18 17.8823 108.63 17.6149 108.954 17.0787C109.234 16.6349 109.372 16.1085 109.372 15.4995Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M118.217 18.8063H116.866L116.754 18.0461H116.712C116.25 18.6523 115.591 18.9561 114.735 18.9561C114.096 18.9561 113.579 18.7559 113.19 18.3583C112.837 17.9971 112.66 17.5477 112.66 17.0143C112.66 16.2079 113.005 15.5933 113.698 15.1677C114.39 14.7421 115.364 14.5335 116.617 14.5433V14.4201C116.617 13.5507 116.149 13.1167 115.212 13.1167C114.544 13.1167 113.955 13.2805 113.447 13.6053L113.141 12.6421C113.77 12.2627 114.547 12.0723 115.463 12.0723C117.232 12.0723 118.119 12.9823 118.119 14.8023V17.2327C118.119 17.8921 118.152 18.4171 118.217 18.8063ZM116.655 16.5383V15.5205C114.995 15.4925 114.165 15.9363 114.165 16.8505C114.165 17.1949 114.26 17.4525 114.454 17.6247C114.647 17.7969 114.894 17.8823 115.189 17.8823C115.519 17.8823 115.828 17.7801 116.109 17.5771C116.392 17.3727 116.566 17.1137 116.63 16.7959C116.646 16.7245 116.655 16.6377 116.655 16.5383Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M126.767 18.806H125.432L125.361 17.7462H125.32C124.893 18.5526 124.167 18.9558 123.146 18.9558C122.33 18.9558 121.651 18.6436 121.113 18.0192C120.574 17.3948 120.306 16.5842 120.306 15.5888C120.306 14.5206 120.597 13.6554 121.183 12.9946C121.75 12.3786 122.445 12.0706 123.272 12.0706C124.181 12.0706 124.817 12.3688 125.179 12.9666H125.208V9.17822H126.714V17.028C126.714 17.6706 126.731 18.2628 126.767 18.806ZM125.208 16.0228V14.9224C125.208 14.732 125.193 14.578 125.166 14.4604C125.081 14.1076 124.899 13.8108 124.622 13.5714C124.342 13.332 124.005 13.2116 123.615 13.2116C123.054 13.2116 122.615 13.4286 122.292 13.864C121.971 14.2994 121.809 14.8552 121.809 15.5342C121.809 16.1866 121.963 16.7158 122.271 17.1232C122.597 17.5572 123.037 17.7742 123.587 17.7742C124.081 17.7742 124.476 17.5936 124.776 17.231C125.066 16.8964 125.208 16.4932 125.208 16.0228Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M139.637 15.4519C139.637 16.4669 139.34 17.2985 138.746 17.9509C138.122 18.6215 137.298 18.9561 136.266 18.9561C135.274 18.9561 134.482 18.6355 133.891 17.9915C133.302 17.3489 133.008 16.5383 133.008 15.5611C133.008 14.5391 133.311 13.7005 133.92 13.0495C134.528 12.3985 135.347 12.0723 136.379 12.0723C137.371 12.0723 138.171 12.3929 138.774 13.0355C139.349 13.6599 139.637 14.4663 139.637 15.4519ZM138.078 15.4995C138.078 14.8905 137.943 14.3683 137.674 13.9329C137.357 13.4065 136.909 13.1433 136.323 13.1433C135.72 13.1433 135.261 13.4065 134.943 13.9329C134.673 14.3683 134.54 14.8989 134.54 15.5261C134.54 16.1351 134.675 16.6573 134.943 17.0927C135.269 17.6191 135.723 17.8823 136.309 17.8823C136.883 17.8823 137.336 17.6149 137.66 17.0787C137.937 16.6349 138.078 16.1085 138.078 15.4995Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M147.729 18.8066H146.225V15.0266C146.225 13.8618 145.771 13.2794 144.86 13.2794C144.413 13.2794 144.053 13.439 143.774 13.7596C143.496 14.0802 143.356 14.4582 143.356 14.8908V18.8052H141.85V14.0928C141.85 13.5132 141.833 12.8846 141.797 12.2042H143.118L143.188 13.236H143.23C143.407 12.9154 143.668 12.6508 144.01 12.4394C144.419 12.193 144.874 12.0684 145.375 12.0684C146.005 12.0684 146.531 12.2672 146.949 12.6662C147.47 13.1548 147.729 13.8842 147.729 14.853V18.8066Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M157.857 13.3056H156.2V16.5116C156.2 17.3264 156.494 17.7338 157.077 17.7338C157.347 17.7338 157.571 17.7114 157.748 17.6652L157.786 18.7782C157.489 18.8874 157.099 18.942 156.618 18.942C156.023 18.942 155.561 18.7656 155.226 18.4128C154.89 18.06 154.724 17.4664 154.724 16.6334V13.3056H153.734V12.2066H154.724V10.997L156.198 10.563V12.2052H157.855V13.3056H157.857Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M165.823 18.806H164.317V15.054C164.317 13.871 163.863 13.2788 162.954 13.2788C162.256 13.2788 161.779 13.6218 161.518 14.3078C161.474 14.452 161.448 14.6284 161.448 14.8356V18.8046H159.944V9.17822H161.448V13.1556H161.476C161.95 12.4318 162.629 12.0706 163.51 12.0706C164.133 12.0706 164.648 12.2694 165.058 12.6684C165.567 13.1654 165.823 13.9046 165.823 14.8818V18.806Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
						<path
							d="M174.04 15.1942C174.04 15.4574 174.02 15.6786 173.984 15.8592H169.471C169.491 16.5116 169.707 17.0086 170.125 17.353C170.507 17.661 170.999 17.815 171.602 17.815C172.27 17.815 172.879 17.7114 173.427 17.5028L173.663 18.522C173.021 18.7936 172.266 18.9294 171.391 18.9294C170.343 18.9294 169.517 18.6284 168.92 18.0264C168.32 17.4244 168.022 16.6166 168.022 15.603C168.022 14.6076 168.3 13.7788 168.858 13.118C169.441 12.4124 170.229 12.0596 171.225 12.0596C172.198 12.0596 172.938 12.4124 173.437 13.118C173.841 13.678 174.04 14.371 174.04 15.1942ZM172.604 14.8148C172.616 14.3794 172.517 14.0042 172.313 13.6878C172.052 13.2804 171.654 13.076 171.115 13.076C170.624 13.076 170.224 13.2748 169.918 13.6738C169.668 13.9916 169.52 14.371 169.471 14.8148H172.604Z"
							fill="#1F2117"
							className="group-hover/svg:fill-white"
						/>
					</svg>
					<p
						className="font-bodyalt font-[400] text-[15rem] text-[#777872] h-[34rem] w-[180rem] ml-[14rem] leading-[14.32rem] 
          lg:ml-[25rem] lg:w-[275rem] lg:h-min lg:text-[20rem] lg:leading-[23.87rem] ">
						Скачивайте наше приложение в App Store
					</p>
				</div>
			</div>
		</div>
	);
};
