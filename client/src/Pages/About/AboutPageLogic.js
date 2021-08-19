import React from "react";
import aboutText from "../../Models/aboutText";
import AboutArticlesPage from "./AboutArticlesPage";

const AboutPageLogic = (props) => {
  /** Displays ABOUT TEAM&NTW information
   * Dynamically displaying 2 pages,containing same HTML structure found at /Pages/AboutArticlesPage.js
   * All below props imported from json file above.
   */

  const id = props.match.params.id;

  return (
    <>
      <div>
        <AboutArticlesPage
          aboutChoice={id}
          title={aboutText[id - 1].title}
          mainText1={aboutText[id - 1].mainText1}
          listTitle={aboutText[id - 1].listTitle}
          listItems={aboutText[id - 1].listItems}
          listItem2={aboutText[id - 1].listItem2}
          listItem3={aboutText[id - 1].listItem3}
          listItem4={aboutText[id - 1].listItem4}
          listItem5={aboutText[id - 1].listItem5}
          listItem6={aboutText[id - 1].listItem6}
          listItem7={aboutText[id - 1].listItem7}
          otherText={aboutText[id - 1].otherText}
          joinTeam={aboutText[id - 1].joinTeam}
        />
      </div>
    </>
  );
};

export default AboutPageLogic;