import {useEffect, useContext} from 'react'
import { Profile } from '../App'
import { Header } from '../layouts/Header';
import { Preview } from '../layouts/Preview';
import { About } from '../layouts/About';
import { Article } from '../layouts/Article'
import { Training } from '../layouts/Training'
import { Food } from '../layouts/Food'
import { Progress } from '../layouts/Progress'
import { Command } from '../layouts/Command'
import { Subscribe } from '../layouts/Subscribe'
import { Footer } from '../layouts/Footer'
import { Feedback } from '../layouts/Feedback';


function HomePage() {
  const { setUser, setIsAuthenticated } = useContext(Profile)


  return (
    <div className='md:mx-auto lg:w-[1024px] 2lg:w-[1920px]'>
      <div className='mx-[16px] md:mx-[40px] 2lg:mx-[120px] overflow-hidden'>
        <Header/>
        <Preview/>
        <About/>
        <Article/>
        <Training/>
        <Food/>
        <Progress/>
        <Command/>
        <Feedback/>
        <Subscribe/>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;