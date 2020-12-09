import React, { useState, useEffect } from "react";
import NTWlogo from "./components/NTWlogo";
import LargeImage from "./components/LargeImage";

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
        {/* <li key={user._id}>
          <h3>
            {`${user.first_name} 
          ${user.last_name}`}
          </h3>
          <p>{user.location}</p>
        </li> */}
        <NTWlogo />
        <LargeImage />
      </div>
    );
  };

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
