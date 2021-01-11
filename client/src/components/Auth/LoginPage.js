import React from "react";
import BeeStamp from "../../images/whole-beeimage.png";
import LogForm from "./LogForm";
import "./custom.css";

function Login() {
  return (
    <div>
      <section className="card-container">
        <LogForm />
      </section>
      <figure className="image-container">
        <img className="bee-stamp" src={BeeStamp} alt="Bee" />
      </figure>
    </div>
  );
}

export default Login;
