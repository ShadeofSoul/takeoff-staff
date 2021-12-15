import React, { useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "../style/auth.css";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

const avatarStyle = { backgroundColor: "#961414" };

const Auth = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    hasAccount,
    setHasAccount,
    handleSignup,
    emailError,
    passwordError,
    clearErrors,
  } = useAuth();
  const history = useHistory();

  return (
    <Grid>
      <Paper className="loginForm" elevation={10}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>{!hasAccount ? "Sign In" : "Sign Up"}</h1>
        </Grid>
        {passwordError !== "" || emailError != "" ? (
          <Alert style={{ marginBottom: 20 }} variant="filled" severity="error">
            {passwordError || emailError}
          </Alert>
        ) : null}

        <TextField
          color="secondary"
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
          required
        />

        <TextField
          style={{ marginTop: 20 }}
          color="secondary"
          label="Password"
          placeholder="Enter password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="secondary" />}
          label="Remember me"
        />

        {hasAccount ? (
          <>
            <Button
              className="loginBtn"
              type="submit"
              color="secondary"
              variant="contained"
              fullWidth
              onClick={() => handleSignup()}
            >
              Sign up
            </Button>

            <Typography>
              {" "}
              Have an account ?
              <Link
                onClick={() => {
                  setHasAccount(!hasAccount);
                  clearErrors();
                }}
                style={{ color: "#fff" }}
              >
                Sign In
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <Button
              className="loginBtn"
              type="submit"
              color="secondary"
              variant="contained"
              fullWidth
              onClick={() => handleLogIn()}
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Don't have an account ?
              <Link
                onClick={() => {
                  setHasAccount(!hasAccount);
                  clearErrors();
                }}
                style={{ color: "#fff" }}
              >
                Sign Up
              </Link>
            </Typography>
          </>
        )}
      </Paper>
    </Grid>
  );
};

export default Auth;
