import BeKind from "../images/BeKind.jpg";
import Connect from "../images/Connect.jpg";
import Consider from "../images/Consider.jpg";
import Consume from "../images/Consume.jpg";
import Learn1 from "../images/Learn1.jpg";
import Plant from "../images/Plant.jpg";
import TakeAWalk from "../images/TakeAWalk.jpg";

const simpleText = [
  {
    act: "be kind to your neighbour",
    image: BeKind,

    text1:
      "We all know that acts of kindness can make someone's day but in our busy lives we can sometimes miss the opportunity. So it might help to make some plans. A regular check in on an elderly neighbour? An invite to share a meal? Or perhaps you can join a voluntary programme that can make helping others part of your weekly routine? The challenges we face as individuals and as a society can feel overwhelming but starting small, with things we know can make a difference, will can always be part of the solution.",

    text2:
      "Did you know that acts of kindness are often accompanied by emotional warmth. Emotional warmth produces the hormone, oxytocin, therefore kindness can be said to be cardioprotective - being kind really can help your heart!",

    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",

    urlResources: (
      <a href="https://www.nationaltheatrewales.org/daisy-discovers-sharing/">
        Daisy Discovers Sharing
      </a>
    ),
    urlResources2: (
      <a href="https://www.nationaltheatrewales.org/food-map/">Food Map</a>
    ),
  },
  {
    act: "connect",
    image: Connect,
    text1: "Example Text1",

    text2: "Example Text2",

    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
  {
    act: "consider",
    image: Consider,
    text1: "ExampleText1",

    text2: "Example Text2",
    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
  {
    act: "consume",
    image: Consume,
    text1: "ExampleText1",

    text2: "Example Text2",

    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
  {
    act: "learn",
    image: Learn1,
    text1: "ExampleText5",

    text2: "Example Text2",

    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
  {
    act: "plant",
    image: Plant,
    text1: "ExampleText6",

    text2: "Example Text2",
    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
  {
    act: "walk",
    image: TakeAWalk,
    text1: "ExampleText7",

    text2: "Example Text2",

    urlFilm: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Film</a>
    ),
    urlBook: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Book</a>
    ),
    urlArtist: (
      <a href="https://tomhirons.com/poetry/sometimes-a-wild-god">Artist</a>
    ),

    quote: "“No act of kindness, no matter how small, is ever wasted.” - Aesop",
  },
];

/*DRY code */
const direction = "Your Simple Act is to...";
export { direction };

const text2Subheading = "Did you know";
export { text2Subheading };

const discoverHeading = "Discover";
export { discoverHeading };

const quoteHeading = "Simple Act Quote";
export { quoteHeading };

const resourcesHeading = "Explore";
export { resourcesHeading };

const resourcesSubheading = "Hive Learning Resources";
export { resourcesSubheading };

export default simpleText;
