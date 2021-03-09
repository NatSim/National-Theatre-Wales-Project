import React from "react";
import aboutText from "../../../Models/aboutText";
import AboutArticlesPage from "../../../Pages/About/AboutArticlesPage";

const AboutPageLogic = (props) => {
  /** Displays information for 2 or 3 article components with props */

  const id = props.match.params.id;
  console.log(id);
  console.log(aboutText);

  //loop through list and add ul li to each list items index
  const addListTags = () => {
    let i;
    let sentence = aboutText[0].listItems;

    for (i = 0; i < sentence.length; i++) {
      return sentence.push("<ul>") && sentence.unshift("<ul>");
    }
  };
  console.log(aboutText[0].listItems);
  addListTags();
  return (
    <>
      <div>
        <AboutArticlesPage
          aboutChoice={id}
          title={aboutText[id - 1].title}
          mainText1={aboutText[id - 1].mainText1}
          listTitle={aboutText[id - 1].listTitle}
          listItems={aboutText[id - 1].listItems}
          image={aboutText[id - 1].image}
        />
      </div>
    </>
  );
};

export default AboutPageLogic;
