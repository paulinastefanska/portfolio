import React from "react";
import "../../styles/pages/HomePage.scss";
//images
import photo from "../../images/home-pic.JPG";
import circle from "../../images/circle.svg";
import circleYellow from "../../images/circle-yellow.svg";

const HomePage = () => {
  return (
    <section className="home">
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
          nie ważne jak trudna jest droga - nie poddaję się!
        </p>
      </div>
      <div className="home_welcome">
        <span className="home_title">Cześć!</span>
        <p className="home_text">
          Nazywam się Paulina Stefańska. Około 1.5 roku temu postanowiłam zostać
          Front-end Developerem. Pomysł nie wziął się znikąd, kiedyś miałam
          troszkę styczności z kodem, a przez ostatnie lata współpraca z działem
          IT tylko mnie o tym przekonała. Od roku systematycznie uczę się
          programowania po stronie front-endu. Posiadam nowoczesny stack
          technologiczny. Wiedzę mogę poprzeć licznymi projektami oraz kursami.
          Aktualnie szukam pierwszej pracy w IT. Chętnie wezmę też udział w
          projektach open-source.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
