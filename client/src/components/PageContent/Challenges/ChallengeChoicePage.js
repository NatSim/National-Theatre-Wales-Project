import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";
import Header from "../../../components/Header/Header";
import SideNav from "../../Nav/SideNav";
import BeeImage from "../../../images/proccession_graphics/STILL1.jpeg";
import PathImage from "../../../images/proccession_graphics/STILL5.jpeg";
import PlantImage from "../../../images/proccession_graphics/STILL7.jpeg";
import PeopleImage from "../../../images/proccession_graphics/STILL6.jpeg";
import NatureImage from "../../../images/proccession_graphics/STILL8.jpeg";
import StarImage from "../../../images/proccession_graphics/STILL3.jpeg";
//**This page component displays the unique challenge item content 7 total **/

const ChallengeItem = (props) => {
  //Displays clicked well done message
  const [welldone, setWelldone] = useState([]);

  //DisplayWelldone onclick handler
  const onClickHandler = () => {
    // alert("this is working");
    setWelldone(<Trans i18nKey="challengeButton">"</Trans>);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* Challenge top background START HERE */}
      <div className="challenge-page">
        <Header />
        <SideNav />

        <section className="prompt-act-container">
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            {/* Translation Button END HERE */}
            <hr />
            <div className="prompt-text-container">
              <h1 className="prompt-text">
                {/* 1.BE KIND PAGE  Direction START HERE*/}
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="direction"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 1.BE KIND PAGE Direction END HERE*/}
              </h1>

              {/* 1.BE KIND PAGE Act START HERE*/}
              <h2 className="act-control-child">
                {props.id_ === 1 ? (
                  <Trans i18nKey="act"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 1.BE KIND PAGE Act END HERE */}
                {/* 2.CONNECT PAGE  Act START HERE*/}

                {props.id_ === 2 ? (
                  <Trans i18nKey="act2"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 2.CONNECT PAGE Act END HERE*/}
                {/* 3.CONSIDER THE STARS PAGE Act START HERE */}
                {props.id_ === 3 ? (
                  <Trans i18nKey="act3"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 3.CONSIDER THE STARS PAGE Act END HERE */}
                {/* 4.CONSUME PAGE Act START HERE */}
                {props.id_ === 4 ? (
                  <Trans i18nKey="act4"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 4.CONSUME PAGE Act ENDS HERE */}
                {/* 5.LEARN PAGE Act STARTS HERE */}
                {props.id_ === 5 ? (
                  <Trans i18nKey="act5"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 5.LEARN PAGE Act ENDS HERE */}
                {/* 6.PLANT Act STARTS HERE */}
                {props.id_ === 6 ? (
                  <Trans i18nKey="act6"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 6.PLANT Act ENDS HERE */}
                {/* 7.TAKE A WALK Act STARTS HERE */}
                {props.id_ === 7 ? (
                  <Trans i18nKey="act7"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 7.TAKE A WALK Act ENDS HERE */}
              </h2>
            </div>
            <div className="intro-text">
              <div className="image-container">
                <img
                  className="image"
                  src={props.image1}
                  alt={"simple act challenge"}
                />
              </div>
              {/* 1.BE KIND PAGE ACT Text1 START HERE*/}
              <p className="text-control2">
                {props.id_ === 1 ? (
                  <Trans i18nKey="text1"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 1.BE KIND PAGE ACT Text1 END HERE*/}
              {/* 2.CONNECT PAGE ACT Text1a START HERE*/}
              <p className="text-control2">
                {props.id_ === 2 ? (
                  <Trans i18nKey="text1a"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 2.CONNECT PAGE ACT Text1a END HERE*/}
              {/* 3.CONNECT PAGE text1b START HERE */}
              {props.id_ === 3 ? (
                <Trans i18nKey="text1b"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 3.CONNECT PAGE text1b END HERE */}
              {/* 4.CONSUME PAGE text1c START HERE */}
              {props.id_ === 4 ? (
                <Trans i18nKey="text1c"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 4.CONSUME PAGE text1c ENDS HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
              {props.id_ === 5 ? (
                <Trans i18nKey="text1d"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 5.LEARN PAGE Act ENDS HERE */}
              {/* 6.PLANT PAGE Act STARTS HERE */}
              {props.id_ === 6 ? (
                <Trans i18nKey="text1e"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 6.PLANT PAGE Act ENDS HERE */}
              {/* 7.TAKE A WALK PAGE Act STARTS HERE */}
              {props.id_ === 7 ? (
                <Trans i18nKey="text1f"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 7.TAKE A WALK PAGE Act ENDS HERE */}
            </div>
          </div>
        </section>
      </div>

      {/* Challenge top background END HERE */}
      {/* Challenge section START HERE */}
      <div className="challenge-page-background2">
        <section className="article-image-container">
          <div className="flex-parent">
            <div className="flex-child">
              <h3 className="text2-subheading">
                {/* BE KIND text2Subheading START HERE */}
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="text2Subheading"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* BE KIND text2Subheading END HERE */}
              </h3>
              {/* 1.BE KIND PAGE Did you know START HERE*/}
              <section className="text-control3">
                {props.id_ === 1 ? (
                  <>
                    <Trans i18nKey="text2"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={BeeImage}
                        alt="Bees"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}{" "}
                {/* 1.BE KIND PAGE Did you know END HERE*/}
                {/* 2.CONNECT PAGE Did you know START HERE*/}
                {props.id_ === 2 ? (
                  <>
                    <Trans i18nKey="text2a"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={PeopleImage}
                        alt="People"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 2.CONNECT PAGE Did you know END HERE*/}
                {/* 3.CONSIDER THE STARS Did you know START HERE */}
                {props.id_ === 3 ? (
                  <>
                    <Trans i18nKey="text3"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={StarImage}
                        alt="People"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 3.CONSIDER THE STARS Did you know END HERE */}
                {/* 4.CONSUME PAGE Did you know START HERE */}
                {props.id_ === 4 ? (
                  <>
                    <Trans i18nKey="text4"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={PeopleImage}
                        alt="People"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 4.CONSUME PAGE Did you know ENDS HERE */}
                {/* 5.LEARN PAGE Did you know STARTS HERE */}
                {props.id_ === 5 ? (
                  <>
                    <Trans i18nKey="text5"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={NatureImage}
                        alt="Sunflowers"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 5.LEARN PAGE Did you know ENDS HERE */}
                {/* 6. PLANT PAGE Did you know STARTS HERE */}
                {props.id_ === 6 ? (
                  <>
                    <Trans i18nKey="text6"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={PlantImage}
                        alt="Sunflowers"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 6.PLANT PAGE Did you know ENDS HERE */}
                {/* 7.TAKE A WALK Did you know STARTS HERE */}
                {props.id_ === 7 ? (
                  <>
                    <Trans i18nKey="text7"></Trans>
                    <div className="procession-image-container">
                      <img
                        className="procession-image"
                        src={PathImage}
                        alt="Path"
                      />
                    </div>
                  </>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 7.TAKE A WALK Did you know ENDS HERE */}
              </section>
            </div>
            <div className="flex-child-image">
              <img
                className="place-holder"
                src={props.image2}
                alt={"placeholder"}
              />
            </div>
          </div>
          <div className="flex-child">
            {/* 1.BE KIND PAGE Discover subheading START HERE*/}
            <h3 className="discover-subheading">
              {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                <Trans i18nKey="discoverSubheading"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 1.BE KIND PAGE discover subheading END HERE*/}
            </h3>
            <span>
              {/* {props.urlFilm} {props.urlBook} {props.urlArtist} */}
            </span>
            {/* 1.BE KIND PAGE discover links START HERE*/}
            <span className="text-control3">
              {props.id_ === 1 ? (
                <a
                  href={t("links.0")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                ""
              )}
              {/* 1.BE KIND PAGE discover links END HERE*/}
              {/* 2.CONNECT PAGE discover links START HERE*/}
              {props.id_ === 2 ? (
                <a
                  href={t("links.1")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                ""
              )}
              {/* 2.CONNECT PAGE discover links END HERE*/}
              {/* 3.CONSIDER PAGE discover links START HERE*/}
              {props.id_ === 3 ? (
                <a
                  href={t("links.2")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                ""
              )}
              {/* 3.CONSIDER PAGE discover links START HERE*/}
              {/* 4.CONNECT PAGE discover links START HERE*/}
              {props.id_ === 4 ? (
                <a
                  href={t("links.3")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                ""
              )}
              {/* 4.CONNECT PAGE discover links END HERE*/}
              {/* 5.LEARN discover links START HERE*/}
              {props.id_ === 5 ? (
                <a
                  href={t("links.4")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                ""
              )}
              {/* 5.LEARN discover links START HERE*/}

              {/* 6.PLANT links STARTS HERE */}
              {props.id_ === 6 ? (
                <a
                  href={t("links.5")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 6.PLANT links END HERE */}
              {/* 7.TAKE A WALK links STARTS HERE */}
              {props.id_ === 7 ? (
                <a
                  href={t("links.6")}
                  target="_blank"
                  rel="noreferrer"
                  type="text/html"
                >
                  <Trans i18nKey="linkSubheading"></Trans>
                </a>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 7.TAKE A WALK links END HERE */}
            </span>

            <div className="flex-child">
              {/* 1. BE KIND PAGE resources heading START HERE */}

              <h3 className="resources-subheading">
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="resourceSubheading"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 1. BE KIND PAGE resources heading END HERE */}
              </h3>
              <div className="flex-child">
                {/*1.Be Kind Charity STARTS HERE */}
                {props.id_ === 1 ? (
                  <a
                    href={t("urlCharity.0")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.0">
                      Get The Boys a Lift
                    </Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*1.Be Kind Charity ENDS HERE */}
                {/*2.CONNECT Charity STARTS HERE */}
                {props.id_ === 2 ? (
                  <a
                    href={t("urlCharity.1")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.1"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*2.CONNECT Charity ENDS HERE */}
                {/*3.CONSIDER Charity STARTS HERE */}
                {props.id_ === 3 ? (
                  <a
                    href={t("urlCharity.2")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.2"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*3.CONSIDER Charity ENDS HERE */}
                {/* 4. CONSUME Charity STARTS HERE */}
                {props.id_ === 4 ? (
                  <a
                    href={t("urlCharity.3")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.3"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*4. CONSUME Charity ENDS HERE */}
                {/* 5.LEARN Charity STARTS HERE */}
                {props.id_ === 5 ? (
                  <a
                    href={t("urlCharity.4")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.4"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*5.LEARN Charity ENDS HERE */}
                {/* 6.PLANT Charity STARTS HERE */}
                {props.id_ === 6 ? (
                  <a
                    href={t("urlCharity.5")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.5"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*6.PLANT Charity ENDS HERE */}
                {/* 7.TAKE A WALK Charity STARTS HERE */}
                {props.id_ === 7 ? (
                  <a
                    href={t("urlCharity.6")}
                    target="_blank"
                    rel="noreferrer"
                    type="text/html"
                  >
                    <Trans i18nKey="urlCharityName.6"></Trans>
                  </a>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/*7.TAKE A WALK Charity ENDS HERE */}
              </div>
              <ul>
                {/*1.Be Kind Resources STARTS HERE */}
                <li className="nav-link-control">
                  {props.id_ === 1 ? (
                    <a
                      href={t("urlResources.0")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.0"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*1.Be Kind resources ENDS HERE */}
                  {/*2.CONNECT resources STARTS HERE */}
                  {props.id_ === 2 ? (
                    <a
                      href={t("urlResources.1")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.1"></Trans>
                    </a>
                  ) : (
                    ""
                  )}

                  {/*2.CONNECT resources ENDS HERE */}
                  {/*3.CONSIDER resources STARTS HERE */}
                  {props.id_ === 3 ? (
                    <a
                      href={t("urlResources.2")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.2"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*3.CONSIDER resources ENDS HERE */}
                  {/* 4. CONSUME resources STARTS HERE */}
                  {props.id_ === 4 ? (
                    <a
                      href={t("urlResources.0")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.0"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*4. CONSUME resources ENDS HERE */}
                  {/* 5.LEARN resources STARTS HERE */}
                  {props.id_ === 5 ? (
                    <a
                      href={t("urlResources.3")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.3"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*5.LEARN resources ENDS HERE */}
                  {/* 6.PLANT resources STARTS HERE */}
                  {props.id_ === 6 ? (
                    <a
                      href={t("urlResources.3")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.3"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*6.PLANT resources ENDS HERE */}
                  {/* 7.TAKE A WALK resources STARTS HERE */}
                  {props.id_ === 7 ? (
                    <a
                      href={t("urlResources.4")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.4"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*7.TAKE A WALK resources ENDS HERE */}
                </li>
                <li className="nav-link-control">
                  {/*1.Be Kind resources2 STARTS HERE */}
                  {props.id_ === 1 ? (
                    <a
                      href={t("urlResources2.0")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.0"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*1.Be Kind resources2 ENDS HERE */}
                  {/*2.CONNECT resources2 STARTS HERE */}
                  {props.id_ === 2 ? (
                    <a
                      href={t("urlResources.0")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResourcesName.0"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*2.CONNECT resources2 ENDS HERE */}
                  {/*3.CONSIDER resources2 STARTS HERE */}
                  {props.id_ === 3 ? (
                    <a
                      href={t("urlResources2.1")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.1"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*3.CONSIDER resources2 ENDS HERE */}
                  {/* 4. CONSUME resources2 STARTS HERE */}
                  {props.id_ === 4 ? (
                    <a
                      href={t("urlResources2.2")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.2"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*4. CONSUME resources2 ENDS HERE */}
                  {/* 5.LEARN resources2 STARTS HERE */}
                  {props.id_ === 5 ? (
                    <a
                      href={t("urlResources2.3")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.3"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*5.LEARN resources2 ENDS HERE */}
                  {/* 6.PLANT resources2 STARTS HERE */}
                  {props.id_ === 6 ? (
                    <a
                      href={t("urlResources2.3")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.3"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*6.PLANT resources2 ENDS HERE */}
                  {/* 7.TAKE A WALK resources2 STARTS HERE */}
                  {props.id_ === 7 ? (
                    <a
                      href={t("urlResources2.4")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources2Name.4"></Trans>
                    </a>
                  ) : (
                    ""
                  )}
                  {/*7.TAKE A WALK resources2 ENDS HERE */}
                </li>
                {/*1.BE KIND resources3 STARTS HERE */}

                <li className="nav-link-control">
                  {props.id_ === 1 ? (
                    <a
                      href={t("urlResources3.0")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources3Name.0"></Trans>
                    </a>
                  ) : (
                    ""
                  )}{" "}
                  {/*1.BE KIND resources3 ENDS HERE */}
                  {/*2.CONNECT resources3 STARTS HERE */}
                  {props.id_ === 2 ? (
                    <a
                      href={t("urlResources3.1")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources3Name.1"></Trans>
                    </a>
                  ) : (
                    ""
                  )}{" "}
                  {/*2.CONNECT resources3 ENDS HERE */}
                  {/*5.LEARN resources3 STARTS HERE */}
                  {props.id_ === 5 ? (
                    <a
                      href={t("urlResources3.2")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources3Name.2"></Trans>
                    </a>
                  ) : (
                    ""
                  )}{" "}
                  {/*5.LEARN resources3 ENDS HERE */}
                  {/*6.PLANT resources2 START HERE */}
                  {props.id_ === 6 ? (
                    <a
                      href={t("urlResources3.3")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources3Name.3"></Trans>
                    </a>
                  ) : (
                    ""
                  )}{" "}
                  {/*6.PLANT resources2 ENDS HERE */}
                  {/* 7.TAKE A WALK resources2 STARTS HERE */}
                  {props.id_ === 7 ? (
                    <a
                      href={t("urlResources3.4")}
                      target="_blank"
                      rel="noreferrer"
                      type="text/html"
                    >
                      <Trans i18nKey="urlResources3Name.4"></Trans>
                    </a>
                  ) : (
                    ""
                  )}{" "}
                  {/*7.TAKE A WALK resources2 ENDS HERE */}
                </li>
                {/* Resources ENDS HERE */}
              </ul>
            </div>
          </div>
          <div className="flex-child" id="border-control">
            <h3 className="quote-heading">
              {/* 1.BE KIND PAGE Quote heading START HERE*/}
              {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                <Trans i18nKey="quoteSubheading"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
            </h3>
            <p className="quote-control">
              {/* 1.BE KIND PAGE Quote START HERE*/}
              {props.id_ === 1 ? (
                <Trans i18nKey="quote"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 1.BE KIND PAGE Quote END HERE*/}
              {/* 2.CONNECT PAGE Quote START HERE*/}
              {props.id_ === 2 ? (
                <Trans i18nKey="quote2"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 2.CONNECT PAGE Quote END HERE*/}
              {/* 3.CONSIDER THE STARS Quote START HERE */}
              {props.id_ === 3 ? (
                <Trans i18nKey="quote3"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 3.CONSIDER THE STARS Quote END HERE */}
              {/* 4.CONSUME PAGE Quote START HERE */}
              {props.id_ === 4 ? (
                <Trans i18nKey="quote4"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 4.CONSUME PAGE Quote END HERE */}
              {/* 5.LEARN PAGE Quote STARTS HERE */}
              {props.id_ === 5 ? (
                <Trans i18nKey="quote5"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 5.LEARN PAGE Quote END HERE */}
              {/* 6.PLANT PAGE Quote STARTS HERE */}
              {props.id_ === 6 ? (
                <Trans i18nKey="quote6"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 6.PLANT PAGE Quote END HERE */}
              {/* 7.TAKE A WALK PAGE Quote STARTS HERE */}
              {props.id_ === 7 ? (
                <Trans i18nKey="quote7"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 7.TAKE A WALK PAGE Quote END HERE */}
            </p>
          </div>
        </section>
        <CompleteChallengeButton onClickHandler={onClickHandler} />

        <div className="welldone-message">
          <p>{welldone}🎉</p>
        </div>
      </div>

      {/* Challenge section END HERE */}
    </>
  );
};

export default ChallengeItem;
