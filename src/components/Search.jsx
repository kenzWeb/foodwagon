import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/swiper-bundle.css';

export default function Search(props) {
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
    <section className='search'>
      <div className='search__container'>
        <div className='search__header'>
          <h2 className='search__title title'>Search by Food</h2>
          <div className='search__slider-btn'>
            <div className='flex items-center mr-[26px]'>
              <h2 className='search__btn-title'>View All</h2>
              <img
                className='search__arrow'
                src='img/buttons/arrow-yellow.svg'
                alt=''
              />
            </div>
            <button
              className='search__btn search__prev'
              onClick={handlePrevClick}
            ></button>
            <button
              className='search__btn search__next'
              onClick={handleNextClick}
            ></button>
          </div>
        </div>
        <div className='search__slider'>
          <div className='search__slider-wrapper'>
            <div className='search__slider-card'>
              <Swiper
                speed={900}
                loop={true}
                onSwiper={setSwiper}
                className='search__swiper-base'
                spaceBetween={34}
                slidesPerView={2}
                modules={[Navigation]}
                navigation={{
                  nextEl: 'search__next',
                  prevEl: 'search__prev',
                }}
                breakpoints={{
                  769: { slidesPerView: 6 },
                  480: { slidesPerView: 3 },
                }}
              >
                {props.searchApi.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={item.img}
                      alt='searchImg'
                      className='search__img'
                    />
                    <h2 className='search__slider-title'>{item.name}</h2>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
