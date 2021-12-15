import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

import SaveIcon from "@material-ui/icons/Save";

import { useContacts } from "../../contexts/ContactContext";

export default function EditContact({ index }) {
  const { contactsData, editContact } = useContacts();

  const [contact, setContact] = useState(contactsData[0].contacts[index]);

  const handleInp = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  };
  const handleEdit = () => {
    contactsData[0].contacts[index] = contact;
    editContact(contactsData[0].id, contactsData[0]);
  };

  return (
    <div className="addContact">
      <div>
        <TextField
          name="hero"
          onChange={(e) => handleInp(e)}
          id="standard-basic"
          label="Hero name"
          value={contact.hero}
          variant="standard"
        />
        <TextField
          name="name"
          onChange={(e) => handleInp(e)}
          id="standard-basic"
          label="Name"
          value={contact.name}
          variant="standard"
        />
        <TextField
          name="last_name"
          onChange={(e) => handleInp(e)}
          id="standard-basic"
          value={contact.last_name}
          label="Last Name"
          variant="standard"
        />
        <TextField
          onChange={(e) => handleInp(e)}
          name="phone"
          id="standard-basic"
          label="Phone Number"
          value={contact.phone}
          variant="standard"
        />
        <TextField
          onChange={(e) => handleInp(e)}
          name="img"
          id="standard-basic"
          value={contact.img}
          label="Image link"
          variant="standard"
        />
        <Button
          style={{ marginTop: 20 }}
          onClick={handleEdit}
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </Button>
      </div>
      <img width={200} src={contact.img} alt="" />
    </div>
  );
}
