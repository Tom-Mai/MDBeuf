import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { cp } from "fs";
import { Birthstone } from "next/font/google";
import { MyHerosSectionImageAbout } from "../assets/MyHeroSectionImageAbout";

const AgeCalcul = () => {
    const today = new Date();
    const BirthDate = new Date("1995-06-09");
    
    let age = today.getFullYear() - BirthDate.getFullYear();
    let m = today.getMonth() - BirthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < BirthDate.getDate())){
        age--;
    }
    return age;
};

const Aboutme = () => {
    const age = AgeCalcul();
    return (<Grid>
        <HeroSection titreh1="Qui suis-je ?" imgSrc={Images.Banner[0]} imgAlt="image qui suis-je"/>
        <Grid className="wrapper">
        <SectionContent isHorizontalLayout isImageRounded 
            // eslint-disable-next-line react/no-unescaped-entities
            titleH2={<>Maurine DuBeuf {age} ans</> }
            titleH3={`À propos de moi`}h3Theme alignH3
            textContent={`Je suis une fervente adepte du bien-être au naturel. Dotée d'un caractère chaleureux, ma vocation est d'accompagner et d'aider autrui. Ma passion pour la nutrition m'a menée à obtenir une licence en Sciences pour la santé, suivie d'un master en Nutrition Humaine à Nantes. Mon voyage académique m'a même conduit au Québec le temps de mon mémoire de recherche.

            Je suis également fière d'être "Heilpraktiker", un titre de naturopathe reconnu en Allemagne, où seuls les titulaires peuvent exercer certaines pratiques thérapeutiques. Formée à Ferney Voltaire, je suis prête à vous guider sur le chemin du bien-être.`}
            imgSrc={Images.Maurinedb[0]} profileSize
            />
            <SectionContent titleH3={`Mes diplômes :`} h3Theme alignH3 textContent={`- HEILPRAKTIKER CERS - TA FORMATION FERNEY VOLTAIRE
            - MASTER NUTRITION HUMAINE - UNIVERSITÉ NANTES`}/>
</Grid>
    </Grid>
    
    )
}
export default Aboutme;