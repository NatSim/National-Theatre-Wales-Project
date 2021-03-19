import React from "react";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import stories from "../../Models/stories";
import StoriesPage from "../../Pages/Connect/StoriesPage";

const StoriesLogic = (props) => {
  const id = props.match.params.id;
  console.log(id);
  console.log(stories);

  console.log(stories[0].videoMono);

  return (
    <>
      <div>
        <StoriesPage
          storiesChoice={id}
          videoMono={stories[id - 1].videoMono}
          videoMono2={stories[id - 1].videoMono2}
          videoMono3={stories[id - 1].videoMono3}
        />
      </div>
    </>
  );
};
export default StoriesLogic;
