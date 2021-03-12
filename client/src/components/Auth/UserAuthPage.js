import React, { useState } from "react";

import "./UserAuth.css";

const UserAuthPage = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  return (
    <>
      <div>
        <div>
          <h1>Registration</h1>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          ></input>
          <label>Email</label>
          <input type="text"></input>
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          ></input>
          <button>Register</button>
        </div>

        <div>
          <h1>Login</h1>
          <input type="text" placeholder="Username here"></input>
          <input type="password" placeholder="Password here"></input>
        </div>
      </div>
    </>
  );
};

export default UserAuthPage;
