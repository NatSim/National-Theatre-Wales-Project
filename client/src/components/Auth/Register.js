import React from "react";
import Header from "./Header";
import Form from "./Form";

function Register() {
  return (
    <div className="form-container">
      <div className="header">
        <Header />
      </div>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default Register;
