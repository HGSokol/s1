import { lazy, Suspense, createContext, useState, useEffect, useLayoutEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { deviceType } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import HomePage from './js/Pages/Home';
import Spinner from './js/components/Spinner';
import { User, CardInfo, userPaymentMethod, ActiveSub, ProfileContext } from './js/@types/appTypes';

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
const Security = lazy(() => import('./js/Pages/Security'));
const PaymentsStatus = lazy(() => import('./js/Pages/PaymentsStatus'));
const LoginForm = lazy(() => import('./js/Pages/LoginForm'));
const Register = lazy(() => import('./js/Pages/Registration'));
const ChangePassword = lazy(() => import('./js/Pages/ChangePassword'));
const ChangePassword2 = lazy(() => import('./js/Pages/ChangePassword2'));
const ChangePassword3 = lazy(() => import('./js/Pages/ChangePassword3'));
const UserAgreements = lazy(() => import('./js/Pages/UserAgreements'));
const PrivacyPolicy = lazy(() => import('./js/Pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./js/Pages/PageNotFound'));
const Maintenance = lazy(() => import('./js/Pages/Maintanance'));
const CookiePopup = lazy(() => import('./js/components/CookiePopup'));

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
	errorMessage: null,
	setErrorMessage: () => {},
	errorLoadCheckout: false,
	setErrorLoadCheckout: () => {},
};

export const Profile = createContext<ProfileContext>(ProfileUser);

function App() {
	const [user, setUser] = useState<User | null>(null);
	const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
	const [reload, setReload] = useState(true);
	const [activeSub, setActiveSub] = useState<ActiveSub | null>(null);
	const [selectedPlan, setSelectedPlan] = useState<ActiveSub | null>(null);
	const [yandexToken, setYandexToken] = useState<string | null>(null);
	const [userPaymentMethod, setUserPaymentMethod] = useState<userPaymentMethod | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [errorLoadCheckout, setErrorLoadCheckout] = useState<boolean | null>(null);

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

	useLayoutEffect(() => {
		deviceName = deviceType;
	}, []);

	useEffect(() => {
		if (reload && localUser && JSON.parse(localUser).token) {
			axios
				.get('/api/customer')
				.then((res) => {
					setUser((prev) => ({
						...prev,
						email: res.data.email,
						name: res.data.name === null ? '' : res.data.name,
						lastName: res.data.lastName === null ? '' : res.data.lastName,
						avatar: res.data.avatar,
						uuid: res.data.uuid,
						isExternalRegistration: res.data.isExternalRegistration,
					}));
				})
				.catch((error) => {
					if (error.response.status === 401) {
						localStorage.clear();
						navigate('/');
					}
					if (error.response.status === 503) {
						localStorage.clear();
						navigate('/maintenance');
					}
				});
			setReload(false);
		}
	}, [reload]);

	useEffect(() => {
		window.addEventListener('popstate', function (event) {
			setYandexToken(null);
		});
		return () => {
			window.removeEventListener('popstate', function (event) {
				setYandexToken(null);
			});
		};
	}, []);

	console.log(document.cookie);

	return (
		<div className="font-body relative">
			{<CookiePopup />}
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
					errorMessage,
					setErrorMessage,
					errorLoadCheckout,
					setErrorLoadCheckout,
				}}>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						{user ? (
							<Route path="/cabinet" element={<Cabinet />}>
								{window.innerWidth >= 1024 ? (
									<Route path="/cabinet" element={<MyProfile />}>
										<Route index element={<Subs />} />
										<Route path="/cabinet/plans" element={<ChangeSubs />} />
										<Route path="/cabinet/payments" element={<Payment />} />
										<Route path="/cabinet/new-payment-method" element={<ChangePayment />} />
										<Route path="/cabinet/profile" element={<CabinetInfo />} />
										<Route path="/cabinet/security" element={<Security />} />
										<Route path="/cabinet/order" element={<Ordering />} />
										<Route path="/cabinet/payments/processing" element={<Ordering3 />} />
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
										<Route path="/cabinet/order" element={<Ordering />} />
										<Route path="/cabinet/payments/processing" element={<Ordering3 />} />
										<Route path="/cabinet/plans" element={<ChangeSubs />} />
										<Route path="/cabinet/new-payment-method" element={<ChangePayment />} />
										<Route path="/cabinet/payments" element={<Payment />} />
										<Route path="/cabinet/security" element={<Security />} />
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
						<Route path="/maintenance" element={<Maintenance />} />
						<Route path="/policy" element={<PrivacyPolicy />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Profile.Provider>
		</div>
	);
}

export default App;
