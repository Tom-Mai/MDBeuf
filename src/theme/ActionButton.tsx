"use client"
import { createTheme } from "@mui/material/styles";


export const ActionButton =  createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "1.5rem",
          },
        },
      },
    },
    
  });
  ActionButton.typography.h1 = {
    fontSize: "3rem",
    fontWeight: "400",
    fontFamily: "Dosis",
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "5rem",
    },
    [ActionButton.breakpoints.up("md")]: {
      fontSize: "7rem",
    },
  };