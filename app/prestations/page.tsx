import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";

export default function prestations() {
  return (
    <Grid>
    <HeroSection titreh1="Mes prestations"/>
    <SectionContent
    titreText="Comment se passe une séance ?  "
    bodyText="La première séance commence par un échange. Nous définirons vos objectifs et établirons un bilan de vitalité et nutritionnel. Nous aborderons ensemble plusieurs points tels que vos antécédents médicaux et familiaux, votre environnement, vos habitudes de vie et alimentaires, votre niveau de stress... Cette étape du bilan est importante, elle permet de faire le point sur l'état actuel de votre forme physique, émotionnelle et mentale. Elle me permet également d'apprendre à vous connaître et d'identifier la cause du déséquilibre. Durant cette séance, vous pourrez vous exprimer librement, sans crainte de jugement. Je serai à votre écoute afin de répondre au mieux à vos attentes. J'ai à cœur d'établir une relation de confiance afin d'optimiser vos résultats.

 

    A la suite de notre rencontre, je vous proposerai un accompagnement individualisé proposant différentes techniques qui répondent à vos besoins. 
    
     
    
    Certaines problématiques ne peuvent être régler en une séance, c'est pourquoi je pourrais vous proposer des séances de suivies afin d'ajuster mes recommandations et assurer un travail complet et efficace. "
    />
    <SectionContent
    titreText="Mes outils"
    bodyText="Le Détox Protocol' :

    Le traitement par le Détox Protocol’ est un moyen efficace d’élimination des toxines. Il élimine notamment les toxines articulaires des rhumatismes, des crises de gouttes, et contribue également à l’élimination des métaux lourds, des toxines issues de la pollution atmosphérique et alimentaire."
    />
    </Grid>
  )
}