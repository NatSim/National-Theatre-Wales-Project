import React from "react";
import Form from "./RegForm";
import BeeStamp from "../../images/whole-beeimage.png";
import "../Auth/custom.css";

function Register() {
  return (
    <div>
      <h1>Register😊</h1>
      <section>
        <Form />
      </section>
      <figure className="image-container">
        <img className="bee-stamp" src={BeeStamp} alt="Bee" />
      </figure>
    </div>
  );
}

export default Register;
