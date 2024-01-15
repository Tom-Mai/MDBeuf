import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Titreh2 } from "./Titreh2";
import Image, { StaticImageData } from "next/image";

interface SectionContentProps {
  imgSrc?:{
    src: StaticImageData;
    alt: string;
  };
  bodyText?: string;
  titreText?: string;
  imgToLeft?: boolean;
}
export const SectionContent = ({ imgSrc, bodyText, titreText, imgToLeft }:SectionContentProps ) => {
    const textComponent = (
        <Grid item xs={12} lg={imgSrc ? 6 : 12}>
            {bodyText &&
                <Typography variant='body1' sx={{
                    marginTop: '20px',
                    lineHeight: "1.35",
                    fontSize: "1.37rem",
                    fontWeight: "700",
                    textAlign: "justify",
                }}>
                    {bodyText}
                </Typography>}
        </Grid>
    );
  
    const imgComponent = imgSrc && 
        <Grid item  sx={{
            maxWidth:'400px',
            margin:'auto',
            "@media (max-width:1200px)":{
            width: "100%",
            justifyContent: "center",            
        },}}>
       <Image src={imgSrc.src} alt={imgSrc.alt} layout='responsive' />

        </Grid>;

    return (
        <Box
            sx={{
                padding: "25px",
                marginX: "auto",
                "@media (min-width:1100px)": {
                    maxWidth: "1100px",
                },
            }}
        >
            {titreText && <Titreh2 textContent={titreText} />}
            <Grid container spacing={2} sx={{justifyContent:'space-evenly'}}>
                {imgToLeft ? imgComponent : textComponent}
                {imgToLeft ? textComponent : imgComponent}
            </Grid>
        </Box>
    );
};
