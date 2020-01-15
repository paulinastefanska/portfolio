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

const ContactPage = () => {
  return (
    <section className="contact">
      <img src={phone} alt="phone" className="contact_phone"></img>
      <span className="contact_title">Kontakt</span>
      <div className="contact_socials">
        <Row>
          <Col md={6}>
            <a
              className="contact_social"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/15Tms2zgVCCuLykXGP9So7dNlyGOC-BMC/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/15Tms2zgVCCuLykXGP9So7dNlyGOC-BMC/view?usp=sharing"
            >
              Curriculum Vitae
            </a>
          </Col>
          <Col md={6}>
            <a
              className="contact_social"
              href="mailto:web.paulinastefanska@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="mailto:web.paulinastefanska@gmail.com">
              web.paulinastefanska@gmail.com
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
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paulina-stefanska"
            >
              linkedin.com/in/paulina-stefanska
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
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulinastefanska"
            >
              github.com/paulinastefanska
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactPage;
