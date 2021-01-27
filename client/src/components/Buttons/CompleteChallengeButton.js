import React from "react";
import "../../Components/Buttons/MainButton.css";

//Next Button Functional Component

//Make a request to handler to route defined(user-1/challenge-1) make axios request, it will pass in user id& challenge id.
//Once its returned -Make handler redirect to profile
const NextButton = ({ onClickHandler, welcomeStep }) => {
  console.log(onClickHandler, welcomeStep);
  return (
    <div>
      <button
        onClick={() => onClickHandler(welcomeStep + 1)}
        className="button"
      >
        NEXT
      </button>
    </div>
  );
};

export default NextButton;
