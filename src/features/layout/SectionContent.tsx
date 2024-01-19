import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Image, { StaticImageData } from "next/image";

//  fonction qui prend mon tableau de mots cles, et si le mot cles se trouve dans la props bodytext, celui ci prends une autre classe de style afin d'être mis en évidence
function highlightText(text: string, keywords: string[]): React.ReactNode {
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return text.split(regex).map((part, index) => {
        if (keywords.includes(part.toLowerCase())) {
            return (
                <strong key={index} className="highlight">{part}</strong>
            )
        } else {
            return part;
        }
    });
}

interface SectionContentProps {
    imgSrc?: {
        src: StaticImageData;
        alt: string;
    };
    bodyText?: React.ReactNode;
    titreText?: string;
    imgToLeft?: boolean;
}
export const SectionContent = ({ imgSrc, bodyText, titreText, imgToLeft }: SectionContentProps) => {

    const highlightWords = ["naturopathie", "Organisation Mondiale de la Santé", "méthodes de soins", "moyens naturels et biologiques", "approche holistique", "individu", "naturopathe", "symptômes", "hygiène de vie", "accompagnement individualisé", "auto-guérison", "médecine traditionnelle chinoise", "ayurvédique", "diagnostic", "bien-être", "hygiène alimentaire", "musculaire", "neuropsychique", "hydrologie", "phytologie", "aromatologie", "réflexologie plantaire", "exercices respiratoires", "massages", "magnétisme", "fatigue", "énergie", "problèmes digestifs", "dysfonctionnement", "symptôme", "pluridisciplinaire", "déséquilibre", "réactions corporelles", "suivi médical", "prévention", "maladie"];

    const formattedBodyText = typeof bodyText === 'string' ? highlightText(bodyText, highlightWords) : bodyText;
    const textComponent = (
        <Grid item xs={12} lg={imgSrc ? 6 : 12}>
            {formattedBodyText &&
                <Typography variant='body1' sx={{
                    marginTop: '20px',
                    lineHeight: "1.35",
                    fontSize: "1.65rem",
                    color: '#707070',
                    textAlign: "justify",
                }}>
                    {formattedBodyText}
                </Typography>}
        </Grid>
    );

    const imgComponent = imgSrc &&
        <Grid item sx={{
            maxWidth: '400px',
            margin: 'auto',
            "@media (max-width:1200px)": {
                width: "100%",
                justifyContent: "center",
            },
        }}>
            <Image src={imgSrc.src} alt={imgSrc.alt} layout='responsive' />

        </Grid>;

    return (
        <Box
            sx={{
                padding: "25px",
                marginX: "auto",
                "@media (min-width:1100px)": {
                    maxWidth: "1100px",
                },
            }}
        >
            {titreText && <Titreh2 textContent={titreText} />}
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
                {imgToLeft ? imgComponent : textComponent}
                {imgToLeft ? textComponent : imgComponent}
            </Grid>
        </Box>
    );
};
