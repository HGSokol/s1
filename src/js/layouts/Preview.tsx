// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Profile } from '../../App';
// import IMG1 from '../../img/preview1.png';
import SM from "../../img/sm.png";
import PREVIEW from "../../img/previewi.png";

export const Preview = () => {
    // 	const { user, activeSub } = useContext(Profile);

    return (
        <div className="px-[16rem] lg:px-[120rem] w-full h-min relative flex flex-col lg:flex-row mb-[32rem] lg:mb-[324rem]">
            <div className="max-w-[950rem] mb-[22rem] lg:mb-[0rem]">
                <div className="text-[36rem] lg:text-[82rem] font-[] leading-[44rem] lg:leading-[104rem] font-[600] mb-[31rem] lg:mb-[48rem]">
                    Построй{" "}
                    <span className="inline-flex bg-[#FFB700] lg:px-[18rem] items-center justify-center h-[37rem] lg:h-[96rem] px-[7rem] lg:px-[0rem] rounded-[6rem] lg:rounded-[15rem] rotate-[-4deg] pb-[6rem] lg:pb-[10rem] shadow-dsm lg:shadow-dl">
                        здоровое
                    </span>{" "}
                    и красивое тело вместе с ФКН
                    <div className="ml-[10rem] lg:ml-[20rem] inline-flex items-center justify-center w-[41rem] lg:w-[99rem] h-[36rem] lg:h-[87rem] bg-[#FFF] rounded-[7rem] lg:rounded-[16.7rem] shadow-sm lg:shadow-l rotate-[10.749deg]">
                        <img
                            className="w-[25rem] lg:w-[58rem] h-[29rem] lg:h-[67rem]"
                            src={SM}
                            alt="smile"
                        />
                    </div>
                </div>
                <div
                    className="hidden lg:block text-[#686868] text-[22rem] font-body mb-[68rem] lg:max-w-[768rem]
                "
                >
                    <div>
                        Мы объединили спорт и науку для гарантированного
                        достижения поставленных целей.
                    </div>
                    <div>
                        Тренировочные программы, планы питания, учёт калорий,
                        лекции от экспертов здоровья и спорта и отслеживание
                        результатов.
                    </div>
                </div>
                <div className="flex flex-row gap-[15rem] lg:gap-[32rem]">
                    <div className="w-[165rem] lg:w-[225rem] h-[48rem] lg:h-[65rem]">
                        <svg
                            className="w-[165rem] lg:w-[225rem] h-[48rem] lg:h-[65rem]"
                            viewBox="0 0 225 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M223.75 57.504C223.75 60.9679 220.886 63.7737 217.343 63.7737H7.66554C4.12438 63.7737 1.25 60.9679 1.25 57.504V7.50453C1.25 4.04223 4.12438 1.22656 7.66554 1.22656H217.341C220.886 1.22656 223.748 4.04223 223.748 7.50453L223.75 57.504Z"
                                fill="#16191C"
                            />
                            <path
                                d="M216.667 1.30203C220.525 1.30203 223.665 4.36313 223.665 8.125V56.875C223.665 60.6369 220.525 63.698 216.667 63.698H8.33333C4.475 63.698 1.33542 60.6369 1.33542 56.875V8.125C1.33542 4.36313 4.475 1.30203 8.33333 1.30203H216.667ZM216.667 1.07313e-06H8.33333C3.75208 1.07313e-06 0 3.65828 0 8.125V56.875C0 61.3417 3.75208 65 8.33333 65H216.667C221.248 65 225 61.3417 225 56.875V8.125C225 3.65828 221.248 1.07313e-06 216.667 1.07313e-06Z"
                                fill="#16191C"
                            />
                            <path
                                d="M50.2134 32.1479C50.1651 26.9106 54.6118 24.3626 54.8151 24.2439C52.2968 20.6641 48.3934 20.1749 47.0218 20.1359C43.7434 19.7996 40.5634 22.0486 38.8934 22.0486C37.1901 22.0486 34.6184 20.1684 31.8468 20.2237C28.2801 20.2773 24.9434 22.2907 23.1134 25.4172C19.3368 31.7921 22.1534 41.1602 25.7718 46.3131C27.5818 48.8367 29.6968 51.6544 32.4651 51.5553C35.1734 51.4464 36.1851 49.8718 39.4534 49.8718C42.6918 49.8718 43.6418 51.5553 46.4651 51.4919C49.3718 51.4464 51.2018 48.9569 52.9484 46.4106C55.0401 43.5181 55.8801 40.6694 55.9134 40.5232C55.8451 40.5004 50.2684 38.4253 50.2134 32.1479Z"
                                fill="white"
                            />
                            <path
                                d="M44.8801 16.7462C46.3368 14.9701 47.3334 12.5537 47.0568 10.1016C44.9484 10.1926 42.3118 11.5234 40.7934 13.2606C39.4501 14.7913 38.2501 17.3003 38.5601 19.6598C40.9284 19.8321 43.3601 18.4947 44.8801 16.7462Z"
                                fill="white"
                            />
                            <path
                                d="M81.75 16.2649C81.75 18.1775 81.1617 19.6173 79.9867 20.5841C78.8983 21.4763 77.3517 21.9231 75.3483 21.9231C74.355 21.9231 73.505 21.8809 72.7933 21.7964V11.346C73.7217 11.1997 74.7217 11.125 75.8017 11.125C77.71 11.125 79.1483 11.5296 80.1183 12.3389C81.205 13.2537 81.75 14.5619 81.75 16.2649ZM79.9083 16.312C79.9083 15.0721 79.5717 14.1215 78.8983 13.4585C78.225 12.7971 77.2417 12.4656 75.9467 12.4656C75.3967 12.4656 74.9283 12.5014 74.54 12.5761V20.5208C74.755 20.5533 75.1483 20.5679 75.72 20.5679C77.0567 20.5679 78.0883 20.2055 78.815 19.4808C79.5417 18.756 79.9083 17.6998 79.9083 16.312Z"
                                fill="white"
                            />
                            <path
                                d="M91.515 17.9345C91.515 19.1126 91.1699 20.0778 90.4799 20.8351C89.7566 21.6135 88.7983 22.0018 87.6016 22.0018C86.4483 22.0018 85.53 21.6297 84.8449 20.8822C84.1616 20.1363 83.8199 19.1955 83.8199 18.0612C83.8199 16.875 84.1716 15.9016 84.8783 15.146C85.5849 14.3903 86.5349 14.0117 87.7316 14.0117C88.885 14.0117 89.8116 14.3838 90.5133 15.1297C91.18 15.8545 91.515 16.7905 91.515 17.9345ZM89.7033 17.9897C89.7033 17.2828 89.5466 16.6767 89.235 16.1713C88.8683 15.5603 88.3466 15.2548 87.6683 15.2548C86.9666 15.2548 86.4333 15.5603 86.0666 16.1713C85.7533 16.6767 85.5983 17.2926 85.5983 18.0206C85.5983 18.7275 85.7549 19.3336 86.0666 19.839C86.4449 20.45 86.9716 20.7555 87.6516 20.7555C88.3183 20.7555 88.8416 20.4451 89.2183 19.8227C89.5416 19.3076 89.7033 18.6966 89.7033 17.9897Z"
                                fill="white"
                            />
                            <path
                                d="M104.608 14.168L102.15 21.8282H100.55L99.5316 18.5018C99.2733 17.6715 99.0633 16.846 98.9 16.027H98.8683C98.7166 16.8687 98.5066 17.6926 98.2366 18.5018L97.155 21.8282H95.5366L93.225 14.168H95.02L95.9083 17.8096C96.1233 18.6708 96.3 19.4915 96.4416 20.2682H96.4733C96.6033 19.628 96.8183 18.8122 97.1216 17.8258L98.2366 14.1696H99.66L100.728 17.7478C100.987 18.6205 101.197 19.4606 101.358 20.2698H101.407C101.525 19.4817 101.703 18.6416 101.94 17.7478L102.893 14.1696H104.608V14.168Z"
                                fill="white"
                            />
                            <path
                                d="M113.663 21.8289H111.917V17.4414C111.917 16.0894 111.39 15.4134 110.333 15.4134C109.815 15.4134 109.397 15.5987 109.072 15.9708C108.75 16.3429 108.587 16.7817 108.587 17.2838V21.8273H106.84V16.3576C106.84 15.6848 106.818 14.9552 106.777 14.1654H108.312L108.393 15.3631H108.442C108.645 14.9909 108.948 14.6838 109.347 14.4384C109.82 14.1524 110.35 14.0078 110.93 14.0078C111.663 14.0078 112.273 14.2386 112.758 14.7017C113.362 15.2688 113.663 16.1154 113.663 17.2399V21.8289V21.8289Z"
                                fill="white"
                            />
                            <path
                                d="M118.48 21.8275H116.735V10.6523H118.48V21.8275Z"
                                fill="white"
                            />
                            <path
                                d="M128.763 17.9345C128.763 19.1126 128.418 20.0778 127.728 20.8351C127.005 21.6135 126.045 22.0018 124.85 22.0018C123.695 22.0018 122.777 21.6297 122.093 20.8822C121.41 20.1363 121.068 19.1955 121.068 18.0612C121.068 16.875 121.42 15.9016 122.127 15.146C122.833 14.3903 123.783 14.0117 124.978 14.0117C126.133 14.0117 127.058 14.3838 127.762 15.1297C128.428 15.8545 128.763 16.7905 128.763 17.9345ZM126.95 17.9897C126.95 17.2828 126.793 16.6767 126.482 16.1713C126.117 15.5603 125.593 15.2548 124.917 15.2548C124.213 15.2548 123.68 15.5603 123.315 16.1713C123.002 16.6767 122.847 17.2926 122.847 18.0206C122.847 18.7275 123.003 19.3336 123.315 19.839C123.693 20.45 124.22 20.7555 124.9 20.7555C125.567 20.7555 126.088 20.4451 126.465 19.8227C126.79 19.3076 126.95 18.6966 126.95 17.9897Z"
                                fill="white"
                            />
                            <path
                                d="M137.217 21.828H135.648L135.518 20.9456H135.47C134.933 21.6492 134.168 22.0018 133.175 22.0018C132.433 22.0018 131.833 21.7695 131.382 21.308C130.972 20.8887 130.767 20.3671 130.767 19.748C130.767 18.812 131.167 18.0986 131.972 17.6046C132.775 17.1106 133.905 16.8685 135.36 16.8798V16.7368C135.36 15.7277 134.817 15.224 133.728 15.224C132.953 15.224 132.27 15.4141 131.68 15.7911L131.325 14.6731C132.055 14.2327 132.957 14.0117 134.02 14.0117C136.073 14.0117 137.103 15.068 137.103 17.1805V20.0015C137.103 20.7668 137.142 21.3762 137.217 21.828ZM135.403 19.1955V18.0141C133.477 17.9816 132.513 18.4967 132.513 19.5578C132.513 19.9576 132.623 20.2566 132.848 20.4565C133.073 20.6563 133.36 20.7555 133.702 20.7555C134.085 20.7555 134.443 20.6368 134.77 20.4012C135.098 20.164 135.3 19.8633 135.375 19.4945C135.393 19.4116 135.403 19.3108 135.403 19.1955Z"
                                fill="white"
                            />
                            <path
                                d="M147.142 21.8275H145.592L145.51 20.5973H145.462C144.967 21.5333 144.123 22.0013 142.938 22.0013C141.992 22.0013 141.203 21.639 140.578 20.9142C139.953 20.1895 139.642 19.2486 139.642 18.0932C139.642 16.8533 139.98 15.8491 140.66 15.0821C141.318 14.3671 142.125 14.0096 143.085 14.0096C144.14 14.0096 144.878 14.3557 145.298 15.0496H145.332V10.6523H147.08V19.7637C147.08 20.5096 147.1 21.197 147.142 21.8275ZM145.332 18.597V17.3197C145.332 17.0987 145.315 16.92 145.283 16.7835C145.185 16.374 144.973 16.0295 144.652 15.7516C144.327 15.4737 143.935 15.334 143.483 15.334C142.832 15.334 142.322 15.5858 141.947 16.0912C141.575 16.5966 141.387 17.2417 141.387 18.0298C141.387 18.7871 141.565 19.4013 141.923 19.8742C142.302 20.378 142.812 20.6298 143.45 20.6298C144.023 20.6298 144.482 20.4202 144.83 19.9993C145.167 19.611 145.332 19.143 145.332 18.597Z"
                                fill="white"
                            />
                            <path
                                d="M162.08 17.9345C162.08 19.1126 161.735 20.0778 161.045 20.8351C160.322 21.6135 159.365 22.0018 158.167 22.0018C157.015 22.0018 156.097 21.6297 155.41 20.8822C154.727 20.1363 154.385 19.1955 154.385 18.0612C154.385 16.875 154.737 15.9016 155.443 15.146C156.15 14.3903 157.1 14.0117 158.298 14.0117C159.45 14.0117 160.378 14.3838 161.078 15.1297C161.745 15.8545 162.08 16.7905 162.08 17.9345ZM160.27 17.9897C160.27 17.2828 160.113 16.6767 159.802 16.1713C159.433 15.5603 158.913 15.2548 158.233 15.2548C157.533 15.2548 157 15.5603 156.632 16.1713C156.318 16.6767 156.163 17.2926 156.163 18.0206C156.163 18.7275 156.32 19.3336 156.632 19.839C157.01 20.45 157.537 20.7555 158.217 20.7555C158.883 20.7555 159.408 20.4451 159.785 19.8227C160.107 19.3076 160.27 18.6966 160.27 17.9897Z"
                                fill="white"
                            />
                            <path
                                d="M171.472 21.8289H169.727V17.4414C169.727 16.0894 169.2 15.4134 168.142 15.4134C167.623 15.4134 167.205 15.5987 166.882 15.9708C166.558 16.3429 166.397 16.7817 166.397 17.2838V21.8273H164.648V16.3576C164.648 15.6848 164.628 14.9552 164.587 14.1654H166.12L166.202 15.3631H166.25C166.455 14.9909 166.758 14.6838 167.155 14.4384C167.63 14.1524 168.158 14.0078 168.74 14.0078C169.472 14.0078 170.082 14.2386 170.567 14.7017C171.172 15.2688 171.472 16.1154 171.472 17.2399V21.8289V21.8289Z"
                                fill="white"
                            />
                            <path
                                d="M183.227 15.4412H181.303V19.1624C181.303 20.1082 181.645 20.5811 182.322 20.5811C182.635 20.5811 182.895 20.5551 183.1 20.5014L183.145 21.7933C182.8 21.9201 182.347 21.9834 181.788 21.9834C181.098 21.9834 180.562 21.7787 180.173 21.3692C179.783 20.9597 179.59 20.2707 179.59 19.3038V15.4412H178.442V14.1656H179.59V12.7616L181.302 12.2578V14.1639H183.225V15.4412H183.227Z"
                                fill="white"
                            />
                            <path
                                d="M192.473 21.8275H190.725V17.4725C190.725 16.0993 190.198 15.412 189.143 15.412C188.333 15.412 187.78 15.8101 187.477 16.6063C187.425 16.7737 187.395 16.9785 187.395 17.219V21.8258H185.65V10.6523H187.395V15.269H187.428C187.978 14.4288 188.767 14.0096 189.788 14.0096C190.512 14.0096 191.11 14.2403 191.585 14.7035C192.177 15.2803 192.473 16.1383 192.473 17.2726V21.8275V21.8275Z"
                                fill="white"
                            />
                            <path
                                d="M202.012 17.6345C202.012 17.94 201.988 18.1967 201.947 18.4063H196.708C196.732 19.1636 196.982 19.7405 197.467 20.1402C197.91 20.4977 198.482 20.6765 199.182 20.6765C199.957 20.6765 200.663 20.5562 201.3 20.3141L201.573 21.4971C200.828 21.8123 199.952 21.97 198.937 21.97C197.72 21.97 196.762 21.6206 196.068 20.9218C195.372 20.2231 195.027 19.2855 195.027 18.109C195.027 16.9536 195.348 15.9916 195.997 15.2246C196.673 14.4056 197.588 13.9961 198.743 13.9961C199.873 13.9961 200.732 14.4056 201.312 15.2246C201.78 15.8746 202.012 16.679 202.012 17.6345ZM200.345 17.1941C200.358 16.6887 200.243 16.2532 200.007 15.886C199.703 15.4131 199.242 15.1758 198.617 15.1758C198.047 15.1758 197.582 15.4066 197.227 15.8697C196.937 16.2386 196.765 16.679 196.708 17.1941H200.345Z"
                                fill="white"
                            />
                            <path
                                d="M89.4082 51.1919H85.6232L83.5499 44.8398H76.3432L74.3682 51.1919H70.6832L77.8232 29.5664H82.2332L89.4082 51.1919ZM82.9249 42.1748L81.0499 36.5279C80.8516 35.951 80.4799 34.5925 79.9316 32.454H79.8649C79.6466 33.3738 79.2949 34.7323 78.8116 36.5279L76.9699 42.1748H82.9249V42.1748Z"
                                fill="white"
                            />
                            <path
                                d="M107.77 43.2064C107.77 45.8584 107.035 47.9546 105.565 49.4935C104.248 50.8634 102.613 51.5475 100.662 51.5475C98.5549 51.5475 97.0416 50.8097 96.12 49.3342H96.0533V57.5486H92.5V40.7347C92.5 39.0675 92.455 37.3564 92.3683 35.6014H95.4933L95.6916 38.073H95.7583C96.9433 36.2108 98.7416 35.2812 101.155 35.2812C103.042 35.2812 104.617 36.0076 105.877 37.462C107.14 38.918 107.77 40.8322 107.77 43.2064ZM104.15 43.3331C104.15 41.8154 103.8 40.5641 103.097 39.5794C102.328 38.5524 101.297 38.0389 100.003 38.0389C99.1266 38.0389 98.3299 38.3249 97.6183 38.8887C96.9049 39.4575 96.4383 40.2001 96.2199 41.1199C96.1099 41.5489 96.0549 41.8999 96.0549 42.1761V44.7761C96.0549 45.9104 96.4116 46.8675 97.125 47.6491C97.8383 48.4308 98.765 48.8207 99.905 48.8207C101.243 48.8207 102.285 48.317 103.03 47.3127C103.777 46.3069 104.15 44.9809 104.15 43.3331Z"
                                fill="white"
                            />
                            <path
                                d="M126.165 43.2064C126.165 45.8584 125.43 47.9546 123.958 49.4935C122.643 50.8634 121.008 51.5475 119.057 51.5475C116.95 51.5475 115.437 50.8097 114.517 49.3342H114.45V57.5486H110.897V40.7347C110.897 39.0675 110.852 37.3564 110.765 35.6014H113.89L114.088 38.073H114.155C115.338 36.2108 117.137 35.2812 119.552 35.2812C121.437 35.2812 123.012 36.0076 124.275 37.462C125.533 38.918 126.165 40.8322 126.165 43.2064ZM122.545 43.3331C122.545 41.8154 122.193 40.5641 121.49 39.5794C120.722 38.5524 119.693 38.0389 118.398 38.0389C117.52 38.0389 116.725 38.3249 116.012 38.8887C115.298 39.4575 114.833 40.2001 114.615 41.1199C114.507 41.5489 114.45 41.8999 114.45 42.1761V44.7761C114.45 45.9104 114.807 46.8675 115.517 47.6491C116.23 48.4291 117.157 48.8207 118.3 48.8207C119.638 48.8207 120.68 48.317 121.425 47.3127C122.172 46.3069 122.545 44.9809 122.545 43.3331Z"
                                fill="white"
                            />
                            <path
                                d="M146.732 45.1279C146.732 46.9674 146.077 48.464 144.762 49.6194C143.317 50.882 141.305 51.5125 138.72 51.5125C136.333 51.5125 134.42 51.064 132.972 50.1654L133.795 47.2778C135.355 48.1975 137.067 48.659 138.932 48.659C140.27 48.659 141.312 48.3633 142.06 47.775C142.805 47.1868 143.177 46.397 143.177 45.4123C143.177 44.5348 142.87 43.7954 142.255 43.1958C141.643 42.5961 140.622 42.0388 139.195 41.5236C135.312 40.1115 133.372 38.0429 133.372 35.3226C133.372 33.5449 134.052 32.0873 135.413 30.953C136.77 29.8171 138.58 29.25 140.843 29.25C142.862 29.25 144.538 29.5929 145.877 30.277L144.988 33.1013C143.738 32.4383 142.325 32.1068 140.743 32.1068C139.493 32.1068 138.517 32.4074 137.817 33.0054C137.225 33.54 136.928 34.1916 136.928 34.9635C136.928 35.8183 137.267 36.5251 137.947 37.0809C138.538 37.5944 139.613 38.1501 141.173 38.7498C143.082 39.4989 144.483 40.3748 145.385 41.379C146.283 42.38 146.732 43.6329 146.732 45.1279Z"
                                fill="white"
                            />
                            <path
                                d="M158.48 38.2002H154.563V45.7711C154.563 47.6967 155.253 48.6587 156.637 48.6587C157.272 48.6587 157.798 48.6051 158.215 48.4978L158.313 51.1287C157.613 51.3838 156.692 51.5122 155.55 51.5122C154.147 51.5122 153.05 51.0946 152.258 50.261C151.47 49.4257 151.073 48.025 151.073 46.0571V38.197H148.74V35.597H151.073V32.7418L154.563 31.7148V35.597H158.48V38.2002Z"
                                fill="white"
                            />
                            <path
                                d="M176.152 43.2681C176.152 45.665 175.448 47.6329 174.045 49.1717C172.573 50.7561 170.62 51.5459 168.185 51.5459C165.838 51.5459 163.97 50.787 162.577 49.2692C161.183 47.7515 160.487 45.8356 160.487 43.5265C160.487 41.1101 161.203 39.1309 162.642 37.592C164.077 36.0515 166.013 35.2812 168.448 35.2812C170.795 35.2812 172.683 36.0401 174.108 37.5595C175.472 39.0334 176.152 40.9363 176.152 43.2681ZM172.465 43.3802C172.465 41.9421 172.15 40.7088 171.512 39.6801C170.767 38.4354 169.702 37.8146 168.322 37.8146C166.893 37.8146 165.808 38.437 165.063 39.6801C164.425 40.7104 164.11 41.9632 164.11 43.4452C164.11 44.8834 164.425 46.1167 165.063 47.1437C165.832 48.3885 166.905 49.0092 168.29 49.0092C169.647 49.0092 170.712 48.3755 171.48 47.1113C172.135 46.0631 172.465 44.8167 172.465 43.3802Z"
                                fill="white"
                            />
                            <path
                                d="M187.701 38.6483C187.35 38.5849 186.975 38.5524 186.581 38.5524C185.331 38.5524 184.365 39.0122 183.685 39.9336C183.093 40.7461 182.796 41.7731 182.796 43.013V51.1949H179.245L179.278 40.5121C179.278 38.7149 179.233 37.0785 179.145 35.603H182.24L182.37 38.5865H182.468C182.843 37.5611 183.435 36.7356 184.245 36.1165C185.036 35.5591 185.891 35.2812 186.813 35.2812C187.141 35.2812 187.438 35.304 187.701 35.3446V38.6483Z"
                                fill="white"
                            />
                            <path
                                d="M203.593 42.6584C203.593 43.2791 203.552 43.8024 203.463 44.2297H192.803C192.845 45.7702 193.36 46.9484 194.35 47.7609C195.248 48.4872 196.41 48.8512 197.837 48.8512C199.415 48.8512 200.855 48.6059 202.15 48.1135L202.707 50.5185C201.193 51.162 199.407 51.4821 197.345 51.4821C194.865 51.4821 192.918 50.7704 191.502 49.3485C190.088 47.9266 189.38 46.0172 189.38 43.622C189.38 41.2706 190.038 39.3125 191.357 37.7509C192.737 36.0836 194.602 35.25 196.948 35.25C199.253 35.25 200.998 36.0836 202.183 37.7509C203.122 39.0752 203.593 40.7132 203.593 42.6584ZM200.205 41.7597C200.228 40.7327 199.997 39.8455 199.515 39.0964C198.9 38.1327 197.955 37.6517 196.683 37.6517C195.522 37.6517 194.577 38.1214 193.855 39.0639C193.263 39.813 192.912 40.7116 192.803 41.7581H200.205V41.7597Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div className="w-[165rem] lg:w-[225rem] h-[48rem] lg:h-[65rem]">
                        <svg
                            className="w-[165rem] lg:w-[225rem] h-[48rem] lg:h-[65rem]"
                            viewBox="0 0 226 66"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M217.63 65.2891H8.37037C3.76876 65.2891 0 61.6145 0 57.128V8.16129C0 3.67472 3.76876 0.000176012 8.37037 0.000176012H217.63C222.231 0.000176012 226 3.67472 226 8.16129V57.128C226 61.6145 222.231 65.2891 217.63 65.2891Z"
                                fill="white"
                            />
                            <path
                                d="M217.63 1.30799C221.505 1.30799 224.659 4.38269 224.659 8.16129V57.128C224.659 60.9065 221.505 63.9812 217.63 63.9812H8.37037C4.49489 63.9812 1.34135 60.9065 1.34135 57.128V8.16129C1.34135 4.38269 4.49489 1.30799 8.37037 1.30799H217.63ZM217.63 0.000176012H8.37037C3.76876 0.000176012 0 3.67472 0 8.16129V57.128C0 61.6145 3.76876 65.2891 8.37037 65.2891H217.63C222.231 65.2891 226 61.6145 226 57.128V8.16129C226 3.67472 222.231 0.000176012 217.63 0.000176012Z"
                                fill="#16191C"
                            />
                            <path
                                d="M16.2135 12.312C15.7217 12.8139 15.4371 13.5953 15.4371 14.6073V50.7039C15.4371 51.7159 15.7217 52.4973 16.2135 52.9992L16.3349 53.1094L37.0808 32.8902V32.4128L16.3349 12.1936L16.2135 12.312Z"
                                fill="#16191C"
                            />
                            <path
                                d="M46.4996 39.6289L39.5919 32.8858V32.4084L46.5079 25.6652L46.6628 25.753L54.8532 30.2967C57.1906 31.5861 57.1906 33.708 54.8532 35.0056L46.6628 39.5412L46.4996 39.6289V39.6289Z"
                                fill="#16191C"
                            />
                            <path
                                d="M45.4072 40.798L38.3363 33.9039L17.469 54.2515C18.2453 55.0473 19.5114 55.1432 20.9511 54.3474L45.4072 40.798"
                                fill="#16191C"
                            />
                            <path
                                d="M45.4072 24.4965L20.9511 10.947C19.5114 10.1595 18.2453 10.2554 17.469 11.0511L38.3363 31.3906L45.4072 24.4965Z"
                                fill="#16191C"
                            />
                            <path
                                d="M79.3803 16.718C79.3803 18.0809 78.9618 19.1725 78.1373 19.9865C77.1894 20.9516 75.9547 21.4372 74.4418 21.4372C72.9958 21.4372 71.7612 20.9434 70.7484 19.9702C69.7335 18.9827 69.2271 17.7708 69.2271 16.3201C69.2271 14.8695 69.7335 13.6576 70.7484 12.6782C71.7612 11.6969 72.9958 11.2031 74.4418 11.2031C75.1616 11.2031 75.848 11.348 76.503 11.6173C77.1559 11.8887 77.6874 12.2559 78.0724 12.7088L77.1977 13.5698C76.526 12.7966 75.6116 12.4151 74.4418 12.4151C73.3871 12.4151 72.4727 12.7741 71.6963 13.4984C70.9283 14.2248 70.5433 15.1653 70.5433 16.3201C70.5433 17.4749 70.9283 18.4237 71.6963 19.15C72.4727 19.8661 73.3871 20.2334 74.4418 20.2334C75.5613 20.2334 76.503 19.8661 77.2459 19.1418C77.7355 18.6624 78.0139 18.0013 78.0871 17.1567H74.4418V15.9774H79.305C79.3636 16.2324 79.3803 16.4793 79.3803 16.718V16.718Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M87.0957 12.6314H82.5276V15.7326H86.6458V16.9119H82.5276V20.0131H87.0957V21.2149H81.2344V11.4297H87.0957V12.6314Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M92.5406 21.2149H91.2474V12.6314H88.4454V11.4297H95.3447V12.6314H92.5406V21.2149V21.2149Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M100.338 21.2149V11.4297H101.629V21.2149H100.338Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M107.352 21.2149H106.069V12.6314H103.257V11.4297H110.164V12.6314H107.352V21.2149Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M123.226 19.9539C122.237 20.9434 121.01 21.4372 119.548 21.4372C118.077 21.4372 116.85 20.9434 115.861 19.9539C114.873 18.9664 114.381 17.7545 114.381 16.3201C114.381 14.8858 114.873 13.6739 115.861 12.6864C116.85 11.6969 118.077 11.2031 119.548 11.2031C121.002 11.2031 122.228 11.6969 123.218 12.6946C124.214 13.6902 124.706 14.894 124.706 16.3201C124.706 17.7545 124.214 18.9664 123.226 19.9539ZM116.817 19.1337C117.562 19.8661 118.468 20.2334 119.548 20.2334C120.619 20.2334 121.534 19.8661 122.27 19.1337C123.013 18.4012 123.39 17.4607 123.39 16.3201C123.39 15.1796 123.013 14.2391 122.27 13.5066C121.534 12.7741 120.619 12.4069 119.548 12.4069C118.468 12.4069 117.562 12.7741 116.817 13.5066C116.074 14.2391 115.697 15.1796 115.697 16.3201C115.697 17.4607 116.074 18.4012 116.817 19.1337V19.1337Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M126.52 21.2149V11.4297H128.089L132.969 19.0399H133.026L132.969 17.1588V11.4297H134.261V21.2149H132.913L127.803 13.2292H127.746L127.803 15.1185V21.2149H126.52V21.2149Z"
                                fill="#16191C"
                                stroke="#16191C"
                                stroke-width="0.200889"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M114.063 35.5079C110.131 35.5079 106.919 38.4255 106.919 42.4509C106.919 46.4438 110.131 49.392 114.063 49.392C118.003 49.392 121.215 46.4438 121.215 42.4509C121.215 38.4255 118.003 35.5079 114.063 35.5079ZM114.063 46.658C111.906 46.658 110.049 44.9217 110.049 42.4509C110.049 39.9475 111.906 38.2418 114.063 38.2418C116.22 38.2418 118.085 39.9475 118.085 42.4509C118.085 44.9217 116.22 46.658 114.063 46.658V46.658ZM98.4753 35.5079C94.5349 35.5079 91.3312 38.4255 91.3312 42.4509C91.3312 46.4438 94.5349 49.392 98.4753 49.392C102.414 49.392 105.619 46.4438 105.619 42.4509C105.619 38.4255 102.414 35.5079 98.4753 35.5079ZM98.4753 46.658C96.3157 46.658 94.4533 44.9217 94.4533 42.4509C94.4533 39.9475 96.3157 38.2418 98.4753 38.2418C100.633 38.2418 102.489 39.9475 102.489 42.4509C102.489 44.9217 100.633 46.658 98.4753 46.658ZM79.9265 37.6359V40.5861H87.1523C86.9409 42.2347 86.3759 43.4466 85.5096 44.2913C84.4549 45.3114 82.8122 46.4438 79.9265 46.4438C75.4798 46.4438 71.9977 42.9447 71.9977 38.6091C71.9977 34.2735 75.4798 30.7744 79.9265 30.7744C82.3309 30.7744 84.0803 31.6905 85.3715 32.878L87.5038 30.7989C85.6979 29.1177 83.2956 27.8262 79.9265 27.8262C73.8287 27.8262 68.704 32.6637 68.704 38.6091C68.704 44.5545 73.8287 49.392 79.9265 49.392C83.2224 49.392 85.6979 48.3392 87.644 46.3642C89.6383 44.4198 90.2598 41.6858 90.2598 39.4782C90.2598 38.7927 90.2012 38.1623 90.0965 37.6359H79.9265ZM155.775 39.923C155.187 38.3704 153.372 35.5079 149.677 35.5079C146.015 35.5079 142.966 38.3214 142.966 42.4509C142.966 46.3397 145.983 49.392 150.028 49.392C153.299 49.392 155.187 47.4476 155.963 46.3152L153.536 44.7381C152.726 45.8929 151.623 46.658 150.028 46.658C148.444 46.658 147.308 45.95 146.58 44.5545L156.103 40.7126L155.775 39.923V39.923ZM146.065 42.2347C145.983 39.5578 148.197 38.1868 149.784 38.1868C151.027 38.1868 152.081 38.7927 152.433 39.6598L146.065 42.2347V42.2347ZM138.324 48.9696H141.455V28.5668H138.324V48.9696ZM133.198 37.0544H133.093C132.39 36.2424 131.049 35.5079 129.349 35.5079C125.784 35.5079 122.523 38.5601 122.523 42.4734C122.523 46.3642 125.784 49.392 129.349 49.392C131.049 49.392 132.39 48.6513 133.093 47.8148H133.198V48.8105C133.198 51.4649 131.743 52.891 129.398 52.891C127.485 52.891 126.298 51.5444 125.809 50.4121L123.086 51.52C123.871 53.3603 125.949 55.625 129.398 55.625C133.068 55.625 136.165 53.5194 136.165 48.3963V35.9302H133.198V37.0544V37.0544ZM129.617 46.658C127.46 46.658 125.654 44.8972 125.654 42.4734C125.654 40.0271 127.46 38.2418 129.617 38.2418C131.743 38.2418 133.419 40.0271 133.419 42.4734C133.419 44.8972 131.743 46.658 129.617 46.658V46.658ZM170.431 28.5668H162.944V48.9696H166.066V41.239H170.431C173.899 41.239 177.299 38.7927 177.299 34.9019C177.299 31.0131 173.89 28.5668 170.431 28.5668V28.5668ZM170.513 38.401H166.066V31.4049H170.513C172.844 31.4049 174.175 33.2921 174.175 34.9019C174.175 36.4811 172.844 38.401 170.513 38.401ZM189.813 35.4691C187.557 35.4691 185.211 36.4403 184.246 38.5928L187.017 39.7251C187.613 38.5928 188.71 38.2255 189.869 38.2255C191.489 38.2255 193.132 39.1742 193.157 40.8493V41.0635C192.592 40.7453 191.382 40.274 189.894 40.274C186.91 40.274 183.87 41.8756 183.87 44.8646C183.87 47.5986 186.314 49.3593 189.061 49.3593C191.162 49.3593 192.322 48.4351 193.05 47.3598H193.157V48.937H196.172V41.1105C196.172 37.4931 193.402 35.4691 189.813 35.4691ZM189.436 46.6498C188.415 46.6498 186.992 46.1561 186.992 44.9217C186.992 43.3425 188.766 42.7366 190.302 42.7366C191.677 42.7366 192.322 43.0324 193.157 43.4221C192.912 45.3114 191.244 46.6498 189.436 46.6498V46.6498ZM207.158 35.9159L203.569 44.7605H203.463L199.753 35.9159H196.386L201.96 48.2759L198.779 55.1537H202.042L210.632 35.9159H207.158V35.9159ZM179.015 48.9696H182.145V28.5668H179.015V48.9696Z"
                                fill="#16191C"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex lg:absolute flex-col gap-[9rem] lg:translate-y-[-165rem] lg:translate-x-[960rem]">
                <img
                    className="w-[375rem] lg:w-[845rem] h-[435rem] lg:h-[1039rem] "
                    src={PREVIEW}
                    alt="preview image"
                />
                <div className="translate-x-[20rem] lg:translate-x-[100rem] w-[312rem] h-[13rem] lg:w-[640rem] lg:h-[28rem] bg-[#ADADAD] rounded-[50%_50%_50%_50%] lg:rounded-[50%_50%_50%_50%] blur-[10rem] lg:blur-[22rem]"></div>
            </div>
        </div>
    );
};
