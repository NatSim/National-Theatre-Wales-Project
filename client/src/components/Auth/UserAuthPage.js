import React, { useState } from "react";
import Axios from "axios";
import "./UserAuth.css";

const UserAuthPage = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:5000/register", {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("User data posted!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <input
            type="text"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          ></input>
          <button onClick={register}>Register</button>
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
