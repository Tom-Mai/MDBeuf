
import * as React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ActionButton } from "@/src/theme/ActionButton";
import { Titreh1 } from "./Titreh1";
import Link from "next/link";
const colorBtn = "#5C7A7D";
interface H1Props {
  titreh1 : React.ReactNode;
}
const HeroCallToAction = ({titreh1}:H1Props) => {
  return (
    <Box
      position='absolute'
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <Card
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <ThemeProvider theme={ActionButton}>
            <Titreh1 textContent={titreh1} />    
          </ThemeProvider>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={ActionButton}>
           <Link href='/prestations'> 
           <Button
              sx={{
                maxWidth: "19em",
                marginTop: "25px",
                padding: "2em 2em",
                backgroundColor: colorBtn,
                '&:hover':{
                    backgroundColor: '#c87c50',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    transitionDelay:"0.3s ease",
               
                }
              }}
              variant='contained'
              size='large'
            >
              RÉSERVER UNE CONSULTATION
            </Button>
            </Link>
          </ThemeProvider>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HeroCallToAction;
