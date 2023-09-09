import React from 'react';

export default function Work(props) {
  return (
    <section className='work'>
      <div className='work__container'>
        <div className='work__header'>
          <h2 className='work__header-title title'>How does it work</h2>
        </div>
        <div className='work__info'>
          {props.workApi.map((item, i) => (
            <div className='work__card' key={i}>
              <img src={item.img} alt='work-img' />
              <h2 className='work__card-title'>{item.title}</h2>
              <p className='work__card-subtitle'>{item.sibtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
