import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useAuth } from "../../contexts/AuthContext";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import logo from "../../img/logo.svg";
import { Box, Modal, Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../style/navbar.css";

import AddContact from "../Contacts/AddContact";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
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

export default function Navbar() {
  const { user, handleLogout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className="toolBar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <img width="120px" src={logo} alt="marvel" />
              </IconButton>
            </div>
            <Typography color="textPrimary" variant="h6" gutterBottom>
              {user}
            </Typography>
          </div>

          <div>
            <IconButton onClick={handleOpen}>
              <PersonAddIcon fontSize="large" />
            </IconButton>

            <IconButton onClick={() => handleLogout()}>
              <ExitToAppIcon fontSize="large" />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AddContact />
              </Box>
            </Modal>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
