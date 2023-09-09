import React from 'react';
import './../styles/base/base.scss';

export default function Food1(props) {
  return (
    <section className='food'>
      <div className='food__container'>
        <div className='food__items'>
          {props.foodApi.map((item, i) => (
            <div className='food__card' key={i}>
              <div className='food__card-img'>
                <img src={item.img} alt='' />
                <div className='food__card-rebate absolute items-center'>
                  <h1>{item.rebate}</h1>
                  <div className='flex flex-col'>
                    <h2>%</h2>
                    <h3>off</h3>
                  </div>
                </div>
              </div>
              <h2 className='text-[22px] mt-[25px] mb-[5px]'>Greys Vage</h2>
              <h2 className='food__remaining inline-block'>{item.frame}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
