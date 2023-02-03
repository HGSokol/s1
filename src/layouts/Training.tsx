import { useState } from 'react';

import IMG1 from '../images/eat1.png';
import Group from '../images/group.png';
import Shadow from '../images/Ellipse.png';

type DataType = string[];

const frameInteractive = [
	{ img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
	{ img1: require('../images/gr2.png'), img2: require('../images/g2.png') },
];

const data: DataType = ['Похудение', 'Набор массы'];

export const Training = () => {
	const [active, setActive] = useState(0);

	const activeButton = (item: number) => {
		setActive(item);
	};

	return (
		<div
			id="training"
			className="grid grid-rows-[340rem_auto] mb-[117rem] grid-cols-1 
    lg:grid-cols-[auto_auto] lg:grid-rows-1 lg:mb-[169rem] lg:pt-[20rem]">
			<div className="lg:pt-[120rem]">
				<div
					className="mb-[25rem] flex flex-row gap-[8rem] 
        lg:w-[814rem] lg:mb-[32rem] lg:gap-[18rem]">
					{data.map((item, i) => {
						return (
							<button
								key={i}
								className={` hover:bg-[#FFB700] hover:text-[#FAFAFA] bg-white font-bodyalt w-max h-[33rem] px-[12rem] py-[8rem] text-[14rem] leading-[17rem] rounded-full font-[400] duration-[600ms] whitespace-nowrap
                  lg:h-[43rem] lg:text-[16rem] lg:leading-[19rem] lg:rem-[24rem] lg:py-[12rem] lg:w-max lg:px-[24rem]
                  ${
										active === i
											? ' bg-[#FFB700] text-[#FAFAFA] drop-shadow-dropActive'
											: ' bg-[#FFFFFF] text-[#1F2117] drop-shadow-drop'
									}`}
								onClick={() => activeButton(i)}>
								{item}
							</button>
						);
					})}
				</div>
				<h2
					className="whitespace-pre-wrap font-[600] text-[36rem] leading-[42rem] h-[126rem] mb-[24rem] text-[#1F2117] 
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]">{`Тренируйся. ${
					window.innerWidth < 1024 ? ' \n' : ''
				}Будь сильнее. ${window.innerWidth < 1024 ? ' \n' : ''}Укрепи здоровье.`}</h2>
				<div
					className="font-bodyalt font-[400] text-[16rem] leading-[19rem] h-[76rem] tracking-[0.02em] 
        lg:text-[22rem] lg:leading-[32rem] text-[#777872] lg:w-[734rem] lg:h-[128rem]">
					Уровень твоей подготовки не имеет значения. Наши программы выстроены под любой уровень
					физической подготовки.&nbsp;
					<div className="inline-block relative">
						<div className="z-10 relative">Более чем 1500&nbsp;</div>
						<div className="-z-0 absolute">
							<svg
								className="w-[130rem] h-[10rem] -translate-y-[5rem] -translate-x-[2rem] 
              lg:w-[170rem] lg:h-[20rem] lg:-translate-y-[13rem] lg:-translate-x-[3rem]"
								viewBox="0 0 112 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M111.674 3.59188C111.674 3.59188 111.762 3.62723 111.645 3.78426C111.585 3.80373 111.351 3.90281 110.765 4.07554C109.904 4.432 76.1864 2.3762 56.6266 3.16656L0.271759 5.01591C-0.249185 5.02908 0.147705 4.73758 0.147705 4.73758C7.42328 3.34289 14.885 1.85651 34.5588 1.34126C48.0574 0.689425 73.1438 0.489928 78.2636 0.754385C85.9067 1.02377 102.156 2.38046 111.674 3.59188Z"
									fill="#FFB700"
								/>
							</svg>
						</div>
					</div>
					тренировок, с помощью которых вы быстрее достигнете своей цели.
				</div>
			</div>
			<div className="order-last relative mx-auto">
				<div
					className="absolute w-[54rem] h-[47rem] translate-x-[225rem] -translate-y-[0rem] 
          lg:translate-x-[408rem] lg:w-[118rem] lg:h-[108rem] lg:-translate-y-[10rem]">
					<img src={frameInteractive[active].img1} alt="heart" />
				</div>
				<div
					className="absolute w-[55rem] h-[53rem] -translate-x-[30rem] translate-y-[260rem] 
          lg:-translate-x-[90rem] lg:w-[103rem] lg:h-[99rem] lg:translate-y-[480rem]">
					<img src={frameInteractive[active].img2} alt="frame" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[105rem] translate-y-[5rem] 
          lg:translate-x-[190rem] lg:w-[59rem] lg:h-[61rem] lg:-translate-y-[0rem]">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[130rem] translate-y-[310rem] rotate-[180deg]
          lg:translate-x-[245rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[570rem] ">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[280rem] h-[10rem] 0translate-x-[5rem] translate-y-[330rem] 
          lg:-translate-x-[10rem] lg:w-[555rem] lg:h-[107rem] lg:translate-y-[630rem]">
					<img src={Shadow} alt="ellipse" />
				</div>
				<img
					className="w-[282rem] mx-auto 
          lg:h-max lg:mx-auto lg:w-[523rem]"
					src={IMG1}
					alt="eat1"
				/>
			</div>
		</div>
	);
};
