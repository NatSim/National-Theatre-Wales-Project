import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Nav/SideNav";
import "./ShowPage.css";
import Button from "react-bootstrap/Button";

const NavButton = (props) => {
  return (
    //Reusable Nav button component
    <Link to={props.link}>
      <Button id={props.buttonColor} className="default-button">
        {props.children}
      </Button>
    </Link>
  );
};

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
        <div className="nav-container-control">
          <ul>
            <li>
              <NavButton link={"/simpleacts"} buttonColor={"simple-button"}>
                Simple Acts
              </NavButton>
            </li>
            <li>
              <NavButton link={"/beach"} buttonColor={"blue-button"}>
                The Beach
              </NavButton>
            </li>
            <li>
              <NavButton link={"/castle"} buttonColor={"green-button"}>
                The Castle
              </NavButton>
            </li>
            <li>
              <NavButton link={"/monologues"} buttonColor={"pink-button"}>
                Monologues
              </NavButton>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShowPage;
