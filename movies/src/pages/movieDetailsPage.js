import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getActors, getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorListPageTemplate from "../components/templateMovieListPage"
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  
  const { data: actors, error: actorError, isLoading: actorIsLoading, isError: actorIsError } = useQuery(
    ["actors", { id: id }],
    getActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log(movie)

  if (actorIsLoading) {
    return <Spinner />;
  }

  if (actorIsError) {
    return <h1>{actorError.message}</h1>;
  }
  console.log("Passing subHeader to MovieListPageTemplate:", true);
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
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
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;