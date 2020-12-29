import React from "react";
import Register from "../Components/Auth/RegisterPage";
import BeeStamp from "../images/whole-beeimage.png";
import "../Components/Auth/custom.css";

/*DELETE THIS FILE*/

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
