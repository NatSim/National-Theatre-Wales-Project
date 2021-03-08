import React from "react";
import aboutText from "../../../Models/aboutText";
import AboutArticlesPage from "../../../Pages/About/AboutArticlesPage";

const AboutPageLogic = (props) => {
  /** Displays information for 2 or 3 article components with props */

  const id = props.match.params.id;
  console.log(id);
  console.log(aboutText);
  return (
    <>
      <div>
        <AboutArticlesPage
          aboutChoice={id}
          title={aboutText[id - 1].title}
          subtitle={aboutText[id - 1].subtitle}
          mainText={aboutText[id - 1].mainText1}
        />
      </div>
    </>
  );
};
export default AboutPageLogic;
