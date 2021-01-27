import React from "react";
import Connect from "../../images/Connect.jpg";
import "./SAPromptPages.css";
import ConnectArticle from "../../Components/SAArticles/ConnectArticle";
import SideNav from "../../Components/Nav/SideNav";
import Button from "react-bootstrap/Button";

const ConnectPage = () => {
  return (
    <>
      <SideNav />
      <div className="connect-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={Connect} alt="People connecting" />
          </div>
          <ConnectArticle />
        </article>
      </div>
      <Button>
        <input
          type="checkbox"
          id="connect"
          name="connect"
          value="connect"
        ></input>
        <label for="connect"> I have completed this Act</label>
      </Button>
    </>
  );
};

export default ConnectPage;
