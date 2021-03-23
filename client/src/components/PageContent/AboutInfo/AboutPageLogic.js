import React from "react";
import aboutText from "../../../Models/aboutText";
import AboutArticlesPage from "../../../Pages/About/AboutArticlesPage";
//import ReactModal from "../../ReactModal/ReactModal";

const AboutPageLogic = (props) => {
  /** Displays information for 2 or 3 article components with props */

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
        />
      </div>
    </>
  );
};

export default AboutPageLogic;
