import React from "react";
import stories from "../../Models/stories";
import StoriesPage from "../../Pages/Connect/StoriesPage";

const StoriesLogic = (props) => {
  /** Displays Connect Stories information
   * Dynamically displaying 2 pages,containing same HTML structure found at /Pages/Connect/StoriesPage.js
   * All bellow props imported from json file above.
   */

  const id = props.match.params.id;

  return (
    <>
      <div>
        <StoriesPage
          storiesChoice={id}
          id_={stories[id - 1].id_}
          videoTitle={stories[id - 1].videoTitle}
          videoMono1={stories[id - 1].videoMono1}
          videoMono2={stories[id - 1].videoMono2}
        />
      </div>
    </>
  );
};
export default StoriesLogic;
