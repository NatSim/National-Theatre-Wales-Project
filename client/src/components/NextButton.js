import React from "react";
import "../Components/NextButton.css";

//Next Button Functional Component
const NextButton = ({ onClickHandler, welcomeStep }) => {
  console.log(onClickHandler, welcomeStep);
  return (
    <div>
      <button onClick={() => onClickHandler(welcomeStep + 1)} className="next">
        NEXT
      </button>
    </div>
  );
};

export default NextButton;
