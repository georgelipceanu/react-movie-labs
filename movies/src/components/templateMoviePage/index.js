import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ActorListPageTemplate from "../templateMovieListPage"
import AddToFavoritesIcon from "../cardIcons/addToFavorites";
import { getActors } from "../../api/tmdb-api";

const TemplateMoviePage = ({ movie, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  const { data: actors, error: actorError, isLoading: actorIsLoading, isError: actorIsError } = useQuery(
    ["actors", { id: movie.id }],
    getActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  if (actorIsLoading) {
    return <Spinner />;
  }

  if (actorIsError) {
    return <h1>{actorError.message}</h1>;
  }

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList
                sx={{
                    height: "100vh",
                }}
                cols={1}
            >
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid size={{xs: 9}}>
          {children}
          <ActorListPageTemplate
            title="Movie Cast"
            actors={actors.cast} // Pass only the cast array
            isMovie={false}
            subHeader={true} // Correctly named
            action={(movie) => {
              return (
              <>
              <AddToFavoritesIcon movie={movie} />
              </>
              );
            
            }}
            />
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;