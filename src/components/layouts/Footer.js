import React from "react";
import "../../styles/layouts/Footer.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <p className="footer">
      &copy;2020{" "}
      <a href="https://github.com/paulinastefanska/portfolio">
        <b>Paulina Stefańska</b>
      </a>
      <a className="footer_social" href="https://github.com/paulinastefanska">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="footer_social"
        href="https://www.linkedin.com/in/paulina-stefanska"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="footer_social" href="mailto:web.paulinastefanska@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </p>
  );
};

export default Footer;
