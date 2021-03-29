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

const challengeData = [
  { id: "1", img: BeKind, alt: "Kind" },
  { id: "2", img: Connect, alt: "Connecting" },
  { id: "3", img: Consider, alt: "Consider" },
  { id: "4", img: Consume, alt: "Consume" },
  { id: "5", img: Learn1, alt: "Learn1" },
  { id: "6", img: Plant, alt: "Plant" },
  { id: "7", img: TakeAWalk, alt: "Take a Walk" },
];

const SAPrompts = (props) => {
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

        {/* Video Container-START HERE */}
        <div className="simple-acts-container-parent">
          <VideoPlayer
            className="simple-acts-video"
            url={videoSimple}
            height="150px"
            width="50%"
            style={{
              margin: "auto",
              padding: "10px",
              border: "3px solid green",
              width: "50%",
            }}
          />
        </div>
        {/* Video Container-END HERE */}

        {/*SIMPLE ACTS INTRO TEXT-START HERE */}
        <div className="text-video-control">
          <article className="challenge-text">
            With a few simple acts we can change how we interact with our
            environment, and how we interact with each other.
            <br />
            At the heart of Go Tell the Bees is the hope that by doing we can
            learn from each other, we can build confidence and skills and that
            we can experience through all of the senses.
          </article>
          <article className="challenge-text">
            We want this production to have a positive impact on communities.
            Learning in an active and imaginative way is critical to this.
            <br />
            NTW TEAM have created and curated a hive of information, knowledge,
            activity and inspiration that people of all ages can use as a
            springboard for learning. Explore each Simple Act through
            activities, ideas and educational resources:
          </article>
        </div>
        {/*SIMPLE ACTS INTRO TEXT-END HERE */}

        {/* 7 SIMPLE ACTS ICONS Container-START HERE */}
        <span className="challenge-text2">
          <b>Explore the 7 Simple Acts below.</b>
        </span>
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
        {/* 7 SIMPLE ACTS ICONS Container-END HERE */}
      </div>
    </>
  );
};

export default SimpleActsPage;
