'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Container, Grid, Typography, FormControl, InputLabel, OutlinedInput, FormHelperText, InputAdornment, ThemeProvider } from '@mui/material';
import PhoneNumberInput from './PhoneNumberInput';
export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdoqvjbe");
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;  // A CHANGER
  }
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="h2">Prendre rendez-vous</Typography>
        <Box component="form" noValidate sx={{ mt: 3, mb: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="firstName">Prénom</InputLabel>
                <OutlinedInput
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="Prénom"
                />
                <FormHelperText>{/* Error message or helper text if needed */}</FormHelperText>
              </FormControl>
              <ValidationError prefix='Prenom' field='firstname' errors={state.errors}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="lastName">Nom</InputLabel>
                <OutlinedInput
                  id="lastName"
                  name="LastName"
                  label="Nom"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
                <FormHelperText>{/* Error message or helper text if needed */}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="emailAddress">Adresse Email</InputLabel>
                <OutlinedInput
                  id="emailAddress"
                  name="EmailAddress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Adresse Email"
                />
                <FormHelperText>{/* Error message or helper text if needed */}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PhoneNumberInput />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="message">Message</InputLabel>
                <OutlinedInput multiline
                  id="message"
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant='contained' type='submit' disabled={state.submitting}>Reserver</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
