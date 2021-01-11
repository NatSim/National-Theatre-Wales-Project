import React from "react";
import Consider from "../../images/Consider.jpg";
import "./SAPromptPages.css";
import ConsiderArticle from "../../Components/SAArticles/ConsiderArticle";
import SideNav from "../../Components/Nav/SideNav";

const ConsiderPage = () => {
  return (
    <>
      <SideNav />
      <div className="consider-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img src={Consider} alt="Consider the stars" />
          </div>
          <ConsiderArticle />
        </article>
      </div>
    </>
  );
};

export default ConsiderPage;
