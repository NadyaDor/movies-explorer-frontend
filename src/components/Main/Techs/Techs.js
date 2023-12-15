import React from "react";


function Techs() {

  return (
    <section className="techs">
      <div className="techs__head">
        <h2 className="techs__head-title">Технологии</h2>
      </div>
      <div className="techs__box">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__title-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-text">HTML</li>
          <li className="techs__list-text">CSS</li>
          <li className="techs__list-text">JS</li>
          <li className="techs__list-text">React</li>
          <li className="techs__list-text">Git</li>
          <li className="techs__list-text">Express.js</li>
          <li className="techs__list-text">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;