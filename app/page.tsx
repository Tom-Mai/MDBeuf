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
                titreh1={<>Maurine Dubeuf <br />Votre Naturopathe à Vénissieux </>}

                imgAlt="og"
                imgSrc={Images.Banner[1]}
            />
            <SectionContent
                titreTexth2={`Qu'est-ce que la Naturopathie ?`}
                bodyText={`La naturopathie est bien plus qu’une approche médicale : c’est une philosophie, un art de vivre. Voici un aperçu de cette pratique ancestrale.

                En tant que naturopathe à Vénissieux, je m’appuie sur trois principes clés  `}

            />
            <SectionContent ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                titreTexth3={`L'auto-guérison`}
                bodyText={`Le corps a une capacité innée à se guérir. La naturopathie vise à soutenir ce processus.`}
                imgSrc={Images.hyginealimentaire[1]}
            />
            <SectionContent ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                titreTexth3={`La prévention`}
                bodyText={`Mieux vaut prévenir que guérir. Adopter de bonnes habitudes est le premier pas vers une bonne santé.`}
                imgSrc={Images.hyginealimentaire[2]}
            />
            <SectionContent ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                titreTexth3={`Le traitement de la cause`}
                bodyText={`Au lieu de simplement traiter les symptômes, la naturopathie cherche à comprendre et traiter la cause profonde des déséquilibres.`}
                imgSrc={Images.hyginealimentaire[3]}
            />
            <SectionContent ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                titreTexth2="Pourquoi choisir un Naturopathe?"
                bodyText={`Consulter un naturopathe, c’est choisir une approche globale de sa santé. Voici quelques raisons pour lesquelles cette démarche peut vous être bénéfique`}
            />
            <SectionContent
                titreTexth3={`Approche personnalisée`}
                bodyText={`Chaque individu est unique. En tant que naturopathe à Vénissieux, je crée des plans adaptés à chaque personne, en tenant compte de son vécu, ses besoins et ses objectifs.`}
            />
            <SectionContent
                titreTexth3={`Prévention`}
                bodyText={`La naturopathie mise sur la prévention, en aidant à instaurer un équilibre de vie qui minimise les risques de maladies et déséquilibres.`}
            />
            <SectionContent
                titreTexth3={`Regard holistique`}
                bodyText={`La naturopathie ne se contente pas de voir les symptômes, mais la personne dans sa globalité : physique, émotionnelle et mentale.`}
            />
            {/* TO DO :: Changer al disposition des Sections ci dessus.  */}
            {/* <Grid container sx={{ justifyContent: "center" }}>
                {Images.repres.map((image) => (
                    <Grid item key={image.alt}>
                        <SectionContent
                            imgSrc={image}
                        />
                    </Grid> 
                ))}
            </Grid> */}
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
