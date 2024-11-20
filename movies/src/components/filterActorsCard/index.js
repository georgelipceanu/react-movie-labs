import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterActorsCard(props) {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleSortChange = (e) => {
    handleChange(e, "sort", e.target.value);
  };

  const handleDirectionChange = (e) => {
    handleChange(e, "direction", e.target.value);
  };

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
        </Typography>
            <TextField
                sx={{...formControl}}
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={props.titleFilter}
                onChange={handleTextChange}
            />

      </CardContent>

      {/* <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select> */}
        
      <FormControl sx={{...formControl}}>
      <InputLabel id="genre-label">Sort by</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.sort || ""}
            onChange={handleSortChange}
          >
            <MenuItem value="popularity">Popularity</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{...formControl}}>
      <InputLabel id="genre-label">Direction</InputLabel>
          <Select
            labelId="direction-label"
            id="direction-select"
            defaultValue=""
            value={props.direction || ""}
            onChange={handleDirectionChange}
          >
            <MenuItem value="ascending">Ascending</MenuItem>
            <MenuItem value="descending">Descending</MenuItem>
      </Select>
      </FormControl>

      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
        
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}