import React from "react";
import Button from "react-bootstrap/Button";
import { Link, Route } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../images/whole-beeimage.png";
import SimpleActsPage from "./SimpleActsPage";
import MeditationPage from "./MeditationPage";
import MusicPage from "./MusicPage";
import Terms from "./TermsPage";
import ContactUsPage from "./ContactUsPage";
import About from "./AboutPage";

/**Homepage with Nav buttons as routes to other pages
 * */

const Greeting = (props) => {
  return <h1 className="welcome">Welcome back, {props.name}</h1>;
};

const NavButton = (props) => {
  return (
    //Reusable button component
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
      <header>
        <Greeting name="Natasha" />
      </header>
      <main>
        <nav>
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
              <NavButton link={"/meditation"} buttonColor={"meditate-button"}>
                Meditation
              </NavButton>
            </li>
            <li>
              <button id="music-button" className="default-button">
                <Link to="/music">Music</Link>
              </button>
            </li>
            <li>
              <button id="term-button" className="default-button">
                <Link to="/terms">Terms {`&`} Conditions</Link>
              </button>
            </li>
            <li>
              <button id="contact-button" className="default-button">
                <Link to="/contact">Contact Us</Link>
              </button>
            </li>
          </ul>
        </nav>
      </main>
      <Route path="/about" exact component={About} />
      <Route path="/simpleacts" component={SimpleActsPage} />
      <Route path="/meditation" component={MeditationPage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={ContactUsPage} />
    </div>
  );
}

export default HomePage;
