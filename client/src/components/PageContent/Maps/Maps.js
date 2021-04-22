import React from "react";
import { useTranslation } from "react-i18next";
import mapPlaceholder from "../../../images/Maps/Pembrok.jfif";
import StDavidsPol from "../../../images/Maps/St_Davids_pollinator.png";
import "./Maps.css";

const Maps = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
        <section className="map-container-control-spacebetween">
          <div>
            <ol>
              <li>Plant a Seed</li>
            </ol>

            <span>Got to... St Davids Pollinator Trail</span>
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
      </div>
    </>
  );
};
export default Maps;
