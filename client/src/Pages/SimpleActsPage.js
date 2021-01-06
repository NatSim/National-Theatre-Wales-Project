import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SimpleActVideo from "../Components/SimpleActVideo";
import BeKind from "../images/BeKind.jpg";
import Connect from "../images/Connect.jpg";
import Consider from "../images/Consider.jpg";
import Consume from "../images/Consume.jpg";
import Learn1 from "../images/Learn1.jpg";
import Plant from "../images/Plant.jpg";
import TakeAWalk from "../images/TakeAWalk.jpg";
import "../Pages/SimpleActPage.css";
import SideNav from "../Components/Nav/SideNav";

const SAPrompts = (props) => {
  return (
    //Reusable component
    <Link to={props.link}>
      <img src={props.img} alt={props.alt} />
      {props.children}
    </Link>
  );
};

const SimpleActsPage = () => {
  return (
    <>
      <SideNav />
      <div className="simplepage-container">
        <div className="home-button-container"></div>
        <h1 className="white-h1">Simple Acts</h1>
        <div className="simple-acts">
          <SimpleActVideo videoId={"qxB3-sw2HAQ"} />
        </div>
        <section className="flex-container">
          <div className="child-container">
            <div>
              <SAPrompts
                link={"/bekind"}
                img={BeKind}
                src={BeKind}
                alt="Kind"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                link={"/connect"}
                img={Connect}
                src={Connect}
                alt="Connecting"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                link={"/consider"}
                img={Consider}
                src={Consider}
                alt="Consider"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                link={"/consume"}
                img={Consume}
                src={Consume}
                alt="Consume"
              ></SAPrompts>
            </div>
          </div>
          <div className="child2-container">
            <div>
              <SAPrompts
                link={"/learn"}
                img={Learn1}
                src={Learn1}
                alt="Learn"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                link={"/plant"}
                img={Plant}
                src={Plant}
                alt="Plant"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                link={"/walk"}
                img={TakeAWalk}
                src={TakeAWalk}
                alt="Talk a walk"
              ></SAPrompts>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SimpleActsPage;
