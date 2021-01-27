import React from "react";
import Consume from "../../images/Consume.jpg";
import "./SAPromptPages.css";
import ConsumeArticle from "../../Components/SAArticles/ConsumeArticle";
import SideNav from "../../Components/Nav/SideNav";
import Button from "react-bootstrap/Button";

const ConsumePage = () => {
  return (
    <>
      <SideNav />
      <div className="consume-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={Consume} alt="Consume less" />
          </div>
          <ConsumeArticle />
        </article>
      </div>
      <Button>
        <input
          type="checkbox"
          id="consume"
          name="consume"
          value="consume"
        ></input>
        <label for="consume"> I have completed this Act</label>
      </Button>
    </>
  );
};

export default ConsumePage;
