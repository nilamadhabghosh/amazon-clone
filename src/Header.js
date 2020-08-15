import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://cdn.shopify.com/s/files/1/0266/1888/8276/files/Logo01_200x.jpg?v=1571766831'
          alt='Woods Factory Logo'
        />
      </Link>
      {/* Search Box */}
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>
      {/* Links */}
      <div className='header_nav'>
        <Link to='/login' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Hello Madhab</span>
            <span className='header_optionLineTwo'>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className='header_link'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
