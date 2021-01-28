import React from "react";
import BeKind from "../../images/BeKind.jpg";
import "./SAPromptPages.css";
import BeKindArticle from "../../Components/SAArticles/BeKindArticle";
import SideNav from "../../Components/Nav/SideNav";
import Header from "../../Components/Header/Header";
import * as CgIcons from "react-icons/cg";
import CompleteChallengeButton from "../../Components/Buttons/CompleteChallengeButton";

const BeKindPage = () => {
  //Header Profile icon/path
  const profileLink = "/profile";
  const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

  //Display 7 pages in one component? State
  const exampleTry = [
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
  ];

  function ChallengeItems() {
    const [direction, setDirection] = useState(exampleTry[0].direction);
  }

  return (
    // return 7 challenge pages below, from array?
    <>
      <SideNav />
      <Header Link={profileLink} Icon={profileIcon} />
      <div className="challenge-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={BeKind} alt="Be Kind" />
          </div>
          <BeKindArticle />
        </article>
        <CompleteChallengeButton />
      </div>
    </>
  );
};

export default BeKindPage;
