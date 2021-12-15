import { useEffect, React } from "react";
import ContactList from "../Contacts/ContactList";
import Navbar from "./Navbar";
import "../../style/contact.css";
import { useContacts } from "../../contexts/ContactContext";

const PersonalPage = () => {
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
