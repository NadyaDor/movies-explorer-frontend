import React from "react";
import { useLocation } from 'react-router-dom';
import { Navigation } from "../../utils/Navigation";
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import logo from "../../images/logo.svg";
import iconMain from "../../images/icon__main.svg";

function Header({ loggedIn }) {
  const location = useLocation();

  const { goToMovies, goToSavedMovies, goToRegister, goToLogin, goToProfile, goToMain } = Navigation();

  const isMainPage = location.pathname === '/';
  const isMoviesPage = location.pathname === '/movies';
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const isProfilePage = location.pathname === '/profile';
  const notShowHeader = !isMainPage & !isMoviesPage & !isSavedMoviesPage & !isProfilePage;

  if (notShowHeader) {
    return null;
  }

  return (
    <header className={isMainPage ? "header" : "header header_white"}>
      <button className="header__logo-button" onClick={goToMain} type="button">
        <img className="header__logo" src={logo} alt="Логотип" />
      </button>

      {loggedIn ? (
        <nav className="header__menu-films">
          <button
            className={`${
              isMoviesPage
              ? "header__button-films-white-current"
              : isMainPage
              ? "header__button-films"
              : "header__button-films-white"
            }`}
            onClick={goToMovies}
            type="button"
          >Фильмы</button>

          <button
            className={`${
              isSavedMoviesPage
              ? "header__button-films-white-current"
              : isMainPage
              ? "header__button-films"
              : "header__button-films-white"
            }`}
            onClick={goToSavedMovies}
            type="button"
          >Сохранённые фильмы</button>
        </nav>
      ) : (
        <nav className="header__menu">
          <button
            className="header__button-registration"
            onClick={goToRegister}
            type="button"
          >Регистрация</button>

          <button
            className="header__button-enter"
            onClick={goToLogin}
            type="button"
          >Войти</button>
        </nav>
      )}

      {loggedIn && (
        <nav className={isMainPage ? "header__account" : "header__account-white"} onClick={goToProfile} >
          <p className="header__account-text">Аккаунт</p>
          <div className={isMainPage ? "header__icon-box" : "header__icon-box-white"}>
            <img className="header__icon" src={iconMain} alt="Силуэт человека" />
          </div>
        </nav>
      )}

      {loggedIn && (
        <nav className="header__burger" >
          <HeaderBurger />
        </nav>
      )}
    </header>
  );
};

export default Header;
