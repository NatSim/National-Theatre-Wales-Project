import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NTWlogo from "./Components/NTWlogo";
import LargeImage from "./Components/LargeImage";
// import SmallButton from "./Components/Button";

// SERVICES
import userService from "./services/userService";

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
        <li key={user._id}>
          <h3>
            {`${user.first_name} 
          ${user.last_name}`}
          </h3>
          <p>{user.location}</p>
        </li>
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
    </div>
  );
}

export default App;
