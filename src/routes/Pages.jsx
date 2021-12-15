import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Main from "../components/Main";
import { AuthContextProvider } from "../contexts/AuthContext";
import ContactContextProvider from "../contexts/ContactContext";
import "../firebase/firebase";

const Pages = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ContactContextProvider>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </ContactContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Pages;
