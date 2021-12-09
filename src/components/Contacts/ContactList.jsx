import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "380px",
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

const ContactList = () => {
  const [hover, setHover] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="contacts">
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Captain America
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Name: Сти́вен
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Last name: Ро́джерс
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Phone: +1 (412) 234-3453
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          onMouseEnter={() => setHover(false)}
          onMouseOut={() => setHover(!hover)}
          className={classes.cover}
          image={
            hover
              ? "https://static.tildacdn.com/tild3830-6162-4136-b765-363163613762/4cffae504d4426f182bd.jpg"
              : "https://pbs.twimg.com/media/EV0JJA6VAAASXeL.jpg"
          }
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default ContactList;
