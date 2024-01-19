import React from "react";
import Grid from "@mui/material/Grid";

// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { cp } from "fs";
import { Birthstone } from "next/font/google";

const AgeCalcul = () => {
    const today = new Date();
    const BirthDate = new Date("1995-06-10");
    
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
        <HeroSection/>
        <SectionContent
            // eslint-disable-next-line react/no-unescaped-entities
            titreText={<>"Maurine DuBeuf {age} ans"</> }
            bodyText={`D'un naturel chaleureux et bienveillant, j'attache beaucoup d'importance à mes relations avec les autres. Il était donc primordial pour moi de choisir un métier dans lequel je peux aider, accompagner et apporter un touche de bonheur aux gens. 

            Passionnée depuis toujours par la nutrition et le bien-être au naturel, j'aurai un réel plaisir à vous découvrir et vous accompagnez dans le chemin du mieux-être.
            
             
            
            Mon parcours : 
            
            J'ai commencé par des études universitaires, avec une licences Sciences pour la santé spécialisé en nutrition. Puis un master nutrition humaine, pour lequel je suis partie quelques mois au Québec afin de réalisé mon mémoire de recherche ayant pour titre :  
            
            Je suis Heilpraktiker, nom donné aux naturopathes allemands. 
            
            "En Allemagne : le naturopathe, le magnétiseur, l’hygiéniste, l’acupuncteur, l’homéopathe, le phytothérapeute qui n’a pas le diplôme de Heilpraktiker n’a pas l’autorisation d’exercer. L’Allemagne est le seul pays qui a fait une loi d’autorisation d’exercice pour les thérapeutes non médecins".`}
            imgSrc={Images.Maurinedb[0]}
            />

    </Grid>
    
    )
}
export default Aboutme;