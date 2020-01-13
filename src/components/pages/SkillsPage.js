import React from "react";
import "../../styles/pages/SkillsPage.scss";
//bootstrap
import { Row, Col } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faNode,
  faEnvira,
  faGitAlt,
  faNpm,
  faYarn,
  faJira,
  faSlack,
  faAdobe
} from "@fortawesome/free-brands-svg-icons";

const SkillsPage = () => {
  return (
    <section className="skills">
      <div className="skills_header">
        <p className="skills_title">Front-end</p>
      </div>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faHtml5} className="skills_icon" />
          <p className="skills_lang">HTML</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faCss3Alt} className="skills_icon" />
          <p className="skills_lang">CSS</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faSass} className="skills_icon" />
          <p className="skills_lang">Sass</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faBootstrap} className="skills_icon" />
          <p className="skills_lang">Bootstrap</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faJs} className="skills_icon" />
          <p className="skills_lang">JavaScript</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faReact} className="skills_icon" />
          <p className="skills_lang">React + Redux</p>
        </Col>
      </Row>
      <p className="skills_title">Back-end</p>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faNode} className="skills_icon" />
          <p className="skills_lang">Node.js - Express</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faEnvira} className="skills_icon" />
          <p className="skills_lang">MongoDB</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faLayerGroup} className="skills_icon" />
          <p className="skills_lang">Stack MERN</p>
        </Col>
      </Row>
      <p className="skills_title">Narzędzia i inne</p>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faGitAlt} className="skills_icon" />
          <p className="skills_lang">Git</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faNpm} className="skills_icon" />
          <p className="skills_lang">npm</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faYarn} className="skills_icon" />
          <p className="skills_lang">Yarn</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FontAwesomeIcon icon={faJira} className="skills_icon" />
          <p className="skills_lang">Jira</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faSlack} className="skills_icon" />
          <p className="skills_lang">Slack</p>
        </Col>
        <Col md={4}>
          <FontAwesomeIcon icon={faAdobe} className="skills_icon" />
          <p className="skills_lang">Photoshop, Illustrator</p>
        </Col>
      </Row>
    </section>
  );
};

export default SkillsPage;
