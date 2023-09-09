import React from 'react';

export default function Proceed() {
  return (
    <section className='proceed'>
      <div className='proceed__container'>
        <div className='proceed__wrapper'>
          <div className='proceed__card'>
            <div className='proceed__card-left'>
              <h2 className='proceed__title'>
                Best deals <span>Crispy Sandwiches</span>
              </h2>
              <p className='proceed__subtitle'>
                Enjoy the large size of sandwiches. Complete perfect slice of
                sandwiches.
              </p>
              <div className='proceed__card-button'>
                <h2 href='arrow-white'>Proceed to order</h2>
                <img src='img/buttons/arrow-white.svg' alt='arrow-left' />
              </div>
            </div>
            <div className='proceed__card-right'>
              <img
                className='proceed__img'
                src='img/proceed/1.jpg'
                alt='proceed-img'
              />
            </div>
          </div>
          <div className='proceed__card1'>
            <div className='proceed__card-left1'>
              <img
                className='proceed__img'
                src='img/proceed/2.jpg'
                alt='proceed-img'
              />
            </div>
            <div className='proceed__card-right1'>
              <h2 className='proceed__title'>
                Celebrate parties with <span>Fried Chicken</span>
              </h2>
              <p className='proceed__subtitle'>
                Get the best fried chicken smeared with a lip smacking lemon
                chili flavor. Check out best deals for fried chicken.
              </p>
              <div className='proceed__card-button'>
                <h2 href='arrow-white'>Proceed to order</h2>
                <img src='img/buttons/arrow-white.svg' alt='arrow-left' />
              </div>
            </div>
          </div>
          <div className='proceed__card'>
            <div className='proceed__card-left'>
              <h2 className='proceed__title'>
                Wanna eat hot & spicy <span>Pizza?</span>
              </h2>
              <p className='proceed__subtitle'>
                Pair up with a friend and enjoy the hot and crispy pizza pops.
                Try it with the best deals.
              </p>
              <div className='proceed__card-button'>
                <h2 href='arrow-white'>Proceed to order</h2>
                <img src='img/buttons/arrow-white.svg' alt='arrow-left' />
              </div>
            </div>
            <div className='proceed__card-right'>
              <img
                className='proceed__img'
                src='img/proceed/3.jpg'
                alt='proceed-img'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
