import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(id);
  const removeFromBakset = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt='' />
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p>
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className='chckoutProduct_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon />
            ))}
        </div>
        <button onClick={removeFromBakset}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
