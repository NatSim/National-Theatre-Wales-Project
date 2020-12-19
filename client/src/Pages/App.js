import React, { useState } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import WelcomePage from "./WelcomePage";
import LandingPage from "./LandingPage";
import AuthenticationPage from "./AuthenticationPage";
import HomePage from "./HomePage";
import AboutPage from "../Pages/AboutPage";

// // SERVICES
// import userService from "../services/userService";

/**
 * Landing Page Content
 * welcomeText Array = Each key:pair object is user Step/State change
 */

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/authentication" component={AuthenticationPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
