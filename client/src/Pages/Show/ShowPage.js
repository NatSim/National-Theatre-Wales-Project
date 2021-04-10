import React from "react";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import "./ShowPage.css";

const ShowPage = () => {
  return (
    <>
      <SideNav />
      <Header />

      <div className="live-background-container">
        <h2 id="white-font" className="subtitle1">
          Show Programme
        </h2>
      </div>
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
