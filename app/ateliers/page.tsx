import React from "react";
import Grid from "@mui/material/Grid";
import { CardTheme } from "@/src/theme/CardTheme";
// import Sanity from "../../Sanity";
import { Images } from "@/app/assets/Images";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { SectionContent } from "@/src/features/layout/SectionContent";
import { Card, Divider } from "@mui/material";
import { Activity, AlertCircle, BookOpen, Brain, CheckCircle, Heart, ShieldCheck, Shrub, Smile, ThumbsUp, Trees, User, Zap } from "lucide-react";

const ateliers = () => {
  return (
    <Grid>
      <HeroSection
        titreh1={"Mes ateliers"}
        imgSrc={Images.Banner[4]}
        imgAlt='Ateliers de naturopathie'
      />
      <Grid className='wrapper'>
        <SectionContent
          isHorizontalLayout
          titleH2={`Ateliers sur la nutrition pour enfants`}
        />
        <Divider variant="middle" />


        <SectionContent
          h3Theme
          titleH3={`Découvrir la nutrition de manière ludique`}
          textContent={`Mes ateliers sont conçus pour initier les enfants au monde passionnant de la nutrition de manière ludique et éducative. Je crois fermement que des habitudes alimentaires saines peuvent être inculquées dès le plus jeune âge.`}
        />
        <Grid item md={12}>
          <SectionContent h3Theme titleH3={`Objectifs des ateliers`} />
        </Grid>
        <Grid container justifyContent='center'>
          <CardTheme>
            <BookOpen size={40} color="#4CAF50" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Éducation nutritionnelle:`}
              textContent={`Faire découvrir les principes de base de la nutrition de manière adaptée à l'âge.`}
            />
          </CardTheme>

       

          {/* TODO : mettre les section suiviantes dans une " card mui" */}
          <CardTheme>
            <CheckCircle size={40} color="#FFC107" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Amélioration des habitudes alimentaires:`}
              textContent={`Encourager des choix alimentaires sains et équilibrés.`}
            />
          </CardTheme>
        
          <CardTheme>
            <Smile size={40} color="#4CAF50" strokeWidth='1px'/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Plaisir de manger sainement:`}
              textContent={`Créer une relation positive avec la nourriture.`}
            />
          </CardTheme>
        </Grid>
        <Grid item md={12}>
          <SectionContent titleH3={`Pourquoi mes ateliers sont uniques`} />
        </Grid>
        <Grid container justifyContent='center'>
          <CardTheme>
            <Heart size={40} color="#FF5722" strokeWidth='1px'/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Approche holistique`}
              textContent={`J'adopte une approche holistique pour enseigner la nutrition aux enfants, en intégrant des éléments de bien-être physique et émotionnel.`}
            />
          </CardTheme>
          <CardTheme>
            <Activity size={40} color="#FFC107" strokeWidth='1px'/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Activités Interactives`}
              textContent={`Chaque atelier comprend des activités interactives, des démonstrations culinaires simples et des jeux pour rendre l'apprentissage amusant et mémorable.`}
            />
          </CardTheme>
        </Grid>
        <Grid item md={12}>
          <SectionContent titleH3={`Pourquoi la nutrition des enfants est cruciale`}
            textContent={`La période de l'enfance est une phase cruciale de croissance et de développement, où les choix nutritionnels jouent un rôle fondamental dans la santé globale des enfants. Voici quelques raisons essentielles pour lesquelles la nutrition des enfants est d'une importance capitale :`}
          />
        </Grid>
        <Grid container justifyContent='center'>
          <CardTheme>
            <Trees size={40} color="#4CAF50" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Croissance et développement optimaux :`}
              textContent={`Une nutrition adéquate fournit les nutriments essentiels nécessaires à la croissance physique, au développement cognitif et à la construction d'un système immunitaire robuste chez les enfants.`}
            />
          </CardTheme>
          <CardTheme>
            <Zap size={40} color="#FFC107" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Énergie pour l'apprentissage :`}
              textContent={`Des choix alimentaires sains assurent un apport énergétique stable, favorisant la concentration, la mémorisation et la capacité d'apprentissage des enfants à l'école.`}
            />
          </CardTheme>
          <CardTheme>
            <ShieldCheck size={40} color="#FF5722" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Prévention des maladies :`}
              textContent={`Une alimentation équilibrée dès le plus jeune âge contribue à prévenir diverses maladies chroniques, notamment le diabète de type 2, l'obésité et les troubles cardiovasculaires à l'âge adulte.`}
            />
          </CardTheme>
          <CardTheme>
            <Brain size={40} color="#4CAF50" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Soutien au développement cognitif :`}
              textContent={`Certains nutriments, tels que les acides gras oméga-3 et les vitamines, jouent un rôle crucial dans le développement du cerveau, influençant la cognition, la mémoire et la capacité d'apprentissage.`}
            />
          </CardTheme>
          <CardTheme>
            <ThumbsUp size={40} color="#FFC107" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Établissement de bonnes habitudes alimentaires :`}
              textContent={`Exposer les enfants à une variété d'aliments sains dès leur jeune âge favorise le développement de préférences alimentaires positives et contribue à la formation de bonnes habitudes alimentaires à long terme.`}
            />
          </CardTheme>
          <CardTheme>
            <User size={40} color="#FF5722" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Soutien émotionnel et social :`}
              textContent={`Partager des repas sains en famille ou lors d'ateliers permet de renforcer les liens émotionnels et sociaux, créant une relation positive avec la nourriture.`}
            />
          </CardTheme>
          <CardTheme>
            <AlertCircle size={40} color="#FF5722" strokeWidth="1px"/>
            <SectionContent
              h3Theme
              IsFontBold
              isTextCentered
              titleH3={`Prévention des troubles comportementaux et émotionnels :`}
              textContent={`Certains nutriments sont liés à la régulation des émotions, et une alimentation équilibrée peut contribuer à la prévention de troubles comportementaux et émotionnels chez les enfants.

              En comprenant l'impact significatif de la nutrition sur la santé globale des enfants, je m'engage à fournir des ateliers éducatifs interactifs qui visent à éclairer les jeunes esprits sur l'importance de faire des choix alimentaires sains pour un avenir plus fort et plus sain.`}
            />
          </CardTheme>
        </Grid>

      </Grid>
    </Grid>
  );
};
export default ateliers;
