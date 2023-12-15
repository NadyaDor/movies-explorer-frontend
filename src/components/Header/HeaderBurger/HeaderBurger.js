import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import group from "../../../images/Group.svg";
import iconMain from "../../../images/icon__main.svg";
import iconBurger from "../../../images/icon__burger_main.svg";
import iconBurgerWhite from "../../../images/burger.svg";

const HeaderBurger = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === '/';
  const isMoviesPage = location.pathname === '/movies';
  const isSavedMoviesPage = location.pathname === '/saved-movies';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const goToMovies = () => { navigate('/movies') };
  const goToSavedMovies = () => { navigate('/saved-movies') };
  const goToProfile = () => { navigate("/profile") };
  const goToMain = () => { navigate("/") };
  
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOverlayVisible(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsOverlayVisible(false);
  };

  return (
    <div className={isMainPage ? "header-burger"  : "header-burger header-burger_white"}>
      <button className={isMainPage ? "header-burger__button"  : "header-burger__button-white"} type="button" onClick={handleClick}>
        <img src={isMainPage ? iconBurger : iconBurgerWhite} alt="Боковое меню"></img>
      </button>

      {isMenuOpen && (
        <>
        <div className="header-burger__box-overlay" onClick={closeMenu}></div>
        <div className="header-burger__box">
          <img className="header-burger__button-close" src={group} alt="Закрыть" onClick={closeMenu} />
          <div className="header-burger__menu">
            <button className={isMainPage ? "header-burger__menu-button-current"  : "header-burger__menu-button"} type="button" onClick={goToMain}>Главная</button>
            <button className={isMoviesPage ? "header-burger__menu-button-current"  : "header-burger__menu-button"} type="button" onClick={goToMovies}>Фильмы</button>
            <button className={isSavedMoviesPage ? "header-burger__menu-button-current"  : "header-burger__menu-button"} type="button" onClick={goToSavedMovies}>Сохранённые фильмы</button>
          </div>
          <button className="header-burger__menu-button-profile" type="button" onClick={goToProfile} >
            <p className="header__account-text">Аккаунт</p>
            <div className="header__icon-box-white">
              <img className="header__icon" src={iconMain} alt="Скважина" />
            </div>
          </button>
        </div>
        </>
      )}
    </div>
  );
};

export default HeaderBurger;
