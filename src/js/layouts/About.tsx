import { AboutCard } from "../components/AboutCard";
import IMG1 from "../../img/useful1.png";
import IMG2 from "../../img/food1.png";
import IMG3 from "../../img/activity1.png";
import IMG4 from "../../img/statistic1.png";

export interface dataAboutCard {
  name: string;
  nameSvg: string;
  title: string;
  text: string;
  img: string;
  button?: boolean;
}

const data: dataAboutCard[] = [
  {
    name: "📙 Полезное",
    nameSvg: IMG1,
    title: "Получай ценные знания каждый день.",
    text: `В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.`,
    img: IMG1,
    button: false,
  },
  {
    name: "🥦 Питание",
    nameSvg: IMG2,
    title: "Получай ценные знания каждый день.",
    text: `В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.`,
    img: IMG2,
    button: true,
  },
  {
    name: "🔥 Активность",
    nameSvg: IMG3,
    title: "Получай ценные знания каждый день.",
    text: `В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.`,
    img: IMG3,
    button: false,
  },
  {
    name: "🏆 Статистика",
    nameSvg: IMG4,
    title: "Получай ценные знания каждый день.",
    text: `В коллекции наших статей и лекций актуальная и полезная информация о здоровье, питании и тренировках. Наши эксперты предоставляют результаты новейших исследований и делятся секретами “внутренней кухни”. Вооружайся знаниями для достижения целей.`,
    img: IMG4,
    button: true,
  },
];

export const About = () => {
  return (
    <div
      id="about"
      className="px-[16rem] lg:px-[120rem] mb-[72rem] lg:mb-[180rem] h-max w-full"
    >
      <div className="flex flex-col gap-[72rem] lg:gap-[140rem]">
        {data.map((e, num) => {
          return (
            <div key={num}>
              <AboutCard {...e} num={num} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
