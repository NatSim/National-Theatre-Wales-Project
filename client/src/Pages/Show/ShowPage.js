import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import "./ShowPage.css";

const ShowPage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <SideNav />
      <Header />
      {/* Translation Button START HERE */}
      <div className="translate-button">
        <div className="translate-button-control">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
        </div>
      </div>
      {/* Translation Button END HERE */}
      <div className="live-background-container"></div>
      <h2 className="subtitle5">Show Programme</h2>
      <div>
        <p className=" programme-info-control">
          Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan.{" "}
        </p>
      </div>
    </>
  );
};

export default ShowPage;
