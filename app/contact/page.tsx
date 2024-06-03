import React from "react";
import Grid from "@mui/material/Grid";
import { HeroSection } from "@/src/features/layout/HeroSection";
import { Images } from "../assets/Images";
import { useForm, ValidationError } from '@formspree/react';
import { Box, ThemeProvider } from "@mui/material";
import { ContactForm } from "./ContactForm";
import { ActionButton } from "@/src/theme/ActionButton";
interface iframe {
    allowfullscreen: string
}
const Contact = ({ allowfullscreen }: iframe) => {
    return (
        <ThemeProvider theme={ActionButton}>

            <Grid>
                <HeroSection titreh1='Rejoignez-moi pour une consultation à Vénissieux' imgSrc={Images.Banner[3]} />
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={6} padding={1}>
                        <Box className='map-container' sx={{
                        }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.765754411849!2d4.865520576616394!3d45.69567271796406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c27a70c6f3bf%3A0xa071b49323c80288!2s13%20Av.%20de%20la%20Division%20Leclerc%2C%2069200%20V%C3%A9nissieux%2C%20France!5e0!3m2!1sfr!2sus!4v1717075851777!5m2!1sfr!2sus"
                                loading="lazy"
                                title="Google Map"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
};
export default Contact;
