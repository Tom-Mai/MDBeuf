'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Container, Grid, Input, TextField, Typography } from '@mui/material';
import PhoneNumberInput from './PhoneNumberInput';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mdoqvjbe");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    
    return (
      <Container component="main">
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
        <Typography variant="h5" component="h2">Prendre rendez-vous</Typography>
        <Box component="form" noValidate sx={{ mt:3, mb:3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              InputLabelProps={{
                sx:{
                  fontSize: '1.5rem'
                }
              }}
                name='firstName'
                value={name}
                onChange={((e)=> setName(e.target.value))}
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='LastName'
              autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              fullWidth
              id='emailAddress'
              label='Email Address'
              name='EmailAddress'
              value={email}
              onChange={((e)=> setEmail(e.target.value))}
              autoComplete='EMAIL'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PhoneNumberInput/>
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
            
          </Grid>
        </Box>

        </Box>

      </Container>
    );
  }
 