import {ReactComponent as Visa} from '../images/visa.svg';
import {ReactComponent as Mastercard} from '../images/mastercard.svg';
import {ReactComponent as Mir} from '../images/mir.svg';


const CardIcon = (props: {cardNumber: string}) => {
  const {cardNumber} = props
  return cardNumber[0] === '4' || cardNumber === 'Visa'? (<Visa />): 
    cardNumber[0] === '5' || cardNumber === 'MasterCard' ? (<Mastercard />) :
    cardNumber[0] === '2' || cardNumber === 'Mir' ? (<Mir />) :
    null
}

export default CardIcon