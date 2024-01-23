import { PricePaperTheme } from "@/src/theme/PricePaperTheme";
import { Typography } from "@mui/material";
interface PricePaperProps {
    firstTitle?: string;
    secondTitle?: string;
    ParagraphTitle?: string;
    price?: string;
}
export const PricePaper =({firstTitle,secondTitle,ParagraphTitle,price}: PricePaperProps) => {
return(

    <PricePaperTheme variant='elevation'>
    <Typography variant='body1' sx={{
        lineHeight: "1.35",
        fontSize: "1.65rem",
        color: '#707070',
        textAlign: "center",
    }}>
    {firstTitle}
    </Typography>
    </PricePaperTheme>
    )
};
            