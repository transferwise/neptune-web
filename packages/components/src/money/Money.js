import Types from 'prop-types';
import { formatMoney } from '@transferwise/formatting';

const Money = ({ amount, currency }) => formatMoney(amount, currency);

Money.propTypes = {
  amount: Types.number.isRequired,
  currency: Types.string.isRequired,
};

export default Money;
