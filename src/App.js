import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
//layouts
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";
//bootstrap
import { Container } from "react-bootstrap";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Container>
          <Header />
          <ScrollToTop />
          <Main />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
