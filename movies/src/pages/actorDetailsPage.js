import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
import { getActor, getMoviesByActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieListPageTemplate from "../components/templateMovieListPage"
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";

const ActorPage = (props) => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  const { data: movies, error: moviesError, isLoading: moviesIsLoading, isError: moviesIsError } = useQuery(
    ["movies", { id: id }],
    getMoviesByActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (moviesIsLoading) {
    return <Spinner />;
  }

  if (moviesIsError) {
    return <h1>{moviesError.message}</h1>;
  }

  console.log(movies);
  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
          <MovieListPageTemplate
            title="Movies Featured In"
            movies={movies.results} // Pass only the cast array
            isMovie={true}
            action={(movie) => {
              return (
              <>
              <AddToFavoritesIcon movie={movie} />
              <AddToWatchListIcon movie={movie} />
              </>
              );
            
            }}
            />
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;