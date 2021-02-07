import React from "react";
import Logo from "../../../images/logo.svg";
import "./NTWlogo.css";

//NTW Logo Component
const NTWlogo = () => (
  <div className="flex-container">
    <img className="ntw-main" src={Logo} alt="Logo" />
  </div>
);

export default NTWlogo;
