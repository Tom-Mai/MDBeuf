import React from "react";
import Grid from "@mui/material/Grid";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { Images } from "../assets/Images";



const Contact = () => {
    return(
        <Grid>
            <HeroSection titreh1='Rejoignez-moi pour une consultation à Vénissieux' imgSrc={Images.Banner[3]}/>
            
        </Grid>
    )

};
export default Contact;