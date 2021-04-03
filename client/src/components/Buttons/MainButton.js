import React from "react";
import "../../components/Buttons/MainButton.css";

/*Button use in WELCOME*/
const NextButton = ({ onClickHandler, welcomeStep }) => {
  return (
    <>
      <button
        onClick={() => onClickHandler(welcomeStep + 1)}
        className="button"
      >
        NEXT
      </button>
    </>
  );
};

export default NextButton;
