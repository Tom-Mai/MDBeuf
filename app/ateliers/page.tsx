import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";

const ateliers = () => {
  return (
    <Grid>
      <HeroSection
        titreh1={"Mes Ateliers"}
        imgSrc={Images.Banner[0]}
        imgAlt='Ateliers de NAturopathie'
      />
      <Grid className='wrapper'>
        <SectionContent
          isHorizontalLayout
          titleH2={`Ateliers sur la Nutrition pour Enfants`}
        />
        <SectionContent
          h3Theme
          titleH3={`Découvrir la Nutrition de manière Ludique`}
          textContent={`Mes ateliers sont conçus pour initier les enfants au monde passionnant de la nutrition de manière ludique et éducative. Je crois fermement que des habitudes alimentaires saines peuvent être inculquées dès le plus jeune âge.`}
        />
        <SectionContent titleH3={`Objectifs des Ateliers`} />
        <SectionContent
          h3Theme
          isTextCentered
          titleH3={`Éducation Nutritionnelle:`}
          textContent={`Faire découvrir les principes de base de la nutrition de manière adaptée à l'âge.`}
        />

        <SectionContent
          h3Theme
          isTextCentered
          titleH3={`Amélioration des Habitudes Alimentaires:`}
          textContent={`Encourager des choix alimentaires sains et équilibrés.`}
        />
        <SectionContent
          h3Theme
          isTextCentered
          titleH3={`Plaisir de Manger Sainement:`}
          textContent={`Créer une relation positive avec la nourriture.`}
        />
      </Grid>
    </Grid>
  );
};
export default ateliers;
