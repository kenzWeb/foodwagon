import React from 'react';

export default function Info() {
  const headerCard = [
    {
      img: 'img/icons/invoice-big.svg',
      title: 'Daily Discounts',
    },
    {
      img: 'img/icons/map-app.svg',
      title: 'Live Tracing',
    },
    {
      img: 'img/icons/clock-big.svg',
      title: 'Quick Delivery',
    },
  ];
  return (
    <section className='info'>
      <div className='info__shortContainer'>
        <div className='info__header'>
          {headerCard.map((item, i) => (
            <div className='info__header-card'>
              <img className='info__card-img' src={item.img} alt='' />
              <h2 className='info__card-title'>{item.title}</h2>
            </div>
          ))}
        </div>
        <div className='info__info'>
          <div className='info__info-left'>
            <img className='info__left-img' src='img/info/phone1.png' alt='' />
          </div>
          <div className='info__info-right'>
            <h2 className='info__right-title'>Install the app</h2>
            <p className='info__right-subtitle'>
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <div className='info__right-buttons'>
              <button className='info__right-btn_google'>
                <a href='google'>
                  <img src='img/info/google.svg' alt='google' />
                </a>
              </button>
              <button className='info__right-btn_ios'>
                <a href='ios'>
                  <img src='img/info/ios.svg' alt='ios' />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
