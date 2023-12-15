import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li><Link to="https://github.com/NadyaDor/how-to-learn" target="_blank" className="portfolio__link-box">
          <p className="portfolio__link">Статичный сайт</p>
          <img className="portfolio__arrow" src={ arrow } alt="Стрелка"></img>
        </Link></li>
        <li><Link to="https://github.com/NadyaDor/russian-travel" target="_blank" className="portfolio__link-box">
          <p className="portfolio__link">Адаптивный сайт</p>
          <img className="portfolio__arrow" src={ arrow } alt="Стрелка"></img>
        </Link></li>
        <li><Link to="https://github.com/NadyaDor/mesto-react-full" target="_blank" className="portfolio__link-box">
          <p className="portfolio__link">Одностраничное приложение</p>
          <img className="portfolio__arrow" src={ arrow } alt="Стрелка"></img>
        </Link></li>
      </ul>
    </section>
  )
}

export default Portfolio;
