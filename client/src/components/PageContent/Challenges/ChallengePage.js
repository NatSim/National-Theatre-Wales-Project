import React, { useState } from "react";
import simpleActs from "../../../Models/simpleActs";
import "./ChallengePage.css";
import SideNav from "../../Nav/SideNav";
import Header from "../../Header/Header";
import * as CgIcons from "react-icons/cg";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//Header Profile icon/path
const profileLink = "/profile";
const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

//Display 7 pages in one component? State
//simpleActs content
const ChallengePage = (props) => {
  // const [state, setState] = useState({});

  const [direction, setDirection] = useState(simpleActs[0].direction);
  const [image, setImage] = useState(simpleActs[(0, 1, 2, 3, 4, 5)].image);
  const [text, setText] = useState(simpleActs[0].text);
  //challenge choice has 0,1,2,3,4,5,6 challenges(7 total) should make a challenge choice for each SA challenge to display
  const [challengeChoice, setChallengeChoice] = useState(0);
  // const [id, setId] = useState(simpleActs[0].id);

  //onclick handler takes in image icon link
  const onClickHandler = (arrayElement) => {
    setDirection(simpleActs[arrayElement].direction);
    setImage(simpleActs[arrayElement].image);
    setText(simpleActs[arrayElement].text);
    setChallengeChoice(arrayElement);
  };
  //whichChallengeIsClicked function
  //if else statement -

  const ChallengeItem = ({ direction, image, text, challengeChoice }) => {
    console.log(direction, image, text, challengeChoice);

    return (
      <div className="challenge-page">
        <h1 className="prompt-text"> Your Simple Act is to...</h1>
        <div className="image-container">
          <img
            className="image"
            src={props.image}
            alt={"simple act challenge"}
          />
          <p> {props.text}</p>
        </div>
        <CompleteChallengeButton />
      </div>
    );
  };
  console.log(ChallengeItem);
  return (
    // return 7 challenge content in component below, from array?
    <>
      <div>
        <SideNav />
        <Header Link={profileLink} Icon={profileIcon} />
        <ChallengeItem
          challengeChoice={challengeChoice}
          onClickHandler={onClickHandler}
          direction={direction}
          image={image}
          text={text}
        />
      </div>
    </>
  );
};

export default ChallengePage;
