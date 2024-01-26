import { PricePaperTheme } from "@/src/theme/PricePaperTheme";
import { Card, Typography } from "@mui/material";
import { Titreh3 } from "./Titreh3";
interface PricePaperProps {
    firstTitle?: React.ReactNode;
    secondTitle?: React.ReactNode;
    ParagraphTitle?: React.ReactNode;
    price?: string;
}
export const PricePaper =({firstTitle,secondTitle,ParagraphTitle,price}: PricePaperProps) => {
return(

    <PricePaperTheme>
        <Titreh3 textContent={firstTitle}/>

    {ParagraphTitle}
    {price}
    </PricePaperTheme>
    )
};
            