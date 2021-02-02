import React from "react";
import simpleText, { direction } from "../../../Models/simpleActs";
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
  //challenge choice has 0,1,2,3,4,5,6 challenges(7 total) should make a challenge choice for each SA challenge to display

  // const [id, setId] = useState(simpleText[0].id);

  //onclick handler takes in image icon link
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
          image={simpleText[id - 1].image}
          text={simpleText[id - 1].text}
        />
      </div>
    </>
  );
};

export default ChallengePage;
