import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Mail } from "@material-ui/icons";
import axios from "axios";
import { USERS_API } from "./consts";

const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const auth = getAuth();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
    });
  }

  const handleLogIn = () => {
    clearErrors();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorMessage);
        switch (error.code) {
          case "auth/invalid-email":
            setEmailError("Invalid username");
            break;
          case "auth/user-disabled":
          case "auth/too-many-requests":
            setPasswordError("Wrong password");
            break;
          case "auth/user-not-found":
            setEmailError("User not found");
            break;
          case "auth/wrong-password":
            setPasswordError("Wrong password");
            break;
        }
      });

    console.log(email);
  };
  const addUser = async (email) => {
    let user = {
      name: email,
      contacts: [],
    };
    console.log(user);
    const data = await axios.post(USERS_API, user);
  };

  const handleSignup = () => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        addUser(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        switch (error.code) {
          case "auth/invalid-email":
            setEmailError("Invalid username");
            break;
          case "auth/user-disabled":
          case "auth/too-many-requests":
            setPasswordError("Wrong password");
            break;
          case "auth/user-not-found":
            setEmailError("User not found");
            break;
          case "auth/weak-password":
            setPasswordError("Weak password");
            break;
        }
        // ..
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user.email);
        console.log(user.email);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    user,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignup,
    hasAccount,
    handleLogout,
    setHasAccount,
    emailError,
    passwordError,
    clearErrors,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
