import { Header } from '../layouts/Header';
import { Preview } from '../layouts/Preview';
import { About } from '../layouts/About';
import { Training } from '../layouts/Training'
import { Food } from '../layouts/Food'
import { Progress } from '../layouts/Progress'
import { Command } from '../layouts/Command'
import { Subscribe } from '../layouts/Subscribe'
import { Footer } from '../layouts/Footer'


function HomePage() {
  return (
    <>
    <div className='font-sans bg-white mx-[16px] md:mx-[120px] '>
      <Header />
      <Preview />
      <About />
      <Training/>
      <Food/>
      <Progress/>
      <Command/>
      <Subscribe/>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;