import { SubCard } from '../components/SubCard'

export type Sub = {
  text: string,
  data: string[],
  price: string,
  top?: string,
}

export interface subsDataType {
  [key: string]: Sub
}

const subsData: subsDataType = {
  sub1: {
    text: 'Бесплатно',
    data: [
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
    ],
    price: '0 руб./ мес.',
  },
  sub2: {
    text: 'Стандарт',
    data: [
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
    ],
    price: '350 руб./ мес.',
  },
  sub3: {
    text: 'Премиум',
    data: [
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
      'Тренировки',
      'Рассчет калорий и бжу',
    ],
    price: '2800 руб./ мес.',
    top: 'top'
  }
}

export const Subscribe = () => {

  return (
  <div className='flex flex-col mb-[158px]'>
    <p className='
      font-[600] text-[64px] text-[#1F2117] leading-[75.14px]
      w-[842px] h-[75px] text-center mx-auto mb-[127px]'>Подписки</p>
    <div className='grid grid-cols-[auto_auto_auto] h-[700px] mx-auto gap-[78px]'>
      <SubCard subsData={subsData.sub1}/>
      <SubCard subsData={subsData.sub2}/>
      <SubCard subsData={subsData.sub3}/>    
    </div>
  </div>
  )
}