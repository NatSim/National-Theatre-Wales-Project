import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Login functions
const LoginForm = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  //POST REQUEST - This send req to server to confirm entered user info(exists) & create a session
  const sendDetailsToServer = () => {
    console.log(state);
    if (state.email.length && state.password.length) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios
        .post("http://localhost:5000/login", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "User exists.Login successful. Redirecting to home page..",
            }));
            console.log("Successful!");
          } else {
            console.log("Error!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Error,username or password is incorrect!");
    }
  };

  //Handle Text input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Handles input errors
  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!state.email) {
      emailError = "Email cannot be empty";
    }

    if (!state.password) {
      passwordError = "Password cannot be empty";
    }

    if ((emailError, passwordError)) {
      setState({
        emailError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  //Handle submit(login) button
  const handleSubmitClick = (event) => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      sendDetailsToServer();
    }
  };

  return (
    <div id="card" className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <h1 className="reg-title">🐝Login😊</h1>
      <h2>So what will you tell the bees today?</h2>
      <form className="reg-parent-container" onSubmit={handleSubmitClick}>
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
        </div>
        <div className="form-group text-left">
          <label htmlFor="password" alt="enter password">
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

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
        <br />
        <Link>forgot password here</Link>
        <br />
        <Link to="/register" className="auth-route-link">
          Register
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
