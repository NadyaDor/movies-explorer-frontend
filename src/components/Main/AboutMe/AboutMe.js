import React from "react";
import avatar from "../../../images/avatar.jpg";
import { GITHUB_URL } from '../../../utils/constants';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__head">
        <h2 className="about-me__head-title">Студент</h2>
      </div>
      <div className="about-me__box">
        <div className="about-me__box-with-texts">
          <div className="about-me__box-with-text">
            <h2 className="about-me__name">Надежда</h2>
            <h3 className="about-me__profession">Full-stack разработчик, 37 лет</h3>
            <p className="about-me__about-me">Я родилась и живу в Верхнем Тагиле, закончила факультет экономики в УрГУПС.
                                              Люблю водить автомобиль и увлекаюсь бегом.
                                              Много лет работала в телекоммуникационных компаниях, писала статьи для интернет-изданий и сотрудничала с общественными организациями.
                                              Приняла участие в создали приюта для беспризорных кошек (<a href="https://vk.com/homekrosh_vtagil" className="about-me__github" target="_blank" rel="noopener noreferrer">чтобы помочь приюту, нажми здесь</a>).
                                              Также открыла небольшую студию и несколько лет преподавала функциональный тренинг и йогу.
                                              Чуть больше года назад начала изучать программирование.
                                              В данный момент закончила курсы переподготовки в ТГУ и Я.Практикуме. Этот приложение - моя дипломная работа на курсе веб-программист.</p>
          </div>
          <a href={GITHUB_URL} className="about-me__github" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img className="about-me__image" src={avatar} alt="Фотография студента" />
      </div>
    </section>
  )
}

export default AboutMe;
