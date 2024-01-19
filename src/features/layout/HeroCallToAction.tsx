
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
const colorBtn = "#ebba99";

const HeroCallToAction = () => {
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
            <Typography
              sx={{
               
                textAlign: "center",
                color: "white",
                whiteSpace: "pre-line",
                "@media (min-width:680px)": {},
              }}
              component='div'
              variant='h1'
            >
              Trouvez la cause de votre mal-être pour atteindre le bien-être
            </Typography>
          </ThemeProvider>
        </CardContent>
        <CardActions>
          <ThemeProvider theme={ActionButton}>
            <Button
              sx={{
                maxWidth: "19em",
                marginTop: "25px",
                padding: "2em 2em",
                backgroundColor: colorBtn,
                '&:hover':{
                    backgroundColor: '#e39d6e',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    transitionDelay:"0.1s",
               
                }
              }}
              variant='contained'
              component='a'
              href='tel:0659594229'
              size='large'
            >
              Mon appel découverte
            </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </Box>
  );
};

export default HeroCallToAction;
