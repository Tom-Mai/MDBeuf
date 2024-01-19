import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";

export default function prestations() {
  return (
    <Grid>
    <HeroSection/>
    <SectionContent
    titreText="HOLA "
    bodyText="OKEEEE"
    />
    </Grid>
  )
}