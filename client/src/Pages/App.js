import React, { useState, useEffect } from "react";
import NTWlogo from "../Components/NTWlogo";
import LargeImage from "../Components/LargeImage";
import Welcome from "./LandingPage2";
import Story from "./LandingPage3";
import Start from "./LandingPage4";

// SERVICES
import userService from "../services/userService";

function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getusers();
    }
  });

  const getusers = async () => {
    let res = await userService.getAll();
    setusers(res);
  };

  const renderUser = () => {
    return (
      <div>
        {/* <li key={user._id}>
          <h3>
            {`${user.first_name} 
          ${user.last_name}`}
          </h3>
          <p>{user.location}</p>
        </li> */}
      </div>
    );
  };

  return (
    <div>
      {/* <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul> */}
      <NTWlogo />
      <LargeImage />
      <Welcome />
      <Story />
    </div>
  );
}

export default App;
