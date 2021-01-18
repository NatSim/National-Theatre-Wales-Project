import React from "react";
import { Link } from "react-router-dom";
import Image2 from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import "./AboutInfo.css";

function AboutInfo() {
  return (
    <section>
      <h1 className="heading-control">
        <u>Go Tell The Bees</u>
      </h1>
      <br />
      <article>
        Planet Earth is in crisis. Digitally, we are more plugged in than ever
        before, yet so many of us talk of an increasing sense of disconnect from
        others and the natural world around us…
      </article>
      <article>
        Over the last four years NTW TEAM has been embedded in the communities
        of Pembrokeshire, exploring the key things that matter most for the
        people of the county.
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
      <article>
        Having decided on climate change and the environment as the most urgent
        issue, Go Tell The Bees is the community’s co-created response – a bold
        new work that redefines the way in which theatre is made while telling a
        universal story of our human connection to nature and to each other.
      </article>
      <br />
      <article className="more-info2">
        To learn more about NTW Team and how you can get involved click here.
      </article>
      <div>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
      </div>
      <article>
        <br />
        <span className="more-info">
          To find out more about Go Tell The Bees {`&`} the show visit:
        </span>
        <a
          className="ntw-link"
          href="https://www.nationaltheatrewales.org/ntw_shows/go-tell-the-bees/"
        >
          {"https://www.nationaltheatrewales.org/ntw_shows/go-tell-the-bees/"}
        </a>
      </article>
    </section>
  );
}

export default AboutInfo;
