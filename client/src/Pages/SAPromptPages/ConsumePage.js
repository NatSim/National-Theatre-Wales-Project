import React from "react";
import Consume from "../../images/Consume.jpg";
import "./SAPromptPages.css";
import ConsumeArticle from "../../Components/SAArticles/ConsumeArticle";
import SideNav from "../../Components/Nav/SideNav";

const ConsumePage = () => {
  return (
    <>
      <SideNav />
      <div className="consume-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img src={Consume} alt="Consume less" />
          </div>
          <ConsumeArticle />
        </article>
      </div>
    </>
  );
};

export default ConsumePage;
