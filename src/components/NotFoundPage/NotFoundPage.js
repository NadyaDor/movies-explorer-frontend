// Страница не найдена
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className='not-found-page'>
      <div className='not-found-page__text'>
        <p className='not-found-page__text-title'>404</p>
        <p className='not-found-page__text-information'>Страница не найдена</p>
      </div>
      <button className='not-found-page__buttom' type="button" onClick={goBack}>Назад</button>
    </main>
  );
}

export default NotFoundPage;
