import { createContext } from "react";
import { useState } from "react";
export const globalStore = createContext();
const MainStore = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const base_url = "http://localhost:1337/api";

  const data = {
    token,
    setToken,
    user,
    setUser,
    base_url,
  };
  return <globalStore.Provider value={data}>{children}</globalStore.Provider>;
};
export { MainStore };
