import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { heroSectionPrestation } from "../assets/herosectionPresation";
import { PriceComponent } from "@/components/ui/PriceComponent";
import { PricePaper } from "@/src/features/layout/PricePaper";



export default function prestations() {
  return (
    <Grid justifyContent="center" width='100%'>
    <HeroSection titreh1="Mes accompagnements" imgSrc={Images.Banner[2]} imgAlt="Image alt"/>
    <SectionContent
    titreTexth2="Consultations en Naturopathie"
    bodyText="Chaque individu est unique, avec ses propres besoins et objectifs. C’est pourquoi je propose une variété de consultations et d’accompagnements pour répondre à ces besoins spécifiques. Découvrez les différentes manières dont je peux vous accompagner en tant que naturopathe à Vénissieux. "
    />
    <SectionContent
    titreTexth2="Mes outils"
    bodyText="Le Détox Protocol' :

    Le traitement par le Détox Protocol’ est un moyen efficace d’élimination des toxines. Il élimine notamment les toxines articulaires des rhumatismes, des crises de gouttes, et contribue également à l’élimination des métaux lourds, des toxines issues de la pollution atmosphérique et alimentaire."
    />
    <PriceComponent textContent="test111"/>
  
    </Grid>
  )
}