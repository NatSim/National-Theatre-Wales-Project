import React from "react";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Nav/SideNav";
import "./ShowPage.css";

function ShowPage() {
  return (
    <>
      <SideNav />
      <Header />
      <div>
        <h1 className="live-title">Live Performance</h1>
      </div>
      <div className="live-background-container">
        <span>
          Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan.{" "}
        </span>
      </div>
    </>
  );
}

export default ShowPage;
