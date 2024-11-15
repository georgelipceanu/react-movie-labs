import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PageTemplate from '../components/templateMovieListPage';
import { getMovie } from "../api/tmdb-api"; 
import { getMovieRecommendations } from "../api/tmdb-api"; 
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Spinner from '../components/spinner';
import { useLocation } from "react-router-dom";
import AddToWatchList from "../components/cardIcons/addToWatchList";

const RecommendedPage = () => {
 // const { id } = useParams(); // Capture the movie id from the URL
  const location = useLocation();
  const movie = location.state.movie;

  const { data: recommendationsData, error: recommendationsError, isLoading: recommendationsLoading, isError: isRecommendationsError } = useQuery(
    ['recommendations', { id: movie.id }],
    getMovieRecommendations,
    { enabled: !!movie }
  );
  if (recommendationsLoading) {
    return <Spinner />
  }

  if (isRecommendationsError) {
    return <h1>{recommendationsError.message}</h1>
  }  

  const movies = recommendationsData.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  // console.log("Movie ID:", movie.id);
  // console.log("Movie Data:", movie);
  // console.log("Recommendations Data:", recommendationsData); //debugging



  return (
    <PageTemplate
      title="Recommended Movies"
      //movie={movie}
      movies={movies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchList movie={movie} />
          </>
          );
      }}
    />
  );
};

export default RecommendedPage;
