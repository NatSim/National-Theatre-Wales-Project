import React from "react";
import TakeAWalk from "../../images/TakeAWalk.jpg";
import "./SAPromptPages.css";
import WalkArticle from "../../Components/SAArticles/WalkArticle";
import SideNav from "../../Components/Nav/SideNav";

const WalkPage = () => {
  return (
    <>
      <SideNav />
      <div className="walk-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div>
            <img src={TakeAWalk} alt="Talk a walk" />
          </div>
          <WalkArticle />
        </article>
      </div>
    </>
  );
};

export default WalkPage;
