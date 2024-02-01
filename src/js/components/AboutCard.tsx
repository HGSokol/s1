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
            <div className="cursor-pointer flex items-center justify-center rounded-[12rem] px-[18rem] lg:px-[24rem] py-[16rem] bg-[#16191C] text-[#FFFFFF] text-[16rem] leading-[19rem] font-bodyalt font-[600]">
              Скачать с App Store
            </div>
            <div className="cursor-pointer flex items-center justify-center rounded-[12rem] px-[18rem] lg:px-[24rem] py-[16rem] text-[#16191C] text-[16rem] leading-[19rem] font-bodyalt font-[600] border-[1rem] border-[#16191C]">
              Скачать с Google Play
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
