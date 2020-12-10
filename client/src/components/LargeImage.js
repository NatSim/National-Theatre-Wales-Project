import React from "react";
import Image from "../images/beeimage20.png";
import Image2 from "../images/Tide-Whisperer-TEAM-Social-1-1.jpg";

console.log(Image);

//NTW Image Functional Component

const LargeImage = () => (
  <section>
    <img src={Image} alt="Large Image" />;
    <img src={Image2} alt="Large Image" />;
  </section>
);

export default LargeImage;
