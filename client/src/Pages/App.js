import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./../i18next/i18n";
import "./App.css";
import LandingPage from "./Landing/LandingPage";
import HomePage from "./Home/HomePage";
import SimpleActsPage from "./Act/SimpleActsPage";
import ConnectPage from "./Connect/ConnectPage";
import MusicPage from "./Listen/MusicPage";
import TermsPage from "./Terms/TermsPage";
import AccessPage from "./Access/AccessPage";
import ContactUsPage from "./ContactUs/ContactUsPage";
import ChallengePage from "../components/PageContent/Challenges/ChallengeLogic";
import ShowPage from "./Show/ShowPage";
import MapPage from "./Map/MapPage";
import Footer from "../components/PageContent/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AboutPageLogic from "../Pages/About/AboutPageLogic";
import StoriesLogic from "./Connect/StoriesLogic";
import Header from "../components/Header/Header";
import ExplorePage from "./Explore/ExplorePage";

// import userService from "../services/userService";

//App Routes
function App(props) {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/about/:id" component={AboutPageLogic} />
          <Route path="/simpleacts" component={SimpleActsPage} />
          <Route path="/connect" component={ConnectPage} />
          <Route path="/stories/:id" component={StoriesLogic} />
          <Route path="/music" component={MusicPage} />
          <Route path="/challenge/:id" component={ChallengePage} />
          <Route path="/show" component={ShowPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/accessibility" component={AccessPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
