/* eslint-disable */

// const metaTag = document.querySelector(`meta[name="youkassa_merchant_id"]`);
// const MetaContent = metaTag.content;

export const Checkout = (props) => {
	const checkout = YooMoneyCheckout(`964685`);

	return new Promise((resolve) => {
		const { numberCard, dateCard, cvv } = props;
		const { month, year } = dateCard;

		let yandexResponse = checkout.tokenize({
			number: numberCard,
			cvc: cvv,
			month: month,
			year: year,
		});
		resolve(yandexResponse);
	});
};
