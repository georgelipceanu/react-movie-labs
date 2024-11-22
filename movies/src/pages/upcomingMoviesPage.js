import React, {useState} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchList from '../components/cardIcons/addToWatchList'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { Pagination } from "@mui/material";

const UpcomingMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const {  data, error, isLoading, isError }  = useQuery(
    ['upcoming', { page: currentPage }], 
    getUpcomingMovies
  );
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMovies = movies.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
      movies={paginatedMovies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchList movie={movie} />
          </>
          );
      }}
    />
    <Pagination
        count={Math.ceil(movies.length / itemsPerPage)} 
        page={currentPage}
        onChange={handlePageChange}
        color="secondary"
      />
    </>

  );
};
export default UpcomingMoviesPage;