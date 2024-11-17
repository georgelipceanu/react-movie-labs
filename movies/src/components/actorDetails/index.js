import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      </Paper>
      
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${actor.runtime} min.`} />
        <li>
          <Chip
            label={`Place of Birth: ${actor.place_of_birth || "N/A"}`}
            sx={{ ...chip }}
          />
        </li>
        <Chip
          icon={<StarRate />}
          label={`${actor.vote_average} (${actor.vote_count}`}
        />
        <li>
          <Chip label={`Birthday: ${actor.birthday || "N/A"}`} sx={{ ...chip }} />
        </li>

        <Chip
          icon={<Language />}
          label={`${actor.original_language}`}
        />
      </Paper>
      
      </>
  );
};
export default ActorDetails ;