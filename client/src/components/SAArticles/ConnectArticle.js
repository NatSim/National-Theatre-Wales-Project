import React from "react";

const ConnectArticle = () => {
  return (
    <>
      <article>
        <p>
          It might start with listening – to a new piece of music or poetry, a
          recipe, or someone’s point of view.
        </p>
        <p>
          It’s easy for us to get trapped in our habits and what we know, but
          trying something different can bring new perspectives and refresh our
          thinking. Volunteering could be another route to make new connections.
        </p>
        <p>
          <span className="charity-name"> Counterpoints Arts</span> is a leading
          national organisation in the fields of arts, migration and cultural
          change.
          <a href="counterpointsarts.org.uk">{"counterpointsarts.org.uk"}</a>
        </p>
        <p>
          <span className="charity-name"> Camerados</span> are a movement of
          people from across the UK {`&`} the globe who believe the best way
          through tough times is to be there for each other with no agenda and
          no fixing.
        </p>
        <p>
          Why not visit these local {`&`} national organisations for
          volunteering opportunities?
          <br />
          <a href="www.pavs.org.uk">{"www.pavs.org.uk"}</a> <br />
          <a href="www.span-arts.org.uk">{"www.span-arts.org.uk"}</a> <br />
          <a href="www.wcva.cymru">{"www.wcva.cymru"}</a>
        </p>
      </article>
    </>
  );
};

export default ConnectArticle;
