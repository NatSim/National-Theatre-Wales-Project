import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../images/whole-beeimage.png";

/**Homepage with Nav buttons as routes to other pages
 * */

const Greeting = (props) => {
  return <h1 className="welcome">Welcome back, {props.name}</h1>;
};

function HomePage() {
  const [color, changeColor] = useState("#FF9F00");
  return (
    <div style={{ background: color }} id="homepage">
      <header>
        <Greeting name="Natasha" />
      </header>
      <main>
        <nav>
          <ul>
            <li>
              <a href="/about" onClick={() => changeColor("#FF9F00")}>
                <img
                  id="about-button"
                  className="default-button"
                  src={BeeStamp}
                  alt="whole bee "
                />
              </a>
            </li>
            <li>
              <Button id="simple-button" className="default-button">
                <Link to="/simpleacts">Simple Acts</Link>
              </Button>
            </li>
            <li>
              <button id="meditate-button" className="default-button">
                <Link to="/meditation">Meditation</Link>
              </button>
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
    </div>
  );
}

export default HomePage;
