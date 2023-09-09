import React from 'react';

export default function Home() {
  return (
    <section className='home'>
      <div className='home__container flex'>
        <div className='home__left'>
          <h2 className='home__title'>Are you starving?</h2>
          <p className='home__subtitle'>
            Within a few clicks, find meals that are accessible near you
          </p>
          <div className='home__card'>
            <div className='home__card-tab'>
              <button className='home__card-button_first'>
                <img src='img/icons/bike.svg' alt='bike' />
                <h2>Delivery</h2>
              </button>
              <button className='home__card-button_second'>
                <img src='img/icons/bag.svg' alt='bag' />
                <h2>Pickup</h2>
              </button>
            </div>
            <div className='tab__email flex items-center'>
              <form action='' className='home__form'>
                <img src='img/icons/map-red.svg' alt='map-red' />
                <input type='email' placeholder='Enter Your Address' />
              </form>
              <button className='home__form-button'>
                <img src='img/icons/searchWhite.svg' alt='search-white' />
                <h2 className='home__form-title'>Find Food</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='home__right'>
        <img className='w-100%' src='img/icons/home-icon.png' alt='home-icon' />
      </div>
    </section>
  );
}
