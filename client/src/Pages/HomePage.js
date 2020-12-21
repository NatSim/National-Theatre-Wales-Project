import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

/**Homepage with Nav buttons as routes to other pages
 * */

const Greeting = (props) => {
  return <h1 className="welcome">Welcome back, {props.name}</h1>;
};

function HomePage() {
  // import bee image
  return (
    <div>
      <h1>
        <Greeting name="Natasha" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/simpleacts">Simple Acts</Link>
          </li>
          <li>
            <Link to="/meditation">Meditation</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/terms">Terms {`&`} Conditions</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
