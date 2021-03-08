import React from "react";
import { Link } from "react-router-dom";
import BeKind from "../../images/BeKind.jpg";
import Connect from "../../images/Connect.jpg";
import Consider from "../../images/Consider.jpg";
import Consume from "../../images/Consume.jpg";
import Learn1 from "../../images/Learn1.jpg";
import Plant from "../../images/Plant.jpg";
import TakeAWalk from "../../images/TakeAWalk.jpg";
import "./SimpleActPage.css";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import SideNav from "../../components/Nav/SideNav";

const SAPrompts = (props) => {
  return (
    //Reusable component
    <Link to={"/challenge/" + props.id}>
      <img className="image" src={props.img} alt={props.alt} />
      {props.children}
    </Link>
  );
};

const SimpleActsPage = (props) => {
  const videoSimple =
    "https://www.youtube.com/watch?v=qxB3-sw2HAQ&feature=emb_logo";

  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <Header Link={Item} Icon={itemIcon} />
      <SideNav />
      <div className="home-container-video3">
        <h2 className="subtitle1">Simple Acts</h2>
        <p className="challenge-text">
          With a few simple acts we can change how we interact with our
          environment, and how we interact with each other.
          {/* At the heart of Go
          Tell the Bees is the hope that by doing we can learn from each other,
          we can build confidence and skills and that we can experience through
          all of the senses. */}
          {/* We want this production to have a positive impact
          on communities. Learning in an active and imaginative way is critical
          to this. NTW TEAM have created and curated a hive of information,
          knowledge, activity and inspiration that people of all ages can use as
          a springboard for learning. Explore each Simple Act through
          activities, ideas and educational resources: */}
        </p>
        <div className="simple-acts-container-parent">
          <VideoPlayer url={videoSimple} height="150px" />
        </div>

        <span className="challenge-text">
          Complete a simple act to receive your reward
        </span>
        <section className="flex-container">
          <div className="child-container">
            <div>
              <SAPrompts
                img={BeKind}
                src={BeKind}
                alt="Kind"
                id="1"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                img={Connect}
                src={Connect}
                alt="Connecting"
                id="2"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                img={Consider}
                src={Consider}
                alt="Consider"
                id="3"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts
                img={Consume}
                src={Consume}
                alt="Consume"
                id="4"
              ></SAPrompts>
            </div>
          </div>
          <div className="child2-container">
            <div>
              <SAPrompts
                img={Learn1}
                src={Learn1}
                alt="Learn"
                id="5"
              ></SAPrompts>
            </div>
            <div>
              <SAPrompts img={Plant} src={Plant} alt="Plant" id="6"></SAPrompts>
            </div>
            <div>
              <SAPrompts
                img={TakeAWalk}
                src={TakeAWalk}
                alt="Talk a walk"
                id="7"
              ></SAPrompts>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SimpleActsPage;
