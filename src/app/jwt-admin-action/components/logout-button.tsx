"use client";

import { logout } from "../actions/auth";

//Destroy session button
export const LogOutButton: React.FC = () => {
  async function handleClick() {
    await logout();
  }
  return <button onClick={handleClick}>Log out</button>;
};