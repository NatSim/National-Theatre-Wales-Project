import React, { useState, useEffect } from "react";
import "../../components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";
// import simpleText from "../../Models/simpleText";

const CompleteChallengeButton = (props) => {
  // const [challenge, setChallenge] = useState([]);

  // useEffect(() => {
  //   //this function gets the challenges from the local storage
  //   const getChallenges = () => {
  //     //data in the local storage
  //     let storageChallenge = [];
  //     storageChallenge = JSON.parse(localStorage.getItem("challenge")) || [];

  //     // setChallenge((previousState) => {
  //     //   return previousState.concat("challenge");
  //     // });

  //     setChallenge(storageChallenge);
  //   };
  //   getChallenges([]);
  // }, []);

  // console.log(`The simple act Link was clicked`);
  return (
    <>
      <div>
        <Button
          onClick={props.onClickHandler}
          type="submit"
          className="challenge"
        >
          Completed
        </Button>
      </div>
    </>
  );
};

export default CompleteChallengeButton;
