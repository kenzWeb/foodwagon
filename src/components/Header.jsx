import React from 'react';
import './../styles/base/base.scss';

export default function Header(props) {
  function loginModal(e) {
    e.preventDefault();
    props.setModal(true);
  }
  return (
    <header className='pt-[18px] pb-[20px]'>
      <div className='header__container flex items-center justify-between'>
        <div className='logo__header-wrapper flex'>
          <img src='img/logo.svg' alt='' className='logo__header mr-[12px]' />
          <h2 className='text-[#F17228] text-[32px] max-[480px]:text-[24px]'>
            <span className='text-[#FFB30E]'>food</span>wagon
          </h2>
        </div>
        <div className='header__located flex max-lg:hidden'>
          <h2 className='mr-[12px]'>Deliver to:</h2>
          <img className='mr-[8px]' src='img/icons/map.svg' alt='header-map' />
          <h2 className='font-[Open_Sans] header__located-title'>
            <span className='font-normal'>Current Location</span> Mohammadpur
            Bus Stand, Dhaka
          </h2>
        </div>
        <a href='/' className='header__search flex items-center max-md:hidden'>
          <img className='mr-[5px]' src='img/icons/search.svg' alt='search' />
          <h2>Search Food</h2>
        </a>
        <a
          onClick={loginModal}
          href='/'
          className='header__button flex items-center'
        >
          <img src='img/icons/login.svg' alt='login' />
          <button className='header__btn'>Login</button>
        </a>
      </div>
    </header>
  );
}
