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
    <div className='font-sans bg-white w-[1780px] mx-auto overflow-hidden'>
      <Header />
      <Preview />
      <About />
      <Training/>
      <Food/>
      <Progress/>
      <Command/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default HomePage;