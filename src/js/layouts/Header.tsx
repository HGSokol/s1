import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { Profile } from '../../App';

// interface Text {
// 	maintenance?: boolean;
// }

export const Header = () => {
	// const { activeSub, user } = useContext(Profile);
	// const navigate = useNavigate();

	const navData = [
		'Главная', 'О приложении', 'Эксперты', 'Отзывы'
	]
	return (
		<div
			className="px-[16rem] lg:px-[120rem] pt-[25rem] flex flex-row justify-between items-center mb-[60rem]
    lg:mb-[140rem] lg:pt-[22rem]
    ">
			<div className="cursor-pointer">
				<svg
					viewBox="0 0 126 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-[80rem] h-[36rem] 
        lg:w-[126rem] lg:h-[56rem]">
					<path
						d="M6.68241 4.4514V51.5486H23.6529V56H2.19141V0H23.6529V4.4514H6.68241Z"
						fill="#FAB513"
					/>
					<path
						d="M32.7098 14.7234C33.4447 14.8231 34.1617 15.0252 34.8396 15.3237C35.4593 15.6001 36.0257 15.9812 36.5136 16.45C36.9789 16.907 37.3529 17.4471 37.6159 18.0417C38.1421 19.3029 38.1421 20.7194 37.6159 21.9805C37.3545 22.5761 36.9803 23.1164 36.5136 23.5723C36.0266 24.0474 35.4603 24.4354 34.8396 24.7188C34.1651 25.0265 33.4467 25.229 32.7098 25.3191V26.3105H30.3146V25.3191C29.5762 25.2298 28.8557 25.0297 28.178 24.7256C27.5539 24.447 26.983 24.0636 26.4905 23.5925C26.0192 23.1338 25.6425 22.5886 25.3813 21.9873C25.113 21.3604 24.9787 20.6853 24.9867 20.0044C24.9788 19.3405 25.1081 18.682 25.3668 18.0696C25.6254 17.4571 26.0078 16.9037 26.4905 16.4433C26.9851 15.9765 27.5556 15.5957 28.178 15.3169C28.8557 15.0128 29.5762 14.8127 30.3146 14.7234V13.8062H32.7098V14.7234ZM27.7289 20.0044C27.7289 20.7395 27.9398 21.3735 28.3685 21.9131C28.7972 22.4527 29.4504 22.8101 30.3146 22.9922V17.0368C29.9169 17.1158 29.5337 17.2546 29.1783 17.4482C28.8715 17.6199 28.5974 17.8436 28.3685 18.1092C28.1518 18.3627 27.9877 18.656 27.8854 18.9725C27.7773 19.3058 27.7244 19.6543 27.7289 20.0044ZM35.2683 20.0044C35.2683 19.285 35.0574 18.6577 34.6355 18.1227C34.2136 17.5898 33.5672 17.2256 32.7098 17.0368V22.972C33.5672 22.7966 34.2136 22.4392 34.6355 21.8996C35.058 21.3577 35.2812 20.6891 35.2683 20.0044Z"
						fill="#1F2117"
					/>
					<path
						d="M43.7605 21.7582L48.163 14.7573H51.0482V25.2586H48.5033V18.3454H48.4624L44.0463 25.2586H41.168V14.7573H43.7129V21.7582H43.7605Z"
						fill="#1F2117"
					/>
					<path
						d="M59.241 16.9223V25.2586H56.6756V16.9223H53.6816V14.7573H62.235V16.9223H59.241Z"
						fill="#1F2117"
					/>
					<path
						d="M71.557 25.2586V20.8679H67.4267V25.2586H64.8682V14.7573H67.4267V18.7299H71.557V14.7573H74.1155V25.2586H71.557Z"
						fill="#1F2117"
					/>
					<path
						d="M77.7695 25.2586V14.7573H84.8939V16.8886H80.2396V18.8782H84.6421V20.9151H80.2396V23.0936H85.1661V25.2586H77.7695Z"
						fill="#1F2117"
					/>
					<path
						d="M95.9169 25.0762C95.2228 25.3865 94.4335 25.5416 93.5353 25.5416C92.7594 25.5486 91.989 25.4137 91.2625 25.1437C90.5896 24.89 89.9761 24.5024 89.46 24.0048C88.9439 23.5072 88.5361 22.9101 88.2617 22.2503C87.6878 20.788 87.6902 19.1651 88.2685 17.7045C88.5488 17.0455 88.9662 16.4526 89.4933 15.9644C90.02 15.4779 90.6403 15.1017 91.317 14.8583C92.041 14.5982 92.806 14.468 93.5761 14.4738C94.3308 14.474 95.0795 14.6065 95.7876 14.865C96.5089 15.1258 97.0941 15.5102 97.5432 16.0183L95.808 17.7382C95.573 17.4101 95.2467 17.157 94.869 17.0098C94.4887 16.8559 94.0821 16.7758 93.6714 16.7737C93.246 16.7687 92.8243 16.8514 92.4329 17.0165C92.0684 17.1747 91.7397 17.4041 91.4667 17.691C91.195 17.9882 90.9826 18.3338 90.8406 18.7094C90.6874 19.1193 90.6113 19.5537 90.6161 19.9909C90.6108 20.4368 90.6869 20.8801 90.8406 21.2993C90.9769 21.6741 91.1875 22.018 91.4599 22.311C91.7254 22.5971 92.0504 22.8226 92.4125 22.9719C92.7943 23.137 93.2072 23.2198 93.6237 23.2147C94.086 23.2242 94.5436 23.1224 94.9574 22.918C95.3164 22.7308 95.6281 22.4656 95.8693 22.1424L97.6521 23.8083C97.1705 24.3476 96.5791 24.7798 95.9169 25.0762Z"
						fill="#1F2117"
					/>
					<path
						d="M25.4834 42.592V32.0907H28.0283V35.9014H28.4366L28.8312 35.9216L32.0838 32.084H34.8668L31.3217 36.5152C31.772 36.7379 32.1888 37.0216 32.5601 37.3582C32.9636 37.7253 33.3119 38.1477 33.5944 38.6127C33.9269 39.1573 34.1985 39.7363 34.4041 40.3393C34.6501 41.074 34.8456 41.8244 34.9893 42.5853H32.1995C32.0761 41.8778 31.8894 41.1826 31.6415 40.508C31.4511 39.987 31.1701 39.5031 30.8113 39.0781C30.4886 38.7157 30.0824 38.4358 29.6274 38.262C29.1646 38.0867 28.6339 38.0125 28.0283 38.0327V42.5853L25.4834 42.592Z"
						fill="#1F2117"
					/>
					<path
						d="M39.1063 42.5921H36.3164L40.7666 32.0908H43.2502L47.6528 42.5921H44.8085L43.9851 40.5283H39.882L39.1063 42.5921ZM40.6169 38.4982H43.2775L41.9642 34.8898L40.6169 38.4982Z"
						fill="#1F2117"
					/>
					<path
						d="M50 42.592V32.0907H52.5449V35.9014H52.96L53.3546 35.9216L56.6004 32.084H59.3903L55.8383 36.5152C56.2911 36.7398 56.7102 37.0258 57.0835 37.365C57.4851 37.7338 57.8332 38.156 58.1178 38.6195C58.4508 39.1629 58.7201 39.7422 58.9208 40.3461C59.173 41.0789 59.3686 41.8297 59.5059 42.592H56.7229C56.5975 41.8843 56.4085 41.1891 56.1581 40.5147C55.9336 39.9347 55.6614 39.4558 55.328 39.0848C55.0091 38.7211 54.6048 38.4408 54.1508 38.2688C53.6881 38.0934 53.1573 38.0192 52.5449 38.0394V42.592H50Z"
						fill="#1F2117"
					/>
					<path
						d="M74.0405 42.5921V38.2014H69.9101V42.5921H67.3516V32.0908H69.9101V36.0634H74.0405V32.0908H76.6058V42.5921H74.0405Z"
						fill="#1F2117"
					/>
					<path
						d="M81.7362 42.5921H78.9531L83.3965 32.0908H85.887L90.2827 42.5921H87.4384L86.615 40.5283H82.5187L81.7362 42.5921ZM83.2468 38.4982H85.9142L84.5941 34.8898L83.2468 38.4982Z"
						fill="#1F2117"
					/>
					<path
						d="M94.3383 32.0908L96.5566 37.3111L98.6796 32.0908H101.422L97.8154 40.3057C97.6615 40.661 97.4794 41.0038 97.2711 41.3308C97.0724 41.6406 96.8242 41.9163 96.5362 42.1469C96.2337 42.3857 95.8902 42.5685 95.5223 42.6865C95.0789 42.83 94.6142 42.8984 94.1478 42.8888C93.757 42.8977 93.3665 42.8615 92.9842 42.7809C92.7261 42.7166 92.4752 42.6262 92.2357 42.5111C92.0658 42.4215 91.9099 42.3079 91.773 42.1739L91.4668 41.8569L93.0523 40.0831C93.2041 40.2438 93.3704 40.3906 93.549 40.5215C93.7444 40.6745 93.9873 40.7556 94.2362 40.7508C94.4213 40.7549 94.6049 40.718 94.7738 40.6429C94.9523 40.5551 95.1064 40.4254 95.2229 40.2652L91.494 32.0908H94.3383Z"
						fill="#1F2117"
					/>
					<path
						d="M103.831 42.592V32.0907H106.376V35.9014H106.791L107.186 35.9216L110.431 32.084H113.221L109.669 36.5152C110.122 36.7377 110.541 37.0215 110.915 37.3582C111.318 37.7253 111.666 38.1477 111.949 38.6127C112.282 39.1562 112.551 39.7354 112.752 40.3393C113.004 41.0722 113.2 41.823 113.337 42.5853H110.554C110.431 41.8778 110.244 41.1826 109.996 40.508C109.771 39.9279 109.492 39.4491 109.159 39.0781C108.84 38.7144 108.436 38.4341 107.982 38.262C107.519 38.0867 106.988 38.0125 106.376 38.0327V42.5853L103.831 42.592Z"
						fill="#1F2117"
					/>
					<path
						d="M117.454 42.5921H114.671L119.114 32.0908H121.605L126 42.5921H123.156L122.333 40.5283H118.236L117.454 42.5921ZM118.965 38.4982H121.632L120.312 34.8898L118.965 38.4982Z"
						fill="#1F2117"
					/>
				</svg>
			</div>
			<nav className='hidden lg:block'>
				<ul className='flex flex-row gap-[80rem] text-[16rem] font-[400] font-body text-[#16191C]'>
					{navData.map(e => {
						return (
							<li className='cursor-pointer text-[#686868] hover:text-[#16191C]'>{e}</li>
						)
					})}
				</ul>
			</nav>
		</div>
	);
};
