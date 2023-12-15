import React from "react";
import promoLogo from "../../../images/text__COLOR_landing-logo.svg";

function Promo() {

  const scrollToAboutProject = () => {
    const aboutProjectElement = document.querySelector(".about-project");
    if (aboutProjectElement) {
      const yOffset = aboutProjectElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="promo">
      <div className="promo__box">
        <div className="promo__text-box">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <button className="promo__button" onClick={scrollToAboutProject} type="button">Узнать больше</button>
      </div>
     <img className="promo__logo" src={ promoLogo } alt="Планета Земля" />
    </section>
  )
}

export default Promo;
