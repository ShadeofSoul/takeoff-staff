import React, { createContext, useContext } from "react";

const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>;
};
