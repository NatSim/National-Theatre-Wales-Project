import React, { useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import "../UserAccount/UserAccountPage.css";
import * as CgIcons from "react-icons/cg";

/* User Account Details */
function UserAccountPage() {
  //Header Profile icon/path
  const loginLink = "/profile";
  const loginIcon = <CgIcons.CgProfile className="profile-svg" />;

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  //POST REQUEST- This send info to server code runs when someone submits form
  const updateAccountDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      const payload = {
        username: state.username,
        email: state.email,
        password: state.password,
      };

      axios
        .post("http://localhost:5000/register", payload)
        .then(function (response) {
          if (response.status === 201) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Account details updated successfull",
            }));
            console.log("Successful");
          } else {
            console.log("Error!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Error"); // props.showError("Please enter valid username and password");
    }
  };

  return (
    <>
      <Header Link={loginLink} Icon={loginIcon} />
      <div
        id="card"
        className="card col-12 col-lg-4 login-card mt-2 hv-center1"
      >
        <h1 className="reg-title">My Details</h1>
        <form className="reg-parent-container">
          <div className="user-label-control">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="username"
              placeholder="Enter Username"
              //   onChange={handleChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {state.usernameError}
            </div>
          </div>
          <div className="user-label-control">
            <label htmlFor="email" alt="enter email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              // onChange={handleChange}
            />
            {/* <div style={{ fontSize: 14, color: "red" }}>{state.emailError}</div> */}
            <div id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="user-label-control">
            <label htmlFor="password" alt="enter a password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              // onChange={handleChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {/* {state.passwordError} */}
            </div>
          </div>
          <div className="form-group text-left">
            {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              //   onChange={handleChange}
            />
            <div style={{ fontSize: 14, color: "red" }}>
              {/* {state.confirmPasswordError} */}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {state.isToggleOn ? "Save Changes" : "Edit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default UserAccountPage;
