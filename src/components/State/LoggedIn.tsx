import React, { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <button onClick={handleLogout}>logout</button>
      <div>user is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
}
