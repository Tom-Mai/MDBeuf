import { PriceCardTheme } from "@/src/theme/PriceCardTheme";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

interface PricePaperProps {
    logo?: React.ReactNode;
    firstTitle?: React.ReactNode;
    secondTitle?: React.ReactNode;
    Paragraph?: React.ReactNode[];
    price?: React.ReactNode[];
}
export const PricePaper = ({ firstTitle, secondTitle, Paragraph, price, logo }: PricePaperProps) => {
    return (
// TODO : faire en sorte que le bouton reserver ma cosuiltation ammene à cette page (prestations) mais au niveau des card et non au top
        <PriceCardTheme>
            {logo}
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" sx={{
                    fontFamily: 'Roboto',
                    fontWeight: "900",
                    color: "#323334",
                    lineHeight: "1.1",
                    fontSize: "25px",
                    cursor: "auto",
                    textTransform: "uppercase",
                }}>
                    {firstTitle}
                </Typography>
                <Typography textTransform={"uppercase"} variant="h4" color={"#888"} fontSize={"14px"} fontWeight={800} letterSpacing={"1px"}>
                    {secondTitle}
                </Typography>
                {Paragraph && Paragraph.map((para, index) => (
                    <Typography fontFamily={"Roboto"} color={"#888888"} key={index} paragraph fontSize={"16px"} lineHeight={"26px"} fontWeight={300} paddingTop={4}>
                        {para}
                    </Typography>
                ))}
                <Divider variant="middle" />
                {price && price.map((prices, index) => (
                    <Typography key={index} paragraph sx={{
                        fontFamily: 'Roboto',
                        fontWeight: "900",
                        color: "#888888",
                        lineHeight: "1.1",
                        fontSize: "15px",
                        cursor: "auto",
                        textTransform: "uppercase",
                        marginTop: "10%",
                    }}>
                        {prices}€
                    </Typography>
                ))}



            </CardContent>
        </PriceCardTheme>
    )
};
