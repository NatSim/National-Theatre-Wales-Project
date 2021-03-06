import React from "react";
import beeimage from "../../../images/whole-beeimage.png";

function AboutInfo() {
  return (
    <section>
      <h3 className="heading-control">
        <u>Go Tell The Bees</u>
      </h3>
      <article>
        Planet Earth is in crisis. Digitally, we are more plugged in than ever
        before, yet so many of us talk of an increasing sense of disconnect from
        others and the natural world around us… Over the last four years NTW
        TEAM has been embedded in the communities of Pembrokeshire, exploring
        the key things that matter most for the people of the county.
      </article>
      <br />
      <article>
        Having decided on climate change and the environment as the most urgent
        issue, Go Tell The Bees is the community’s co-created response – a bold
        new work that redefines the way in which theatre is made while telling a
        universal story of our human connection to nature and to each other.
      </article>
      <br />
      <article className="more-info2">
        To find out more about National Theatre Wales and how you can get
        involved click here.
      </article>
      <article>
        <br />
        <span className="more-info">
          To find out more about Go Tell The Bees visit:
        </span>
        <a
          className="ntw-link"
          href="https://www.nationaltheatrewales.org/ntw_shows/go-tell-the-bees/"
        >
          National Theatre Wales
        </a>
      </article>
      <article>
        <img
          className="pem-image2"
          src={beeimage}
          alt="Tide-Whisperer-TEAM-Social Pembrokeshire Landscape"
        ></img>
      </article>
    </section>
  );
}

export default AboutInfo;
