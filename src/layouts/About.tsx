import { AboutCard } from '../components/AboutCard'

const data: string[] = [
  'Тренировки',
  'Планы питания',
  'Статистика',
]

export const About = () => {
  return (
    <div className='mb-[235px]'>
      <p className='font-[600] text-[64px] text-[#1F2117] leading-[75px] mb-[75px]'>О нас</p>
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-[40px] mb-[100px]'>
        {
          data.map(item => {
            return (
              <AboutCard item={item}/>
            )
          })
        }
      </div>
    </div>
  )
}