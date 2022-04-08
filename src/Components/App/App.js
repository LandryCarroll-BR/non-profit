import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo from '../../logo.svg';
// import { Counter } from '../../features/counter/Counter';
import "./App.css";
import About from "../About/About";
import OurImpact from "../OurImpact/OurImpact";
import Registration from "../Registration/Registration";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../util/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/ourImpact">
              <OurImpact />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
