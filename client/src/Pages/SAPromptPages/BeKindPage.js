import React from "react";
import BeKind from "../../images/BeKind.jpg";
import "./SAPromptPages.css";
import BeKindArticle from "../../Components/SAArticles/BeKindArticle";
import SideNav from "../../Components/Nav/SideNav";

const BeKindPage = () => {
  return (
    <>
      <SideNav />
      <div className="kind-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={BeKind} alt="Be Kind" />
          </div>
          <BeKindArticle />
        </article>
      </div>
    </>
  );
};

export default BeKindPage;
