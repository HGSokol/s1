import React, {useState, useRef} from 'react'
import { AiFillStar } from 'react-icons/ai'


type dataT = {
  text:string,
  img:string,
  name: string,
  prof: string,
  rate: number,
}
type DataType = dataT[]

const data: DataType = [
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
]

export const Feedback = () => {
  const [active, setActive] = useState<number | null>(null) 
  const [size, setSize] = useState<number>(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const activeButton =(i: number) => {
    setActive(i)
  }
  const right = () =>{
    active! >= data.length-1 ? setActive(0) : setActive(prev => prev! === null ? 0: prev + 1)
  }
  const left = () =>{
    active! <= 0 ? setActive(data.length-1) : setActive(prev => prev! - 1)
  }

  const trLength = active! >4 ? `${(size+20)*(active!-3)}`: 0
  const sizeCarousel = trLength >= 2200? '2200px' : `${trLength}px`

  const counterStars = (rate: number): string[] => {
    return ' '.repeat(rate).split('')
  } 


  React.useEffect(() => {
    if(ref.current) {
      setSize(ref.current.getBoundingClientRect().width)
    }
  },[])
  

  return (
    <div className='mb-[50px] gap-[10px] md:gap-[15px] md:mb-[50px] md:overflow-hidden'>
      <div className='flex flex-row mb-[32px] md:mb-[64px] space-x-[200px] justify-between'>
        <div className='font-[600] text-[31px] leading-[37.57px] md:text-[64px] text-[#1F2117] md:leading-[75.14px] '>Нас любят и ценят</div>
        <div className='hidden md:flex md:flex-row md:gap-[10px]'>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms]'
            onClick={left}>
              <svg className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] stroke-black group-hover/arrow1:stroke-white' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 12.5L3.75 12.5"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 19.25L3.75 12.5L10.5 5.75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center mr-[120px] cursor-pointer group/arrow2 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms]'
            onClick={right}>
              <svg className='w-[18px] h-[18px] md:w-[24px] md:h-[24px] stroke-black group-hover/arrow2:stroke-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12L20.25 12"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 18.75L20.25 12L13.5 5.25" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
            </button>
        </div>
      </div>
      <div 
        className='flex flex-row gap-[16px] md:h-[620px] duration-[600ms] snap-mandatory snap-x overflow-scroll md:snap-none md:overflow-visible '
        style={{transform: `translateX(-${sizeCarousel})`}}>
      {
        data.map((e,i) => {
          return(
            <div key={i} className='snap-center'>
              <div key={i} className='w-[226px] h-[256px] rounded-[20px] p-[16px] bg-white'>
                <div className='font-bodyalt font-[600] h-[140px] text-[14px] text-[#1F2117] leading-[16.71px] mb-[17.4px]'>
                  {e.text}
                </div>
                <div>
                  <div className='mb-[17.4px] flex flex-row' >
                    {
                      counterStars(e.rate).map((_,i) => {
                        return (
                          <div key={i}>
                            <AiFillStar fill='#FFB700'/>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='flex flex-row gap-[8px]'>
                    <img src={e.img} alt={e.name} className='w-[36px] h-[36px]'/>
                    <div className='flex flex-col justify-center'>
                      <p className='font-bodyalt font-[400] text-[12px] leading-[14px] text-[#1F2117] mb-[2px]'>{e.name}</p>
                      <p className='font-bodyalt font-[400] text-[10px] leading-[12px] text-[#777872]'>{e.prof}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>

  )
}