import React, { useState } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import Login from "./Authentication/Login";
import WelcomePage from "./WelcomePage";
import LandingPage from "./LandingPage";

// import "../Components/Welcome.css";

// // SERVICES
// import userService from "../services/userService";

/**
 * Landing Page Content
 * welcomeText Array = Each key:pair object is user Step/State change
 */

//Setting state 0,1,2
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/welcome" component={WelcomePage} />
      </Switch>
      {/* <Router>
        <Nav />
        
        <Login />
      </Router> */}
    </div>
  );
}

export default App;
