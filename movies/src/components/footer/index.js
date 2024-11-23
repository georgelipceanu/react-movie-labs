import React from "react";
import { Paper, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = ({ pageNum, setCurrentPage }) => {
  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      style={{
        backgroundColor: "#1c3626", 
        color: "#7ae6a3", 
        fontFamily: "'Playfair Display', 'Poppins', sans-serif", 
      }}
    >
      <IconButton 
        aria-label="go back" 
        onClick={() => setCurrentPage(pageNum - 1)}
      >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        Page {pageNum}
      </Typography>

      <IconButton 
        aria-label="go forward" 
        onClick={() => setCurrentPage(pageNum + 1)}
      >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Footer;
