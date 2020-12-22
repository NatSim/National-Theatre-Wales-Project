import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import WelcomePage from "./WelcomePage";
import LandingPage from "./LandingPage";
import AuthenticationPage from "./AuthenticationPage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SimpleActsPage from "./SimpleActsPage";
import MeditationPage from "./MeditationPage";
import MusicPage from "./MusicPage";
import TermsPage from "./TermsPage";
import ContactUsPage from "./ContactUsPage";
import BeKindPage from "./SAPromptPages/BeKindPage";
import ConnectPage from "./SAPromptPages/ConnectPage";
import ConsiderPage from "./SAPromptPages/ConsiderPage";
import ConsumePage from "./SAPromptPages/ConsumePage";
import LearnPage from "./SAPromptPages/LearnPage";
import PlantPage from "./SAPromptPages/PlantPage";
import WalkPage from "./SAPromptPages/WalkPage";

// // SERVICES
// import userService from "../services/userService";

/**
 * Landing Page Content
 * welcomeText Array = Each key:pair object is user Step/State change
 */

function App() {
  // const [color, changeColor] = useState("#a2d33b");
  // style={{ background: color }} id="body main"
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/authentication" component={AuthenticationPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/simpleacts" component={SimpleActsPage} />
        <Route path="/meditation" component={MeditationPage} />
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
      </Switch>
    </div>
  );
}

export default App;
