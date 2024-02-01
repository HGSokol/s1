import { Header } from "../layouts/Header";
import { Preview } from "../layouts/Preview";
import { About } from "../layouts/About";
// import { Article } from '../layouts/Article';
// import { Training } from '../layouts/Training';
// import { Food } from '../layouts/Food';
// import { Progress } from '../layouts/Progress';
import { Command } from "../layouts/Command";
// import { Subscribe } from '../layouts/Subscribe';
import { Footer } from "../layouts/Footer";
import { Feedback } from "../layouts/Feedback";

function HomePage() {
  document.title = "Фитнес как наука";
  return (
    <div className="lg:w-[1920rem] lg:overflow-hidden">
      {/* <div className="mx-[16rem] lg:mx-[120rem] overflow-hidden"> */}
      <Header />
      <Preview />
      <About />
      <Command />
      <Feedback />
      {/* <Article />
        <Training />
        <Food />
        <Progress />
        <Subscribe /> 
      </div> */}
      <Footer />
    </div>
  );
}

export default HomePage;
