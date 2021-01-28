import React, { useState } from "react";
import "../../Components/Buttons/MainButton.css";
import Button from "react-bootstrap/Button";

//Next Button Functional Component

//Make a request to handler to route defined(user-1/challenge-1) make axios request, it will pass in user id& challenge id.
//Once its returned -Make handler redirect to profile

/*if(button was clicked){
function(send details to server)
} */
const CompleteChallengeButton = (props) => {
  // const [state, setState] = useState({});
  //Display 7 pages in one component? State
  const exampleTry = [
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
    {
      direction: "Your Simple Act is to...",
      image: "BeKind.jpg",
      text: "Hello",
      id: 1,
    },
  ];

  function ChallengeItems() {
    const [direction, setDirection] = useState(exampleTry[0].direction);
    const [image, setImage] = useState(exampleTry[0].image);
    const [text, setText] = useState(exampleTry[0].text);
    const [id, setId] = useState(exampleTry[0].id);
  }

  //Button Handler
  const onClickHandler = (event) => {
    console.log("button was clicked!");
  };
  return (
    <>
      <div>
        <Button
          onClick={onClickHandler}
          type="submit"
          id={props.id}
          className="challenge"
        >
          Completed
        </Button>
      </div>
    </>
  );
};

export default CompleteChallengeButton;
