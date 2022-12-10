import { AboutCard } from '../components/AboutCard'

const data: string[] = [
  'Статьи\n и лекции',
  'Тренировки',
  'Планы питания',
  'Статистика',
]

export const About = () => {
  return (
    <div className='mb-[72px] md:mb-[235px]'>
      <p className='hidden md:block font-[600] text-[64px] text-[#1F2117] leading-[75px] mb-[75px]'>О нас</p>
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