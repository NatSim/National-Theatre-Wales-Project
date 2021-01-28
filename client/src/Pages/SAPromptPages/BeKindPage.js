import React from "react";
import BeKind from "../../images/BeKind.jpg";
import "./SAPromptPages.css";
import BeKindArticle from "../../Components/SAArticles/BeKindArticle";
import SideNav from "../../Components/Nav/SideNav";
import Header from "../../Components/Header/Header";
import * as CgIcons from "react-icons/cg";
import Button from "react-bootstrap/Button";

const BeKindPage = () => {
  //Header Profile icon/path
  const profileLink9 = "/profile";
  const profileIcon9 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={profileLink9} Icon={profileIcon9} />
      <div className="kind-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={BeKind} alt="Be Kind" />
          </div>
          <BeKindArticle />
        </article>
        <Button type="subject" id="bekind" className="bekind">
          Completed
        </Button>
      </div>
    </>
  );
};

export default BeKindPage;
