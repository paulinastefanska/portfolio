import React from "react";
import "../../styles/pages/HomePage.scss";
//images
import photo from "../../images/home-pic.JPG";
import circle from "../../images/circle.svg";
import circleYellow from "../../images/circle-yellow.svg";
import sideCircles from "../../images/side-circles.svg";

const HomePage = () => {
  return (
    <section className="home">
      <img
        src={sideCircles}
        alt="side-circles"
        className="home_circles-side-left"
      />
      <img
        src={sideCircles}
        alt="side-circles"
        className="home_circles-side-right"
      />
      <div className="home_header">
        <img src={circle} alt="circle" className="home_circle-left" />
        <img
          src={circleYellow}
          alt="circle-yellow"
          className="home_circle-right"
        />
        <img src={photo} alt="me" className="home_img" />
        <p className="home_sentence">
          Bardzo lubię podejmować nowe wyzwania i zawsze dążę do wybranego celu,
          bez względu na to, jak trudna jest droga - nie poddaję się!
        </p>
      </div>
      <span className="home_title">Cześć!</span>
      <p className="home_text">
        Nazywam się Paulina Stefańska. Około 1.5 roku temu postanowiłam zostać
        Front-end Developerem. Pomysł nie wziął się znikąd, kiedyś miałam
        troszkę styczności z kodem, a przez ostatnie lata współpraca z działem
        IT tylko mnie o tym przekonała. Od roku systematycznie uczę się
        programowania po stronie front-endu. Ukończyłam intensywny 9-miesięczny
        kurs programowania pod opieką indywidualnego mentora – Bootcamp Web
        Developer Plus w Kodilla. Mam też za sobą kilka ciekawych kursów na
        platformie Udemy. Cały czas ćwiczę i rozwijam swoje umiejętności -
        szczególnie w JavaScript i React. Obecnie biorę udział w programie{" "}
        <q>Programiści dla Szczecina</q> i&nbsp;od&nbsp;podstaw uczę się języka
        PHP i baz danych MySQL. Wiedzę mogę poprzeć licznymi projektami.
        Aktualnie szukam pierwszej pracy w IT. Chętnie wezmę też udział w
        projektach open-source.
      </p>
    </section>
  );
};

export default HomePage;
