import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

import { useHistory } from "react-router";
import { useAuth } from "./AuthContext";
import { GET_CONTACTS, USERS_API, USER_DETAILS } from "./consts";

export const contactContext = createContext();
export const useContacts = () => {
  return useContext(contactContext);
};

const INIT_STATE = {
  contactsData: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contactsData: action.payload,
      };

    default:
      return state;
  }
};

const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();
  const { user } = useAuth();

  //////////////////////  CRUD START   ///////////////////////////

  const getContactsData = async () => {
    const res = await axios(`${USERS_API}/${window.location.search}`);

    dispatch({
      type: GET_CONTACTS,
      payload: res.data.filter((item) => item.name === user),
    });
  };

  const addContact = async (id, addedContact) => {
    await axios.patch(`${USERS_API}/${id}`, addedContact);
    getContactsData();
  };
  const editContact = async (id, editedCon) => {
    await axios.patch(`${USERS_API}/${id}`, editedCon);
    getContactsData();
  };

  const deleteContact = async (id, deletedCon) => {
    await axios.patch(`${USERS_API}/${id}`, deletedCon);
    getContactsData();
  };

  const values = {
    addContact,
    getContactsData,
    contactsData: state.contactsData,
    deleteContact,
    editContact,
  };

  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
