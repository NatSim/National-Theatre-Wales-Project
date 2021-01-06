import React from "react";
import "../../Components/Buttons/MainButton.css";

//Next Button Functional Component
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
