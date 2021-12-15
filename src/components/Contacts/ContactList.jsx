import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Box, Modal, IconButton } from "@material-ui/core";

import { useContacts } from "../../contexts/ContactContext";
import EditContact from "./EditContact";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "380px",
    backgroundColor: " rgba(250, 71, 71, 0.4)",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },

  cover: {
    width: 151,
  },
}));

const style = {
  position: "absolute",
  backgroundColor: " rgba(225, 225, 225, 0.5)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ContactList = () => {
  const [hover, setHover] = useState(true);
  const [open, setOpen] = useState(false);
  const [inx, setInx] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { contactsData, deleteContact } = useContacts();

  const classes = useStyles();

  useEffect(() => {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  }, [contactsData]);

  const handleDelete = (index, id) => {
    contactsData[0].contacts.splice(index, 1);
    deleteContact(id, contactsData[0]);
  };

  return (
    <>
      {contactsData[0]?.contacts.map((item, index) => (
        <div key={index} className=" faq contacts">
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent>
                <Typography component="h5" variant="h5">
                  {item.hero}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Name: {item.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Last name: {item.last_name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Phone: {item.phone}
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              onMouseEnter={() => setHover(false)}
              onMouseOut={() => setHover(!hover)}
              className={classes.cover}
              image={`${item.img}`}
              title="Live from space album cover"
            />
          </Card>
          <div className="answer">
            <IconButton onClick={() => handleDelete(index, contactsData[0].id)}>
              <DeleteIcon fontSize="large" color="error" />
            </IconButton>
            <IconButton
              onClick={() => {
                setInx(index);
                handleOpen();
              }}
            >
              <EditIcon fontSize="large" color="error" />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <EditContact index={inx} />
              </Box>
            </Modal>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactList;
