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
		instagram?: string;
		telegram?: string;
		youtube?: string;
	};
};

const data: dataCard[] = [
	{
		img: require('../../img/about1.png'),
		prof: 'Врач',
		name: 'Александр Дзидзария',
		description: `Врач уролог, онколог, андролог, доктор медицинских наук, президент ассоциации молодых урологов, наставник чемпионов по бодибилдингу и фитнесу.\nПозаботится о том, чтобы соблюдалась самая главная заповедь здоровья: не навреди.\nПопробуй тренировки с поддержкой эксперта по здоровью`,
		links: {
			instagram: 'https://www.instagram.com/dzari.alex',
			telegram: 'https://t.me/+ItGtIl4k1TIzYjJi',
			youtube: 'https://www.youtube.com/@Dzari',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Тренер',
		name: 'Владислав Лапшин',
		description: `Будет вашим тренером и передаст максимум знаний, накопленных за 10 лет профессиональной работы тренером. Его главный девиз: "На дне терпения оседает золото". Мастер спорта по бодибилдингу, чемпион Москвы по классическому бодибилдингу и Men's physique muscular, триатлонист, участник IronMan. В своих тренировках сочетает и успешно реализует силовой и циклический тренинг. Работает только с тем, что опробовал лично. Он ваш надежный проводник в мир увлекательного фитнеса.`,
		links: {
			instagram: 'https://www.instagram.com/vladislav__lapshin',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Врач',
		name: 'Олег Ирышкин',
		description:
			'Врач эндокринолог, кандидат медицинских наук, эксперт по диетологии. Профессионально ответит на каверзные вопросы и объяснит, как применять науку о пище на практике, в жизни. Медицинский подход к фитнесу - это ФКН.',
		links: {
			instagram: 'https://www.instagram.com/olegiryshkin_md',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Врач',
		name: 'Руслан Шипицын',
		description:
			'Врач травматолог-ортопед. Врач остеопат, мануальный терапевт. Врач ординатор психотерапевт. Основатель и преподаватель академии нейродвигательной реабилитации. Автор 5-ти систем мануального лечения. Мастер спорта России по пауэрлифтингу. IPF Чемпион мира по пауэрлифтингу (становая тяга). 2015 г. WRPF',
		links: {
			instagram: 'https://instagram.com/dr.shipicyn',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Тренер',
		name: 'Юлия Галкина',
		description:
			'Профессиональный тренер по йоге и медитации, практикующий в Индии. Опыт преподавания в разных уголках мира: Филиппины, Вьетнам, Бали, Индия. Сертифицированный инструктор по хатха и аштанга йоге. Международная школа йоги “My yoga school”. Профессиональное физкультурное образование. Опыт преподавания более 10 лет.',
		links: {
			instagram: 'https://instagram.com/yogalkina',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Тренер',
		name: 'Алексей Кузнецов',
		description: `Профессиональный бодибилдер IFBB Pro\nЛюбительская карьера:\nЧемпион Северо-Запада России\nЧемпион России\nЧемпион Европы\nВице-Чемпион Мира\nПрофессиональная карьера:\nМистер Европа – 2 место\nАрнольд Классик и Чемпионат Мира по профессионалам – 3 место\nСайбериан Пауэр Шоу Про – 2 место\nПрофессиональную карьеру продолжаю…😉`,
		links: {
			instagram: 'https://instagram.com/aleksei_kuznetsov_elite_pro',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Тренер',
		name: 'Элеонора Романова',
		description: `Мастер спорта международного класса по художественной гимнастике.\nБронзовый призёр чемпионата мира и Европы.\nМногократный победитель и призёр международных соревнований по художественной гимнастике.`,
		links: {
			instagram: 'https://instagram.com/romanova_98_',
		},
	},
	{
		img: require('../../img/about1.png'),
		prof: 'Тренер',
		name: 'Ярослав Бражников',
		description: `Мастер спорта по акробатике. 2-х кратный чемпион России по спортивной акробатике, призер международных соревнований, член сборной России\nС 2015 года выступающий атлет в категории пляжный бодибилдинг Чемпион Москвы, Чемпион Южного Федерального Округа, вице чемпион России\nУчастник проекта Ninja Warrior на первом канале, принимал участие в съёмка кино, сериалах а так же тв шоу.`,
		links: {
			instagram: 'https://instagram.com/yaroslav_brazhnikov',
		},
	},
];

export const Command = () => {
	const [size, setSize] = useState<number>(0);
	const [gap, setGap] = useState<number>(0);
	const [translate, setTranslate] = useState<number>(0);
	const ref = useRef<HTMLDivElement | null>(null);
	const number = useRef(0);

	React.useEffect(() => {
		setSize(Number(ref.current?.getBoundingClientRect().width));
		setGap((window.innerWidth / 1920) * 40);
	}, [document.documentElement.clientWidth]);

	const right = () => {
		if (number.current <= data.length - 4) {
			number.current = number.current + 1;
			setTranslate((prev) => number.current * (size + gap));
		}
	};

	const left = () => {
		if (number.current > 0) {
			number.current = number.current - 1;
			setTranslate((prev) => number.current * (size + gap));
		}
	};

	return (
		<div
			className="mb-[50rem] gap-[10rem]
    lg:gap-[15rem] lg:overflow-hidden duration-[400ms] lg:mb-[150rem]">
			<div
				className="flex flex-row mb-[22rem] space-x-[200rem] justify-between 
      lg:mb-[64rem]">
				<div
					className="font-[600] text-[36rem] leading-[42rem] text-[#1F2117]
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[800rem]">
					Знакомьтесь, эксперты
				</div>
				<div className="hidden lg:flex lg:flex-row lg:gap-[10rem]">
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
						className="rounded-full border-[1px]w-[56rem] h-[56rem] grid place-content-center mr-[120rem] cursor-pointer group/arrow2 bg-[#FFB700] hover:bg-[#F0AD04] text-black border-none duration-[200ms] 
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
			<div className="mb-[30rem] overflow-hidden">
				<div
					className="flex flex-row gap-[8rem] cursor-pointer duration-[600ms] snap-mandatory snap-x overflow-x-scroll -wekbit-scrollbar:w-[0rem]
          lg:snap-none lg:overflow-visible lg:gap-[40rem]"
					style={{ transform: `translateX(-${translate}px)` }}>
					{data.map((e, i) => {
						return (
							<div
								key={i}
								className="gap-[15rem] grid grid-rows-[340rem_auto]
              lg:grid-rows-[420rem_auto] snap-center lg:gap-[0rem]">
								<div
									ref={ref}
									className={`relative h-[355rem] bg-cover bg-center delay-300 duration-[500ms] rounded-[20rem] z-0 w-[320rem]
                  lg:h-[420rem] lg:w-[533rem] lg:rounded-[20rem] ${
										i == 1
											? 'bg-[center_bottom_-100rem] lg:bg-[center_bottom_-300rem]'
											: i == 6
											? 'bg-[center_bottom_-100rem] lg:bg-[center_bottom_-200rem]'
											: i == 2
											? 'bg-top'
											: 'bg-top'
									}`}
									style={{ backgroundImage: `url(${e.img})` }}>
									<div
										className="w-full h-full rounded-[20rem] bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms] -z-1 absolute
                    lg:rounded-[20rem]"></div>
									<div
										className={`relative grid grid-cols-[1fr_1fr] p-[16rem] z-5 place-items-end w-full h-full dulay-100 animate-wiggle
                    lg:p-[32rem] `}>
										<div className="">
											<p
												className="font-bodyalt text-[#D2D2D2] text-[14rem] font-[400] mb-[6rem]
                        lg:text-[22rem]">
												{e.prof}
											</p>
											<p
												className="text-white font-body text-[28rem] leading-[32rem] font-[600]
                        lg:text-[40rem] lg:leading-[40rem]">
												{e.name}
											</p>
										</div>
										<div
											className="flex flex-col gap-[12rem] items-end
                      lg:gap-[12rem]">
											{e.links.instagram ? (
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
											) : null}
											{e.links.telegram ? (
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
											) : null}
											{e.links.youtube ? (
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
											) : null}
										</div>
									</div>
								</div>
								<div
									className={`font-bodyalt px-[12rem] py-[14rem] text-[16rem] leading-[19rem] animate-wiggle text-[#777872]/80 font-[400]
                  lg:leading-[32.71rem] lg:px-[10rem] lg:pt-[20rem] lg:text-[22rem] whitespace-pre-wrap
                  `}>
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
