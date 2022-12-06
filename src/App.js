import { Training } from './layouts/Training'
import { Food } from './layouts/Food'
import { Progress } from './layouts/Progress'
import { Command } from './layouts/Command'
import { Subscribe } from './layouts/Subscribe'
import { Footer } from './layouts/Footer'

function App() {
  return (
    <div className='font-sans bg-white w-[1780px] mx-auto overflow-hidden '>
      <Training/>
      <Food/>
      <Progress/>
      <Command/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
