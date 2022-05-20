import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Buytoken from "./pages/Buytoken";
import Goldgrinderminer from "./pages/Goldgrinderminer";
import Goldlotto from "./pages/Goldlotto";
import Goldswap from "./pages/Goldswap";
import Goldfinance from "./pages/Goldfinance";
import Chart from "./pages/Chart";
import About from "./pages/About";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App">
        {/* <Container> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/buytoken" component={Buytoken} />
          <Route path="/goldgrinderminer" component={Goldgrinderminer} />
          <Route path="/goldlotto" component={Goldlotto} />
          <Route path="/goldswap" component={Goldswap} />
          <Route path="/goldfinance" component={Goldfinance} />
          <Route path="/about" component={About} />
        </Switch>
        {showButton && (
          <div onClick={scrollToTop} className="back-to-top">
            <BsFillArrowUpCircleFill className="cl-green" />
          </div>
        )}
        {/* </Container> */}
        <Route path="/chart" component={Chart} />
      </div>
    </Router>
  );
};

export default App;
