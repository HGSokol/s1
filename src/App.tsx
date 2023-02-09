import { lazy, Suspense, createContext, useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { deviceType } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import HomePage from './js/Pages/Home';
import Spinner from './js/components/Spinner';

const Login = lazy(() => import('./js/layouts/Login'));
const Cabinet = lazy(() => import('./js/layouts/Cabinet'));
const Usefull = lazy(() => import('./js/Pages/Usefull'));
const Activity = lazy(() => import('./js/Pages/Activity'));
const Statistics = lazy(() => import('./js/Pages/Statistics'));
const Nutrition = lazy(() => import('./js/Pages/Nutrition'));
const MyProfile = lazy(() => import('./js/Pages/Profile'));
const Subs = lazy(() => import('./js/Pages/Subs'));
const ChangeSubs = lazy(() => import('./js/Pages/ChangeSubs'));
const ChangePayment = lazy(() => import('./js/Pages/ChangePayment'));
const Ordering = lazy(() => import('./js/Pages/Ordering'));
const Ordering3 = lazy(() => import('./js/Pages/Ordering3'));
const CabinetInfo = lazy(() => import('./js/Pages/CabinetInfo'));
const Payment = lazy(() => import('./js/Pages/Payment'));
const PaymentsStatus = lazy(() => import('./js/Pages/PaymentsStatus'));
const LoginForm = lazy(() => import('./js/Pages/LoginForm'));
const Register = lazy(() => import('./js/Pages/Registration'));
const ChangePassword = lazy(() => import('./js/Pages/ChangePassword'));
const ChangePassword2 = lazy(() => import('./js/Pages/ChangePassword2'));
const ChangePassword3 = lazy(() => import('./js/Pages/ChangePassword3'));
const UserAgreements = lazy(() => import('./js/Pages/UserAgreements'));
const PrivacyPolicy = lazy(() => import('./js/Pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./js/Pages/PageNotFound'));

// const metaTag = document.querySelector(`meta[name="google-signin-client_id"]`) as HTMLMetaElement
// const MetaContent = metaTag.content

export interface User {
	avatar?: string | null;
	country?: string | null;
	countryId?: string | null;
	dateOfBirth?: Date;
	difficultyLevel?: string | null;
	email?: string | null;
	gender?: string | null;
	height?: string | null;
	id?: number | null;
	name?: string | null;
	lastName?: string | null;
	subscription?: string | null;
	target?: string | null;
	uuid?: string | null;
	weight?: string | null;
	password?: string | null;
	token?: string | null;
}

export interface CardInfo {
	numberCard: string;
	dateCard: {
		month: string;
		year: string;
	};
	cvv: string;
}

export interface userPaymentMethod {
	cardType: string;
	expireMonth: string;
	expireYear: string;
	last4: string;
}

export interface ActiveSub {
	name?: string;
	duration?: number;
	price?: string;
	id?: number;
	id2?: number;
	isFromApple?: boolean;
	endsAt?: string | null;
	error?: boolean;
	type?: string;
}

export interface ProfileContext {
	user: User | null;
	setUser: (user: User | null) => void;
	timezone: string;
	deviceName: string;
	reload: boolean;
	setReload: (reload: boolean) => void;
	cardInfo: CardInfo | null;
	setCardInfo: (cardInfo: CardInfo | null) => void;
	userPaymentMethod: userPaymentMethod | null;
	setUserPaymentMethod: (userPaymentMethod: userPaymentMethod | null) => void;
	activeSub: ActiveSub | null;
	setActiveSub: (activeSub: ActiveSub | null) => void;
	selectedPlan: ActiveSub | null;
	setSelectedPlan: (activeSub: ActiveSub | null) => void;
	yandexToken: string | null;
	setYandexToken: (token: string | null) => void;
}

const ProfileUser: ProfileContext = {
	user: null,
	setUser: () => {},
	timezone: '',
	deviceName: '',
	reload: false,
	setReload: () => {},
	cardInfo: null,
	setCardInfo: () => {},
	userPaymentMethod: null,
	setUserPaymentMethod: () => {},
	activeSub: null,
	setActiveSub: () => {},
	selectedPlan: null,
	setSelectedPlan: () => {},
	yandexToken: null,
	setYandexToken: () => {},
};

export const Profile = createContext<ProfileContext>(ProfileUser);

function App() {
	document.title = 'Фитнес как наука';
	const [user, setUser] = useState<User | null>(null);
	const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
	const [reload, setReload] = useState(true);
	const [activeSub, setActiveSub] = useState<ActiveSub | null>(null);
	const [selectedPlan, setSelectedPlan] = useState<ActiveSub | null>(null);
	const [yandexToken, setYandexToken] = useState<string | null>(null);
	const [userPaymentMethod, setUserPaymentMethod] = useState<userPaymentMethod | null>(null);
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const navigate = useNavigate();
	let deviceName = deviceType;

	const localUser = localStorage.getItem('user');

	if (localUser) {
		const token = JSON.parse(localUser).token;
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['Timezone'] = `${timezone}`;
	axios.defaults.headers.common['Client-Platform'] = 'web';

	useEffect(() => {
		deviceName = deviceType;
	}, []);

	useEffect(() => {
		if (reload === true && localUser && JSON.parse(localUser).token) {
			axios
				.get('https://stage.fitnesskaknauka.com/api/customer')
				.then((res) => {
					setUser((prev) => ({
						...prev,
						email: res.data.email,
						name: res.data.name,
						lastName: res.data.lastName,
						avatar: res.data.avatar,
						uuid: res.data.uuid,
					}));
				})
				.catch((error) => {
					console.log(error.response.data);
				});
			setReload(false);
		}
	}, []);

	return (
		<div className="font-body">
			<div>
				<Helmet>
					<script
						src="https://static.yoomoney.ru/checkout-js/v1/checkout.js"
						type="text/javascript"
					/>
				</Helmet>
			</div>
			<Suspense fallback={<Spinner />}>
				<Profile.Provider
					value={{
						user,
						setUser,
						timezone,
						deviceName,
						reload,
						setReload,
						cardInfo,
						setCardInfo,
						userPaymentMethod,
						setUserPaymentMethod,
						activeSub,
						setActiveSub,
						selectedPlan,
						setSelectedPlan,
						yandexToken,
						setYandexToken,
					}}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						{user ? (
							<Route path="/cabinet" element={<Cabinet />}>
								{window.innerWidth >= 1024 ? (
									<Route path="/cabinet" element={<MyProfile />}>
										<Route index element={<Subs />} />
										<Route path="/cabinet/changeSubs" element={<ChangeSubs />} />
										<Route path="/cabinet/payments" element={<Payment />} />
										<Route path="/cabinet/changePayment" element={<ChangePayment />} />
										<Route path="/cabinet/profile" element={<CabinetInfo />} />
										<Route path="/cabinet/ordering" element={<Ordering />} />
										<Route path="/cabinet/ordering3" element={<Ordering3 />} />
										<Route path="/cabinet/payments/status" element={<PaymentsStatus />}>
											<Route index element={<PaymentsStatus />} />
											<Route
												path="/cabinet/payments/status?paymentId=:paymentId"
												element={<PaymentsStatus />}
											/>
										</Route>
									</Route>
								) : (
									<>
										<Route path="/cabinet" element={<MyProfile />} />
										<Route path="/cabinet/subs" element={<Subs />} />
										<Route path="/cabinet/ordering" element={<Ordering />} />
										<Route path="/cabinet/ordering3" element={<Ordering3 />} />
										<Route path="/cabinet/changeSubs" element={<ChangeSubs />} />
										<Route path="/cabinet/changePayment" element={<ChangePayment />} />
										<Route path="/cabinet/payments" element={<Payment />} />
										<Route path="/cabinet/profile" element={<CabinetInfo />} />
										<Route path="/cabinet/payments/status" element={<PaymentsStatus />}>
											<Route index element={<PaymentsStatus />} />
											<Route
												path="/cabinet/payments/status?paymentId=:paymentId"
												element={<PaymentsStatus />}
											/>
										</Route>
									</>
								)}
								<Route path="/cabinet/activity" element={<Activity />} />
								<Route path="/cabinet/statistic" element={<Statistics />} />
								<Route path="/cabinet/nutrition" element={<Nutrition />} />
								<Route path="/cabinet/usefull" element={<Usefull />} />
							</Route>
						) : (
							<Route path="/login" element={<Login />}>
								<Route index element={<LoginForm />} />
								<Route path="/login/registration" element={<Register />} />
								<Route path="/login/step1" element={<ChangePassword />} />
								<Route path="/login/step2" element={<ChangePassword2 />} />
								<Route path="/login/step3" element={<ChangePassword3 />} />
							</Route>
						)}
						<Route path="/userAgreements" element={<UserAgreements />} />
						<Route path="/policy" element={<PrivacyPolicy />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Profile.Provider>
			</Suspense>
		</div>
	);
}

export default App;
