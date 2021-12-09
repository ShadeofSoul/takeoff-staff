import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";
import PersonalPage from "../components/PersonalPage/PersonalPage";
import { AuthContextProvider } from "../contexts/AuthContext";
import "../firebase/firebase";

const Pages = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={PersonalPage} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Pages;
