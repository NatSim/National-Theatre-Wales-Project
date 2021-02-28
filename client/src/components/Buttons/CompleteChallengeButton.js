import React, { useState, useEffect } from "react";
import "../../components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";
// import simpleText from "../../Models/simpleText";

const CompleteChallengeButton = (props) => {
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    //this function gets the challenges from the local storage
    const getChallenges = () => {
      //data in the local storage
      let storageChallenge = [];
      storageChallenge = JSON.parse(localStorage.getItem("challenge")) || [];

      // setChallenge((previousState) => {
      //   return previousState.concat("challenge");
      // });

      setChallenge(storageChallenge);
    };
    getChallenges([]);
  }, []);

  //   let storageChallenge = [];

  //   //get existing data
  //   storageChallenge = JSON.parse(localStorage.getItem("challenge"));

  //   // create an array convert string to array
  //   storageChallenge = [];

  //   // let dispatch = storageChallenge.push("challenge");

  //   // alert(storageChallenge);
  //   console.log(storageChallenge);

  //   // console.log(dispatch);

  //   //create an array and store the props in the array
  //   return localStorage.setItem("challenge", JSON.stringify(props));
  // };

  console.log(`The button ${props} was clicked`);
  return (
    <>
      <div>
        <Button
          onClick={(() => props.onClickHandler, props.sendItemsToLocal())}
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
