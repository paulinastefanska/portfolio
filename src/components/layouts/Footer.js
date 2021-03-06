import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/layouts/Footer.scss";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_socials">
        &copy;2020{" "}
        <a
          aria-label="GitHub-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/paulinastefanska/portfolio"
        >
          Paulina Stefańska
        </a>
        <a
          className="footer_social"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/paulinastefanska"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="footer_social"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/paulina-stefanska"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="footer_social footer_social--hidden"
          aria-label="E-mail"
          href="mailto:web.paulinastefanska@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
      <ul className="footer_menu">
        <li>
          <NavLink exact to="/about" className="footer_link">
            O mnie
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/skills" className="footer_link">
            Umiejętności
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/portfolio" className="footer_link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="footer_link">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
