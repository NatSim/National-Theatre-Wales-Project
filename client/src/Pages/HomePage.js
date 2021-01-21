import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../images/whole-beeimage.png";
import SimpleActsPage from "./SimpleActsPage";
import MeditationPage from "./MonologuePage";
import MusicPage from "./MusicPage";
import Terms from "./TermsPage";
import ContactUsPage from "./ContactUsPage";
import About from "./AboutPage";
import Features from "../Components/PageContent/Features";
import Meditate from "../images/meditate.jpg";
import Carys from "../images/Carys.jpg";
import Tide from "../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "./../Components/Header/Header";
import * as ImIcons from "react-icons/im";

/**Homepage with Nav buttons as routes to other pages
 * */

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
    <>
      <Header />

      <div className="homepage">
        <div className="background-outer"></div>
        <main>
          <nav className="nav-container">
            <h2 className="subtitle">Discover</h2>
            <ul className="middle-nav-list">
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
                <NavButton link={"/meditation"} buttonColor={"meditate-button"}>
                  Meditation
                </NavButton>
              </li>
              <li>
                <NavButton link={"/music"} buttonColor={"music-button"}>
                  Music
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
      </Container>
      <footer className="home-footer">
        <p>
          2021 Go Tell The Bees Copyright © National Theatre Wales. Website
          developed by Natasha Simone. Registered Company No. 6693227 Charity
          Registration No. 1127952
        </p>
        <ul className="footer-ul-control">
          <Link to={"/"}>
            <ImIcons.ImFacebook2 />
          </Link>
          <li>
            <Link link={"/terms"} buttonColor={"term-button"}>
              Terms{`&`}Conditions
            </Link>
          </li>
          <li>
            <Link link={"/privacy"} buttonColor={"term-button"}>
              Privacy
            </Link>
          </li>
        </ul>
      </footer>

      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/simpleacts" component={SimpleActsPage} />
        <Route path="/meditation" component={MeditationPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>
    </>
  );
}

export default HomePage;
