import React, { useState } from 'react';
import Food from './Food';
import Header from './Header';
import Home from './Home';
import ModalLogin from './miniComponents/ModalLogin';
import Popular from './Popular';
import Work from './Work';
import Featured from './Featured';
import Search from './Search';
import Info from './Info';
import Proceed from './Proceed'
import Cda from './Cda';
import Footer from './Footer';

export default function App() {
  const foodApi = [
    {
      img: 'img/food/image.jpg',
      rebate: 15,
      frame: '6 Days Remaining',
    },
    {
      img: 'img/food/image-1.jpg',
      rebate: 10,
      frame: '6 Days Remaining',
    },
    {
      img: 'img/food/image-2.jpg',
      rebate: 25,
      frame: '7 Days Remaining',
    },
    {
      img: 'img/food/image-3.jpg',
      rebate: 20,
      frame: '8 Days Remaining',
    },
  ];
  const workApi = [
    {
      img: 'img/icons/map-big.svg',
      title: 'Select location',
      sibtitle: 'Choose the location where your food will be delivered.',
    },
    {
      img: 'img/icons/blebell-big.svg',
      title: 'Choose order',
      sibtitle: 'Check over hundreds of menus to pick your favorite food',
    },
    {
      img: 'img/icons/pay.svg',
      title: 'Pay advanced',
      sibtitle:
        'It is quick, safe, and simple. Select several methods of payment',
    },
    {
      img: 'img/icons/enjoy.svg',
      title: 'Enjoy meals',
      sibtitle: 'Food is made and delivered directly to your home.',
    },
  ];
  const popularApi = [
    {
      img: 'img/popular/1.jpg',
      title: 'Cheese Burger',
      name: 'Burger Arena',
      price: '$3.88',
    },
    {
      img: 'img/popular/2.jpg',
      title: 'Toffe’s Cake',
      name: 'Top Sticks',
      price: '$4.00',
    },
    {
      img: 'img/popular/3.jpg',
      title: 'Dancake',
      name: 'Cake World',
      price: '$1.99',
    },
    {
      img: 'img/popular/4.jpg',
      title: 'Crispy Sandwitch',
      name: 'Fastfood Dine',
      price: '$3.00',
    },
    {
      img: 'img/popular/5.jpg',
      title: 'Thai Soup',
      name: 'Foody man',
      price: '$2.79',
    },
    {
      img: 'img/popular/1.jpg',
      title: 'Cheese Burger',
      name: 'Burger Arena',
      price: '$3.88',
    },
    {
      img: 'img/popular/2.jpg',
      title: 'Toffe’s Cake',
      name: 'Top Sticks',
      price: '$4.00',
    },
    {
      img: 'img/popular/3.jpg',
      title: 'Dancake',
      name: 'Cake World',
      price: '$1.99',
    },
    {
      img: 'img/popular/4.jpg',
      title: 'Crispy Sandwitch',
      name: 'Fastfood Dine',
      price: '$3.00',
    },
    {
      img: 'img/popular/5.jpg',
      title: 'Thai Soup',
      name: 'Foody man',
      price: '$2.79',
    },
  ];
  const featuredApi = [
    {
      img: 'img/featured/images/1.jpg',
      icon: 'img/featured/icons/1.svg',
      name: 'Foodworld',
      persen: '20% off',
      rating: 46,
      open: 'Opens tomorrow',
    },
    {
      img: 'img/featured/images/2.jpg',
      icon: 'img/featured/icons/2.svg',
      name: 'Pizzahub',
      persen: '15% off',
      rating: 40,
      open: 'Opens tomorrow',
    },
    {
      img: 'img/featured/images/3.jpg',
      icon: 'img/featured/icons/3.svg',
      name: 'Donuts hut',
      persen: '10% off',
      rating: 20,
      open: 'Open Now',
    },
    {
      img: 'img/featured/images/4.jpg',
      icon: 'img/featured/icons/4.svg',
      name: 'Donuts hut',
      persen: '15% off',
      rating: 50,
      open: 'Open Now',
    },
    {
      img: 'img/featured/images/5.jpg',
      icon: 'img/featured/icons/5.svg',
      name: 'Ruby Tuesday',
      persen: '10% off',
      rating: 26,
      open: 'Open Now',
    },
    {
      img: 'img/featured/images/6.jpg',
      icon: 'img/featured/icons/6.svg',
      name: 'Kuakata Fried Chicken',
      persen: '25% off',
      rating: 43,
      open: 'Open Now',
    },
    {
      img: 'img/featured/images/7.jpg',
      icon: 'img/featured/icons/7.svg',
      name: 'Red Square',
      persen: '10% off',
      rating: 45,
      open: 'Open Now',
    },
    {
      img: 'img/featured/images/8.jpg',
      icon: 'img/featured/icons/8.svg',
      name: 'Taco Bell',
      persen: '10% off',
      rating: 35,
      open: 'Open Now',
    },
  ];
  const searchApi = [
    {
      img: 'img/search/1.jpg',
      name: 'Pizza',
    },
    {
      img: 'img/search/2.jpg',
      name: 'Burger',
    },
    {
      img: 'img/search/3.jpg',
      name: 'Noodles',
    },
    {
      img: 'img/search/4.jpg',
      name: 'Sub-sandiwch',
    },
    {
      img: 'img/search/5.jpg',
      name: 'Chowmein',
    },
    {
      img: 'img/search/6.jpg',
      name: 'Steak',
    },
    {
      img: 'img/search/1.jpg',
      name: 'Pizza',
    },
    {
      img: 'img/search/2.jpg',
      name: 'Burger',
    },
    {
      img: 'img/search/3.jpg',
      name: 'Noodles',
    },
    {
      img: 'img/search/4.jpg',
      name: 'Sub-sandiwch',
    },
    {
      img: 'img/search/5.jpg',
      name: 'Chowmein',
    },
    {
      img: 'img/search/6.jpg',
      name: 'Steak',
    },
  ];
  const [modal, setModal] = useState(false);
  return (
    <>
      <ModalLogin modal={modal} setModal={setModal} />
      <Header modal={modal} setModal={setModal} />
      <main>
        <Home />
        <Food foodApi={foodApi} />
        <Work workApi={workApi} />
        <Popular popularApi={popularApi} />
        <Featured featuredApi={featuredApi} />
        <Search searchApi={searchApi} />
        <Info />
        <Proceed />
				<Cda/>
      </main>
			<footer>
				<Footer/>
			</footer>
    </>
  );
}
