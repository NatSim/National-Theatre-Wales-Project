import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Welcome/WelcomePage";
import LandingPage from "./Landing/LandingPage";
// import LoginPage from "../components/Auth/LoginPage";
// import RegisterPage from "../components/Auth/RegisterPage";
import UserAuthPage from "../components/Auth/UserAuthPage";
import HomePage from "./Home/HomePage";
import SimpleActsPage from "./Act/SimpleActsPage";
import ConnectPage from "./Connect/ConnectPage";
import MusicPage from "./Listen/MusicPage";
import TermsPage from "./Terms/TermsPage";
import PrivacyPage from "./Privacy/PrivacyPage";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ChallengePage from "../components/PageContent/Challenges/ChallengeLogic";
import ProfilePage from "./Profile/ProfilePage/ProfilePage";
import ShowPage from "./Show/ShowPage";
import RewardsPage from "./Rewards/RewardsPage";
import MapPage from "./Map/MapPage";
import Footer from "../components/PageContent/Footer/Footer";
import UserAccountPage from "./Profile/UserAccount/UserAccountPage";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AboutPageLogic from "../components/PageContent/AboutInfo/AboutPageLogic";

// // SERVICES
// import userService from "../services/userService";

//App Routes
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/auth" component={UserAuthPage} />
          {/* <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} /> */}
          <Route path="/home" component={HomePage} />
          <Route path="/about/:id" component={AboutPageLogic} />
          <Route path="/simpleacts" component={SimpleActsPage} />
          <Route path="/connect" component={ConnectPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/challenge/:id" component={ChallengePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/account" component={UserAccountPage} />
          <Route path="/show" component={ShowPage} />
          <Route path="/reward" component={RewardsPage} />
          <Route path="/map" component={MapPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
