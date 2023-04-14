import React from 'react';
import { Develop } from '../components/Develop';

const Maintenance = () => {
	document.title = 'Техническое обслуживание';

	const text = {
		text1: 'Сайт находится на техническом обслуживании',
		text2:
			'На данный момент сайт находится на техническом обслуживании. Вы можете воспользоваться нашим приложением.',
	};

	return (
		<>
			<div className="lg:w-[1920rem]">
				<div className="lg:mx-[104rem] overflow-hidden">
					<Develop text={text} glob={true} />
				</div>
			</div>
		</>
	);
};

export default Maintenance;
