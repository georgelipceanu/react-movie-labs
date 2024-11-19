import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ActorFilterCard from "../filterActorsCard";
import MovieList from "../movieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, actors, title, action, isMovie=true, subHeader=false }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [startDate, setStartDate] = useState(""); 
  const [endDate, setEndDate] = useState(""); 
  console.log("Subheader1: ",subHeader);

  const displayedMovies = isMovie
  ? movies
      .filter((m) => {
        return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
      .filter((m) => {
        return genreId > 0 ? m.genre_ids.includes(genreId) : true;
      })
      .filter((m) => {
        return startDate ? new Date(m.release_date) >= new Date(startDate) : true;
      })
      .filter((m) => {
        return endDate ? new Date(m.release_date) <= new Date(endDate) : true;
      })
  : movies;

  const displayedActors = !isMovie
    ? actors.filter((a) => {
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
    : actors;

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "startDate") setStartDate(value); 
    else if (type === "endDate") setEndDate(value); 
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} subHeader={subHeader}/>
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        
      {isMovie ? (
          <Grid
            key="find"
            size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
            sx={{ padding: "20px" }}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              startDate={startDate}
              endDate={endDate}
            />
          </Grid>
        ) : (
          <Grid
            key="find"
            size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
            sx={{ padding: "20px" }}
          >
            <ActorFilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              startDate={startDate}
              endDate={endDate}
            />
          </Grid>

        )}
        {isMovie ? (
          <MovieList action={action} movies={displayedMovies}></MovieList>
        ) : (
          <ActorList action={action} actors={displayedActors}></ActorList>
        )}
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;