// Подвал
import React from "react";
import { useLocation } from 'react-router-dom';
import { GITHUB_URL, YANDEX_URL } from '../../utils/constants';

function Footer() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isMoviesPage = location.pathname === '/movies';
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const notShowFooter = !isMainPage & !isMoviesPage & !isSavedMoviesPage;

  if (notShowFooter) {
    return null;
  }

  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__list">
        <p className="footer__link">© 2023</p>
        <ul className="footer__links">
          <li>
            <a href={YANDEX_URL} className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          </li>
          <li>
           <a href={GITHUB_URL} className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
