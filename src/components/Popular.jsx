import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/swiper-bundle.css";

export default function Popular(props) {
  const [swiper, setSwiper] = React.useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  return (
    <section className='popular'>
      <div className='popular__container'>
        <div className='popular__header'>
          <h2 className='title'>Popular items</h2>
        </div>
        <div className='popular__slider'>
          <div className='popular__slider-wrapper'>
            <div className='popular__slider-card'>
              <Swiper
								speed={900}
								loop={true}
                onSwiper={setSwiper}
                className='popular__swiper-base'
                spaceBetween={15}
                slidesPerView={2}
                modules={[Navigation]}
                navigation={{
                  nextEl: 'nav__next',
                  prevEl: 'nav__prev',
                }}
                breakpoints={{
                  769: { slidesPerView: 5 },
                  480: { slidesPerView: 3 },
                }}
              >
                {props.popularApi.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={item.img}
                      alt='popularImg'
                      className='popular__slider-img'
                    />
                    <h2 className='popular__slider-title'>{item.title}</h2>
                    <div className='popular__slider-name_wrapper'>
                      <img
                        src='img/icons/map.svg'
                        alt='map'
                        className='popular__slider-name_img'
                      />
                      <h2 className='popular__slider-name_name'>{item.name}</h2>
                    </div>
                    <h3 className='popular__slider-price'>{item.price}</h3>
                    <h2 className='popular__slider-btn'>Order Now</h2>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className='slider__btn'>
        <button
          className='nav__btn nav-next'
          onClick={handleNextClick}
        ></button>
        <button
          className='nav__btn nav-prev'
          onClick={handlePrevClick}
        ></button>
      </div>
    </section>
  );
}
