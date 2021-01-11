import React from "react";
import RegForm from "./RegForm";
import BeeStamp from "../../images/whole-beeimage.png";
import "./custom.css";

function Register() {
  return (
    <div>
      <section className="card-container">
        <RegForm />
      </section>
      <figure className="image-container">
        <img className="bee-stamp" src={BeeStamp} alt="Bee" />
      </figure>
    </div>
  );
}

export default Register;
