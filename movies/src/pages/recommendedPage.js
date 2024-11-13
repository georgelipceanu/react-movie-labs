import React, { useContext } from "react";
import { useQuery } from 'react-query';
import PageTemplate from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";
import { getMovieRecommendations } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { useLocation } from "react-router-dom";
import { getMovie } from "../api/tmdb-api";

const RecommendedPage = (props) => {
  const location = useLocation();
  const movieId = location.state.movie.id;

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getMovie
  );

  const { data: recommendationsData } = useQuery(
    ['recommendations', { id: movie.id }],
    getMovieRecommendations,
  );

  const movies = recommendationsData.results;

  return (
    <PageTemplate
      title="Recommended Movies"
      //movie={movie}
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default RecommendedPage;