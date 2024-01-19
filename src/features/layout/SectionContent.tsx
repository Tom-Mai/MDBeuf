import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Titreh2 } from "./Titreh2";
import Image, { StaticImageData } from "next/image";

//  fonction qui prend mon tableau de mots cles, et si le mot cles se trouve dans la props bodytext, celui ci prends une autre classe de style afin d'être mis en évidence
function highlightText(text: string, keywords: string[]): React.ReactNode {
    const regex = new RegExp(`\\b(${keywords.join('s?\\b|')}s?\\b)`, 'gi');
    return text.split(regex).map((part, index) => {
        if (new RegExp(`\\b(${keywords.join('s?\\b|')}s?\\b)`, 'i').test(part)) {
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
    titreText?: React.ReactNode;
    imgToLeft?: boolean;
}
export const SectionContent = ({ imgSrc, bodyText, titreText, imgToLeft }: SectionContentProps) => {

    const highlightWords = ["naturopathie", "Organisation Mondiale de la Santé", "méthode de soin", "moyen naturel et biologique", "approche holistique", "individu", "naturopathe", "symptôme", "hygiène de vie", "accompagnement individualisé", "auto-guérison", "médecine traditionnelle chinoise", "ayurvédique", "diagnostic", "bien-être", "hygiène alimentaire", "musculaire", "neuropsychique", "hydrologie", "phytologie", "aromatologie", "réflexologie plantaire", "exercice respiratoire", "massage", "magnétisme", "fatigue", "énergie", "problème digestif", "dysfonctionnement", "pluridisciplinaire", "déséquilibre", "réaction corporelle", "suivi médical", "prévention", "maladie"];

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
