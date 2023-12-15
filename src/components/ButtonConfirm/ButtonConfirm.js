import React from 'react';
import { Link } from 'react-router-dom';

function ButtonConfirm() {
  return (
    <Link to='/profile' className='button-confirm'>
      <div className='button-confirm__container'>
        <p className='button-confirm__text'>Аккаунт</p>
        <div className='button-confirm__icon'></div>
      </div>
    </Link>
  );
}

export default ButtonConfirm;
