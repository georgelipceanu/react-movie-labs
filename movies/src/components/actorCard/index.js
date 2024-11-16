import React, { useContext  } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png';
import Avatar from '@mui/material/Avatar';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function ActorCard({ actor, action }) {
  const { favorites, addToFavorites } = useContext(ActorsContext);

  if (favorites.find((id) => id === actor.id)) {
    actor.favorite = true;
  } else {
    actor.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(actor);
  };
  

  return (
    <Card>
      <CardHeader
        avatar={

            actor.favorite && (
              <Avatar sx={{ backgroundColor: 'red' }}>
                <FavoriteIcon />
              </Avatar>
            ) 
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path

            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path
            }`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
        {action(actor)}
      
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}
