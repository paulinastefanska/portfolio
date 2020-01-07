import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/layouts/Menu";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container_fluid">
          <header>{<Menu />}</header>
          <main>{<Main />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
