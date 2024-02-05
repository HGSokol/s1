import { commentText as data } from "../components/data/commentText";

export const Feedback = () => {
  return (
    <div
      id="Отзывы"
      className="px-[16rem] lg:px-[120rem] lg:h-[1241rem] bg-[#16191C] overflow-hidden"
    >
      <div className="h-max pt-[32rem] lg:pt-[100rem] mb-[32rem] lg:mb-[64rem] text-[36rem] font-[500] lg:text-[64rem] font-body lg:font-[600] leading-[46rem] lg:leading-[60rem] text-[#FFFFFF]">
        <span className="text-[#FFB700]">Отзывы</span> о приложении
      </div>
      <div className="mb-[72rem] lg:mb-[0rem] overflow-hidden ">
        <div className="pb-[8rem] lg:pb-[0rem] lg:flex-wrap flex flex-row overflow-x-scroll lg:overflow-hidden lg:flex-col lg:gap-x-[30rem] lg:h-max gap-y-[24rem] lg:max-h-[882rem] snap-mandatory lg:snap-none snap-x -wekbit-scrollbar:w-[0rem] gap-x-[8rem]">
          {data.map((e, i) => {
            return (
              <a
                href={`${
                  i % 2 === 0
                    ? "https://play.google.com/store/apps/details?id=ru.likosoftdev.fitnesskaknauka&pcampaignid=web_share"
                    : "https://apps.apple.com/by/app/fkn-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D1%85%D1%83%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/id1634415981"
                }`}
                onClick={(event) =>
                  e.mail === "@FKN" && event?.preventDefault()
                }
                target="_blank"
                rel="noreferrer"
                key={i}
                className="h-[264rem] cursor-pointer p-[20rem] lg:h-max min-w-full lg:min-w-0 w-[343rem] lg:w-[312rem] bg-[#2C3034] hover:bg-[#3D4044] transition duration-300 lg:p-[24rem] rounded-[16rem] snap-center"
              >
                <div className="mb-[20rem] flex flex-row gap-[15rem]">
                  <img
                    className="w-[50rem] h-[50rem]"
                    src={e.image}
                    alt="pho"
                  />
                  <div className="flex flex-col gap-[4rem]">
                    <div className="text-[18rem] text-[#FFFFFF] leading-[22rem] font-[600] font-bodyalt">
                      {e.name}
                    </div>
                    <div className="text-[16rem] text-[#FFFFFF] leading-[19rem] font-[400] font-bodyalt">
                      {e.mail}
                    </div>
                  </div>
                </div>
                <div className="w-[290rem] lg:w-[263rem] text-[16rem] leading-[22rem] lg:text-[22rem] text-[#FFFFFF] lg:leading-[32rem] font-[500] font-body">
                  {e.text}
                </div>
                {e.mail === "@FKN" && (
                  <div className="pt-[20rem] flex flex-row text-[22rem] gap-[40rem] lg:gap-[20rem]  ">
                    <a
                      onClick={() =>
                        window.open(
                          "https://apps.apple.com/by/app/fkn-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D1%85%D1%83%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/id1634415981",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      href="https://apps.apple.com/by/app/fkn-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D1%85%D1%83%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/id1634415981"
                      target="_blank"
                      rel="noreferrer"
                      className="transition duration-300 cursor-pointer text-[#ffb700] decoration-[#ffb700] hover:text-[#fff] underline hover:decoration-[#fff]"
                    >
                      App Store
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          "https://play.google.com/store/apps/details?id=ru.likosoftdev.fitnesskaknauka&pcampaignid=web_share",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      href="https://play.google.com/store/apps/details?id=ru.likosoftdev.fitnesskaknauka&pcampaignid=web_share"
                      target="_blank"
                      rel="noreferrer"
                      className="transition duration-300 cursor-pointer text-[#ffb700] decoration-[#ffb700] hover:text-[#fff] underline hover:decoration-[#fff]"
                    >
                      Google Play
                    </a>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
