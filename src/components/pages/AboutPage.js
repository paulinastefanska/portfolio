import React from "react";
import "../../styles/pages/AboutPage.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//images
import flag from "../../images/flag.svg";
import point from "../../images/point.svg";

const AboutPage = () => {
  return (
    <section className="about">
      <Row>
        <img src={flag} alt="flag" className="flag_start"></img>
        <Col md={5}>
          <span className="about_title">Start</span>
          <p className="about_text">
            Początki mojej przygody z kodem sięgają szkoły podstawowej. Poprzez
            edytowanie szablonów na blogi w systemie Wordpress poznałam bardzo
            proste podstawy HTML i CSS. Kolejne lata nauki obrały niestety inny
            kierunek - posiadam dyplom magistra resocjalizacji Uniwersytetu
            Szczecińskiego, a przez ostatnie 6 lat pracowałam jako System Data
            Operator w kanadyjskiej firmie.
          </p>
        </Col>
        <Col md={5}>
          <span className="about_title">Nauka</span>
          <p className="about_text">
            Na szczęście na naukę nigdy nie jest za późno, także od początku
            2019 roku systematycznie poszerzam swoje umiejętności. Ukończyłam
            intensywny 9-miesięczny kurs programowania pod opieką indywidualnego
            mentora – Bootcamp Web Developer Plus w Kodilla. Mam też za sobą
            klika kursów Udemy m.in. Programowanie w JavaScript, React od
            podstaw, Node.js, Express, MongoDB oraz Zaawansowane projekty CSS i
            JavaScript. Obecnie biorę udział w programie:{" "}
            <q>Programiści dla Szczecina</q> - kurs pt.
            <q>Budowanie Aplikacji Internetowych</q> odbywający się w
            Zachodniopomorskiej Szkole Biznesu w Szczecinie. Ćwiczę realizując
            proste projekty dzięki, którym mogę robić to co daje mi radość,
            wzbudza ciekawość i motywuje do działania.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <span className="about_title">Cechy</span>
          <div className="about_text">
            <ul className="about_text-list">
              <li>
                Cechuje mnie upartość, co całkiem nieźle komponuje się z
                programowaniem – nie poddaję się choćby konsola była cała
                czerwona i nie miała końca.
              </li>
              <li>
                Do działania napędza mnie rozwiązany problem, a do nauki
                ciekawość.
              </li>
              <li>
                Biję brawo kiedy mogę powiedzieć: <q>Działa!</q> jedno słowo, a
                wzbudza nieopisaną radość.
              </li>
              <li>
                Zdanie: <q>Nie ma rzeczy niemożliwych</q> stało się moim motto.
              </li>
              <li>
                Bliskie jest mi <q>pixel perfect</q> - jestem dokładna.
              </li>
              <li>
                W programowaniu zwykle towarzyszy mi czekolada - jak się okazało
                pasuje jak ulał*.
              </li>
            </ul>
          </div>
        </Col>
        <Col md={5}>
          <span className="about_title">Aktualnie</span>
          <p className="about_text">
            Nadszedł czas, aby zdobyć doświadczenie i współtworzyć prawdziwe
            projekty. Aktualnie poszukuję pierwszej pracy w IT lub stażu jako
            Junior Front-end Developer. Ponadto chętnie wezmę udział w
            projektach typu open-source JavaScript lub React.
          </p>
        </Col>
        <img src={point} alt="point" className="point_now"></img>
      </Row>

      <p className="about_curiosity">
        <span className="about_star">* </span>
        <q>
          Naukowcy z Uniwersytetu Northumbria w Newcastle w Wielkiej Brytanii
          udowodnili, że umiarkowane spożycie czekolady wpływa zbawiennie na
          mózg człowieka, a zwłaszcza na jego umiejętności matematyczne(…)
        </q>
      </p>
    </section>
  );
};

export default AboutPage;
