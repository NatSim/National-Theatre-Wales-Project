import React from "react";
import Consider from "../../images/Consider.jpg";
import "./SAPromptPages.css";
import ConsiderArticle from "../../Components/SAArticles/ConsiderArticle";
import SideNav from "../../Components/Nav/SideNav";
import Button from "react-bootstrap/esm/Button";

const ConsiderPage = () => {
  return (
    <>
      <SideNav />
      <div className="consider-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={Consider} alt="Consider the stars" />
          </div>
          <ConsiderArticle />
        </article>
      </div>
      <Button>
        <input
          type="checkbox"
          id="consider"
          name="consider"
          value="consider"
        ></input>
        <label for="consider"> I have completed this Act</label>
      </Button>
    </>
  );
};

export default ConsiderPage;
