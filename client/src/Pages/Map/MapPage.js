import React from "react";
import Header from "../../components/Header/Header";
import Maps from "../../components/PageContent/Maps/Maps";
import SideNav from "../../components/Nav/SideNav";

/***Static images ***/
const MapPage = () => {
  return (
    <div>
      <SideNav />
      <Header />
      <h3 className="subtitle1">Tour Locations</h3>
      <div>
        <Maps />
      </div>
    </div>
  );
};
export default MapPage;
