import React, { useState } from "react";
import axios from "axios";

//Registration functions
function RegistrationForm(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    usernameError: "name is empty",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  //POST REQUEST- This send info to server
  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      // props.showError(null);

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
            // redirectToLogin();
            // props.showError(null);
          } else {
            console.log("Error!"); // props.showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Error"); // props.showError("Please enter valid username and password");
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Handle submit(register) button
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      // props.showError("Passwords do not match");
      console.log("Error,passwords do not match");
    }
  };

  return (
    <div id="card" className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmitClick}>
        <div className="form-group text-left">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            aria-describedby="username"
            placeholder="Enter name"
            onChange={handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {state.usernameError}
          </div>
        </div>
        <div className="form-group text-left">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
