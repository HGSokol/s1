import { Header } from '../layouts/Header';
import { Preview } from '../layouts/Preview';
import { About } from '../layouts/About';
import { Article } from '../layouts/Article';
import { Training } from '../layouts/Training';
import { Food } from '../layouts/Food';
import { Progress } from '../layouts/Progress';
import { Command } from '../layouts/Command';
import { Subscribe } from '../layouts/Subscribe';
import { Footer } from '../layouts/Footer';
import { Feedback } from '../layouts/Feedback';

function HomePage() {
	document.title = 'Фитнес как наука';
	return (
		<>
			<div className="lg:w-[1920rem]">
				<div className="mx-[16rem] lg:mx-[120rem] overflow-hidden">
					<Header />
					<Preview />
					<About />
					<Article />
					<Training />
					<Food />
					<Progress />
					<Command />
					<Feedback />
					<Subscribe />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default HomePage;
