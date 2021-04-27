import React from "react";
import { useTranslation } from "react-i18next";
import StDavidsPol from "../../../images/Maps/St_Davids_pollinator.png";
import PemCoastPath from "../../../images/Maps/PembCoastalPath.png";
import GetTheBoys from "../../../images/Maps/GetTheBoysLift.png";
import LittlePantryShop from "../../../images/Maps/LittlePantryWasteShop.png";
import Skrinkle from "../../../images/Maps/Skrinkle.png";
import CroesoAbergwaun from "../../../images/Maps/CroesoAbergwaun.png";
import TyCanolNatureTrai from "../../../images/Maps/TyCanolNatureTrai.png";
import "./Maps.css";

const Maps = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="map-parent-container">
        {/* Map1 Plant a Seed START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.0")}</span> <br />
            <span>{t("mapLocation.0")}</span>
          </div>
          <p>
            <a href="https://g.page/thebugfarm?share ">
              <img
                className="map-control"
                src={StDavidsPol}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map1 Plant a Seed END HERE */}
        {/* Map2 Take a Walk a Seed START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.1")}</span> <br />
            <span>{t("mapLocation.1")}</span>
          </div>
          <p>
            <a href="https://goo.gl/maps/3LMrdPYMSZThB5qGA ">
              <img
                className="map-control"
                src={PemCoastPath}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map2 Take a Walk END HERE */}

        {/* Map3 Connect START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.2")}</span> <br />
            <span>{t("mapLocation.2")}</span>
          </div>
          <p>
            <a href="https://g.page/gettheboysalift?share  ">
              <img
                className="map-control"
                src={GetTheBoys}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map3 Connect END HERE */}
        {/* Map4 Consume Less START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.3")}</span> <br />
            <span>{t("mapLocation.3")}</span>
          </div>
          <p>
            <a href="https://goo.gl/maps/h4oxgLR55vPCQDFm8 ">
              <img
                className="map-control"
                src={LittlePantryShop}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map4 Consume END HERE */}
        {/* Map5 Consider START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.4")}</span> <br />
            <span>{t("mapLocation.4")}</span>
          </div>
          <p>
            <a href="https://goo.gl/maps/rwwK4BPeYtE4ta3i9 ">
              <img
                className="map-control"
                src={Skrinkle}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map5 Consider Less END HERE */}
        {/* Map6 Be Kind the stars START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.5")}</span> <br />
            <span>{t("mapLocation.5")}</span>
          </div>
          <p>
            <a href="https://goo.gl/maps/Km3o7kqh58wqsxbj6  ">
              <img
                className="map-control"
                src={CroesoAbergwaun}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map6 Be Kind the stars END HERE */}
        {/* Map7 Learn START HERE */}
        <section className="map-container-control-spacebetween">
          <div className="text-control-maps">
            <span>{t("mapAct.6")}</span> <br />
            <span>{t("mapLocation.6")}</span>
          </div>
          <p>
            <a href="https://goo.gl/maps/J8rGz6HPxqHogaR36 ">
              <img
                className="map-control"
                src={TyCanolNatureTrai}
                alt="tour-locations"
              />
            </a>
          </p>
        </section>
        {/* Map7 Learn END HERE */}
      </div>
    </>
  );
};
export default Maps;
