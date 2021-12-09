import React from "react";
import ContactList from "../Contacts/ContactList";
import Navbar from "./Navbar";
import "../../style/contact.css";

const PersonalPage = () => {
  return (
    <div>
      <Navbar />
      <div className="contactList">
        <ContactList />
      </div>
    </div>
  );
};

export default PersonalPage;
