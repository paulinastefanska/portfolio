import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/layouts/Menu";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container>
          <Menu />
          <Main />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
