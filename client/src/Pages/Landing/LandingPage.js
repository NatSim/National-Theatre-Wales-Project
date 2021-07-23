import React from "react";
import { useTranslation } from "react-i18next";
import "./LandingPage.css";
import SideNav from "../../components/Nav/SideNav";
import Welcome2 from "../../components/PageContent/Welcome/Welcome2";

function LandingPage(props) {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const setBeeBackground = () => {
    if (LandingPage) {
      //condition needs to be checked before landing page render
      document.body.classList.add("background-bee-image");
      //SET UNIQUE HEX COLOR
      console.log("SHOW BEE BACKGROUND!");
    }
    if (!LandingPage) {
      document.body.classList.remove("background-bee-image");

      console.log("REMOVE BEE BACKGROUND!");
    }
  };

  // setBeeBackground();

  return (
    <>
      <div className="background-bee-image">
        <nav className="sidenav-container">
          <SideNav />
        </nav>
        {/* Translation Button START HERE */}
        <div className="translate-button2">
          <div className="translate-button-control">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            <hr />{" "}
          </div>

          {/* WELCOME container START HERE */}
          {/* <section> */}
          <main className="title-container">
            <section>
              <Welcome2 />
            </section>
          </main>
          {/* Welcome container END HERE */}
          {/* Translation Button END HERE */}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
