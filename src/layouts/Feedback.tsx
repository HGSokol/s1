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
    <div className='mb-[72px] gap-[10px] 
    md:gap-[15px] md:mb-[50px] md:overflow-hidden
    lg:gap-[15px] lg:mb-[150px] lg:overflow-hidden
    2lg:gap-[15px] 2lg:mb-[150px]'>
      <div className='flex flex-row mb-[32px] space-x-[200px] justify-between 
      lg:mb-[64px]
      2lg:mb-[64px] '>
        <div className='font-[600] text-[31px] leading-[37.57px] text-[#1F2117] 
        md:leading-[75.14px] md:text-[64px] 
        lg:leading-[75.14px] lg:text-[64px]
        2lg:leading-[75.14px] 2lg:text-[64px]'>Нас любят и ценят</div>
        <div className='hidden 
        lg:flex lg:flex-row lg:gap-[10px]
        2lg:gap-[10px]'>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms]'
            onClick={left}>
              <svg className='w-[18px] h-[18px] stroke-black group-hover/arrow1:stroke-white 
              lg:w-[24px] lg:h-[24px]
              2lg:w-[24px] 2lg:h-[24px]' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 12.5L3.75 12.5"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 19.25L3.75 12.5L10.5 5.75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center mr-[120px] cursor-pointer group/arrow2 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms]'
            onClick={right}>
              <svg className='w-[18px] h-[18px] stroke-black group-hover/arrow2:stroke-white 
              lg:w-[24px] lg:h-[24px]
              2lg:w-[24px] 2lg:h-[24px] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12L20.25 12"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 18.75L20.25 12L13.5 5.25" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
            </button>
        </div>
      </div>
      <div 
        className='flex flex-row gap-[16px] duration-[600ms] h-[290px] items-center snap-mandatory snap-x overflow-scroll    
        md:h-[345px] 
        lg:h-[330px] lg:snap-none lg:overflow-visible
        2lg:h-[330px] '
        style={{transform: `translateX(-${translate}px)`}}>
      {
        data.map((e,i) => {
          return(
            <div ref={ref} key={i} className='snap-center'>
              <div key={i} className='w-[226px] h-[256px] rounded-[20px] p-[16px] bg-white shadow-md 
              md:w-[500px] md:h-[319px] md:p-[24px] md:flex md:flex-col md:justify-between 
              lg:w-[500px] lg:h-[319px] lg:p-[24px] lg:flex lg:flex-col lg:justify-between
              2lg:w-[500px] 2lg:h-[319px] 2lg:p-[24px] 2lg:flex 2lg:flex-col'>
                <div className='font-bodyalt tracking-[0.02em] font-[600] h-[140px] text-[14px] text-[#1F2117] leading-[16.71px] mb-[17.4px] 
                md:text-[22px] md:leading-[32px] 
                lg:text-[22px] lg:leading-[32px] 
                2lg:text-[22px] 2lg:leading-[32px] '>
                  {e.text}
                </div>
                <div className='
                lg:grid lg:grid-cols-2
                2lg:grid 2lg:grid-cols-2'>
                  <div className='mb-[17.4px]  flex flex-row  
                  lg:order-2 lg:justify-end lg:items-end lg:m-[0px]
                  2lg:justify-end 2lg:items-end 2lg:m-[0px]' >
                    {
                      counterStars(e.rate).map((_,i) => {
                        return (
                          <div key={i}>
                            <svg className='w-[13.88px] h-[13.2px] 
                            md:w-[20.82px] md:h-[19.8px] 
                            lg:w-[20.82px] lg:h-[19.8px]
                            2lg:w-[20.82px] 2lg:h-[19.8px]' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0961 0.105469L14.3135 6.62453L21.5077 7.66991L16.3019 12.7443L17.5308 19.9094L11.0961 16.5265L4.66143 19.9094L5.89035 12.7443L0.68457 7.66991L7.87879 6.62453L11.0961 0.105469Z" fill="#FFB700"/>
                            </svg>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='flex flex-row gap-[8px] 
                  lg:order-1 lg:gap-[14px]
                  2lg:order-1 2lg:gap-[14px]'>
                    <img src={e.img} alt={e.name} className='rounded-full w-[36px] h-[36px] 
                    md:w-[64px] md:h-[64px] 
                    lg:w-[64px] lg:h-[64px]
                    2lg:w-[64px] 2lg:h-[64px]'/>
                    <div className='flex flex-col justify-center'>
                      <p className='w-max font-bodyalt font-[400] text-[12px] leading-[14px] text-[#1F2117] mb-[2px] 
                      md:font-[500] md:text-[18px] md:leading-[21.48px] md:mb-[6px] 
                      lg:font-[500] lg:text-[18px] lg:leading-[21.48px] lg:mb-[6px]
                      2lg:font-[500] 2lg:text-[18px] 2lg:leading-[21.48px] 2lg:mb-[6px]'>{e.name}</p>
                      <p className='font-bodyalt font-[400] text-[10px] leading-[12px] text-[#1F2117]/60 
                      md:text-[14px] md:leading-[16.71px] 
                      lg:text-[14px] lg:leading-[16.71px]
                      2lg:text-[14px] 2lg:leading-[16.71px]'>{e.prof}</p>
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