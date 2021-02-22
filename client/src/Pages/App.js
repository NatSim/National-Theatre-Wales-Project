import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Welcome/WelcomePage";
import LandingPage from "./Landing/LandingPage";
import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import SimpleActsPage from "./Act/SimpleActsPage";
import ConnectPage from "./Connect/ConnectPage";
import MusicPage from "./Listen/MusicPage";
import TermsPage from "./Terms/TermsPage";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ChallengePage from "../components/PageContent/Challenges/ChallengePage";
import ProfilePage from "./Profile/ProfilePage";
import ShowPage from "./Show/ShowPage";
import AboutTeamPage from "./About/AboutTeamPage";
import RewardsPage from "./Rewards/RewardsPage";
import MapPage from "./Map/MapPage";
import Footer from "../components/PageContent/Footer/Footer";

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
          <Route path="/connect" component={ConnectPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/challenge/:id" component={ChallengePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/show" component={ShowPage} />
          <Route path="/team" component={AboutTeamPage} />
          <Route path="/reward" component={RewardsPage} />
          <Route path="/map" component={MapPage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
