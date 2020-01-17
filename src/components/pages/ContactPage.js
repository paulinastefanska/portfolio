import React from "react";
import "../../styles/pages/ContactPage.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
//img
import phone from "../../images/phone.svg";
import sideCircles from "../../images/side-circles.svg";

const ContactPage = () => {
  return (
    <section className="contact">
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
      <img src={phone} alt="phone" className="contact_phone"></img>
      <span className="contact_title">Kontakt</span>
      <div className="contact_socials">
        <Row>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Ho7z_LvVf1TS1otf_HcWkcuh8_oGUKEn/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              <span className="contact_name">Curriculum Vitae</span>
            </a>
          </Col>
          <Col md={6}>
            <a
              className="contact_social"
              href="mailto:web.paulinastefanska@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact_name">
                web.paulinastefanska@gmail.com
              </span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paulina-stefanska"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="contact_name">
                linkedin.com/in/paulina-stefanska
              </span>
            </a>
          </Col>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulinastefanska"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="contact_name">github.com/paulinastefanska</span>
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactPage;
