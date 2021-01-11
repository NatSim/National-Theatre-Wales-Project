import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Registration functions
function RegistrationForm(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  //POST REQUEST- This send info to server
  const sendDetailsToServer = () => {
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
              successMessage:
                "Registration successful. Redirecting to login page..",
            }));
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

  //Handles Text Input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Handles input errors
  const validate = () => {
    // let username = "";
    let usernameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!state.username || (!state.username > 5 && !state.username < 10)) {
      usernameError =
        " Invalid username ,must include between 5 and 10 characters";
      console.log(state);
    }

    if (!state.email) {
      emailError = "Email cannot be empty";
    }

    if (!state.password && !state.confirmPassword) {
      passwordError = "Password must be created";
    }

    if (state.password !== state.confirmPassword) {
      confirmPasswordError = "Password does not match above,please check";
    }

    if ((usernameError, emailError, passwordError)) {
      setState({
        usernameError,
        emailError,
        passwordError,
        confirmPasswordError,
      });
      return false;
    }
    return true;
  };

  //Handle submit(register) button
  const handleSubmitClick = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      sendDetailsToServer();
    }
  };

  return (
    <div id="card" className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <h1 className="reg-title">🐝Register😊</h1>
      <form className="reg-parent-container" onSubmit={handleSubmitClick}>
        <div className="form-group text-left">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {state.usernameError}
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="email" alt="enter email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>{state.emailError}</div>
          <div id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="password" alt="enter a password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {state.passwordError}
          </div>
        </div>
        <div className="form-group text-left">
          {/* <label htmlFor="confirmpassword">Confirm Password</label> */}
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <div style={{ fontSize: 14, color: "red" }}>
            {state.confirmPasswordError}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <Link to="/login" className="auth-route-link">
          Already a users,login here
        </Link>
      </form>
    </div>
  );
}

export default RegistrationForm;
