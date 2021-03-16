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
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import SideNav from "../../components/Nav/SideNav";

export const challengeData = [
  { id: "1", img: BeKind, alt: "Kind" },
  { id: "2", img: Connect, alt: "Connecting" },
  { id: "3", img: Consider, alt: "Consider" },
  { id: "4", img: Consume, alt: "Consume" },
  { id: "5", img: Learn1, alt: "Learn1" },
  { id: "6", img: Plant, alt: "Plant" },
  { id: "7", img: TakeAWalk, alt: "Take a Walk" },
];

export const SAPrompts = (props) => {
  return (
    //Reusable component
    <Link to={"/challenge/" + props.id}>
      <img className="image" src={props.img} alt={props.alt} />
    </Link>
  );
};

const SimpleActsPage = (props) => {
  const videoSimple =
    "https://www.youtube.com/watch?v=qxB3-sw2HAQ&feature=emb_logo";

  return (
    <>
      <Header />
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

        <span className="challenge-text">Complete a simple act.</span>
        <section className="flex-container">
          <div className="child-container">
            <div>
              {challengeData.map((challenge) => (
                <SAPrompts
                  img={challenge.img}
                  alt={challenge.alt}
                  id={challenge.id}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SimpleActsPage;
