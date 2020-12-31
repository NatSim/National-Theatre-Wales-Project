import React from "react";
import BeeStamp from "../../images/whole-beeimage.png";
import LogForm from "../../Components/Auth/LogForm";
import "../../Components/Auth/custom.css";

function Login() {
  return (
    <div>
      <h1>So what will you tell the bees today?</h1>
      <h2>Login😊</h2>
      <div />
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
