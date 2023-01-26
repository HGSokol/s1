 /* eslint-disable */

export const Checkout = (/* props */) => {
  const checkout = YooMoneyCheckout('964685');
  
  return new Promise ((resolve) => {
/*     const {numberCard, dateCard, cvv} = props
    const {month, year} = dateCard */

    let yandexResponse = checkout.tokenize({
      number: '5555555555554477', // 3d check success
      // number: '5555555555554592', // 3d check fail
      // number: '2202474301322987', // success
      // number: '5555555555554527', // general_decline
      // number: '5555555555554642', // success / error
      
      // number: '5555555555554444', // success
      cvc: '232',
      month: '12',
      year: '25'
      
/*       number: numberCard,
      cvc: cvv,
      month: month,
      year: year */
    })
    resolve(yandexResponse)
  })
}