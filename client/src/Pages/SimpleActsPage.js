import React from "react";
import SimpleActVideo from "../Components/SimpleActVideo";
import BeKind from "../images/BeKind.jpg";
import Connect from "../images/Connect.jpg";
import Consider from "../images/Consider.jpg";
import Consume from "../images/Consume.jpg";
import Learn1 from "../images/Learn1.jpg";
import Plant from "../images/Plant.jpg";
import TakeAWalk from "../images/TakeAWalk.jpg";
import "../Pages/SimpleActPage.css";

const SimpleActsPage = () => {
  function handleClick(e) {
    e.preventDefault();

    console.log("The link was clicked.");
  }

  return (
    <div>
      <div className="home-button-container">
        <button className="button" path="/home" onClick={handleClick}>
          Home
        </button>
      </div>
      <h1 className="white-h1">Simple Acts</h1>
      <div className="simple-acts">
        <SimpleActVideo videoId={"qxB3-sw2HAQ"} />
      </div>
      <section className="flex-container">
        <div className="child-container">
          <div>
            <a href="/bekind">
              <img src={BeKind} alt="Kind" />
            </a>
          </div>
          <div>
            <a href="/connect">
              <img src={Connect} alt="Connecting" />
            </a>
          </div>
          <div>
            <a href="/consider">
              <img src={Consider} alt="Consider" />
            </a>
          </div>
          <div>
            <a href="/consume">
              <img src={Consume} alt="Consume" />
            </a>{" "}
          </div>
        </div>
        <div className="child2-container">
          <div>
            <a href="/learn">
              <img src={Learn1} alt="Learn" />
            </a>
          </div>
          <div>
            <a href="/plant">
              <img src={Plant} alt="Plant" />
            </a>
          </div>
          <div>
            <a href="/walk">
              <img src={TakeAWalk} alt="Talk a walk" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleActsPage;
