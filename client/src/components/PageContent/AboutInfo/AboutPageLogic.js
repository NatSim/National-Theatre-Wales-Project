import React from "react";
import aboutText from "../../../Models/aboutText";
import AboutArticlesPage from "../../../Pages/About/AboutArticlesPage";

const AboutPageLogic = (props) => {
  /** Displays information for 2 or 3 article components with props */

  const id = props.match.params.id;
  console.log(id);
  console.log(aboutText);

  //loop through list and add ul li to each list items index
  const AddListTags = (props) => {
    const list = aboutText[0].listItems;

    const items = list.map((list) => <li key={list.toString()}>{list}</li>);
    console.log(aboutText[0].listItems);
    return <ul>{items}</ul>;
  };

  return (
    <>
      <div>
        <AboutArticlesPage
          aboutChoice={id}
          title={aboutText[id - 1].title}
          mainText1={aboutText[id - 1].mainText1}
          listTitle={aboutText[id - 1].listTitle}
          list={aboutText[id - 1].list}
          otherText={aboutText[id - 1].otherText}
        />
        <AddListTags list={props.list} />
      </div>
    </>
  );
};

export default AboutPageLogic;
