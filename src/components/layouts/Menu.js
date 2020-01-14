import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/layouts/Menu.scss";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  handleMenuClick = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu } = this.state;
    const list = [
      { name: "Start", path: "/", exact: true },
      { name: "O mnie", path: "/about" },
      { name: "Umiejętności", path: "/skills" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Kontakt", path: "/contact" }
    ];
    const navigation = list.map(item => (
      <li className="menu_item" key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>
          {item.name}
        </NavLink>
      </li>
    ));

    return (
      <header>
        <div className="title">
          <span className="title_name">
            <Link to="/">Paulina Stefańska</Link>
          </span>
          <span className="title_subtitle">junior front-end developer</span>
          <div className="title_hamburger" onClick={this.handleMenuClick}>
            <div
              className={`hamburger_line hamburger_top${
                openMenu ? "--open" : ""
              }`}
            ></div>
            <div
              className={`hamburger_line hamburger_middle${
                openMenu ? "--open" : ""
              }`}
            ></div>
            <div
              className={`hamburger_line hamburger_bottom${
                openMenu ? "--open" : ""
              }`}
            ></div>
          </div>
          <div className="title_social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulinastefanska"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paulina-stefanska"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:web.paulinastefanska@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <nav className={`menu${openMenu ? " menu--open" : ""}`}>
          <ul className="menu_list">{navigation}</ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
