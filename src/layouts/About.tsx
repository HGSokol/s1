import { AboutCard } from '../components/AboutCard'

export interface dataAboutCard {
  text: string,
  img: string,
}

const data: dataAboutCard[] = [
  {text: 'Статьи\n и лекции', img: require("../images/about1.png")},
  {text: 'Тренировки', img: require("../images/about2.png")},
  {text: 'Планы питания', img: require("../images/about3.png")},
  {text: 'Статистика', img: require("../images/about4.png")},
]

export const About = () => {
  return (
    <div className='mb-[72px] md:mb-[235px]'>
      <p className='text-[32px] mb-[32px] leading-[37.57px] md:block font-[600] md:text-[64px] text-[#1F2117] md:leading-[75px] md:mb-[75px]'>О приложении</p>
      <div className='grid grid-rows-[1fr] gap-[16px] md:gap-[20px] md:grid-rows-[2] md:grid-cols-[1fr_1fr_1fr_1fr]  mb-[100px]'>
        {
          data.map((item,i) => {
            return (
              <AboutCard key={i} item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}