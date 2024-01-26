import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { heroSectionPrestation } from "../assets/herosectionPresation";
import { PriceComponent } from "@/components/ui/PriceComponent";
import { PriceCard } from "@/src/features/layout/PriceCard";
import { Titreh3 } from "@/src/features/layout/Titreh3";
import { ShieldPlus, Sprout, Trees } from "lucide-react";



export default function prestations() {
  return (
    <Grid justifyContent="center" width='100%'>
      <HeroSection titreh1="Mes accompagnements" imgSrc={Images.Banner[2]} imgAlt="Image alt" />
      <SectionContent
        titreTexth2="Consultations en Naturopathie"
        bodyText="Chaque individu est unique, avec ses propres besoins et objectifs. C’est pourquoi je propose une variété de consultations et d’accompagnements pour répondre à ces besoins spécifiques. Découvrez les différentes manières dont je peux vous accompagner en tant que naturopathe à Vénissieux. "
      />
      <SectionContent
        titreTexth2="Mes outils"
        bodyText="Le Détox Protocol' :

    Le traitement par le Détox Protocol’ est un moyen efficace d’élimination des toxines. Il élimine notamment les toxines articulaires des rhumatismes, des crises de gouttes, et contribue également à l’élimination des métaux lourds, des toxines issues de la pollution atmosphérique et alimentaire."
      />
      <PriceComponent>

        <PriceCard
          logo={<><Sprout size={50} color="#d48b0c" strokeWidth="1px" /></>}
          firstTitle="Accompagnement de base"
          secondTitle="inclus"
          Paragraph={[
            "1 séance détox",
            "1 bilan de vitalité et nutritionnel",
            "1 séance de suivi",
            "Disponibilité sur WhatsApp pour répondre aux questions.",
          ]}
          price={["160"]} />
          <PriceCard
            logo={<><Trees size={50} color="#d48b0c" strokeWidth="1px" /></>}
            
            firstTitle="le détox protocol"
            secondTitle="objectifs"
            Paragraph={[
              "Détoxification du foie et drainage des organes émonctoires",
              "Elimination des toxines et des déchets du corps",
              "Augmentation de la vitalité et de l’énergie",
            ]}
            price={[
              "1 séance = 40",
              "2 séances = 70",
              "3 séances = 95",
          ]}
          />
        <PriceCard
          logo={<><ShieldPlus size={50} color="#d48b0c" strokeWidth="1px" /></>}
          firstTitle="Accompagnement prenium"
          secondTitle="inclus"
          Paragraph={[
            "1 séance détox",
            "1 bilan de vitalité et nutritionnel",
            "3 séances de suivi",
            "Disponibilité sur WhatsApp pour répondre aux questions.",
          ]}
          price={["250"]} 

        />

      </PriceComponent>

    </Grid>
  )
}