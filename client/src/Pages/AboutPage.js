import React from "react";
import AboutInfo from "../Components/AboutInfo";
import SimpleActVideo from "../Components/SimpleActVideo";

//About Page
const About = () => {
  return (
    <div>
      <button>Home</button>
      <div>
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
