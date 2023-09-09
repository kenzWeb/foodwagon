import React from 'react';

export default function ModalLogin(props) {
  return (
    <div
      className={`modal__login-wrapper ${!props.modal ? 'scale-0' : 'scale-1'} z-10`}
    >
      <div className='modal__login'>
        <div className='modal__login-container flex flex-col items-center'>
          <p className='mb-[20px] text-[24px]'>Войти</p>
          <form action='' className='modal__login-form'>
            <input
              className='modal__login-input mb-[20px]'
              type='text'
              placeholder='Логин'
            />
            <input
              className='modal__login-input'
              type='text'
              placeholder='Пароль'
            />
          </form>
          <h2
            onClick={() => props.setModal(false)}
            className='absolute right-[20px] top-[10px] cursor-pointer'
          >
            &#10006;
          </h2>
        </div>
      </div>
    </div>
  );
}
