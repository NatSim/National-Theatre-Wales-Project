import React, { useState } from "react";
import axios from "axios";
// import "../Auth/custom.css";

//Login functions
function LoginForm(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  //POST REQUEST - This send req to server to confirm entered user info(exists) & create a session
  const sendDetailsToServer = () => {
    console.log("SHOW!", state);
    if (state.email.length && state.password.length) {
      console.log("SHOW!");
      const payload = {
        username: state.email,
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  //Handle submit(login) button
  const handleSubmitClick = (e) => {
    e.preventDefault();

    sendDetailsToServer();
  };

  return (
    <div id="card" className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmitClick}>
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
        </div>
        <div className="form-group text-left">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
        <div>forgot password here</div>
      </form>
    </div>
  );
}

export default LoginForm;