import React from "react";

/**Homepage with Nav buttons as routes to other pages
 * */

function HomePage() {
  // import bee image
  return (
    <nav>
      <ul>
        <li>About</li>
        <li>Simple Acts</li>
        <li>Meditation</li>
        <li>Music</li>
        <li>Terms {`&`} Conditions</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default HomePage;
