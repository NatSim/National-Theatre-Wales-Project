import React from "react";
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
          <li>About</li>
          <li>Simple Acts</li>
          <li>Meditation</li>
          <li>Music</li>
          <li>Terms {`&`} Conditions</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
