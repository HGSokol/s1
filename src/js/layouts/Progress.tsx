import { useState } from 'react';

import IMG3 from '../../img/eat3.png';
import Group from '../../img/group.png';
import Shadow from '../../img/Ellipse.png';

type Data = string[];

const frameInteractive = [
	{ img1: require('../../img/HeartRate.png'), img2: require('../../img/Frame.png') },
	{ img1: require('../../img/gr2.png'), img2: require('../../img/g2.png') },
];

const data: Data = ['Отчеты по питанию', 'Статистика тренировок'];

export const Progress = () => {
	const [active, setActive] = useState(0);

	const activeButton = (item: number) => {
		setActive(item);
	};

	return (
		<div
			id="progress"
			className="grid grid-rows-[h-max_h-min] grid-cols-1 mb-[120rem] 
    lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[150rem]">
			<div className="lg:pt-[90rem]">
				<div
					className="mb-[25rem] flex flex-row gap-[8rem] 
        lg:pt-[90rem] lg:mb-[32rem] lg:gap-[18rem]">
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
					className="font-[600] text-[36rem] leading-[42rem] h-[126rem] mb-[24rem] text-[#1F2117] 
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]">
					Отслеживай прогресс. Становись лучше.{' '}
				</h2>
				<div
					className="font-bodyalt font-[400] text-[16rem] leading-[19rem] h-[76rem] tracking-[0.02em] 
        lg:text-[22rem] lg:leading-[32rem] text-[#777872] lg:w-[734rem] lg:h-[128rem]">
					Отмечай каждую тренировку и просматривай статистику. Отслеживание прогресса&nbsp;
					<div className="inline-block relative">
						<div className="z-10 relative">стало проще&nbsp;</div>
						<div className="-z-0 absolute">
							<svg
								className="w-[100rem] h-[10rem] -translate-y-[5rem] -translate-x-[5rem]  
              lg:w-[140rem] lg:h-[20rem] lg:-translate-y-[13rem] lg:-translate-x-[6rem]"
								viewBox="0 0 140 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M139.442 5.92856C139.442 5.92856 139.55 6.01054 139.398 6.39583C139.321 6.44551 139.026 6.69522 138.287 7.13798C137.198 8.0372 95.1992 4.45432 70.7533 7.1798L0.338651 13.9959C-0.312099 14.0494 0.195353 13.3267 0.195353 13.3267C9.334 9.64635 18.7088 5.73614 43.2855 3.67244C60.1605 1.53381 91.4798 0.0107194 97.859 0.43919C107.387 0.775029 127.612 3.38827 139.442 5.92856Z"
									fill="#FFB700"
								/>
							</svg>
						</div>
					</div>
					благодаря собранной в одном месте статистике по питанию и тренировкам.
				</div>
			</div>
			<div className=" mt-[20rem] relative order-last mx-auto lg:mx-[0]">
				<div
					className="absolute w-[54rem] h-[47rem] translate-x-[235rem] translate-y-[30rem] 
        lg:translate-x-[570rem] lg:w-[118rem] lg:h-[108rem] lg:translate-y-[45rem]">
					<img src={frameInteractive[active].img1} alt="heart" />
				</div>
				<div
					className="absolute w-[55rem] h-[53rem] -translate-x-[20rem] translate-y-[285rem] 
        lg:translate-x-[70rem] lg:w-[103rem] lg:h-[99rem] lg:translate-y-[540rem]">
					<img src={frameInteractive[active].img2} alt="frame" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[115rem] translate-y-[35rem] 
        lg:translate-x-[340rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[65rem]">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[145rem] translate-y-[340rem] rotate-[180deg]
        lg:translate-x-[410rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[630rem] ">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[280rem] h-[10rem] translate-x-[5rem] translate-y-[355rem] 
        lg:translate-x-[130rem] lg:w-[555rem] lg:h-[107rem] lg:translate-y-[700rem]">
					<img src={Shadow} alt="ellipse" />
				</div>
				<img
					className="mx-auto w-[300rem] 
        lg:h-max lg:mx-auto lg:w-[562rem]"
					src={IMG3}
					alt="eat1"
				/>
			</div>
		</div>
	);
};
