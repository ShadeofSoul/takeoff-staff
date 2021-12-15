import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Auth from "./Auth";
import PersonalPage from "./PersonalPage/PersonalPage";

const Main = () => {
  const { user } = useAuth();
  return <>{!user ? <Auth /> : <PersonalPage />}</>;
};

export default Main;
