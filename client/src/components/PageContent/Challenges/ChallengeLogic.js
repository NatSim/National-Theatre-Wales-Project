import React from "react";
// import axios from "axios";
import simpleText, {
  direction,
  text2Subheading,
  discoverHeading,
  quoteHeading,
} from "../../../Models/simpleText";
import ChallengeItem from "./ChallengeChoicePage";
import "./ChallengePage.css";
// import SideNav from "../../Nav/SideNav";
import Header from "../../Header/Header";
import * as CgIcons from "react-icons/cg";
import { useHistory } from "react-router-dom";

//Header Profile icon/path
const profileLink = "/profile";
const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

//Display 7 pages in one component
//simpleText content
const ChallengeLogic = (props) => {
  //*****function steps:

  //1.send clicked item(id) to user collection, challenge array in(database).
  //add to button onClick handler
  // const sendClickedItemToDB = () => {
  //   const id = props.match.params.id;
  //   const payload = {
  //     email: "natsimbig@gmail.com",
  //     id: id,
  //   };
  //   //sending data(people)
  //   axios
  //     .patch("http://localhost:5000/api/users/challenge/", payload)
  //     .then(function (response) {
  //       if (response.status === 202) {
  //         console.log("Succesfull");
  //         localStorage.setItem("challenge", "Tom");
  //         console.log(response);
  //       } else {
  //         console.log("Error!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const history = useHistory();
  // //Button clicked redirect to profile page
  // const navigateToProfile = () => {
  //   history.push("/profile");
  // };

  //Send clicked item to local storage-display image
  const sendItemsToLocal = () => {
    //create an array and store the props in the array
    console.log(props);

    // let challengeChoice = ChallengeItem.challengeChoice;

    return localStorage.setItem("challenge", JSON.stringify(props));
  };

  //onclick handler takes in image icon
  const onClickHandler = (arrayElement) => {
    console.log("Completed button was clicked!");

    // sendItemsToLocal();

    // sendClickedItemToDB();

    // navigateToProfile();
  };
  const id = props.match.params.id;
  console.log(ChallengeItem);

  return (
    // return 7 challenge content in component below, from array id -1
    <>
      <div>
        <Header Link={profileLink} Icon={profileIcon} />
        <ChallengeItem
          challengeChoice={id}
          onClickHandler={onClickHandler}
          sendItemsToLocal={sendItemsToLocal}
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
          urlResources3={simpleText[id - 1].urlResources3}
          quoteHeading={quoteHeading}
          quote={simpleText[id - 1].quote}
          urlCharity={simpleText[id - 1].urlCharity}
        />
      </div>
    </>
  );
};

export default ChallengeLogic;
