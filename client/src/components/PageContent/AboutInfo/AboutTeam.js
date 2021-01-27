import React from "react";
import Image2 from "../../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";

function AboutTeam() {
  return (
    <section>
      <h1 className="heading-control">
        <u>What is TEAM?</u>
      </h1>
      <br />
      <article>
        <span className="more-info">To join TEAM, click here</span>
        <a
          className="team-link"
          href="https://community.nationaltheatrewales.org/group/ntwteam"
          link
          to="https://community.nationaltheatrewales.org/group/ntwteam"
        >
          {" "}
          TEAM{" "}
        </a>
      </article>
      <article>
        <img
          className="pem-image2"
          src={Image2}
          alt="Tide-Whisperer-TEAM-Social Pembrokeshire Landscape"
        ></img>
        <figcaption className="fig-caption">
          Team Social-Tide Whisperer
        </figcaption>
      </article>
    </section>
  );
}

export default AboutTeam;
