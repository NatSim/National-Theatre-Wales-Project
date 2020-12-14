import React from "react";
import "./NextButton.css";

//Next Button Functional Component
const SmallButton = ({ onClickHandler, welcomeStep }) => {
  console.log(onClickHandler, welcomeStep);
  return (
    <div className="smallbutton">
      <button onClick={() => onClickHandler(welcomeStep + 1)} class="next">
        NEXT
      </button>
    </div>
  );
};

export default SmallButton;
