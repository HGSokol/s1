import React from 'react';
import { Develop } from '../components/Develop';

const Statistics = () => {
	document.title = 'Полезное';

	const text = {
		text1: 'Страница находится в разработке',
		text2:
			'На данный момент эта страница находится в разработке. Вы можете воспользоваться нашим приложением.',
	};

	return (
		<>
			<Develop text={text} />
		</>
	);
};

export default Statistics;
