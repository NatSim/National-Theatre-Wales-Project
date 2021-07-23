import React from "react";
import { useTranslation } from "react-i18next";
import SideNav from "../../components/Nav/SideNav";
import ShowCopy from "../Show/ShowCopy";
import "./ShowPage.css";

const ShowPage = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const removeBeeBackground = (props) => {
    if (ShowPage) {
      //condition needs to be checked before page render
      document.body.classList.remove("background-bee-image");
      //ADD UNIQUE hex inline styling
      console.log("REMOVE BEE BACKGROUND!");
    }
  };

  removeBeeBackground();

  return (
    <>
      <SideNav />

      {/* Translation Button START HERE */}
      <div className="translate-button2">
        <div className="translate-button-control">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
        </div>
      </div>
      {/* Translation Button END HERE */}
      <div className="live-background-container"></div>
      <h2 className="subtitle5">{t("showProgramme")}</h2>
      <ShowCopy />
      {/* Section 1 Credits */}
      <section className=" programme-container-control">
        <div className="section-child-container">
          <ul className="section-list-style-control">
            <li className="co-creator-control">
              Naomi Chiffi{" "}
              <p className="text-color-green"> {t("coCreators.0")}</p>
            </li>

            <li className="co-creator-control">
              Diana Ford<p className="text-color-green"> {t("coCreators.1")}</p>
            </li>

            <li className="co-creator-control">
              Sita Thomas<p className="text-color-green">{t("coCreators.2")}</p>
            </li>

            <li className="co-creator-control">
              Gavin Porter
              <p className="text-color-green"> {t("coCreators.3")}</p>
            </li>

            <li className="co-creator-control">
              Julia Thomas
              <p className="text-color-green"> {t("coCreators.3")}</p>
            </li>

            <li className="co-creator-control">
              Almir Koldzic
              <p className="text-color-green"> {t("coCreators.3")}</p>
            </li>

            <li className="co-creator-control">
              Joe Sullivan
              <p className="text-color-green"> {t("coCreators.4")}</p>
            </li>

            <li className="co-creator-control">
              Jack Abbott
              <p className="text-color-green"> {t("coCreators.5")}</p>
            </li>

            <li className="co-creator-control">
              Joe Sullivan
              <p className="text-color-green"> {t("coCreators.6")}</p>
            </li>

            <li className="co-creator-control">
              Chloe Barnes
              <p className="text-color-green"> {t("coCreators.7")}</p>
            </li>
          </ul>
        </div>
        {/* Section 2 Credits*/}
        <div className="section-child-container">
          <ul className="section-list-style-control">
            <li className="co-creator-control">
              Gemma Thomas
              <p className=" text-color-orange"> {t("productionTeam.0")}</p>
            </li>

            <li className="co-creator-control">
              Becca Moore
              <p className=" text-color-orange"> {t("productionTeam.1")}</p>
            </li>

            <li className="co-creator-control">
              Devinda De Silva
              <p className=" text-color-orange"> {t("productionTeam.2")}</p>
            </li>

            <li className="co-creator-control">
              Rachel John
              <p className=" text-color-orange"> {t("productionTeam.3")}</p>
            </li>

            <li className="co-creator-control">
              Sophie Lewis
              <p className=" text-color-orange"> {t("productionTeam.4")}</p>
            </li>

            <li className="co-creator-control">
              Fahadi Mukulu
              <p className=" text-color-orange">{t("productionTeam.5")}</p>
            </li>

            <li className="co-creator-control">
              Ceri James
              <p className=" text-color-orange"> {t("productionTeam.6")}</p>
            </li>

            <li className="co-creator-control">
              Gemma Green Hope
              <p className=" text-color-orange"> {t("productionTeam.7")}</p>
            </li>
          </ul>
        </div>
        {/* Section 3 Credits*/}
        <div className="section-child-container">
          <ul className="section-list-style-control">
            <li className="co-creator-control">
              Tom Frost
              <p className="text-color-blue"> {t("productionTeam2.0")}</p>
            </li>

            <li className="co-creator-control">
              Jon Foreman
              <p className="text-color-blue">{t("productionTeam2.1")}</p>
            </li>

            <li className="co-creator-control">
              Dave Hammerton
              <p className="text-color-blue"> {t("productionTeam2.2")}</p>
            </li>

            <li className="co-creator-control">
              Ivan Black
              <p className="text-color-blue"> {t("productionTeam2.3")}</p>
            </li>

            <li className="co-creator-control">
              John Lawrence
              <p className="text-color-blue">{t("productionTeam2.4")}</p>
            </li>

            <li className="co-creator-control">
              Jess Ward
              <p className="text-color-blue"> {t("productionTeam2.5")}</p>
            </li>

            <li className="co-creator-control">
              Kristian Westmacott
              <p className="text-color-blue"> {t("productionTeam2.6")}</p>
            </li>

            <li className="co-creator-control">
              David Pepper
              <p className="text-color-blue">{t("productionTeam2.7")}</p>
            </li>

            <li className="co-creator-control">
              Molara Awen {`&`} Jenny Guard <br />
              <p className="text-color-blue">{t("spanArtsThanks")}</p>
            </li>

            <li className="co-creator-control">
              Sabrina Evans
              <p className="text-color-blue"> {t("productionTeam2.8")}</p>
            </li>
          </ul>
        </div>

        {/* Section 4 Credits*/}
        <div className=" section-child-container">
          <ul className="section-list-style-control">
            <li className="co-creator-control">
              Samba Doc
              <p className="text-color-pink">{t("productionTeam3.0")}</p>
            </li>

            <li className="co-creator-control">
              Kelly Bannister
              <p className="text-color-pink"> {t("productionTeam3.1")}</p>
            </li>

            <li className="co-creator-control">
              Fran Evans
              <p className="text-color-pink">{t("productionTeam3.2")}</p>
            </li>

            <li className="co-creator-control">
              Jack Waring
              <p className="text-color-pink"> {t("productionTeam3.3")}</p>
            </li>

            <li className="co-creator-control">
              Laura Chapman
              <p className="text-color-pink"> {t("productionTeam3.3")}</p>
            </li>

            <li className="co-creator-control">
              Georgia Daniels
              <p className="text-color-pink"> {t("productionTeam3.3")}</p>
            </li>

            <li className="co-creator-control">
              Sanjyokta Deshmukh
              <p className="text-color-pink"> {t("productionTeam3.4")}</p>
            </li>

            <li className="co-creator-control">
              Wayne Boucher
              <p className="text-color-pink"> {t("productionTeam3.5")}</p>
            </li>

            <li className="co-creator-control">
              Wil Eiddan Richardson
              <p className="text-color-pink"> {t("productionTeam3.6")}</p>
            </li>

            <li className="co-creator-control">
              Rowan Chitania
              <p className="text-color-pink"> {t("productionTeam3.6")}</p>
            </li>

            <li className="co-creator-control">
              Blaise Bullimore
              <p className="text-color-pink"> {t("productionTeam3.7")}</p>
            </li>

            <li className="co-creator-control">
              Gareth Davies
              <p className="text-color-pink">{t("productionTeam3.8")}</p>
            </li>
          </ul>
        </div>

        {/* Section 4 Credits Cast*/}
        <div className=" section-child-container">
          <h3>
            <u>{t("castTitle.0")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">
              Phil Okwedy <p className="text-color-green">Seer</p>{" "}
            </li>

            <li className="cast-list-control">
              Tristan Edmonds <p className="text-color-green">Dryw</p>
            </li>

            <li className="cast-list-control">
              Sophie Grehan<p className="text-color-green"> {t("cast.0")}</p>
            </li>

            <li className="cast-list-control">
              Hannah La-Trobe<p className="text-color-green"> {t("cast.0")}</p>
            </li>

            <li className="cast-list-control">
              Francesca Tebbutt{" "}
              <p className="text-color-green"> {t("cast.0")}</p>
            </li>

            <li className="cast-list-control">
              Abigail Beck <p className="text-color-green">{t("cast.1")}</p>
            </li>

            <li className="cast-list-control">
              Melissa Phillips <p className="text-color-green"> Gwenyn</p>
            </li>

            <li className="cast-list-control">
              Mirelle Gipson<p className="text-color-green">Hedd</p>
            </li>

            <li className="cast-list-control">
              Kristian Westmacott<p className="text-color-green">Mabon</p>
            </li>

            <li className="cast-list-control">
              Ben Hughes <p className="text-color-green"> {t("cast.2")}</p>
            </li>

            <li className="cast-list-control">
              Oscar Kinnard<p className="text-color-green"> {t("cast.2")}</p>
            </li>

            <li className="cast-list-control">
              Kenton Lloyd Morgan <p className="text-color-green">Ywen</p>
            </li>

            <li className="cast-list-control">
              Ava Thomas<p className="text-color-green">{t("cast.3")}</p>
            </li>

            <li className="cast-list-control">
              Raph Chiffi<p className="text-color-green">{t("cast.3")}</p>
            </li>

            <li className="cast-list-control">
              Ivy Chiffi<p className="text-color-green"> {t("cast.3")}</p>
            </li>

            <li className="cast-list-control">
              Gruff Chiffi<p className="text-color-green"> {t("cast.3")}</p>
            </li>

            <li className="cast-list-control">
              Rachel John<p className="text-color-green"> {t("cast.3")}</p>
            </li>

            <li className="cast-list-control">
              Judith Humphreys <p className="text-color-green">Zephyr</p>
            </li>

            <li className="cast-list-control">
              Molara Awen<p className="text-color-green">Petra</p>
            </li>

            <li className="cast-list-control">
              Sanjyokta Deshmukh<p className="text-color-green">Môr</p>
            </li>
          </ul>
        </div>
        {/* Section 5 Credits Cast2*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-green ">{t("castTitle.1")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Ruby Stephens </li>

            <li className="cast-list-control">Kate Wright </li>

            <li className="cast-list-control">Jane Williams </li>

            <li className="cast-list-control">Robbie Price </li>

            <li className="cast-list-control">Gavin Wright </li>

            <li className="cast-list-control">Robert "Nobby" Hall </li>

            <li className="cast-list-control">Jack Waring </li>

            <li className="cast-list-control">Grant Jones </li>

            <li className="cast-list-control">Rhiannon Morgan-Bell </li>
          </ul>
        </div>
        {/* Section 6 Credits Cast3 Community Gardeners*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.2")}</u>
          </h3>
          <br />
          <h3>
            <u className="text-color-blue">{t("castTitle.3")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Ben Manning </li>

            <li className="cast-list-control">Brian Rowe </li>

            <li className="cast-list-control">Carolyn Waters </li>

            <li className="cast-list-control">Judy Roblin </li>

            <li className="cast-list-control">Marg Howells </li>

            <li className="cast-list-control">Melanie Phillips </li>

            <li className="cast-list-control">Rhys J Hughes </li>

            <li className="cast-list-control">Rhys J Hughes </li>

            <li className="cast-list-control">Rhys John </li>

            <li className="cast-list-control">Rosie Manning </li>

            <li className="cast-list-control">Vanessa John </li>
          </ul>
        </div>
        {/* Section 7 Credits Cast4 Community Protestors*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.4")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Josh Beynon </li>

            <li className="cast-list-control">Cara Gaskell </li>

            <li className="cast-list-control">Angharad Tudor Price </li>

            <li className="cast-list-control">Moira Jenkins </li>

            <li className="cast-list-control">Angela Newman </li>

            <li className="cast-list-control">Jackie Gilderdale </li>

            <li className="cast-list-control">Mary Baker </li>

            <li className="cast-list-control">Peter Warrender</li>
          </ul>
        </div>
        {/* Section 8 Credits Cast4 Community Get the boys a lift*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">
              {t("castTitle.4")}-Get the Boys a Lift
            </u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Ryan Evans </li>
            <li className="cast-list-control">George Ratcliffe </li>
            <li className="cast-list-control">Jordan Marshall </li>
            <li className="cast-list-control">Rhian Clutterbuck </li>
            <li className="cast-list-control">Holly Skyrme </li>
            <li className="cast-list-control">Harri Evans </li>
            <li className="cast-list-control">Amsaal Maqsood</li>
          </ul>
          <h3>
            <u className="text-color-blue">{t("castTitle.4")}- VC Gallery </u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Ryan Wilson </li>
            <li className="cast-list-control">Gemma Taylor </li>
            <li className="cast-list-control">Rafael Smith </li>
          </ul>
        </div>
        {/* Section 8 Credits Cast5 Artist inspired by Nature*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue ">{t("castTitle.5")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">David Pepper </li>
            <li className="cast-list-control">Guy ‌Manning‌ ‌ </li>
            <li className="cast-list-control">Ivan‌ ‌Black‌ ‌ </li>
            <li className="cast-list-control">Molly Creemer </li>
            <li className="cast-list-control">Millie‌ ‌Marotta‌ ‌</li>
            <li className="cast-list-control">Anwen Walters </li>
            <li className="cast-list-control">Kerry Steed </li>
          </ul>
        </div>
        {/* Section 8 Credits Cast6 Surfers*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.6")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Harry Cromwell </li>
            <li className="cast-list-control"> Sam Ryder ‌ </li>
            <li className="cast-list-control">Cara Gaskell </li>
          </ul>
        </div>
        {/* Section 8 Credits Cast7 Blue tit swimmers*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.7")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Anna Grime</li>
            <li className="cast-list-control">Debbie Cranmer ‌ </li>
            <li className="cast-list-control">Jackie Jones ‌ </li>
            <li className="cast-list-control">Jo Sharpe </li>
            <li className="cast-list-control">Makala Jones ‌</li>
            <li className="cast-list-control">Nimi Marwick </li>
            <li className="cast-list-control">Penny Dafforn </li>
            <li className="cast-list-control">Sam Minas </li>
            <li className="cast-list-control">Sarah Mullis </li>
            <li className="cast-list-control">Selina Taylor</li>
            <li className="cast-list-control">Sian Richardson </li>
            <li className="cast-list-control">Sue Cox </li>
            <li className="cast-list-control">Jack Lamont</li>
          </ul>
        </div>
        {/* Section 8 Credits Cast8 Verbatim interviews*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.8")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Diana Ford </li>
            <li className="cast-list-control">Cara Gaskell </li>
            <li className="cast-list-control">Sian Richardson </li>
            <li className="cast-list-control">Peter 'Chippy' Thomas </li>
          </ul>
        </div>

        {/* Section 8 Credits Cast8 candlelight vigil*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.9")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Rachael Bush</li>
            <li className="cast-list-control">Kate Wright </li>
            <li className="cast-list-control">Gavin Wright </li>
            <li className="cast-list-control">Jane Webster </li>
            <li className="cast-list-control">Peter Webster </li>
            <li className="cast-list-control">Anne Joyner </li>
            <li className="cast-list-control">Jay Z May </li>
            <li className="cast-list-control">Kev May </li>
            <li className="cast-list-control">Robert James Hall </li>
            <li className="cast-list-control">Jane Williams </li>
            <li className="cast-list-control">Irene Williams </li>
          </ul>
        </div>
        {/* Section 8 Credits Cast9 candlelit vigil choir*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.10")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Alice Davidson </li>
            <li className="cast-list-control">Ann Phillips</li>
            <li className="cast-list-control">Annie Stuart </li>
            <li className="cast-list-control">Ase Forder </li>
            <li className="cast-list-control">Cathy Davies </li>
            <li className="cast-list-control">Eliza Allen</li>
            <li className="cast-list-control">Gill Meaney</li>
            <li className="cast-list-control">Gilly Davidson </li>
            <li className="cast-list-control">Hannah John </li>
            <li className="cast-list-control">Holly Cross </li>
            <li className="cast-list-control">Jenny Guard </li>
            <li className="cast-list-control">John Skelton </li>
            <li className="cast-list-control">Marley Jones </li>
            <li className="cast-list-control">Melanie Corp </li>
            <li className="cast-list-control">Miranda Rhys Davies </li>
            <li className="cast-list-control">Natalie Jones </li>
            <li className="cast-list-control">Natasha Davies Puddy </li>
            <li className="cast-list-control">Salvia Calor </li>
            <li className="cast-list-control">Taran Parker </li>
            <li className="cast-list-control">Ted Lishman </li>
            <li className="cast-list-control">Tracey English </li>
          </ul>
        </div>
        {/* Section 8 Credits Cast10 Footage submitted community*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.11")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">Adam Morgan </li>
            <li className="cast-list-control">Adele Greene </li>
            <li className="cast-list-control">Ali Goolyad </li>
            <li className="cast-list-control">Anastacia Ackers </li>
            <li className="cast-list-control">Angharad James </li>
            <li className="cast-list-control">Anne-Marie Rees </li>
            <li className="cast-list-control">Anwen James </li>
            <li className="cast-list-control">Arvind Howarth </li>
            <li className="cast-list-control">Aser Bourne </li>
            <li className="cast-list-control">Ayshe Senkal </li>
            <li className="cast-list-control">Ben Tinniswood </li>
            <li className="cast-list-control">Beryl Boucher </li>
            <li className="cast-list-control">Bibi Belle Macdougall </li>
            <li className="cast-list-control">Catrin Ridley </li>
            <li className="cast-list-control">Chris Smith </li>
            <li className="cast-list-control">Claire Sommerville </li>
            <li className="cast-list-control">Dan Howells </li>
            <li className="cast-list-control">Dhini De Silva-Clay </li>
            <li className="cast-list-control">Elliot Lewis </li>
            <li className="cast-list-control">Emin Senkal </li>
            <li className="cast-list-control">Emyr Lewis </li>
            <li className="cast-list-control">Eva Vandermeer </li>
            <li className="cast-list-control">Eylem Senkal </li>
            <li className="cast-list-control">Fayeanne Morgan </li>
            <li className="cast-list-control">Francesca Loo </li>
            <li className="cast-list-control">Franchesca Carter </li>
            <li className="cast-list-control">Gemma Elizabeth Parry </li>
            <li className="cast-list-control">Gwyn James </li>
            <li className="cast-list-control">Hannah John </li>
            <li className="cast-list-control">Helen Lewis </li>
            <li className="cast-list-control">Holly Bee </li>
            <li className="cast-list-control">Jack Billingham </li>
            <li className="cast-list-control">Jan Lloyd </li>
            <li className="cast-list-control">Jem Wall </li>
            <li className="cast-list-control">Jen Lackie </li>
            <li className="cast-list-control">Jeremy Linnell </li>
            <li className="cast-list-control">Jo Davies</li>
            <li className="cast-list-control">Jo Purnell </li>
            <li className="cast-list-control">Jonathan Stuart </li>
            <li className="cast-list-control">Kate Major-Patience </li>
            <li className="cast-list-control">Katie Rigg </li>
            <li className="cast-list-control">Kiri Howell </li>
            <li className="cast-list-control">Luke Cowpe </li>
            <li className="cast-list-control">Melissa Berry</li>
            <li className="cast-list-control">Natasha Borton </li>
            <li className="cast-list-control">Natasha Jenkins </li>
            <li className="cast-list-control">Natasha Simone </li>
            <li className="cast-list-control">Natassja Morgan </li>
            <li className="cast-list-control">Nathan Crossan-Smith </li>
            <li className="cast-list-control">Rachael Bush </li>
            <li className="cast-list-control">Rachel Holland </li>
            <li className="cast-list-control">Rebecca Bridgeman-Williams </li>
            <li className="cast-list-control">Rhian Jones </li>
            <li className="cast-list-control">Rosey Meiring </li>
            <li className="cast-list-control">Rosie Lewis </li>
            <li className="cast-list-control">Roy Doxsey </li>
            <li className="cast-list-control">Ruby Stephens</li>
            <li className="cast-list-control">Sara Mills Mcbeth </li>
            <li className="cast-list-control">Sarah Bolwell </li>
            <li className="cast-list-control">Sarah Rapi </li>
            <li className="cast-list-control">Shirley Draper </li>
            <li className="cast-list-control">Shweta Patil </li>
            <li className="cast-list-control">Simon Rhys-Phillips </li>
            <li className="cast-list-control">Sue Lines </li>
            <li className="cast-list-control">VC Gallery </li>
          </ul>
        </div>
        {/* Section 8 Credits With Thanks*/}
        <div className=" section-child-container">
          <h3>
            <u className="text-color-blue">{t("castTitle.12")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">
              Chris Sharples<p> {t("withThanks.0")}</p>
            </li>

            <li className="cast-list-control">
              Judy Roblin<p> {t("withThanks.1")}</p>
            </li>

            <li className="cast-list-control">{t("withThanks.2")}</li>
            <li className="cast-list-control">{t("withThanks.3")}</li>
            <li className="cast-list-control">{t("withThanks.4")}</li>
            <li className="cast-list-control">{t("withThanks.5")}</li>
            <li className="cast-list-control">
              Steve and Liz Ford <p>{t("withThanks.6")}</p>
            </li>
          </ul>
        </div>
        {/* Section 8 Credits With Special Thanks*/}
        <div className=" section-child-container">
          <h3 className="text-color-blue">{t("castTitle.13")}</h3>
          <h3>
            <u className="text-color-blue">{t("castTitle.14")}</u>
          </h3>
          <ul className="section-list-style-control">
            <li className="cast-list-control">{t("specialThanks.0")} </li>
            <li className="cast-list-control">{t("specialThanks.1")} </li>
            <li className="cast-list-control">Daphne Bush </li>
            <li className="cast-list-control">
              Castle Inn - {t("specialThanks.2")}
            </li>

            <li className="cast-list-control">{t("specialThanks.3")} </li>
            <li className="cast-list-control">{t("specialThanks.4")} </li>
            <li className="cast-list-control">{t("specialThanks.5")} </li>
            <li className="cast-list-control">Ysgol Bro Gwaun </li>
            <li className="cast-list-control">{t("specialThanks.6")} </li>
            <li className="cast-list-control"> Ysgol Gelli Aur</li>
            <li className="cast-list-control"> {t("specialThanks.7")}</li>
            <li className="cast-list-control"> Ysgol Hafan y Môr </li>
            <li className="cast-list-control">Mena Evans</li>
            <li className="cast-list-control">
              Robert Jakes, Sand Palace Arts{" "}
            </li>
            <li className="cast-list-control">Kerry Steed </li>
            <li className="cast-list-control">Lloyd the Graffiti </li>
            <li className="cast-list-control"> Jack Merrony </li>
            <li className="cast-list-control">Jodie Jenkins </li>
            <li className="cast-list-control"> Mathew Price </li>
            <li className="cast-list-control">Anna Strzelecki </li>
            <li className="cast-list-control">Diana Brook </li>
            <li className="cast-list-control">Natasha Simone Bigford </li>
            <li className="cast-list-control">Neil Bebber </li>
            <li className="cast-list-control"> Nathan Lowe </li>
            <li className="cast-list-control">Abi Sidebotham </li>
            <li className="cast-list-control">Heritage Spa Lodge </li>
            <li className="cast-list-control">
              Sustainability in Production Alliance
            </li>
            <li className="cast-list-control">
              Robbie Price<p> {t("sustainable.0")}</p>
            </li>

            <li className="cast-list-control">
              Owain Roach<p>{t("sustainable.1")}</p>
            </li>

            <li className="cast-list-control">
              Fern Lewis<p> {t("sustainable.2")}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ShowPage;
