import React from "react";
import Register from "../Components/Auth/Register";
import BeeStamp from "../images/whole-beeimage.png";
import "../Components/Auth.css";

// import Login from "../Components/Auth/Login";

const AuthenticationPage = () => {
  return (
    <div>
      <Register />
      <figure className="image-container">
        <img className="bee-stamp" src={BeeStamp} alt="Bee" />
      </figure>
    </div>
  );
};

export default AuthenticationPage;
