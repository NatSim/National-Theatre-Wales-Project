import React from "react";
import "../../components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";

const CompleteChallengeButton = (props) => {
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
