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

  const setFooterColor = () => {
    if ("background-bee-image brown") {
      document.getElementById("root").classList.add("brown"); //footer to change not root
      console.log("Add brown footer");
    }
  };

  // setFooterColor();

  return (
    <>
      <div className="background-bee-image brown">
        <nav className="sidenav-container">
          <SideNav />
          {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
          </div>{" "}
        </nav>

        {/* WELCOME container START HERE */}
        {/* <section> */}
        {/* <main className="title-container"> */}
        <section>
          <Welcome2 />
        </section>
        {/* </main> */}
        {/* Welcome container END HERE */}
        {/* Translation Button END HERE */}
      </div>
      {/* </div> */}
    </>
  );
}

export default LandingPage;
