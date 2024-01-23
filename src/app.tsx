import React from "react";
import ReactDOM from "react-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Navigation from "../components/Navigation";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles.css";

const App = () => {
  
  return (
    <>
      <Router>
        <header>
          <Navigation />
          <Header />
        </header>
        <Routes>
          <Route index path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
