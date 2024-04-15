import * as React from "react";
import Grid from "@mui/material/Grid";
import { HeroSection } from "@/src/features/layout/HeroSection";
// import Sanity from "../../Sanity";
import { Images } from "./assets/Images";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { MyHerosSectionImage } from "./assets/MyHerosSectionImage";
import { PriceComponent } from "@/components/ui/PriceComponent";
import { PriceCard } from "@/src/features/layout/PriceCard";
import { Divider, Stack } from "@mui/material";
const HomePage = () => {
    return (
        <Grid justifyContent="center" width='100%'>
            < HeroSection
                titreh1={<>Maurine Dubeuf <br />Votre Naturopathe à Vénissieux </>}
                imgAlt="#"
                imgSrc={Images.Banner[1]}
            />
            <SectionContent
                titreTexth2={`Qu'est-ce que la Naturopathie ?`}
                bodyText={`La naturopathie est bien plus qu’une approche médicale : c’est une philosophie, un art de vivre. Voici un aperçu de cette pratique ancestrale.
                En tant que naturopathe à Vénissieux, je m’appuie sur trois principes clés  `}
            />
            <Stack useFlexGap flexWrap="wrap" py={12} direction={{ xs: 'column', md: 'row' }} spacing={2} >
                <SectionContent TextPositionCenter ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                    titreTexth3={`L'auto-guérison`}
                    bodyText={`Le corps a une capacité innée à se guérir. La naturopathie vise à soutenir ce processus.`}
                    imgSrc={Images.hyginealimentaire[1]}
                />
                <SectionContent TextPositionCenter ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                    titreTexth3={`La prévention`}
                    bodyText={`Mieux vaut prévenir que guérir. Adopter de bonnes habitudes est le premier pas vers une bonne santé.`}
                    imgSrc={Images.hyginealimentaire[2]}
                />
                <SectionContent TextPositionCenter ImageRounded // props indiquant si l'image prend RoundedBorder 50% if true
                    titreTexth3={`Le traitement de la cause`}
                    bodyText={`Au lieu de simplement traiter les symptômes, la naturopathie cherche à comprendre et traiter la cause profonde des déséquilibres.`}
                    imgSrc={Images.hyginealimentaire[3]}
                />
            </Stack>
            <Divider variant="middle" />
            {/* Debut zone TEST changement de mise à page  */}
            {/* <PriceComponent>
                <PriceCard
                firstTitle={`Pourquoi choisir un Naturopathe`}
                Paragraph={['Consulter un naturopathe, c’est choisir une approche globale de sa santé. Voici quelques raisons pour lesquelles cette démarche peut vous être bénéfique']}
                />
                <PriceCard
                firstTitle={`Approche personnalisée`}
                Paragraph={['Chaque individu est unique. En tant que naturopathe à Vénissieux, je crée des plans adaptés à chaque personne, en tenant compte de son vécu, ses besoins et ses objectifs.']}
                />
                <PriceCard
                firstTitle={`Prévention`}
                Paragraph={['La naturopathie mise sur la prévention, en aidant à instaurer un équilibre de vie qui minimise les risques de maladies et déséquilibres.']}
                />
                <PriceCard
                firstTitle={`Regard holistique`}
                Paragraph={['La naturopathie ne se contente pas de voir les symptômes, mais la personne dans sa globalité : physique, émotionnelle et mentale.']}
                />
            </PriceComponent> */}
            {/* Fin Zone test */}
            <Grid width='100%' container >

                <Grid item md={6}>
                    <SectionContent
                    titreTexth2={`Ceci est un exemple, Temporaire, mise en page`}
                    imgSrc={Images.PNG[0]} // TODO : modifier prop image, pour pouvoir mettre des png sans qu'ils ne prennent les styles des autres image du component SectionContent. idée à chaud : si PNG is true appliquer un style si NON , laisser le style par defaut. 
                    />
                        
                </Grid>
                <Grid item md={6}>
                    <SectionContent TextPositionCenter
                        titreTexth2={`Pourquoi choisir un Naturopathe?`} H2Color
                        bodyText={`Consulter un naturopathe, c’est choisir une approche globale de sa santé. Voici quelques raisons pour lesquelles cette démarche peut vous être bénéfique`}
                    />
                    <SectionContent TextPositionCenter
                        titreTexth3={`Approche personnalisée`} H3Color
                        bodyText={`Chaque individu est unique. En tant que naturopathe à Vénissieux, je crée des plans adaptés à chaque personne, en tenant compte de son vécu, ses besoins et ses objectifs.`}
                    />
            <SectionContent TextPositionCenter
                titreTexth3={`Prévention`} H3Color
                bodyText={`La naturopathie mise sur la prévention, en aidant à instaurer un équilibre de vie qui minimise les risques de maladies et déséquilibres.`}
                />
            <SectionContent TextPositionCenter
                titreTexth3={`Regard holistique`} H3Color
                bodyText={`La naturopathie ne se contente pas de voir les symptômes, mais la personne dans sa globalité : physique, émotionnelle et mentale.`}
                />
                </Grid>
            </Grid>

            {/* <Grid container sx={{ justifyContent: "center" }}>
                {Images.repres.map((image) => (
                    <Grid item key={image.alt}>
                        <SectionContent
                            imgSrc={image}
                        />
                    </Grid>
                ))}
            </Grid> */}
            {/* <SectionContent
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
            /> */}
        </Grid>
    )
}
export default HomePage;