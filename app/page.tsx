import * as React from "react";
import Grid from "@mui/material/Grid";

import { HeroSection } from "@/src/features/layout/HeroSection";
// import Sanity from "../../Sanity";

import { Images } from "./assets/Images";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { MyHerosSectionImage } from "./assets/MyHerosSectionImage";
const HomePage = () => {
    return (
        <div>
            < HeroSection 
            titreh1= {<>Maurine Dubeuf <br/>Votre Naturopathe à Vénissieux </>}
            
            imgAlt="og"
            imgSrc={Images.Banner[1]}           
            />
            <SectionContent
                titreTexth2={`Qu'est-ce que la Naturopathie ?`}
                bodyText={`La naturopathie est bien plus qu’une approche médicale : c’est une philosophie, un art de vivre. Voici un aperçu de cette pratique ancestrale.

                En tant que naturopathe à Vénissieux, je m’appuie sur trois principes clés  `}

            />
            <SectionContent
                titreTexth3={`L'auto-guérison`}
                bodyText={`Le corps a une capacité innée à se guérir. La naturopathie vise à soutenir ce processus.`}
                imgSrc={Images.hyginealimentaire[1]}
            />
            <SectionContent
                titreTexth2=" Pourquoi consulter ?"
                bodyText={`Vous vous sentez fatigué ? Vous manquez d'énergie pour tenir votre journée ? Vous maigrissez ou prenez du poids sans comprendre la raison ? Vous souffrez d'acné ? Vous avez des problèmes digestif ? Vous sentez qu'il y a un problème alors que vos analyses sont bonnes ? Vous pensez que c'est dans votre tête et que cela va passer avec le temps ?

 

            Et bien non ! Tout ce qui vous arrive a une explication. Votre corps vous parle et vous prévient d'un dysfonctionnement. Il est donc important d'agir dès l'apparition des premiers symptômes.`}
            />
            <SectionContent
                bodyText={`Grâce à son approche globale et pluridisciplinaire, le naturopathe propose un accompagnement adapté à chaque personne pour tous types de problèmes : `}
            />
            <Grid container sx={{justifyContent:"center"}}>
            {Images.repres.map((image) => (
                <Grid item key={image.alt}>
                <SectionContent
                    imgSrc={image}
                />
                </Grid>
            ))}
            </Grid>
            <SectionContent
                titreTexth2="Quand consulter ?"
                bodyText={`Lorsqu'il y a un déséquilibre au niveau corporel, énergétique, spirituel ou émotionnel, nous entrons dans un des 4 niveaux de réactions corporelles suivant :`}
            />
            <SectionContent
                imgSrc={Images.lvlreactcorp[0]} imgToLeft
                bodyText={`L'application d'une hygiène de vie adaptée à l'individu  aide le corps à retrouver son équilibre et donc à parvenir à un état de bien-être. Agir dès l'apparition des premiers symptômes (stade 1) est donc important afin d'éviter de monter dans les niveaux supérieurs.

                Lorsque la maladie est déclarée (stade 4), il est nécessaire d'avoir un suivi médical. A ce stade, le naturopathe n'intervient pas, son rôle reste le même (prévenir et d'accompagner l'individu à améliorer son hygiène de vie). Il ne se substitue pas au médecin,  
                
                Dans tous les cas, un suivi médical est recommandé. `}
            />
            <SectionContent
            bodyText={ 
                `En France,nous avons tendance à attendre d’être malade (et d'atteindre le stade 4) avant de consulter. Alors que nous pouvons agir bien avant le stade de la maladie afin d'éviter certaines souffrances.`
                
            }
            />

        </div>
    )
}

export default HomePage;
