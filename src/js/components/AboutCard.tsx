import { APPLE_LINK, GOOGLE_LINK } from "../constants";

export const AboutCard = (props: any) => {
  const { name, title, text, img, num, button } = props;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-[140rem] w-full justify-between">
      <div
        className={`${
          num % 2 === 0 ? "lg:order-2" : "lg:order-1"
        } contents lg:block`}
      >
        <div className="w-max rounded-[8rem] p-[8rem] lg:px-[12rem] lg:py-[11rem] flex flex-col font-bodyalt text-[18rem] lg:text-[26rem] font-[600] leading-[21rem] lg:leading-[30rem] bg-[#FFFFFF] shadow-[0px_6.91px_7.03px_0px_rgba(0,0,0,0.12)] lg:mt-[64rem] mb-[24rem] lg:mb-[32rem]">
          {name}
        </div>
        <div className="lg:w-[810rem] mb-[24rem] lg:mb-[32rem] font-bodyalt font-[500] text-[36rem] lg:text-[64rem] leading-[44rem] lg:leading-[77rem]">
          {title}
        </div>
        <div className="lg:w-[690rem] mb-[32rem] lg:mb-[46rem] text-[#686868] font-body font-[400] text-[16rem] lg:text-[22rem] leading-[22rem] lg:leading-[32rem]">
          {text}
        </div>
        {button && (
          <div className="mt-[32rem] lg:mt-[0rem] order-4 flex flex-col lg:flex-row gap-[14rem] lg:gap-[20rem]">
            <div
              onClick={() =>
                window.open(`${APPLE_LINK}`, "_blank", "noreferrer")
              }
              className="group/app cursor-pointer flex items-center justify-center rounded-[12rem] px-[18rem] lg:px-[24rem] py-[16rem] bg-[#16191C] duration-300 hover:bg-[#2e3134] text-[#FFFFFF] text-[16rem] leading-[19rem] font-bodyalt font-[600]"
            >
              <span className="group-hover/app:mr-[8rem] duration-300">
                Скачать с App Store
              </span>
              <svg
                className="hidden group-hover/app:block duration-300 w-[24rem] h-[24rem]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12L20.25 12"
                  stroke="#FFF"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 18.75L20.25 12L13.5 5.25"
                  stroke="#FFF"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() =>
                window.open(`${GOOGLE_LINK}`, "_blank", "noreferrer")
              }
              className="group/google cursor-pointer flex items-center duration-300 hover:bg-[#ffb700] justify-center rounded-[12rem] px-[18rem] lg:px-[24rem] py-[16rem] text-[#16191C] text-[16rem] leading-[19rem] font-bodyalt font-[600] border-[1rem] hover:border-[#ffb700] border-[#16191C]"
            >
              <span className="group-hover/google:mr-[8rem] duration-300">
                Скачать с Google Play
              </span>
              <svg
                className="hidden group-hover/google:block duration-300 w-[24rem] h-[24rem]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12L20.25 12"
                  stroke="#16191C"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 18.75L20.25 12L13.5 5.25"
                  stroke="#16191C"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className={`${num % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
        <img
          className="w-[343rem] h-[294rem] lg:w-[770rem] lg:h-[660rem]"
          src={img}
          alt="text"
        />
      </div>
    </div>
  );
};
