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
        <div>
          <img src={BeKind} alt="Kind" />
        </div>
        <div>
          <img src={Connect} alt="Connecting" />
        </div>
        <div>
          <img src={Consider} alt="Consider" />
        </div>
        <div>
          <img src={Consume} alt="Consume" />
        </div>
        <div>
          <img src={Learn1} alt="Learn" />
        </div>
        <div>
          <img src={Plant} alt="Plant" />
        </div>
        <div>
          <img src={TakeAWalk} alt="Talk a walk" />
        </div>
      </section>
    </div>
  );
};

export default SimpleActsPage;
