import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "amol",
      email: "amol.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <div>
        <button onClick={handleLogin}>log in</button>
        <button onClick={handleLogout}>logout</button>
        <div>user name is {user?.name}</div>
        <div>user email is {user?.email} </div>
      </div>
    </div>
  );
}
