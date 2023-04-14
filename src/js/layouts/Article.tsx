import { useState } from 'react';

import IMG1 from '../../img/article.png';
import Group from '../../img/group.png';
import Shadow from '../../img/Ellipse.png';

const frameInteractive = [
	{ img1: require('../../img/HeartRate.png'), img2: require('../../img/Frame.png') },
];

const data: string[] = ['# Статьи', '# Лекции', '# Советы экспертов'];

export const Article = () => {
	const [active, setActive] = useState(0);

	const activeButton = (item: number) => {
		setActive(item);
	};

	return (
		<div
			id="article"
			className="grid grid-rows-[410rem_317rem] grid-col-1 mb-[116.52rem] 
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
        lg:w-[537rem] lg:h-[607rem]"
					src={IMG1}
					alt="eat1"
				/>
			</div>
			<div
				className="order-1 mb-[52rem] 
      lg:pt-[90rem]">
				<div
					className="mb-[25rem] w-[187rem]  flex flex-row gap-[8rem] 
        lg:w-[814rem] lg:mb-[32rem] lg:gap-[18rem] flex-wrap">
					{data.map((item, i) => {
						return (
							<div
								key={i}
								className={` border-[1rem] border-[#FFB700] text-[#FFB700] font-bodyalt w-max h-[33rem] px-[12rem] py-[8rem] text-[14rem] leading-[17rem] rounded-full font-[400] duration-[600ms] whitespace-nowrap
                  lg:h-[43rem] lg:text-[16rem] lg:leading-[19rem] lg:rem-[24rem] lg:py-[12rem] lg:w-max lg:px-[24rem]`}>
								{item}
							</div>
						);
					})}
				</div>
				<h2
					className="font-[600] text-[36rem] leading-[42rem] h-[126rem] mb-[24rem] text-[#1F2117] 
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[842rem] lg:h-[150rem] lg:mb-[32rem]">
					Получай ценные знания каждый день.
				</h2>
				<div
					className="font-bodyalt font-[400] text-[16rem] leading-[19rem] h-[133rem] tracking-[0.02em] 
        lg:text-[22rem] lg:leading-[32rem] text-[#777872] lg:w-[660rem] lg:h-[128rem]">
					В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и
					тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся
					секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.
				</div>
			</div>
		</div>
	);
};
