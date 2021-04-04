import React from "react";
import Julia_Gronau_Web_Developer_klein from "../assets/Julia_Gronau_Web_Developer_klein.jpeg";

const HeroUnit = () => {
  return (
    <header>
      <div className="row herounit">
        <div className="col-2">
          <img
            className="img-fluid juliaimg"
            src={Julia_Gronau_Web_Developer_klein}
            alt="Julia Gronau Web Developer"
          ></img>
        </div>
        <div className="col-10 introheading">
          <h1>Julia Gronau - Full-Stack Web & App Developer</h1>
          <p>
            Mit Ehrgeiz und Neugier bin ich in einem 4-monatigen Bootcamp zur
            Webentwicklerin geworden. Durch meine Berufserfahrung in den
            Bereichen Webanalyse, E-Commerce und Online Marketing besitze ich
            breites Wissen, das im interdisziplinären Arbeiten von großem
            Vorteil ist. Ich arbeite strukturiert, organisiert und habe einen
            hohen Anspruch an mich. Gemeinsam an sinnvollen Lösungen zu arbeiten
            ist für mich ein essentieller Bestandteil des beruflichen Lebens,
            wobei ich mich gern einbringe und von anderen lerne. Die
            Sinnhaftigkeit und Nachhaltigkeit meiner Arbeit hat für mich einen
            besonders hohen Stellenwert .
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroUnit;
