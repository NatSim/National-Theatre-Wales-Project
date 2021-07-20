import BeKind from "../images/Simple7/BeKind.jpg";
import Connect from "../images/Simple7/Connect.jpg";
import Consider from "../images/Simple7/Consider.jpg";
import Consume from "../images/Simple7/Consume.jpg";
import Learn1 from "../images/Simple7/Learn1.jpg";
import Plant from "../images/Simple7/Plant.jpg";
import TakeAWalk from "../images/Simple7/TakeAWalk.jpg";
/*Article Image Imports START HERE*/
import CKCimage from "../images/SAboards/consume-kind-connect.jpg";
import Consider1 from "../images/SAboards/consider-the-stars.jpg";
import Consume1 from "../images/SAboards/consume-kind-connect.jpg";
import Plant1 from "../images/SAboards/plant-learn.jpg";
import TakeAWalk1 from "../images/SAboards/consider-walk-plant.jpg";
/*Content for ChallengeChoicePage/ChallengeLogic*/
const simpleText = [
  {
    id_: 1,
    act: "Be Kind to your Neighbour",
    image1: BeKind,
    image2: CKCimage,
  },
  {
    id_: 2,
    act: "Connect with Someone New",
    image1: Connect,
    image2: Consume1,
  },
  {
    id_: 3,
    act: "Consider The Stars",
    image1: Consider,
    image2: Consider1,
  },
  {
    id_: 4,
    act: "Consume A Little Less",
    image1: Consume,
    image2: CKCimage,
  },
  {
    id_: 5,
    act: "Learn one new thing about Nature",
    image1: Learn1,
    image2: CKCimage,
  },
  {
    id_: 6,
    act: "Plant a Seed",
    image1: Plant,
    image2: Plant1,
  },
  {
    id_: 7,
    act: "Take A Walk",
    image1: TakeAWalk,
    image2: TakeAWalk1,

    urlResources3: (
      <a
        href="https://www.nationaltheatrewales.org/daisy-discovers-butterflies-2/"
        target="_blank"
        rel="noreferrer"
      >
        Sensory Walk
      </a>
    ),
  },
];

/*DRY code */
const direction = ["Your Simple Act is to...", "/Eich Deddf Syml yw ..."];
export { direction };

const text2Subheading = ["Did you know?", "/Oeddech chi'n gwybod "];
export { text2Subheading };

const discoverHeading = ["Discover", "/Darganfod"];
export { discoverHeading };

const quoteHeading = "Simple Act Quote";
export { quoteHeading };

const resourcesHeading = ["Explore", "/Archwilio"];
export { resourcesHeading };

const resourcesSubheading = "Hive Learning Resources";
export { resourcesSubheading };

const charityHeading = "Organisation";
export { charityHeading };

export default simpleText;
