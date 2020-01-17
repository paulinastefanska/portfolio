import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
//animations
import { CSSTransition, TransitionGroup } from "react-transition-group";
//pages
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

import "../../styles/layouts/Main.scss";
import "../../styles/animation/PageTransition.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props;

    return (
      <TransitionGroup component="main" className="main">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 800, exit: 400 }}
          classNames="fade"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div className="wrapper">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/skills" exact component={SkillsPage} />
              <Route path="/portfolio" exact component={PortfolioPage} />
              <Route path="/contact" exact component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Main);
