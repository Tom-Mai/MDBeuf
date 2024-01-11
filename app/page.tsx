import * as React from "react";
import Grid from "@mui/material/Grid";

import { HeroSection } from "@/src/features/layout/HeroSection";
// import Sanity from "../../Sanity";

import { Images } from "../assets/Images";
import { SectionContent } from "@/src/features/layout/SectionContent";
const HomePage = () => {
    return (
        <div>
            < HeroSection/>
            <SectionContent
                titreText='Hello World'
                bodyText={`La naturopathie est reconnue par l’Organisation Mondiale de la Santé comme "un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens naturels et biologiques". Elle a une approche holistique, c'est-à-dire qu'elle prend en compte l’être humain dans sa globalité et s’intéresse à tous les plans de l’individu : physiques, énergétiques et psycho-émotionnel.

            En outre, le naturopathe agit, non pas sur le symptôme, mais sur l’origine des maux. Il ne répond pas à une liste de symptômes ou de maladies mais il tente d'identifier les éléments de l'hygiène de vie de l'individu, étant à l'origine des maux. Afin de soulager la personne, un accompagnement individualisé 100% naturel est mit en place. Cette pratique vise à apporter une solution globale à l'individu et à stimuler leur force d'auto-guérison.  
            
            La naturopathie est souvent comparée à la médecine traditionnelle chinoise et ayurvédique, puisqu'elle est reconnu comme la 3ème médecine traditionnelle. `}

            />
            <SectionContent
                bodyText={`Le naturopathe ne pose aucun diagnostic ! Son rôle est de préserver et de maintenir un état de bien être par  l’enseignement préventif de la santé via trois piliers fondamentaux :  l’hygiène alimentaire, musculaire et neuropsychique. 

            N.B : Imaginons une chaise à 3 pieds : pour réussir à s’asseoir, les pieds doivent être à la même hauteur et équilibré. Si un des pieds de la chaise est plus petit ou inexistant alors la chaise ne peut pas assurer sa fonction. Cela fonctionne pareil pour les 3 piliers de la santé.
            
            Il adapte ses conseils d'hygiène de vie et utilise des techniques telles que l'hydrologie, la phytologie, l'aromatologie, la réflexologie plantaire, les exercices respiratoires, les massages, le magnétisme... en fonction du terrain de l'individu.
            `}
                imgSrc={Images.hyginealimentaire[0]}
            />
            <SectionContent
                titreText=" Pourquoi consulter ?"
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
                titreText="Quand consulter ?"
                bodyText={`Lorsqu'il y a un déséquilibre au niveau corporel, énergétique, spirituel ou émotionnel, nous entrons dans un des 4 niveaux de réactions corporelles suivant :`}
            />
            <SectionContent
                imgSrc={Images.lvlreactcorp[0]} imgToLeft
                bodyText={`L'application d'une hygiène de vie adaptée à l'individu  aide le corps à retrouver son équilibre et donc à parvenir à un état de bien-être. Agir dès l'apparition des premiers symptômes (stade 1) est donc important afin d'éviter de monter dans les niveaux supérieurs.

                Lorsque la maladie est déclarée (stade 4), il est nécessaire d'avoir un suivi médical. A ce stade, le naturopathe n'intervient pas, son rôle reste le même (prévenir et d'accompagner l'individu à améliorer son hygiène de vie). Il ne se substitue pas au médecin,  
                
                Dans tous les cas, un suivi médical est recommandé. `}
            />

        </div>
    )
}

export default HomePage;
