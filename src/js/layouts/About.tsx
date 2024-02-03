import { AboutCard } from '../components/AboutCard'
import IMG1 from '../../img/useful1.png'
import IMG2 from '../../img/food1.png'
import IMG3 from '../../img/activity1.png'
import IMG4 from '../../img/statistic1.png'

export interface dataAboutCard {
	name: string
	nameSvg: string
	title: string
	text: string
	img: string
	button?: boolean
}

const data: dataAboutCard[] = [
	{
		name: '📙 Полезное',
		nameSvg: IMG1,
		title: 'Получай ценные знания каждый день.',
		text: `В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.`,
		img: IMG1,
		button: false,
	},
	{
		name: '🥦 Питание',
		nameSvg: IMG2,
		title: 'Питайся вкусно, полезно и разнообразно. ',
		text: `Готовые рецепты и меню разработаны так, чтобы их было легко соблюдать. Независимо от типа диеты: веганской, кето-, низкоуглеводной или другой - сделай выбор в пользу здорового питания.`,
		img: IMG2,
		button: true,
	},
	{
		name: '🔥 Активность',
		nameSvg: IMG3,
		title: 'Тренируйся легко, в любом месте.',
		text: `Тренировочные программы разработаны для всех и каждого. 
    Хотите скинуть вес или набрать мышечную массу? Развить гибкость или повысить общий тонус? Благодаря разнообразию программ вы найдёте для себя идеальный вариант. Тренировочные планы разработаны профессиональными тренерами и учитывают ваш уровень физической подготовки и индивидуальные потребности, гарантируя максимальный результат.`,
		img: IMG3,
		button: false,
	},
	{
		name: '🏆 Статистика',
		nameSvg: IMG4,
		title: 'Отслеживай прогресс. Совершенствуйся.',
		text: `Комплексные отчеты о питании и статистика тренировок позволят следить за прогрессом в режиме реального времени. Оставайся мотивированным и придерживайся намеченного курса.`,
		img: IMG4,
		button: true,
	},
]

export const About = () => {
	return (
		<div
			id="О приложении"
			className="px-[16rem] lg:px-[120rem] mb-[72rem] lg:mb-[180rem] h-max w-full"
		>
			<div className="flex flex-col gap-[72rem] lg:gap-[140rem]">
				{data.map((e, num) => {
					return (
						<div key={num}>
							<AboutCard {...e} num={num} />
						</div>
					)
				})}
			</div>
		</div>
	)
}
