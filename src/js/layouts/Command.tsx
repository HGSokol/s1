import React, { useState, useRef } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube2 } from 'react-icons/im';

type dataCard = {
	img: string;
	prof: string;
	name: string;
	description: string;
	links: {
		instagram: string;
		telegram: string;
		youtube: string;
	};
};
type DataType = dataCard[];

const data: DataType = [
	{
		img: require('../../img/face1.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face2.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face3.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face4.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face5.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face6.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face7.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face1.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face2.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face3.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face4.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face5.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
	{
		img: require('../../img/face6.png'),
		prof: 'Нутрициолог',
		name: 'Мария Павловец',
		description:
			'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.',
		links: {
			instagram: 'https://www.instagram.com/',
			telegram: 'https://web.telegram.org',
			youtube: 'https://www.youtube.com/',
		},
	},
];

export const Command = () => {
	const [active, setActive] = useState<number | null>(null);
	const [size, setSize] = useState<number>(0);
	const [gap, setGap] = useState<number>(0);
	const [wrapper, setWrapper] = useState<number>(0);
	const ref = useRef<HTMLDivElement | null>(null);

	const activeButton = (i: number) => {
		setActive(i);
	};
	const right = () => {
		active! >= data.length - 1
			? setActive(0)
			: setActive((prev) => (prev! === null ? 0 : prev + 1));
	};
	const left = () => {
		active! <= 0 ? setActive(data.length - 1) : setActive((prev) => prev! - 1);
	};

	const trLength = active! > 4 ? `${(size + gap) * (active! - 3)}` : 0;
	const sizeCarousel = trLength >= 2200 ? '2200rem' : `${trLength}px`;

	React.useEffect(() => {
		if (ref.current) {
			setSize(ref.current.getBoundingClientRect().width);
			setGap((window.innerWidth / 1920) * 20);
		}
	}, []);

	React.useEffect(() => {
		setWrapper(size * 6 + gap * 5);
	}, [size, gap]);

	return (
		<div
			className="mb-[50rem] gap-[10rem]
    lg:gap-[15rem] lg:overflow-hidden duration-[400ms]"
			style={{ marginBottom: `${active !== null ? '150px' : '0px'}` }}>
			<div className="flex flex-row mb-[32rem] space-x-[200rem] justify-between lg:mb-[64rem]">
				<div
					className="font-[600] text-[36rem] leading-[42rem] text-[#1F2117]
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[800rem]">
					Знакомство с командой
				</div>
				<div
					className="hidden
        lg:flex lg:flex-row lg:gap-[10rem]">
					<button
						className="rounded-full border-[1px] border-[#1F2117] w-[56rem] h-[56rem] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[56rem] lg:h-[56rem]"
						onClick={left}>
						<svg
							className="w-[18rem] h-[18rem] stroke-black group-hover/arrow1:stroke-white 
              lg:w-[24rem] lg:h-[24rem]"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.25 12.5L3.75 12.5"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10.5 19.25L3.75 12.5L10.5 5.75"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<button
						className="rounded-full border-[1px] border-[#1F2117] w-[56rem] h-[56rem] text-black grid place-content-center mr-[120rem] cursor-pointer group/arrow2 bg-[#FFB700] hover:bg-[#F0AD04] border-none duration-[200ms] 
          lg:w-[56rem] lg:h-[56rem] lg:mr-[120rem]"
						onClick={right}>
						<svg
							className="w-[18rem] h-[18rem] stroke-white group-hover/arrow2:stroke-white 
              lg:w-[24rem] lg:h-[24rem]"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3.75 12L20.25 12"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M13.5 18.75L20.25 12L13.5 5.25"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				className="mb-[30rem] overflow-hidden"
				style={{ width: `${window.innerWidth >= 1024 ? `${wrapper}` : ''}px` }}>
				<div
					className="flex flex-row gap-[8rem] cursor-pointer duration-[600ms] snap-mandatory snap-x overflow-scroll -wekbit-scrollbar:w-[0rem] 
          lg:snap-none lg:overflow-visible lg:gap-[20rem] "
					style={{ transform: `translateX(-${sizeCarousel})` }}>
					{data.map((e, i) => {
						return (
							<div
								key={i}
								className="gap-[16rem] grid grid-rows-[340rem_140rem] 
              lg:grid-rows-[420rem_150rem] snap-center lg:gap-[0rem">
								<div
									ref={ref}
									className={`relative h-[355rem] bg-cover bg-center delay-300 duration-[500ms] rounded-[20rem] z-0 w-[340rem]
                  lg:h-[420rem] lg:rounded-[20rem] 
                  ${active === i ? ' lg:w-[530rem]' : ' lg:w-[255rem]'}`}
									style={{ backgroundImage: `url(${e.img})` }}
									onClick={() => {
										if (window.innerWidth >= 1024) {
											activeButton(i);
										}
									}}>
									<div
										className="w-full h-full rounded-[20rem] bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms] -z-1 absolute
                    lg:rounded-[20rem]"></div>
									<div
										className={`relative grid grid-cols-[1fr_1fr] p-[16rem] z-5 place-items-end w-full h-full dulay-100 animate-wiggle
                    lg:p-[32rem] 
                    lg:${active === i ? 'visible' : 'hidden'} z-5`}>
										<div className="">
											<p
												className="font-bodyalt text-[#D2D2D2] text-[14rem] font-[400] mb-[6rem]
                        lg:text-[22rem]">
												{e.prof}
											</p>
											<p
												className="text-white text-[28rem] leading-[32rem] font-[600]
                        lg:text-[40rem] lg:leading-[40rem]">
												{e.name}
											</p>
										</div>
										<div
											className="flex flex-col gap-[12rem] items-end
                      lg:gap-[12rem]">
											<a href={e.links.instagram} target="_blank" rel="noreferrer">
												<div
													className="w-[40rem] h-[40rem] flex justify-center items-center bg-white rounded-[10rem] p-[5rem] group/inst hover:bg-black delay-[100ms] duration-[400ms]
                           lg:w-[48rem] lg:h-[48rem]">
													<AiFillInstagram
														size="30px"
														className="w-[32rem] h-[32rem] fill-black group-hover/inst:fill-white delay-[100ms] duration-[400ms]
                            lg:w-[40rem] lg:h-[40rem]"
													/>
												</div>
											</a>
											<a href={e.links.telegram} target="_blank" rel="noreferrer">
												<div
													className="w-[40rem] h-[40rem] flex justify-center items-center  bg-white rounded-[10rem] p-[5rem] group/telega hover:bg-black delay-[100ms] duration-[400ms]
                          lg:w-[48rem] lg:h-[48rem]">
													<FaTelegramPlane
														size="30px"
														className="w-[32rem] h-[32rem] fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]
                            lg:w-[40rem] lg:h-[40rem]"
													/>
												</div>
											</a>
											<a href={e.links.youtube} target="_blank" rel="noreferrer">
												<div
													className="w-[80rem] h-[40rem] bg-white rounded-[10rem] overflow-hidden flex justify-center items-center
                            group/telega hover:bg-black delay-[100ms] duration-[400ms]
                            lg:w-[95rem] lg:h-[48rem] lg:p-[8rem]">
													<ImYoutube2
														size="70px"
														className="w-[60rem] h-[32rem] fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]
                            lg:w-[95rem] lg:h-[48rem]"
													/>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div
									className={`font-bodyalt py-[14rem] text-[16rem] leading-[19rem] animate-wiggle text-[#777872]/80 font-[400]
                  lg:leading-[32.71rem] lg:pl-[20rem] lg:pt-[20rem] lg:text-[22rem] 
                  lg:${active === i ? 'visible' : 'hidden'}`}>
									{e.description}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};