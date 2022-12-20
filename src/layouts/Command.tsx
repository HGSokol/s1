import React, {useState, useRef} from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { ImYoutube2 } from 'react-icons/im'


type dataCard = {
  img: string,
  prof: string,
  name: string,
  description: string,
  links: {
    instagram: string,
    telegram: string,
    youtube: string
  }
}
type DataType = dataCard[]

const data: DataType = [
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face2.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face3.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face4.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face5.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face6.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face7.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face2.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face3.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face4.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face5.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
  {img: require('../images/face6.png'), prof:'Нутрициолог', name: 'Мария Павловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.', links: {
    instagram: 'https://www.instagram.com/',
    telegram: 'https://web.telegram.org',
    youtube: 'https://www.youtube.com/'
  }},
]

export const Command = () => {
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

  const clientWidth = (window.innerWidth >= 1024 && window.innerWidth<=1919) ? 10: 20

  const trLength = active! > 4 ? `${(size + clientWidth)*(active!-3)}`: 0
  const sizeCarousel = trLength >= 2200? '2200px' : `${trLength}px`

  React.useEffect(() => {
    if(ref.current) {
      setSize(ref.current.getBoundingClientRect().width)
    }

  },[])
  
  
  console.log(size*data.length)
  console.log(window.innerWidth)
  return (
    <div className='mb-[50px] gap-[10px]
    lg:gap-[15px] lg:mb-[30px] lg:overflow-hidden
    2lg:gap-[15px] 2lg:mb-[50px] 2lg:overflow-hidden'>
      <div className='flex flex-row mb-[32px]  space-x-[200px] justify-between
      lg:mb-[32px]
      2lg:mb-[64px]'>
        <div className='font-[600] text-[32px] leading-[37.57px] text-[#1F2117]
        md:text-[64px] md:leading-[75.14px] md:w-[400px] md:mb-[20px]
        lg:text-[33.92px] lg:leading-[37px]
        2lg:text-[64px] 2lg:leading-[75.14px] 2lg:w-[800px]'>Знакомство с командой</div>
        <div className='hidden 
        lg:flex lg:flex-row lg:gap-[10px]
        2lg:flex 2lg:flex-row 2lg:gap-[10px]'>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[29.68px] lg:h-[29.68px] 
          2lg:w-[56px] 2lg:h-[56px]'
            onClick={left}>
              <svg className='w-[18px] h-[18px] stroke-black group-hover/arrow1:stroke-white 
              lg:w-[13px] lg:h-[13px]
              2lg:w-[24px] 2lg:h-[24px]' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 12.5L3.75 12.5"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 19.25L3.75 12.5L10.5 5.75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center mr-[120px] cursor-pointer group/arrow2 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[29.68px] lg:h-[29.68px] lg:mr-[60px]
          2lg:w-[56px] 2lg:h-[56px] 2lg:mr-[120px]'
            onClick={right}>
              <svg className='w-[18px] h-[18px] stroke-black group-hover/arrow2:stroke-white 
              lg:w-[13px] lg:h-[13px]
              2lg:w-[24px] 2lg:h-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12L20.25 12"  strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5 18.75L20.25 12L13.5 5.25" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
            </button>
        </div>
      </div>
      <div 
        className='flex flex-row gap-[20px] cursor-pointer duration-[600ms] snap-mandatory snap-x overflow-scroll -wekbit-scrollbar:w-[0px] 
        lg:snap-none lg:overflow-visible lg:gap-[10px]
        2lg:gap-[20px]'
        style={{transform: `translateX(-${sizeCarousel})`}}>
      {
        data.map((e,i) => {
          return(
            <div key={i} className='grid grid-rows-[300px_130px] snap-center
            md:grid-rows-[520px_230px] 
            lg:grid-rows-[222.6px_79.5px] 
            2lg:grid-rows-[420px_150px] '>
              <div 
                ref={ref}
                className={`relative h-[300px] bg-cover bg-center delay-300 duration-[500ms] rounded-[20px] z-0 w-[288px]
                md:h-full md:w-[550px] md:rounded-[40px] 
                lg:h-[222.6px] lg:rounded-[10px]
                2lg:h-[420px] 2lg:rounded-[20px]
                ${active === i? ' lg:w-[290px] 2lg:w-[530px]': ' lg:w-[145px] 2lg:w-[255px]' }`}
                style={{ backgroundImage:`url(${e.img})` }}
                onClick={() =>activeButton(i)}>
                  <div className=' w-full h-full rounded-[20px] bg-[#1F2117]/30 group-hover/about:bg-yellow-500/30 duration-[400ms] -z-1 absolute
                  md:rounded-[40px] 
                  lg:rounded-[10px] 
                  2lg:rounded-[20px]'></div>
                  <div className={`relative grid grid-cols-[1fr_1fr] p-[16px] z-5 place-items-end w-full h-full dulay-100 animate-wiggle
                  md:p-[32px] 
                  lg:p-[16px] 
                  2lg:p-[32px] 
                  lg:${active === i? 'visible' : 'hidden'} z-5`}>
                    <div className=''>
                      <p className='text-[#D2D2D2] text-[14px] font-[400] mb-[6px]
                      md:text-[22px] 
                      lg:text-[11.66px]
                      2lg:text-[22px] '>{e.prof}</p>
                      <p className='text-white text-[24px] leading-[28.18px] font-[600]
                      md:text-[40px] md:leading-[40px] 
                      lg:text-[21.2px] lg:leading-[20px]
                      2lg:text-[40px] 2lg:leading-[40px]'>{e.name}</p>
                    </div>
                    <div className=' flex flex-col gap-[10px] items-end
                    md:gap-[20px] 
                    lg:gap-[7px] 
                    2ld:gap-[20px]'>
                      <a href={e.links.instagram} target='_blank' rel="noreferrer">
                        <div className='w-min bg-white rounded-[10px] p-[5px] group/inst hover:bg-black delay-[100ms] duration-[400ms]
                        md:rounded-[20px]  
                        lg:rounded-[10px]  
                        2lg:rounded-[20px] '>
                          <AiFillInstagram size='30px' className='fill-black group-hover/inst:fill-white delay-[100ms] duration-[400ms]
                          md:w-[60px] md:h-[60px]
                          lg:w-[24px] lg:h-[24px]
                          2lg:w-[60px] 2lg:h-[60px]' />
                        </div>
                      </a>
                      <a href={e.links.telegram} target='_blank' rel="noreferrer">
                        <div className='w-min bg-white rounded-[10px] p-[5px] group/telega hover:bg-black delay-[100ms] duration-[400ms]
                        md:rounded-[20px] 
                        lg:rounded-[10px] 
                        2lg:rounded-[20px]'>
                          <FaTelegramPlane size='30px' className='fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]
                          md:w-[60px] md:h-[60px] 
                          lg:w-[24px] lg:h-[24px]
                          2lg:w-[60px] 2lg:h-[60px]'/>
                        </div>
                      </a>
                      <a href={e.links.youtube} target='_blank' rel="noreferrer">
                        <div className='w-[80px] h-[40px] bg-white rounded-[10px] overflow-hidden flex justify-center items-center
                          group/telega hover:bg-black delay-[100ms] duration-[400ms]
                          md:w-[130px] md:h-[65px] md:p-[15px] md:rounded-[20px] 
                          lg:w-min lg:h-[35px] lg:p-[7px] lg:rounded-[10px] 
                          2lg:w-[130px] 2lg:h-[65px] 2lg:p-[15px] 2lg:rounded-[20px]'>
                          <ImYoutube2 size='70px' className='fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]
                          md:w-[150px] md:h-[150px] 
                          lg:w-[50px] lg:h-[20px]
                          2lg:w-[150px] 2lg:h-[150px]'/>
                        </div>
                      </a>
                    </div>
                  </div>
              </div>
                <div className={`font-bodyalt py-[14px] text-[14px] leading-[16.71px] animate-wiggle text-[#777872]/60 font-[400]
                md:leading-[32.71px] md:pl-[20px] md:pt-[20px] md:text-[22px] 
                lg:leading-[17px] lg:pl-[10px] lg:pt-[10px] lg:text-[11.66px] 
                2lg:leading-[32.71px] 2lg:pl-[20px] 2lg:pt-[20px] 2lg:text-[22px] 
                lg:${active === i? 'visible' : 'hidden'}`}>
                    {e.description}
                </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}