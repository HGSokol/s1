import { AboutCard } from '../components/AboutCard'

// import IMG1 from '../images/about2.svg'


export interface dataAboutCard {
  text: string,
  img: string,
  idName:string,
}

const data: dataAboutCard[] = [
  {text: `Статьи\n и лекции`, img: require("../images/about1.png"), idName: 'article'},
  // {text: 'Тренировки', img: IMG1},
  {text: 'Тренировки', img: require("../images/about2.png"), idName: 'training'},
  {text: 'Планы питания', img: require("../images/about3.png"), idName: 'food'},
  {text: 'Статистика', img: require("../images/about4.png"), idName: 'progress'},
]

export const About = () => {
  return (
    <div id='about' className='mb-[72rem] 
    lg:mb-[195rem]'>
      <p className='text-[36rem] mb-[32rem] leading-[42rem] font-[600] text-[#1F2117]
      lg:block lg:text-[64rem] lg:leading-[75rem] lg:mb-[75rem]'>О приложении</p>
      <div className='grid grid-rows-[1fr] gap-[16rem] mb-[72rem] 
      lg:gap-[20rem] lg:grid-rows-[2] lg:grid-cols-[1fr_1fr_1fr_1fr]'>
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