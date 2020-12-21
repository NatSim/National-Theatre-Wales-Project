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
      </Switch>
    </div>
  );
}

export default App;
