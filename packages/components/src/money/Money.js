import Types from 'prop-types';
import { formatMoney } from '@transferwise/formatting';

const Money = ({ amount, currency, locale }) => formatMoney(amount, currency, locale);

Money.propTypes = {
  amount: Types.number.isRequired,
  currency: Types.string.isRequired,
  locale: Types.string,
};

Money.defaultProps = {
  locale: 'en',
};

export default Money;
