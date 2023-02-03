import { useState } from 'react';

import IMG1 from '../images/article.png';
import Group from '../images/group.png';
import Shadow from '../images/Ellipse.png';

type buttonName = string[];

const frameInteractive = [
	{ img1: require('../images/HeartRate.png'), img2: require('../images/Frame.png') },
	{ img1: require('../images/gr2.png'), img2: require('../images/g2.png') },
];

const data: buttonName = ['Статьи', 'Лекции'];

export const Article = () => {
	const [active, setActive] = useState(0);

	const activeButton = (item: number) => {
		setActive(item);
	};

	return (
		<div
			id="article"
			className="grid grid-rows-[330rem_317rem] grid-col-1 mb-[116.52rem] 
    lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:mb-[150rem] lg:pt-[40rem] ">
			<div
				className="relative order-2 duration-300 mx-auto
      lg:order-1">
				<div
					className="absolute w-[54rem] h-[47rem] translate-x-[235rem] -translate-y-[12rem] 
        lg:translate-x-[430rem] lg:w-[118rem] lg:h-[108rem] lg:-translate-y-[35rem]">
					<img src={frameInteractive[active].img1} alt="heart" />
				</div>
				<div
					className="absolute w-[55rem] h-[53rem] -translate-x-[27rem] translate-y-[250rem]
        lg:-translate-x-[70rem] lg:w-[103rem] lg:h-[99rem] lg:translate-y-[470rem]">
					<img src={frameInteractive[active].img2} alt="frame" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[113rem] -translate-y-[5rem] 
        lg:translate-x-[210rem] lg:w-[59rem] lg:h-[61rem] lg:-translate-y-[20rem]">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[31rem] h-[32rem] translate-x-[140rem] translate-y-[295rem] rotate-[180deg]
        lg:translate-x-[270rem] lg:w-[59rem] lg:h-[61rem] lg:translate-y-[560rem] ">
					<img src={Group} alt="group" />
				</div>
				<div
					className="absolute w-[280rem] h-[10rem] translate-x-[5rem] translate-y-[320rem] 
        lg:translate-x-[0rem] lg:w-[555rem] lg:h-[107rem] lg:translate-y-[620rem]">
					<img src={Shadow} alt="ellipse" />
				</div>
				<img
					className="mx-auto w-[287rem] h-[327rem]
        lg:w-[537rem] lg:h-[607rem] lg:mx-auto  "
					src={IMG1}
					alt="eat1"
				/>
			</div>
			<div
				className="order-1 mb-[52rem] 
      lg:pt-[90rem]">
				<div
					className="mb-[25rem]  flex flex-row gap-[8rem] 
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
					className="font-[600] text-[36rem] leading-[42rem] h-[126rem] mb-[24rem] text-[#1F2117] 
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]">
					Получай ценные знания каждый день.
				</h2>
				<div
					className="font-bodyalt font-[400] text-[16rem] leading-[19rem] h-[76rem] tracking-[0.02em] 
        lg:text-[22rem] lg:leading-[32rem] text-[#777872] lg:w-[734rem] lg:h-[128rem]">
					В нашем приложение собраны
					<div className="inline-block relative">
						<div className="z-10 relative">&nbsp;тысячи&nbsp;</div>
						<div className="-z-0 absolute">
							<svg
								className="w-[68rem] h-[10rem] -translate-y-[5rem] -translate-x-[2rem] 
              lg:w-[167rem] lg:h-[17rem] lg:-translate-y-[11rem] lg:-translate-x-[3rem]"
								viewBox="0 0 153 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M152.226 5.87917C152.226 5.87917 152.345 5.96151 152.18 6.34634C152.096 6.39578 151.774 6.64456 150.969 7.08498C149.783 7.98078 103.914 4.26149 77.2313 6.90812L0.3698 13.497C-0.34056 13.5484 0.211171 12.8273 0.211171 12.8273C10.1775 9.17608 20.4009 5.29578 47.2288 3.31143C65.6471 1.22719 99.8388 -0.194657 106.805 0.254519C117.21 0.621249 139.301 3.30028 152.226 5.87917Z"
									fill="#FFB700"
								/>
							</svg>
						</div>
					</div>
					статей и лекций на темы спорта и здоровья. Изуйчай новую информацию, чтобы лучше
					разбираться в том, как работает наше тело.
				</div>
			</div>
		</div>
	);
};
