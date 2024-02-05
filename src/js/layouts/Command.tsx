import React, { useState, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";

import { teamInfo as data } from "../components/data/teamInfo";

export const Command = () => {
  const [size, setSize] = useState<number>(0);
  const [gap, setGap] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const number = useRef(0);

  React.useEffect(() => {
    setSize(Number(ref.current?.getBoundingClientRect().width));
    setGap((window.innerWidth / 1920) * 40);
  }, [document.documentElement.clientWidth]);

  const right = () => {
    if (number.current <= data.length - 4) {
      number.current = number.current + 1;
      setTranslate((prev) => number.current * (size + gap));
    }
  };

  const left = () => {
    if (number.current > 0) {
      number.current = number.current - 1;
      setTranslate((prev) => number.current * (size + gap));
    }
  };

  return (
    <div
      id="Эксперты"
      className="px-[16rem] lg:px-[120rem] mb-[72rem] gap-[10rem]
    lg:gap-[15rem] lg:overflow-hidden duration-[400ms] lg:mb-[120rem]"
    >
      <div
        className="flex flex-row mb-[22rem] space-x-[200rem] justify-between 
      lg:mb-[64rem]"
      >
        <div className="lg:inline-flex lg:flex-row relative">
          <div className="absolute inline-flex flex-row pt-[4rem] lg:pt-[0rem] lg:-translate-y-[7rem]">
            {data.map((e, i) => {
              const mNum = 12 * i;
              const lNum = 30 * i;
              return (
                <div
                  key={i}
                  style={{
                    transform: `translateX(calc(-${
                      window.innerWidth >= 1000 ? lNum : mNum
                    }rem))`,
                  }}
                  className={`${
                    i > 3 ? "hidden" : "block"
                  } -z-${i} lg:border-[10rem] border-[3rem] border-[#fafafa] rounded-full`}
                >
                  {i >= 3 ? (
                    <div className="grid place-content-center pb-[5rem] lg:pb-[12rem]  lg:w-[68rem] w-[27rem] lg:h-[68rem] h-[27rem]  rounded-full bg-[#E6E6E6] font-body text-[20rem] lg:text-[36rem] font-[600] leading-[34rem]">
                      {data.length - 3}
                    </div>
                  ) : (
                    <img
                      className="lg:w-[68rem] w-[27rem] h-[27rem] lg:h-[68rem] rounded-full "
                      src={e.minImg}
                      alt="avatar"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div
            className="pl-[100rem] lg:pl-[386rem] lg:-translate-x-[110rem] font-bodyalt font-[500] text-[36rem] leading-[42rem] text-[#16191C]
        lg:text-[64rem] lg:leading-[75.14rem] lg:w-[800rem] inline lg:inline-grid lg:place-items-center whitespace-normal lg:whitespace-nowrap"
          >
            Знакомьтесь, эксперты
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:gap-[24rem]">
          <button
            className="rounded-full border-[1px] border-[#AAAAAA] w-[56rem] h-[56rem] text-black grid place-content-center cursor-pointer group/arrow1 hover:bg-[#FFB700] hover:text-white hover:border-none duration-[200ms] 
          lg:w-[68rem] lg:h-[68rem]"
            onClick={left}
          >
            <svg
              className="w-[18rem] h-[18rem] stroke-[#AAAAAA] group-hover/arrow1:stroke-white 
              lg:w-[28rem] lg:h-[28rem]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 12.5L3.75 12.5"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 19.25L3.75 12.5L10.5 5.75"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="rounded-full border-[1px] hover:border-none border-[#16191C] w-[56rem] h-[56rem] grid place-content-center cursor-pointer group/arrow2 hover:bg-[#F0AD04] text-black duration-[200ms] 
          lg:w-[68rem] lg:h-[68rem] "
            onClick={right}
          >
            <svg
              className="w-[18rem] h-[18rem] stroke-[#16191C] group-hover/arrow2:stroke-white 
              lg:w-[29rem] lg:h-[29rem]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12L20.25 12"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 18.75L20.25 12L13.5 5.25"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-[30rem]">
        <div
          className="flex flex-row gap-[8rem] cursor-pointer duration-[600ms] snap-mandatory snap-x overflow-x-scroll -wekbit-scrollbar:w-[0rem]
          lg:snap-none lg:overflow-visible lg:gap-[40rem]"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {data.map((e, i) => {
            return (
              <div
                key={i}
                className="gap-[15rem] grid grid-rows-[340rem_auto]
              lg:grid-rows-[420rem_auto] snap-center lg:gap-[0rem] "
              >
                <div
                  ref={ref}
                  className={`relative h-[355rem] bg-cover bg-center delay-300 duration-[500ms] rounded-[20rem] z-0 w-[320rem]
                  lg:h-[420rem] lg:w-[533rem] lg:rounded-[20rem]`}
                  style={{ backgroundImage: `url(${e.img})` }}
                >
                  <div
                    className="w-full h-full rounded-[20rem] group-hover/about:bg-yellow-500/30 duration-[400ms] -z-1 absolute
                    lg:rounded-[20rem] bg-[linear-gradient(360deg,_rgba(0,_0,_0,_0.6)_-2.8%,_rgba(0,_0,_0,_0)_100%)]"
                  ></div>
                  <div
                    className={`relative grid grid-cols-[1fr_1fr] p-[16rem] z-5 place-items-end w-full h-full dulay-100 animate-wiggle
                    lg:p-[32rem] `}
                  >
                    <div className="">
                      <p
                        className="font-body text-[#FFFFFF] text-[14rem] font-[400] mb-[6rem]
                        lg:text-[32rem]"
                      >
                        {e.prof}
                      </p>
                      <p
                        className="text-[#FAFAFA] font-bodyalt text-[28rem] leading-[32rem] font-[600]
                        lg:text-[40rem] lg:leading-[48rem] "
                      >
                        {e.name}
                      </p>
                    </div>
                    <div
                      className="flex flex-col gap-[12rem] items-end
                      lg:gap-[12rem]"
                    >
                      {e.links.instagram ? (
                        <a
                          href={e.links.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className="w-[40rem] h-[40rem] flex justify-center items-center  rounded-[10rem] p-[5rem] group/inst hover:bg-[#FFB700] bg-[#16191C] delay-[100ms] duration-[400ms]
                                lg:w-[48rem] lg:h-[48rem]"
                          >
                            <AiFillInstagram
                              size="30px"
                              className="w-[32rem] h-[32rem] fill-white group-hover/inst:fill-[#16191C] delay-[100ms] duration-[400ms]
                                  lg:w-[40rem] lg:h-[40rem]"
                            />
                          </div>
                        </a>
                      ) : null}
                      {e.links.telegram ? (
                        <a
                          href={e.links.telegram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className="w-[40rem] h-[40rem] flex justify-center items-center  hover:bg-[#FFB700] bg-[#16191C] rounded-[10rem] p-[5rem] group/telega  delay-[100ms] duration-[400ms]
                                lg:w-[48rem] lg:h-[48rem]"
                          >
                            <FaTelegramPlane
                              size="30px"
                              className="w-[32rem] h-[32rem] fill-white group-hover/telega:fill-[#16191C] delay-[100ms] duration-[400ms]
                                  lg:w-[40rem] lg:h-[40rem]"
                            />
                          </div>
                        </a>
                      ) : null}
                      {e.links.youtube ? (
                        <a
                          href={e.links.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className="w-[80rem] h-[40rem] hover:bg-[#FFB700] bg-[#16191C] rounded-[10rem] overflow-hidden flex justify-center items-center
                                  group/inst delay-[100ms] duration-[400ms]
                                  lg:w-[95rem] lg:h-[48rem] lg:p-[8rem]"
                          >
                            <ImYoutube2
                              size="70px"
                              className="w-[60rem] h-[32rem] fill-white group-hover/inst:fill-[#16191C] delay-[100ms] duration-[400ms]
                                  lg:w-[95rem] lg:h-[48rem]"
                            />
                          </div>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div
                  className={`font-body px-[12rem] py-[14rem] text-[16rem] leading-[19rem] animate-wiggle text-[#686868] font-[400]
                  lg:leading-[32rem] lg:px-[10rem] lg:pt-[20rem] lg:text-[22rem] whitespace-pre-wrap
                  `}
                >
                  {e.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
