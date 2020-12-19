import React from "react";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";

function AuthenticationPage() {
  return (
    <div>
      <h1>
        <Login />
      </h1>
      <h1>
        <SignUp />
      </h1>
    </div>
  );
}

export default AuthenticationPage;
