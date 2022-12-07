import React, {useState, useRef} from 'react'

type dataT = {
  img: string,
  name: string,
  description: string
}
type DataType = dataT[]

const data: DataType = [
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
  {img: require('../images/face1.png'), name: 'luch', description: 'описание человечка базирующееся на хз чем'},
]

export const Command = () => {
  const [active, setActive] = useState<number | null>(null) 
  const [size, setSize] = useState<number>(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const activeButton =(i: number) => {
    setActive(i)
  }
  const right = () =>{
    active! >= data.length-1 ? setActive(0) : setActive(prev => prev! + 1)
  }
  const left = () =>{
    active! <= 0 ? setActive(data.length-1) : setActive(prev => prev! - 1)
  }

  const trLength = active! >6 ? `${(size+20)*(active!-5)}px`: '0px'

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
        className='flex flex-row gap-[20px] duration-[900ms] h-[620px]'
        style={{transform: `translateX(-${trLength})`}}>
      {
        data.map((e,i) => {
          return(
            <div className='flex flex-col'>
              <div 
                ref={ref}
                className={`h-[420px] bg-cover bg-center duration-[900ms] rounded-[20px]
                ${active === i? ' w-[400px]': ' w-[160px]' }`}
                style={{ backgroundImage:`url(${e.img})` }}
                onClick={() =>activeButton(i)}>
                {
                  active === i? (
                  <div className='flex justify-end items-end'>хуй c сылками</div>
                  ): null
                }
              </div>
              {
                active === i? (
                <div>{e.description}</div>
                ): null
              }
            </div>
          )
        })
      }
      </div>
    </div>
  )
}