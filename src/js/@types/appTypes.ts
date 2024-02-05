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
  isExternalRegistration?: string | null;
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
  errorMessage: string | null;
  setErrorMessage: (errorMessage: string | null) => void;
  errorLoadCheckout: boolean | null;
  setErrorLoadCheckout: (errorMessage: boolean | null) => void;
}

export type TypeDataHistory = {
  amount?: number;
  createdAt?: string;
  currency?: string;
  id?: number;
  isTrial?: boolean;
  paidPeriodEnd?: string;
  paidPeriodStart?: string;
  payment?: {
    id?: number;
    transactionId?: string;
    chargedAt?: string;
    paymentProvider?: string;
  };
  paymentMethod?: string;
  planName?: string;
  status?: string;
};

export interface SubscribeType {
  currency?: string;
  description?: string;
  id?: number;
  invoicePeriod?: number;
  isBestChoice?: boolean;
  name?: string;
  price?: number;
  productId?: string;
  properties?: {
    card?: string[];
    pricePerMonth?: number;
  };
  tier?: number;
  trialPeriod?: number;
}

export type dataCard = {
  img: string;
  minImg?: string;
  prof: string;
  name: string;
  description: string;
  links: {
    instagram?: string;
    telegram?: string;
    youtube?: string;
  };
};

export type commentCard = {
  text: string;
  image: string;
  name: string;
  mail: string;
};
