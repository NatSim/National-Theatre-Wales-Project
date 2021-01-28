import React from "react";
import "../../Components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";

//Next Button Functional Component

//Make a request to handler to route defined(user-1/challenge-1) make axios request, it will pass in user id& challenge id.
//Once its returned -Make handler redirect to profile

/*if(button was clicked){
function(send details to server)
} */
const CompleteChallengeButton = () => {
  // const [state, setState] = useState({});

  //Button Handler
  const onClickHandler = (event) => {
    console.log("button was clicked!");
  };
  return (
    <>
      <div>
        <Button
          onClick={onClickHandler}
          type="subject"
          id="bekind"
          className="bekind"
        >
          Completed
        </Button>
      </div>
    </>
  );
};

export default CompleteChallengeButton;
