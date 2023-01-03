import React, {useState, useRef} from 'react'


type dataCard = {
  text:string,
  img:string,
  name: string,
  prof: string,
  rate: number,
}
type DataType = dataCard[]

const data: DataType = [
  {text:'Удобное отслеживание прогресса. хороший мотиватор делать лучше и больше. Неплохой набор действительно бесплатных функций. ', img: require('../images/feedbackphoto.png'), name: 'Игорь Василевский', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Cody Fisher', prof: 'Фитнес-тренер', rate: 5 },
  {text:'Пользуюсь уже более 4 лет. Приложение очень крутое.есть все необходимые упражнения, легко составлять планы тренировок, большой выбор готовых тренировок!', img: require('../images/feedbackphoto.png'), name: 'Marvin McKinney', prof: 'Фитнес-тренер', rate: 5 },
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
  const [size, setSize] = useState<number>(0)
  const [translate, setTranslate] = useState<number>(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const right = () =>{
    if(translate <= (size*data.length - size*4)){
      setTranslate(prev => Math.round(prev + size))
    }
  }
  const left = () =>{
    if(translate > 0){
      setTranslate(prev => Math.round(prev - size))
    }
  }

  const counterStars = (rate: number): string[] => {
    return ' '.repeat(rate).split('')
  } 

  React.useEffect(() => {
    setSize(Number(ref.current?.getBoundingClientRect().width))
  },[])

  return (
    <div className='mb-[72rem] gap-[10rem] 
    lg:overflow-hidden lg:gap-[15rem] lg:mb-[150rem]'>
      <div className='flex flex-row mb-[32rem] space-x-[200rem] justify-between 
      lg:mb-[64rem] '>
        <div className='font-[600] text-[31rem] leading-[37.57rem] text-[#1F2117] 
        lg:leading-[75.14rem] lg:text-[64rem]'>Нас любят и ценят</div>
        <div className='hidden 
        lg:flex lg:flex-row lg:gap-[10rem]'>
          <button className='rounded-full border-[1rem] border-[#1F2117] w-[56rem] h-[56rem] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[56rem] lg:h-[56rem]'
            onClick={left}>
              <svg className='w-[18rem] h-[18rem] stroke-black group-hover/arrow1:stroke-white 
              lg:w-[24rem] lg:h-[24rem]' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 12.5L3.75 12.5"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 19.25L3.75 12.5L10.5 5.75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          <button className='rounded-full border-[1rem] border-[#1F2117] w-[56rem] h-[56rem] text-black grid place-content-center mr-[120rem] cursor-pointer group/arrow2 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[56rem] lg:h-[56rem] lg:mr-[120rem]'
            onClick={right}>
              <svg className='w-[18rem] h-[18rem] stroke-black group-hover/arrow2:stroke-white 
              lg:w-[24rem] lg:h-[24rem] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12L20.25 12"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 18.75L20.25 12L13.5 5.25" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
            </button>
        </div>
      </div>
      <div 
        className='flex flex-row gap-[16rem] duration-[600ms] h-[290rem] items-center snap-mandatory snap-x overflow-scroll    
        lg:snap-none lg:overflow-visible lg:h-[330rem] '
        style={{transform: `translateX(-${translate}rem)`}}>
      {
        data.map((e,i) => {
          return(
            <div ref={ref} key={i} className='snap-center'>
              <div key={i} className='w-[226rem] h-[256rem] rounded-[20rem] p-[16rem] bg-white shadow-md 
              lg:justify-between lg:w-[500rem] lg:h-[319rem] lg:p-[24rem] lg:flex lg:flex-col'>
                <div className='font-bodyalt tracking-[0.02em] font-[600] h-[140rem] text-[14rem] text-[#1F2117] leading-[16.71rem] mb-[17.4rem] 
                lg:text-[22rem] lg:leading-[32rem] '>
                  {e.text}
                </div>
                <div className='lg:grid lg:grid-cols-2 '>
                  <div className='mb-[17.4rem] flex flex-row  
                  lg:order-2 lg:justify-end lg:items-end lg:mb-[0rem]' >
                    {
                      counterStars(e.rate).map((_,i) => {
                        return (
                          <div key={i}>
                            <svg className='w-[13.88rem] h-[13.2rem] 
                            lg:w-[20.82rem] lg:h-[19.8rem]' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0961 0.105469L14.3135 6.62453L21.5077 7.66991L16.3019 12.7443L17.5308 19.9094L11.0961 16.5265L4.66143 19.9094L5.89035 12.7443L0.68457 7.66991L7.87879 6.62453L11.0961 0.105469Z" fill="#FFB700"/>
                            </svg>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='flex flex-row gap-[8rem] 
                  lg:order-1 lg:gap-[14rem]'>
                    <img src={e.img} alt={e.name} className='rounded-full w-[36rem] h-[36rem] 
                    lg:w-[64rem] lg:h-[64rem]'/>
                    <div className='flex flex-col justify-center'>
                      <p className='w-max font-bodyalt font-[400] text-[12rem] leading-[14rem] text-[#1F2117] mb-[2rem] 
                      lg:font-[500] lg:text-[18rem] lg:leading-[21.48rem] lg:mb-[6rem]'>{e.name}</p>
                      <p className='font-bodyalt font-[400] text-[10rem] leading-[12rem] text-[#1F2117]/60 
                      lg:text-[14rem] lg:leading-[16.71rem]'>{e.prof}</p>
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