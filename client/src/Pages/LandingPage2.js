import React from "react";
import "./LandingPage2.css";
import SmallButton from "../Components/NextButton";

/**
 *Functional component-Welcome message
 *
 *Appears only once for each first time user visit
 */
const Welcome = () => {
  return (
    <div>
      <h1>
        {" "}
        Welcome to
        <strong className="go_tell_the_bees"> Go Tell The Bees</strong>
      </h1>

      <p>
        Go Tell the Bees, asks each one of us to perform seven
        <em> Simple Acts</em> in our daily lives.
      </p>
      <SmallButton />
    </div>
  );
};

export default Welcome;
