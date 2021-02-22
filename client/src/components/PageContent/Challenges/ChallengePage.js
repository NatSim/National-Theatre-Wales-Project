import React from "react";
import axios from "axios";
import simpleText, {
  direction,
  text2Subheading,
  discoverHeading,
  quoteHeading,
} from "../../../Models/simpleText";
import ChallengeItem from "../Challenges/ChallengeItem";
import "./ChallengePage.css";
// import SideNav from "../../Nav/SideNav";
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

  //1.send clicked item(id) to user collection, challenge array in(database).

  const sendClickedItemToDB = () => {
    const id = props.match.params.id;
    const payload = {
      email: "natsimbig@gmail.com",
      id: id,
    };
    //sending data(people)
    axios
      .patch("http://localhost:5000/api/users/challenge/", payload)
      .then(function (response) {
        if (response.status === 202) {
          console.log("Succesfull");
        } else {
          console.log("Error!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //challenge choice has 0,1,2,3,4,5,6 challenges(7 total) should make a challenge choice for each SA challenge to display
  // const [id, setId] = useState(simpleText[0].id);

  //onclick handler takes in image icon
  const onClickHandler = (arrayElement) => {
    console.log("button was clicked!");

    sendClickedItemToDB();
  };
  const id = props.match.params.id;

  return (
    // return 7 challenge content in component below, from array?
    <>
      <div>
        <Header Link={profileLink} Icon={profileIcon} />
        <ChallengeItem
          challengeChoice={id}
          onClickHandler={onClickHandler}
          direction={direction}
          act={simpleText[id - 1].act}
          image={simpleText[id - 1].image}
          text1={simpleText[id - 1].text1}
          text2Subheading={text2Subheading}
          text2={simpleText[id - 1].text2}
          discoverHeading={discoverHeading}
          urlFilm={simpleText[id - 1].urlFilm}
          urlBook={simpleText[id - 1].urlBook}
          urlArtist={simpleText[id - 1].urlArtist}
          urlResources={simpleText[id - 1].urlResources}
          urlResources2={simpleText[id - 1].urlResources2}
          quoteHeading={quoteHeading}
          quote={simpleText[id - 1].quote}
        />
      </div>
    </>
  );
};

export default ChallengePage;
