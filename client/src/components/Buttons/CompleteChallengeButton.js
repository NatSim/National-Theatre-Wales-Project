import React from "react";
import "../../components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";
// import simpleText from "../../Models/simpleText";

const CompleteChallengeButton = (props) => {
  return (
    <>
      <div>
        <Button
          onClick={props.onClickHandler}
          // onClick={props.displayWelldoneHandler}
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
