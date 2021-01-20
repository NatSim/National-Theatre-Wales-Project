import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../images/whole-beeimage.png";
import SimpleActsPage from "./SimpleActsPage";
import MeditationPage from "./MeditationPage";
import MusicPage from "./MusicPage";
import Terms from "./TermsPage";
import ContactUsPage from "./ContactUsPage";
import About from "./AboutPage";
import * as CgIcons from "react-icons/cg";
import Features from "../Components/PageContent/Features";
import Meditate from "../images/meditate.jpg";
import Carys from "../images/Carys.jpg";
import Walk from "../images/TakeAWalk.jpg";
import Tide from "../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import SideNav from "../Components/Nav/SideNav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

/**Homepage with Nav buttons as routes to other pages
 * */
//set state for username
let username = "Natasha";
const Greeting = (props) => {
  return <h1 className="welcome">Welcome back, {props.name}</h1>;
};

const NavButton = (props) => {
  return (
    //Reusable component
    <Link to={props.link}>
      <Button id={props.buttonColor} className="default-button">
        {props.children}
      </Button>
    </Link>
  );
};

function HomePage() {
  return (
    <div className="homepage">
      <div className="header">
        <div>
          <SideNav />
        </div>
        <CgIcons.CgProfile className="profile-svg" />
      </div>
      <div className="h-container-video">
        <span>
          <Greeting name={username} />
        </span>
      </div>
      <h2 className="subtitle">Featured</h2>
      <Container className="card-control">
        <Row>
          <Col sm>
            <Features image={Tide} />
          </Col>
          <Col sm>
            <Features image={Meditate} />
          </Col>
          <Col sm>
            <Features image={Carys} />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Features image={Walk} />
          </Col>
          <Col sm>
            <Features image={Carys} />
          </Col>
          <Col sm>
            <Features image={Carys} />
          </Col>
        </Row>
      </Container>

      <div className="background-outer">
        <div>
          <main>
            <nav className="nav-container">
              <h2 className="subtitle">Discover</h2>
              <ul>
                <li>
                  <Link to="/about">
                    <img
                      id="about-button"
                      className="default-button"
                      src={BeeStamp}
                      alt="whole bee "
                    />
                  </Link>
                </li>
                <li>
                  <NavButton link={"/simpleacts"} buttonColor={"simple-button"}>
                    Simple Acts
                  </NavButton>
                </li>
                <li>
                  <NavButton
                    link={"/meditation"}
                    buttonColor={"meditate-button"}
                  >
                    Meditation
                  </NavButton>
                </li>
                <li>
                  <NavButton link={"/music"} buttonColor={"music-button"}>
                    Music
                  </NavButton>
                </li>
                <li>
                  <NavButton link={"/terms"} buttonColor={"term-button"}>
                    Terms{`&`}Conditions
                  </NavButton>
                </li>
                <li>
                  <NavButton link={"/contact"} buttonColor={"contact-button"}>
                    Contact Us
                  </NavButton>
                </li>
              </ul>
            </nav>
          </main>
        </div>
        <footer>
          <p>
            2021 Go Tell The Bees Copyright © National Theatre Wales. Website
            developed by Natasha Simone. Registered Company No. 6693227 Charity
            Registration No. 1127952
          </p>{" "}
        </footer>
      </div>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/simpleacts" component={SimpleActsPage} />
        <Route path="/meditation" component={MeditationPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>
    </div>
  );
}

export default HomePage;
