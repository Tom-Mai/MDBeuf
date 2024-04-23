import { ActionButton } from "@/src/theme/ActionButton";
import { PriceCardTheme } from "@/src/theme/PriceCardTheme";
import { Button, Card, CardActions, CardContent, CardMedia, Divider, ThemeProvider, Typography } from "@mui/material";
import { Check, Moon, ShoppingCart } from "lucide-react";
import Link from "next/link";
const colorBtn = "#5C7A7D";
interface PriceCardProps {
    logo?: React.ReactNode;
    firstTitle?: React.ReactNode;
    secondTitle?: React.ReactNode;
    Paragraph?: React.ReactNode[];
    price?: React.ReactNode[];
}
export const PriceCard = ({ firstTitle, secondTitle, Paragraph, price, logo }: PriceCardProps) => {
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
                    "@media (min-width:900px) and (max-width:1040px)":{
                        fontSize:"20px"
                    },
                    
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
                <CardActions sx={{ justifyContent: "center"}}>
                    <ThemeProvider theme={ActionButton}>
                        <Link href='#'>
                            <Button
                                sx={{
                                    width: '5em',
                                    height: '5em',
                                    "@media (min-width:768px)": {
                                        width: "19em",
                                        height: "auto",
                                    },
                                    maxWidth: "19em",
                                    marginTop: "25px",
                                    padding: "2em 2em",
                                    backgroundColor: colorBtn,
                                    '&:hover': {
                                        backgroundColor: '#c87c50',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                        transitionDelay: "0.3s ease",
                                    },
                                    position: 'relative',
                                    '& svg': {
                                        transition: 'opacity 0.3s ease-in-out 0.3s',
                                    },
                                    '& svg:nth-of-type(1)': {
                                        opacity: 1,
                                    },
                                    '& svg:nth-of-type(2)': {
                                        opacity: 0,
                                        position: 'absolute',
                                        
                                    },
                                    '&:hover svg:nth-of-type(1)': {
                                        opacity: 0,
                                        transform:'rotate(0.9turn)'
                                        
                                    },
                                    '&:hover svg:nth-of-type(2)': {
                                        opacity: 1,
                                        transform:'rotate(0turn)'
                                    }
                                }}
                                variant='contained'
                                size='large'
                            >
                                <ShoppingCart strokeWidth="1px"/>
            <Check strokeWidth="1px"/>


                                {/* {`J'ai choisis`} */}
                            </Button>
                        </Link>
                    </ThemeProvider>
                </CardActions>



            </CardContent>
        </PriceCardTheme>
    )
};
