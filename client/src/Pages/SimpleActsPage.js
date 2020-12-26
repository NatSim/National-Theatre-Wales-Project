import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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
import BeKindPage from "./SAPromptPages/BeKindPage";
import ConnectPage from "./SAPromptPages/ConnectPage";
import ConsiderPage from "./SAPromptPages/ConsiderPage";
import ConsumePage from "./SAPromptPages/ConsumePage";
import LearnPage from "./SAPromptPages/LearnPage";
import PlantPage from "./SAPromptPages/PlantPage";
import WalkPage from "./SAPromptPages/WalkPage";
import HomePage from "./HomePage";

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
    <div>
      <div className="home-button-container">
        <Link to="/home">
          <Button className="button">Home</Button>
        </Link>
      </div>
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
      <Switch>
        <Route path="/bekind" exact component={BeKindPage} />
        <Route path="/connect" component={ConnectPage} />
        <Route path="/consider" component={ConsiderPage} />
        <Route path="/consume" component={ConsumePage} />
        <Route path="/learn" component={LearnPage} />
        <Route path="/plant" component={PlantPage} />
        <Route path="/walk" component={WalkPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
};

export default SimpleActsPage;
