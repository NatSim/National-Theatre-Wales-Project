import React from "react";

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
    </section>
  );
}

export default AboutTeam;
