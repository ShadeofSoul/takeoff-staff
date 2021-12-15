import { useEffect, React, useState } from "react";
import ContactList from "../Contacts/ContactList";
import Navbar from "./Navbar";
import "../../style/contact.css";
import { useContacts } from "../../contexts/ContactContext";
import { useAuth } from "../../contexts/AuthContext";

const PersonalPage = () => {
  const { user } = useAuth();
  const { contactsData, getContactsData } = useContacts();
  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="contactList">
        <ContactList contacts={contactsData} />
      </div>
    </div>
  );
};

export default PersonalPage;
