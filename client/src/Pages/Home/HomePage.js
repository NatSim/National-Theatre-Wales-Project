import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Route, Switch } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../../images/whole-beeimage.png";
import SimpleActsPage from "../Act/SimpleActsPage";
import MonologuePage from "../Watch/MonologuePage";
import MusicPage from "../Listen/MusicPage";
import Terms from "../Terms/TermsPage";
import ContactUsPage from "../ContactUs/ContactUsPage";
import About from "../About/AboutPage";
import Features from "../../Components/PageContent/Features/Features";
import NTWLogo from "../../images/logo.svg";
import Party from "../../images/NTWHaverHub.jpg";
import Tide from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "../../Components/Header/Header";
import * as ImIcons from "react-icons/im";
import SideNav from "../../Components/Nav/SideNav";
import * as GrIcons from "react-icons/gr";

/**Homepage with Nav buttons as routes to other pages
 * */

const NavButton = (props) => {
  return (
    //Reusable Nav button component
    <Link to={props.link}>
      <Button id={props.buttonColor} className="default-button">
        {props.children}
      </Button>
    </Link>
  );
};

//Card Title Text
const titleTeam = "Join TEAM";
const titleNTW = "National Theatre Wales";
const contactUs = "Contact Us";

//Card Button Text
const clickHere = "Click Here";

//Card Button Link
const ntwLink = "https://www.nationaltheatrewales.org/";

//Footer href Links
const ntwFacebookPage = "https://www.facebook.com/nationaltheatrewales/";

function HomePage(props) {
  //Header Login/Reg icon/path
  const Item = "/login";
  const itemIcon = <GrIcons.GrLogin className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
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
                <NavButton link={"/monologues"} buttonColor={"green-button"}>
                  Watch
                </NavButton>
              </li>
              <li>
                <NavButton link={"/music"} buttonColor={"pink-button"}>
                  Listen
                </NavButton>
              </li>

              <li>
                <NavButton link={"/simpleacts"} buttonColor={"simple-button"}>
                  Act
                </NavButton>
              </li>
              <li>
                <NavButton link={"/map"} buttonColor={"blue-button"}>
                  Map
                </NavButton>
              </li>
            </ul>
          </nav>
        </main>
      </div>

      <h2 className="subtitle">Explore</h2>
      <Container className="card-control">
        <Row>
          <Col sm>
            <Features
              image={Tide}
              title={titleTeam}
              button={clickHere}
              link={"/team"}
            />
          </Col>
          <Col sm>
            <Features
              image={NTWLogo}
              title={titleNTW}
              button={clickHere}
              link={ntwLink}
            />
          </Col>
          <Col sm>
            <Features
              image={Party}
              title={contactUs}
              button={clickHere}
              link={"/contact"}
            />
          </Col>
        </Row>
      </Container>
      <footer className="home-footer">
        <ul className="footer-ul-control">
          <li>
            <a href={ntwFacebookPage} target="_blank" rel="noreferrer">
              <ImIcons.ImFacebook2 />
            </a>
          </li>
          <li>
            <Link className="Link-control" to={"/contact"}>
              Contact Us
            </Link>
          </li>

          <li>
            <Link className="Link-control" to={"/terms"}>
              Terms{`&`}Conditions
            </Link>
          </li>
          <li>
            <Link className="Link-control" link={"/privacy"}>
              Privacy
            </Link>
          </li>
        </ul>
        <p>
          2021 Go Tell The Bees Copyright © National Theatre Wales. Website
          developed by Natasha Simone. Registered Company No. 6693227 Charity
          Registration No. 1127952
        </p>
      </footer>

      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/simpleacts" component={SimpleActsPage} />
        <Route path="/monologue" component={MonologuePage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>
    </>
  );
}

export default HomePage;
