import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home_img'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='Home Image'
      />
      <div className='home_row'>
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
      </div>
      <div className='home_row'>
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
      </div>
      <div className='home_row'>
        <Product
          id={1234}
          title='First Product'
          image='https://images-na.ssl-images-amazon.com/images/I/61DETBxKtML._SL1081_.jpg'
          price={1000}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
