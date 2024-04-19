import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Titreh2 } from "./Titreh2";
import { Titreh3 } from "./Titreh3";
import Image, { StaticImageData } from "next/image";
//  fonction qui prend mon tableau de mots cles, et si le mot cles se trouve dans la props textContent, celui ci prends une autre classe de style afin d'être mis en évidence
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
    textContent?: React.ReactNode;
    titleH2?: React.ReactNode;
    titleH3?: React.ReactNode;
    isImageToLeft?: boolean;
    isHorizontalLayout?: boolean;
    h3Theme?: boolean;
    h2Theme?: boolean;
    alignH3?: boolean;
    isImageRounded?: React.ReactNode;
    isTextCentered?: React.ReactNode;
    profileSize? :React.ReactNode;
    disableBoxShadow? :React.ReactNode;
}
export const SectionContent = ({ imgSrc, textContent, titleH2, titleH3, isImageToLeft, isHorizontalLayout, h3Theme, h2Theme, alignH3, isImageRounded, isTextCentered, profileSize, disableBoxShadow }: SectionContentProps) => {
    const highlightWords = ["naturopathie", "bien-être", "hygiène de vie", "méthodes de soins", "approche holistique", "auto-guérison", "naturopathe", "médecine traditionnelle", "phytologie", "réflexologie plantaire"];
    const formattedBodyText = typeof textContent === 'string' ? highlightText(textContent, highlightWords) : textContent;
    const textComponent = (
        <Grid item xs={12} lg={isHorizontalLayout ? 6 : 12}>
            {formattedBodyText &&
                <Typography variant='body1' sx={{
                    marginTop: '20px',
                    lineHeight: "1.35",
                    fontSize: "16px",
                    color: '#707070',
                    textAlign: "justify",
                    "@media (min-width:425px)": {
                        textAlign: isTextCentered ? "center" : "justify",
                    }
                }}>
                    {formattedBodyText}
                </Typography>}
        </Grid>
    );
    const imgComponent = imgSrc &&
        <Grid item sx={{
            width: profileSize ? "400px" : '100%',
            margin: 'auto',
            position: 'relative',
            "@media (max-width:1200px)": {
                width: "100%",
                justifyContent: "center",
            },
        }}>
            <Image src={imgSrc.src} alt={imgSrc.alt}  style={{
                maxWidth: '100%',  // Pour la réactivité
                height: 'auto', //maintient le ratio
                borderRadius: isImageRounded ? '50%' : '0%',
                // borderRadius:"50%", todo : props :  impact toutes les images, et ne veux que celle de about me
                boxShadow: disableBoxShadow ? "" : '0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)',

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
            {titleH2 && <Titreh2 headingText={titleH2} h2Black={h2Theme} />}
            {titleH3 && <Titreh3 headingText={titleH3} h3Black={h3Theme} H3PosLeft={alignH3} />}
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
                {isImageToLeft ? imgComponent : textComponent}
                {isImageToLeft ? textComponent : imgComponent}
            </Grid>
        </Box>
    );
};