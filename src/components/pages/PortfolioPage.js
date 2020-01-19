import React from "react";
import "../../styles/pages/PortfolioPage.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//img
import folder from "../../images/folder.svg";
import sideCircles from "../../images/side-circles.svg";
import portfolio from "../../images/portfolio/portfolio.png";
import techstore from "../../images/portfolio/techstore.png";
import firstgame from "../../images/portfolio/firstgame.png";
import adminpanel from "../../images/portfolio/adminpanel.png";
import kanbanboard from "../../images/portfolio/kanbanboard.png";
import commentsapp from "../../images/portfolio/commentsapp.png";
import snakegame from "../../images/portfolio/snakegame.png";
import ponggame from "../../images/portfolio/ponggame.png";
import todoapp from "../../images/portfolio/todoapp.png";
import weatherapp from "../../images/portfolio/weatherapp.png";

const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <img
        src={sideCircles}
        alt="side-circles"
        className="portfolio_circles-left"
      />
      <img
        src={sideCircles}
        alt="side-circles"
        className="portfolio_circles-right"
      />
      <img src={folder} alt="folder" className="portfolio_folder"></img>
      <span className="portfolio_title">Wybrane projekty</span>
      <div className="portfolio_projects">
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Strona Portfolio</span>
            <div className="portfolio_wrapper">
              <img
                src={portfolio}
                alt="portfolio"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/portfolio"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/portfolio"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Prosta strona portfolio napisana w React z użyciem React Router
              oraz React-Transition-Group. Grafiki SVG wykonane w Adobe
              Illustartor.{" "}
              <strong>
                Tech stack: HTML | Sass | React | React Router | Animation |
                Illustrator | CRA - webpack | Yarn.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Strona Sklepu TechStore</span>
            <div className="portfolio_wrapper">
              <img
                src={techstore}
                alt="techstore"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://techstore-5850f.firebaseapp.com"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/OnlineShop-FinalProject"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Indywidualny projekt na zakończenie Bootcampu Web Developer Plus.
              Aplikacja jest dostosowana do PWA (Progresive Web App).{" "}
              <strong>
                Tech stack: MERN (MongoDB, Express, React (Redux, Router),
                Node.js | Sass | CRA - webpack | npm | Yarn.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Gra Papier Kamień Nożyce</span>
            <div className="portfolio_wrapper">
              <img
                src={firstgame}
                alt="firstgame"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/game-rock-paper-scissors-v2"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/game-rock-paper-scissors-v2"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Pierwsza gra napisana w JavaScript wyświetlająca wpisane imię
              gracza i wybraną liczbę rund. V2 - rozszerzona o tabelę wyników.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Panel Administracyjny</span>
            <div className="portfolio_wrapper">
              <img
                src={adminpanel}
                alt="adminpanel"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/individual-project"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/individual-project"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Pierwszy indywidualny projekt napisany podczas Bootcampu Web
              Developer Plus na podstawie pliku PSD od grafika.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | Photoshop | npm
                Scripts.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Tablica Kanban</span>
            <div className="portfolio_wrapper">
              <img
                src={kanbanboard}
                alt="kanbanboard"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/kanban-board-with-trello"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/kanban-board-with-trello"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Tablica kanban z trello napisana w JavaScript z użyciem Ajax -
              fetch API do asynchronicznego pobierania danych z Rest API. Dane
              modyfikowane są na serwerze Bootcampu Web Developer Plus.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | JavaScript ES5 | Ajax | API |
                npm Scripts.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Aplikacja Komentarze</span>
            <div className="portfolio_wrapper">
              <img
                src={commentsapp}
                alt="commentsapp"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://peaceful-lamarr-3f5779.netlify.com/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/React-Redux"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Pierwsza aplikacja napisana w React z użyciem Redux do zarządzania
              stanem aplikacji. Wykorzystane zostało narzędzie Redux DevTools do
              kontrolowania akcji aplikacji i zarządzania stanem drzewa DOM.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | React + Redux | CRA - webpack |
                npm.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Gra Wąż</span>
            <div className="portfolio_wrapper">
              <img
                src={snakegame}
                alt="snakegame"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/snakeGame/"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/snakeGame"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Pierwsza gra napisana w React.{" "}
              <strong>
                Tech stack: HTML | CSS | React | CRA - webpack | Yarn.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Gra Ping-Pong</span>
            <div className="portfolio_wrapper">
              <img
                src={ponggame}
                alt="ponggame"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/pongGame"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/pongGame"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Pierwsza gra napisana w JS z użyciem Canvas.{" "}
              <strong>Tech stack: HTML | CSS | Canvas | JavaScript.</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className="portfolio_name">Aplikacja Lista Do Zrobienia</span>
            <div className="portfolio_wrapper">
              <img src={todoapp} alt="todoapp" className="portfolio_project" />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/toDoApp"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/toDoApp"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Aplikacja napisana w React - klasyczna lista zadań do zrobienia z
              możliwością dodawania zadań z flagą ważne i datą.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | React | CRA- webpack | Yarn.
              </strong>
            </p>
          </Col>
          <Col md={6}>
            <span className="portfolio_name">Aplikacja Pogoda</span>
            <div className="portfolio_wrapper">
              <img
                src={weatherapp}
                alt="weatherapp"
                className="portfolio_project"
              />
              <div className="portfolio_middle">
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://paulinastefanska.github.io/weatherApp"
                >
                  DEMO
                </a>
                <a
                  className="portfolio_button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/paulinastefanska/weatherApp"
                >
                  KOD
                </a>
              </div>
            </div>
            <p className="portfolio_desc">
              Aplikacja napisana w React z użyciem fetch API - wyświetlająca
              aktualną pogodę w szukanym mieście.{" "}
              <strong>
                Tech stack: HTML | Sass | RWD | React | API | CRA- webpack |
                Yarn.
              </strong>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PortfolioPage;
