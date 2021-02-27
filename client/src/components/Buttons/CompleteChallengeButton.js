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
  //we use props(object)
  console.log(props);
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
