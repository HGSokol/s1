

export const About = () => {
  return (
    <div className=''>
      <p className='font-[600] text-[64px] text-[#1F2117] leading-[75px] mb-[75px]'>О нас</p>
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-[40px] mb-[100px]'>
        <div className='w-[534px] h-[420px] overflow-hidden rounded-[24px] '>
          <div className='w-[534px] h-[420px] hover:scale-[1.2] duration-[400ms] bg-[url("images/ss.png")] bg-cover bg-no-repeat bg-center rounded-[24px] flex flex-row items-end space-x-4 p-[32px]'>
            <p className='font-[600] text-[40px] text-[#FAFAFA] w-[338px] mr-[76px]'>Тренировки</p>
            <button className='rounded-full bg-white w-[56px] h-[56px] flex justify-center items-center rotate-[45deg]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12L20.25 12" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='bg-[url("images/ss.png")] bg-cover bg-no-repeat bg-center w-[534px] h-[420px] rounded-[24px] flex flex-row items-end space-x-4 p-[32px]'>
          <p className='font-[600] text-[40px] text-[#FAFAFA] w-[338px] mr-[76px]'>Планы питания</p>
          <button className='rounded-full bg-white w-[56px] h-[56px] flex justify-center items-center rotate-[45deg]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12L20.25 12" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div className='bg-[url("images/ss.png")] bg-cover bg-no-repeat bg-center w-[534px] h-[420px] rounded-[24px] flex flex-row items-end space-x-4 p-[32px]'>
          <p className='font-[600] text-[40px] text-[#FAFAFA] w-[338px] mr-[76px]'>Статистика</p>
          <button className='rounded-full bg-white w-[56px] h-[56px] flex justify-center items-center rotate-[45deg]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 12L20.25 12" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5 18.75L20.25 12L13.5 5.25" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}