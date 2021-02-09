import React from "react";
import simpleText, { direction } from "../../../Models/simpleText";
import ChallengeItem from "../Challenges/ChallengeItem";
import "./ChallengePage.css";
import SideNav from "../../Nav/SideNav";
import Header from "../../Header/Header";
import * as CgIcons from "react-icons/cg";
//import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//Header Profile icon/path
const profileLink = "/profile";
const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

//Display 7 pages in one component? State
//simpleText content
const ChallengePage = (props) => {
  //*****function steps:

  //1.send clicked item(image) to challenges collection in(database).
  //1b.clicked item = simpleText array object i.e simpleText[0].image.

  //2.function if (button is clicked) arrayItemIndex.push to user collection array.
  //2a. if(onclick === simpleText id [0]) {
  // arrayItemIndex.push to user challenges collection db
  //} ****
  // const sendClickedItemToDB = () => {
  //   const arrayItem = simpleText[0].image;
  // };

  //challenge choice has 0,1,2,3,4,5,6 challenges(7 total) should make a challenge choice for each SA challenge to display
  // const [id, setId] = useState(simpleText[0].id);

  //onclick handler takes in image icon
  const onClickHandler = (arrayElement) => {};
  console.log(props.match.params.id);
  const id = props.match.params.id;

  return (
    // return 7 challenge content in component below, from array?
    <>
      <div>
        <SideNav />
        <Header Link={profileLink} Icon={profileIcon} />
        <ChallengeItem
          challengeChoice={id}
          onClickHandler={onClickHandler}
          direction={direction}
          act={simpleText[id - 1].act}
          image={simpleText[id - 1].image}
          text1={simpleText[id - 1].text1}
          text2Subheading={simpleText[id - 1].text2Subheading}
          text2={simpleText[id - 1].text2}
        />
      </div>
    </>
  );
};

export default ChallengePage;
