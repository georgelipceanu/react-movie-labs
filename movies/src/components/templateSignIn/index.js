import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid2";
import Footer from "../footer";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function SignInTemplate() {

    const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "#7ae6a3"
  };

  return (
    <>
    <Grid container direction="column" alignItems="center">
      <Grid size={12}>
        <Header title={"Sign In"} subHeader={true}/>
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}} direction="column" alignItems="center">
      <Typography component="h2" variant="h3" style={{backgroundColor: "#a8a8a8", 
      fontFamily: " sans-serif",} }>
        Email
      </Typography>
      <TextField
                sx={{...formControl}}
                id="sign-in-email"
                label="Email"
            />
            <Typography component="h2" variant="h3" style={{backgroundColor: "#a8a8a8", 
      fontFamily: " sans-serif",} }>
        Password
      </Typography>
      <TextField
                sx={{...formControl}}
                id="sign-in-pass"
                label="Password"
                
            />
        <Button 
          variant="contained"> Sign In </Button>
      </Grid>

      
      
    </Grid>

    <Grid container sx={{flex: "1 1 500px"}} direction="column" alignItems="center">
      <Typography component="h2" variant="h3" style={{backgroundColor: "#a8a8a8", 
      fontFamily: " sans-serif",} }>
        Don't have an Account? Sign up!
      </Typography>

      <TextField direction="column" alignItems="center"
                sx={{...formControl}}
                id="sign-in-email"
                label="Email"
            />
            
      <TextField direction="column" alignItems="center"
                sx={{...formControl}}
                id="sign-in-pass"
                label="Password"
                
            />
        <Button  direction="column" alignItems="center"
          variant="contained"> Sign Up </Button>
      
      </Grid>

      
      
    </>
  );
}
export default SignInTemplate;