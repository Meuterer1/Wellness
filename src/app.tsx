import React from "react";
import ReactDOM from "react-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SectionActivityTypes from "../components/SectionActivityType";
import SectionClasses from "../components/SectionClasses";
import SectionLoseWeight from "../components/SectionLoseWeight";
import SectionTrainers from "../components/SectionTrainers";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Navigation />
          <Header />
        </header>
        <main>
          <SectionClasses />
          <SectionActivityTypes />
          <SectionLoseWeight />
          <SectionTrainers />
        </main>
        <Routes></Routes>
        <Footer />
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
