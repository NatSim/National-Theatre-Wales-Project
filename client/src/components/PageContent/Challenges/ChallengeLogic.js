import React from "react";
// import axios from "axios";
import simpleText, {
  direction,
  text2Subheading,
  discoverHeading,
  quoteHeading,
} from "../../../Models/simpleText";
import ChallengeItem from "./ChallengeChoicePage";
import "./ChallengePage.css";

//Display 7 pages in one component
//simpleText content
const ChallengeLogic = (props) => {
  //*****function steps:

  const id = props.match.params.id;
  console.log(id);
  console.log(simpleText);
  return (
    //return 7 challenge content in component below, from array id -1
    <>
      <div>
        <ChallengeItem
          challengeChoice={id}
          direction={direction}
          act={simpleText[id - 1].act}
          image={simpleText[id - 1].image}
          text1={simpleText[id - 1].text1}
          text2Subheading={text2Subheading}
          text2={simpleText[id - 1].text2}
          discoverHeading={discoverHeading}
          urlFilm={simpleText[id - 1].urlFilm}
          urlBook={simpleText[id - 1].urlBook}
          urlArtist={simpleText[id - 1].urlArtist}
          urlResources={simpleText[id - 1].urlResources}
          urlResources2={simpleText[id - 1].urlResources2}
          urlResources3={simpleText[id - 1].urlResources3}
          quoteHeading={quoteHeading}
          quote={simpleText[id - 1].quote}
          urlCharity={simpleText[id - 1].urlCharity}
        />
      </div>
    </>
  );
};

export default ChallengeLogic;
