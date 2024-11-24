import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ActorFilterCard from "../filterActorsCard";
import MovieList from "../movieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";
import Footer from "../footer";
import { Typography } from "@mui/material";

function MovieListPageTemplate() {

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={"Sign In"} subHeader={true}/>
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
      <Typography component="h2" variant="h3" style={{backgroundColor: "#a8a8a8", 
      fontFamily: " sans-serif",} }>
        Overview
      </Typography>
      </Grid>
    </Grid>
    
  );
}
export default MovieListPageTemplate;