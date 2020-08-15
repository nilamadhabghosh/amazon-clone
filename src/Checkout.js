import React from 'react';
import { useStateValue } from './StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout(props) {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div>
        <img
          className='checkout_ad'
          src='https://cdn.techexplorist.com/wp-content/uploads/2017/03/advertise.png'
        />
        {basket.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
          </div>
        ) : (
          <div>
            <h1 className='checkout_title'>your shopping basket</h1>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout_right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
