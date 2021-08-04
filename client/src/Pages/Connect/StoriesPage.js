import React from "react";
import { Trans, useTranslation } from "react-i18next";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";

const StoriesPageA = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="background-bee-image dark-green">
        <nav className="sidenav-container">
          <SideNav /> {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
          </div>
          {/* Translation Button END HERE */}
        </nav>
        <main>
          <span>
            <h2 className="subtitle5">{t("storiesContent.0")}</h2>
          </span>{" "}
          {/* Story 1 container START HERE */}
          <section className="story-parent-container">
            <h3 className="story-subtitle">
              {props.id_ === 1 ? (
                <Trans i18nKey="storiesContent.3"></Trans>
              ) : (
                <Trans i18nKey="storiesContent.6"></Trans>
              )}
            </h3>
            <section className="">
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.0")}</h4>
                  <article>{t("storyBlurb.0")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.7")}</h4>
                </div>
              )}

              {props.id_ === 1 ? (
                <div className="video-text-control">
                  <VideoPlayer
                    url={t("storyHref.0")}
                    width={"246px"}
                    height={"150px"}
                  />
                </div>
              ) : (
                <div className="video-text-control">
                  <VideoPlayer
                    url={t("storyHref.7")}
                    width={"246px"}
                    height={"150px"}
                  />
                </div>
              )}

              {/* Story 1 container END HERE */}
              {/* Story 2 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.1")}</h4>
                  <article>{t("storyBlurb.1")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.8")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.1")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.8")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>

              {/* Story 2 container END HERE */}
              {/* Story 3 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.2")}</h4>
                  <article>{t("storyBlurb.2")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.9")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.2")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.9")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>
              {/* Story 3 container END HERE */}
              {/* Story 4 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.3")}</h4>
                  <article>{t("storyBlurb.3")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.10")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.3")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.10")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>
              {/* Story 4 container END HERE */}
              {/* Story 5 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.4")}</h4>
                  <article>{t("storyBlurb.4")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.11")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.4")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.11")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>
              {/* Story 5 container END HERE */}
              {/* Story 6 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.5")}</h4>
                  <article>{t("storyBlurb.5")}</article>
                </div>
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.12")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.5")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.12")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>
              {/* Story 6 container END HERE */}
              {/* Story 7 container START HERE */}
              {props.id_ === 1 ? (
                <div className="story-info-container">
                  <h4>{t("story_Title.6")}</h4>
                  <article>{t("storyBlurb.6")}</article>
                </div>
              ) : (
                ""
              )}

              {props.id_ === 1 ? (
                <div className="video-container-child">
                  <div>
                    <VideoPlayer
                      url={t("storyHref.6")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* Story 7 container END HERE */}
              {/* Story 8 container START HERE  (Awaiting video content)*/}
              {props.id_ === 1 ? (
                ""
              ) : (
                <div className="story-children-blurbs">
                  <h4>{t("story_Title.13")}</h4>
                </div>
              )}
              <div className="video-text-control">
                {props.id_ === 1 ? (
                  ""
                ) : (
                  <div className="video-container-child">
                    <VideoPlayer
                      url={t("storyHref.8")}
                      width={"246px"}
                      height={"150px"}
                    />
                  </div>
                )}
              </div>
              {/* Story 8 container END HERE */}
            </section>
          </section>
        </main>
      </div>
    </>
  );
};
export default StoriesPageA;
