import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./Landing/LandingPage";
import HomePage from "./Home/HomePage";
import SimpleActsPage from "./Act/SimpleActsPage";
import ConnectPage from "./Connect/ConnectPage";
import MusicPage from "./Listen/MusicPage";
import TermsPage from "./Terms/TermsPage";
import PrivacyPage from "./Privacy/PrivacyPage";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ChallengePage from "../components/PageContent/Challenges/ChallengeLogic";
import ShowPage from "./Show/ShowPage";
import MapPage from "./Map/MapPage";
import Footer from "../components/PageContent/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AboutPageLogic from "../components/PageContent/AboutInfo/AboutPageLogic";
import StoriesPageA from "./Connect/StoriesPageA";
import StoriesPageC from "./Connect/StoriesPageC";

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
          <Route path="/home" component={HomePage} />
          <Route path="/about/:id" component={AboutPageLogic} />
          <Route path="/simpleacts" component={SimpleActsPage} />
          <Route path="/connect" component={ConnectPage} />
          <Route path="/storiesA" component={StoriesPageA} />
          <Route path="/storiesA" component={StoriesPageC} />
          <Route path="/music" component={MusicPage} />
          <Route path="/challenge/:id" component={ChallengePage} />
          <Route path="/show" component={ShowPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
