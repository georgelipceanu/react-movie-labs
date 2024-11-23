

import { createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

const CustomTheme = createTheme({
  palette: {
    
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#88fcb9"
    },
    background: {
      default: "#242424"
    },

    card: {
        main: "#1c3626"
    }
    
  },
  
    typography: {
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",
      h1: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      },
      body1: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
  
  
});

export default CustomTheme