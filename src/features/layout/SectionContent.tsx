import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Titreh2 } from "./Titreh2";
import { Titreh3 } from "./Titreh3";
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
    titreTexth2?: React.ReactNode;
    titreTexth3?: React.ReactNode;
    imgToLeft?: boolean;
}
export const SectionContent = ({ imgSrc, bodyText, titreTexth2, titreTexth3, imgToLeft }: SectionContentProps) => {

    const highlightWords = ["naturopathie", "bien-être", "hygiène de vie", "méthodes de soins", "approche holistique", "auto-guérison", "naturopathe", "médecine traditionnelle", "phytologie", "réflexologie plantaire"];

    const formattedBodyText = typeof bodyText === 'string' ? highlightText(bodyText, highlightWords) : bodyText;
    const textComponent = (
        <Grid item xs={12} lg={imgSrc ? 6 : 12}>
            {formattedBodyText &&
                <Typography variant='body1' sx={{
                    marginTop: '20px',
                    lineHeight: "1.35",
                    fontSize: "16px",
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
            borderRadius: '50%',
            margin: 'auto',
            "@media (max-width:1200px)": {
                width: "100%",
                justifyContent: "center",
            },
        }}>
            <Image src={imgSrc.src} alt={imgSrc.alt} style={{
                maxWidth: '100%',  // Pour la réactivité
                height: 'auto', //maintient le ratio
                // borderRadius:"50%", impact toutes les imlages, et ne veux que celle de about me
                boxShadow: '0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)'
            }} />

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
            {titreTexth2 && <Titreh2 textContent={titreTexth2} />}
            {titreTexth3 && <Titreh3 textContent={titreTexth3} />}
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
                {imgToLeft ? imgComponent : textComponent}
                {imgToLeft ? textComponent : imgComponent}
            </Grid>
        </Box>
    );
};
