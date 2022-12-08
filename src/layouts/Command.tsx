import React, {useState, useRef} from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { ImYoutube2 } from 'react-icons/im'


type dataT = {
  img: string,
  prof: string,
  name: string,
  description: string
}
type DataType = dataT[]

const data: DataType = [
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
  {img: require('../images/face1.png'), prof:'Нутрициолог', name: 'Мария Пловец',  description: 'Победитель кубка РБ по бодибилдингу 90+ Неоднократный призер республиканских соревнований по бодибилдингу. Сертифицированный инструктор тренажерного зала и персональный тренер.'},
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

  const trLength = active! >4 ? `${(size+20)*(active!-3)}px`: '0px'

  React.useEffect(() => {
    if(ref.current) {
      setSize(ref.current.getBoundingClientRect().width)
    }
  },[])


  return (
    <div className='gap-[15px] mb-[50px]'>
      <div className='flex flex-row mb-[64px] space-x-[200px] justify-between'>
        <div className='font-[600] text-[64px] text-[#1F2117] leading-[75.14px] '>Знакомство с командой</div>
        <div className='flex flex-row gap-[10px]'>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center cursor-pointer hover:bg-[#FFB700] hover:text-white hover:border-none'
            onClick={left}>{'<'}</button>
          <button className='rounded-full border-[1px] border-[#1F2117] w-[56px] h-[56px] text-black grid place-content-center mr-[120px] cursor-pointer hover:bg-[#FFB700] hover:text-white hover:border-none'
            onClick={right}>{'>'}</button>
        </div>
      </div>
      <div 
        className='flex flex-row gap-[20px] h-[620px] cursor-pointer duration-[600ms]'
        style={{transform: `translateX(-${trLength})`}}>
      {
        data.map((e,i) => {
          return(
            <div className='grid grid-rows-[420px_400px]'>
              <div 
                ref={ref}
                className={`bg-cover bg-center delay-300 duration-[500ms] rounded-[20px] z-0
                ${active === i? ' w-[530px]': ' w-[255px]' }`}
                style={{ backgroundImage:`url(${e.img})` }}
                onClick={() =>activeButton(i)}>
                {
                  active === i? (
                  <div className='grid grid-cols-[1fr_1fr] p-[32px] z-5 place-items-end w-full h-full dulay-100 animate-wiggle'>
                    <div className=''>
                      <p className='text-[#777872] text-[22px] font-[400] '>{e.prof}</p>
                      <p className='text-white text-[40px] font-[600] leading-[40px]'>{e.name}</p>
                    </div>
                    <div className=' flex flex-col gap-[10px] items-end'>
                      <div className='w-min bg-white rounded-[10px] p-[5px] group/inst hover:bg-black delay-[100ms] duration-[400ms]'>
                        <AiFillInstagram size='30px' className='fill-black group-hover/inst:fill-white delay-[100ms] duration-[400ms]' />
                      </div>
                      <div className='w-min bg-white rounded-[10px] p-[5px] group/telega hover:bg-black delay-[100ms] duration-[400ms]'>
                        <FaTelegramPlane size='30px' className='fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]'/>
                      </div>
                      <div className='w-[80px] h-[40px] bg-white rounded-[10px] overflow-hidden flex justify-center items-center
                        group/telega hover:bg-black delay-[100ms] duration-[400ms]'>
                        <ImYoutube2 size='70px' className='fill-black group-hover/telega:fill-white delay-[100ms] duration-[400ms]'/>
                      </div>
                    </div>
                  </div>
                  ): null
                }
                {
                  active === i? (
                  <div className='p-[20px] animate-wiggle text-[#777872] text-[22px] font-[400]'>{e.description}</div>
                  ): null
                }
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}