import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal(props) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subTotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This Order Contains
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
