import React from "react";
import Grid from "@mui/material/Grid";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { Images } from "../assets/Images";
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from "./ContactForm";

const Contact = () => {
    return(
        <Grid>
            <HeroSection titreh1='Rejoignez-moi pour une consultation à Vénissieux' imgSrc={Images.Banner[3]}/>
            <Grid container>
                <Grid  item xs={12} sm={6}>
                    <ContactForm/>
                </Grid>
                <Grid  item xs={12} sm={6}>
                   THIS IS THE PLACE FOR THE MAP
                </Grid>
            </Grid>
        </Grid>
    )

};
export default Contact;