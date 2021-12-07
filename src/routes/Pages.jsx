import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";
import { AuthContextProvider } from "../contexts/AuthContext";

const Pages = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Pages;
