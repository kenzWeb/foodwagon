import React from 'react';

export default function Featured(props) {
  return (
    <section className='featured'>
      <div className='featured__container'>
        <div className='featured__header'>
          <h2 className='title'>Featured Restaurants</h2>
        </div>
        <div className='featured__content'>
          {props.featuredApi.map((item, i) => (
            <div className='featured__content-card' key={i}>
              <img
                src={item.img}
                alt='featuredImg'
                className='featured__card-img'
              />
              <div className='featured__img-info'>
                <div className='featured__img-info_deduction'>
                  <img
                    src='img/icons/marked.svg'
                    className='featured__img-info_icon'
                    alt='featuredIcon'
                  />
                  <h2 className='featured__img-info_title'>{item.persen}</h2>
                </div>
                <div className='featured__img-info_time'>
                  <img
                    src='img/icons/clock.svg'
                    alt=''
                    className='featured__img-info_clock'
                  />
                  <h2 className='featured__img-info_subtitle'>Fast</h2>
                </div>
              </div>
              <div className='featured__company-card'>
                <div className='featured__company-left'>
                  <img className='featured__left-img' src={item.icon} alt='' />
                </div>
                <div className='featured__company-right'>
                  <h2 className='featured__name'>{item.name}</h2>
                  <div className='featured__right-left'>
                    <img
                      className='featured__right-img'
                      src='img/icons/star.svg'
                      alt='star'
                    />
                    <h2 className='featured__rating'>{item.rating}</h2>
                  </div>
                </div>
              </div>
              <div className='realtive'>
                <button
                  className={`featured__open ${
                    i > 1 ? 'featured__green' : 'featured__red'
                  }`}
                >
                  <h2>{item.open}</h2>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='featured__button'>
          <button className='featured__btn'>
            <h2>View All</h2>
						<img src="img/buttons/arrow-white.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
