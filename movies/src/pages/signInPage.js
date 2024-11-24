import React, { useState } from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid2";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleSignInEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignInPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpEmailChange = (e) => {
    setSignUpEmail(e.target.value);
  };

  const handleSignUpPasswordChange = (e) => {
    setSignUpPassword(e.target.value);
  };

  // Function to sign in an existing user
  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
    } catch (err) {
      console.error("Error signing in:", err.message);
    }
  };

  // Function to sign up a new user
  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      console.log("User signed up:", userCredential.user);
    } catch (err) {
      console.error("Error signing up:", err.message);
    }
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid size={12}>
          <Header title={"Sign In"} subHeader={true} />
        </Grid>
        <Grid container sx={{ flex: "1 1 500px" }} direction="column" alignItems="center">
          <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
            Email
          </Typography>
          <TextField
            sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
            id="sign-in-email"
            label="Email"
            value={email}
            onChange={handleSignInEmailChange}
          />
          <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
            Password
          </Typography>
          <TextField
            sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
            id="sign-in-pass"
            label="Password"
            type="password"
            value={password}
            onChange={handleSignInPasswordChange}
          />
          <Button variant="contained" onClick={signIn}>
            Sign In
          </Button>
        </Grid>

        <Grid container sx={{ flex: "1 1 500px" }} direction="column" alignItems="center">
          <Typography component="h2" variant="h3" style={{ backgroundColor: "#a8a8a8", fontFamily: "sans-serif" }}>
            Don't have an Account? Sign up!
          </Typography>

          <TextField
            sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
            id="sign-up-email"
            label="Email"
            value={signUpEmail}
            onChange={handleSignUpEmailChange}
          />
          <TextField
            sx={{ margin: 1, minWidth: 220, backgroundColor: "#7ae6a3" }}
            id="sign-up-pass"
            label="Password"
            type="password"
            value={signUpPassword}
            onChange={handleSignUpPasswordChange}
          />
          <Button variant="contained" onClick={signUp}>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInPage;
