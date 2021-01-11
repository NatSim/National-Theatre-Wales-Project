import React from "react";
import Learn1 from "../../images/Learn1.jpg";
import "./SAPromptPages.css";
import LearnArticle from "../../Components/SAArticles/LearnArticle";
import SideNav from "../../Components/Nav/SideNav";

const LearnPage = () => {
  return (
    <>
      <SideNav />
      <div className="learn-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img src={Learn1} alt="Learn one new thing" />
          </div>
          <LearnArticle />
        </article>
      </div>
    </>
  );
};

export default LearnPage;
