import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useContacts } from "../../contexts/ContactContext";
import SaveIcon from "@material-ui/icons/Save";

export default function AddContact() {
  const { contactsData, getContactsData, addContact } = useContacts();
  const [addedCon, setAddedCon] = useState(contactsData[0]);

  const [contact, setContact] = useState({
    name: "",
    hero: "",
    last_name: "",
    img: "",
    phone: "",
  });
  const handleClick = async (contact) => {
    contactsData[0].contacts.push(contact);
    console.log(contactsData[0].id);
    setAddedCon(contactsData);
    console.log(addedCon);
    addContact(contactsData[0].id, addedCon);
  };

  const handleInp = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  };

  return (
    <div className="addContact">
      <div>
        <TextField
          name="hero"
          onChange={handleInp}
          id="standard-basic"
          label="Hero name"
          variant="standard"
        />
        <TextField
          name="name"
          onChange={handleInp}
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          name="last_name"
          onChange={handleInp}
          id="standard-basic"
          label="Last Name"
          variant="standard"
        />
        <TextField
          onChange={handleInp}
          name="phone"
          id="standard-basic"
          label="Phone Number"
          variant="standard"
        />
        <TextField
          onChange={handleInp}
          name="img"
          id="standard-basic"
          label="Image link"
          variant="standard"
        />
        <Button
          style={{ marginTop: 20 }}
          onClick={() => handleClick(contact)}
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </Button>
      </div>
      <img
        width={200}
        src="https://cdn.shopify.com/s/files/1/2123/8425/products/49367794-LRG_530x.jpg?v=1578660930"
        alt=""
      />
    </div>
  );
}
