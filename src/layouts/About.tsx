import { AboutCard } from '../components/AboutCard'

import IMG1 from '../images/about2.svg'

export interface dataAboutCard {
  text: string,
  img: string,
}

const data: dataAboutCard[] = [
  {text: 'Статьи\n и лекции', img: require("../images/about1.png")},
  {text: 'Тренировки', img: IMG1},
  // {text: 'Тренировки', img: require("../images/about2.svg")},
  {text: 'Планы питания', img: require("../images/about3.png")},
  {text: 'Статистика', img: require("../images/about4.png")},
]

export const About = () => {
  return (
    <div className='mb-[72px] 
    md:mb-[144px] 
    lg:mb-[124.55px]
    2lg:mb-[235px]'>
      <p className='text-[32px] mb-[32px] leading-[37.57px] font-[600] text-[#1F2117]
      md:block md:text-[65px] md:leading-[75px] md:mb-[50px]
      lg:block lg:text-[34px] lg:leading-[34px] lg:mb-[34px]
      2lg:block 2lg:text-[64px] 2lg:leading-[75px] 2lg:mb-[75px]'>О приложении</p>
      <div className='grid grid-rows-[1fr] gap-[25px] mb-[100px] 
      lg:gap-[10px] lg:grid-rows-[2] lg:grid-cols-[1fr_1fr_1fr_1fr]
      2lg:gap-[20px] 2lg:grid-rows-[2] 2lg:grid-cols-[1fr_1fr_1fr_1fr]'>
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