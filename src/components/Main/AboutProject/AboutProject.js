import React from "react";

function AboutProject() {

  return (
    <section className="about-project">
      <div className="about-project__head">
        <h2 className="about-project__head-title">О проекте</h2>
      </div>
      <div className="about-project__text-boxes">
        <div className="about-project__text-box">
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-box">
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__scale-boxes">
        <div className="about-project__scale-box">
          <h3 className="about-project__scale-title about-project__scale-title_green">1 неделя</h3>
          <h3 className="about-project__scale-title about-project__scale-title_grey">4 недели</h3>
        </div>
        <div className="about-project__scale-box">
          <p className="about-project__scale-text">Back-end</p>
          <p className="about-project__scale-text">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
