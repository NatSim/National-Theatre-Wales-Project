import React from "react";
//import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import "./ShowPage.css";
//import Button from "react-bootstrap/Button";
import * as CgIcons from "react-icons/cg";

// const NavButton = (props) => {
//   return (
//     //Reusable Nav button component
//     <Link to={props.link}>
//       <Button id={props.buttonColor} className="default-button">
//         {props.children}
//       </Button>
//     </Link>
//   );
// };

function ShowPage() {
  //Header Profile icon/path
  const profileLink5 = "/profile";
  const profileIcon5 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={profileLink5} Icon={profileIcon5} />

      <div className="live-background-container">
        <h2 className="subtitle1">Show Programme</h2>
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
}

export default ShowPage;
