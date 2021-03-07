import React from "react";
import Image2 from "../../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";

function JoinTeam() {
  return (
    <>
      <article>
        <section>
          Join TEAM and you’ll get:
          <ul>
            <li>A chance to have your say on how we run NTW</li>
            <li>Free entry to selected NTW shows (often before anyone else)</li>
            <li> Placement, training and mentoring opportunities</li>
            <li>Invites to social and networking events </li>
            <li> Paid work opportunities </li>
            <li>Ongoing support to develop your own ideas</li>
            <li>
              Discounts to shows and events run by our partners
              {`&`} much more
            </li>
          </ul>
          <ul>
            Joining is easy:
            <li>Join the NTW TEAM Group on our online community.</li>
            <li>
              This is where all our opportunities will be placed first, so keep
              an eye out for something that suits you.
            </li>
            <li>
              Join us at any NTW event and speak to a member of staff, TEAM
              Panel or another TEAM member.
            </li>
          </ul>
        </section>
        <section>
          <span className="more-info">To join TEAM, click here</span>
          <a
            className="team-link"
            href="https://community.nationaltheatrewales.org/group/ntwteam"
            target="_blank"
            rel="noreferrer"
          >
            TEAM
          </a>
          <img
            className="pem-image2"
            src={Image2}
            alt="Tide-Whisperer-TEAM-Social Pembrokeshire Landscape"
          ></img>
          <figcaption className="fig-caption">
            Team Social-Tide Whisperer
          </figcaption>
        </section>
      </article>
    </>
  );
}

export default JoinTeam;
