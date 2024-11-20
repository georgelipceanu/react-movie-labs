import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Language from "@mui/icons-material/Language";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <Chip
            icon={<StarRate />}
            label={`Popularity: ${actor.popularity || "N/A"}`}
            sx={{ ...chip }}
          />
        <Chip label={`Birthday: ${actor.birthday || "N/A"}`} sx={{ ...chip }} />

        {actor.deathday === null ? (
          <Chip
            icon={<CheckCircleIcon />}
            label="Still Alive!"
            color="success"
            sx={{ ...chip }}
          />
        ) : (
          <Chip
            icon={<RemoveCircleIcon />}
            label={`Death Day: ${actor.deathday}`}
            color="error"
            sx={{ ...chip }}
          />
        )}

      </Paper>
      
      </>
  );
};
export default ActorDetails ;