import React from "react";
import "../../components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";
import simpleText from "../../Models/simpleText";

//Next Button Functional Component

//Make a request to handler to route defined(user-1/challenge-1) make axios request, it will pass in user id& challenge id.
//Once its returned -Make handler redirect to profile

/*if(button was clicked){
function(send details to server)
} */
const CompleteChallengeButton = (props) => {
  console.log(props);
//added all items clicked to local storage
  const sendItemsToLocal = () => {
    let challenge = [];

    if (localStorage.getItem("challenge")) {
      challenge = JSON.parse(localStorage.getItem("challenge"));
    }

    let newChallenge = challenge.concat([props]);

    //create an array and store the props in the array
    return localStorage.setItem("challenge", JSON.stringify(newChallenge));
  };

  return (
    <>
      <div>
        <Button
          onClick={(() => props.onClickHandler, sendItemsToLocal())}
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
