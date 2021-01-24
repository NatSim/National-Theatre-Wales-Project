import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Welcome/WelcomePage";
import LandingPage from "./Landing/LandingPage";
import LoginPage from "../Components/Auth/LoginPage";
import RegisterPage from "../Components/Auth/RegisterPage";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import SimpleActsPage from "./SimpleActs/SimpleActsPage";
import MonologuePage from "./Monologue/MonologuePage";
import MusicPage from "./Music/MusicPage";
import TermsPage from "./Terms/TermsPage";
import ContactUsPage from "./ContactUs/ContactUsPage";
import BeKindPage from "./SAPromptPages/BeKindPage";
import ConnectPage from "./SAPromptPages/ConnectPage";
import ConsiderPage from "./SAPromptPages/ConsiderPage";
import ConsumePage from "./SAPromptPages/ConsumePage";
import LearnPage from "./SAPromptPages/LearnPage";
import PlantPage from "./SAPromptPages/PlantPage";
import WalkPage from "./SAPromptPages/WalkPage";
import ProfilePage from "./Profile/ProfilePage";
import ShowPage from "./Show/ShowPage";

// // SERVICES
// import userService from "../services/userService";

//App Routes
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/simpleacts" component={SimpleActsPage} />
          <Route path="/monologue" component={MonologuePage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/bekind" component={BeKindPage} />
          <Route path="/connect" component={ConnectPage} />
          <Route path="/consider" component={ConsiderPage} />
          <Route path="/consume" component={ConsumePage} />
          <Route path="/learn" component={LearnPage} />
          <Route path="/plant" component={PlantPage} />
          <Route path="/walk" component={WalkPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/show" component={ShowPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
