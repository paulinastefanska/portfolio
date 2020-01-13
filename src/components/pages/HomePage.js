import React from "react";
import "../../styles/pages/HomePage.scss";
//image
import photo from "../../images/home-pic.JPG";

const HomePage = () => {
  return (
    <section className="home">
      <img src={photo} alt="me" className="img"></img>
      <div className="home_welcome">
        <span className="home_header">Cześć!</span>
        <p className="home_text">
          Nazywam się Paulina Stefańska. Około 1.5 roku temu postanowiłam zostać
          Front-end Developerem. Pomysł nie wziął się znikąd, kiedyś miałam
          troszkę styczności z kodem, a przez ostatnie lata współpraca z działem
          IT tylko mnie o tym przekonała. Od roku systematycznie uczę się
          programowania po stronie front-endu, wiedzę mogę poprzeć licznymi
          projektami oraz kursami. Aktualnie szukam pierwszej pracy w IT.
          Chętnie wezmę też udział w projektach open source JavaScript, React.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
