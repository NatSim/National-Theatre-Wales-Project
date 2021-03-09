import React, { useState } from "react";
import { useHistory } from "react-router";
import * as CgIcons from "react-icons/cg";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";
import Header from "../../../components/Header/Header";
import SideNav from "../../Nav/SideNav";

//**This page component displays the unique challenge item content 7 total **/

//Header Profile icon/path
const profileLink = "/profile";
const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

const ChallengeItem = (props) => {
  //Displays clicked well done message
  const [welldone, setWelldone] = useState([]);

  //DisplayWelldone onclick handler
  const onClickHandler = () => {
    // alert("this is working");
    setWelldone("Well done you have completed a Simple Act!");

    console.log("completed button was clicked!");
    console.log("Well done message displayed");

    sendItemsToLocal();

    // navigateToProfile();
  };

  const sendItemsToLocal = () => {
    //this function sends the selected challenge (page as an object) to the local storage
    console.log(props);

    return localStorage.setItem("challenge", JSON.stringify(props), [props]);
  };

  const history = useHistory();
  //On Button click redirects user to profile page
  const navigateToProfile = () => {
    history.push("/profile");
  };

  /**1.send clicked item(id) to user collection, challenge array in(database).
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
 // sendClickedItemToDB();


  // };

/*Improve below code by mapping through JSON data and displaying page attributes and tags instead*/

  return (
    <>
      <Header Link={profileLink} Icon={profileIcon} />
      <SideNav />
      <div className="challenge-page">
        <section className="prompt-act-container">
          <div className="prompt-text-container">
            <h1 className="prompt-text">{props.direction}</h1>
          </div>
          <div className="act-control-container">
            <h2 className="act-control-child">{props.act}</h2>
          </div>
          <div className="image-container">
            <img
              className="image"
              src={props.image}
              alt={"simple act challenge"}
            />
          </div>

          <div className="intro-text">
            <p className="text-control2"> {props.text1}</p>
          </div>
        </section>
      </div>
      <div className="challenge-page-background2">
        <section className="article-image-container">
          <div className="flex-parent">
            <div className="flex-child">
              <h3 className="text2-subheading">{props.text2Subheading}</h3>
              <p className="text-control"> {props.text2}</p>
            </div>
            <div className="flex-child">
              <img
                className="place-holder"
                src={props.image}
                alt={"placeholder"}
              />
            </div>
          </div>
          <div className="flex-child">
            <h3 className="discover-subheading">{props.discoverHeading}</h3>
            <span>
              {props.urlFilm}, {props.urlBook}, {props.urlArtist}
            </span>
            <div className="flex-child">
              <h3 className="resources-subheading">
                {props.resourcesSubheading}
              </h3>
              <ul>
                <li>{props.urlResources}</li>
                <li>{props.urlResources2}</li>
                <li>{props.urlResources3}</li>
              </ul>
            </div>

            <div className="flex-child">
              <h3 className="resources-subheading">{props.charityHeading}</h3>
              <span>{props.urlCharity}</span>
            </div>
          </div>
          <div className="flex-child" id="border-control">
            <h3 className="quote-heading">{props.quoteHeading}</h3>
            <p>{props.quote}</p>
          </div>
        </section>
        <CompleteChallengeButton onClickHandler={onClickHandler} />

        <div className="welldone-message">
          <p>{welldone}</p>
        </div>
      </div>
    </>
  );
};

console.log(ChallengeItem);
export default ChallengeItem;
