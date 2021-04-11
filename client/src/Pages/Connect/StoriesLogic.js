import React from "react";
import stories from "../../Models/stories";
import StoriesPage from "../../Pages/Connect/StoriesPage";

const StoriesLogic = (props) => {
  const id = props.match.params.id;
  console.log(id);
  console.log(stories);

  console.log(stories[1].videoMono);

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
