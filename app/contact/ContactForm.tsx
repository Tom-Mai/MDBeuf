'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Container, Grid, Typography, FormControl, InputLabel, OutlinedInput, FormHelperText, Modal, TextField } from '@mui/material';
import PhoneNumberInput from './PhoneNumberInput';
export const ContactForm = () => {
  
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, formSpreeSubmit] = useForm("mdoqvjbe");
  const [errors, setErrors] = useState({firstName:'', name:'', email:''});
  const validate = () =>{
    const newErrors = {firstName:'', name:'', email:''}
    if(!firstName) newErrors.firstName = 'Veuillez remplir ce champ';
    if(!name) newErrors.name='Veuillez remplir ce champ';
    if(!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) newErrors.email = 'Veuillez entrer un email valide';
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(validate()){
      formSpreeSubmit(event)
    }

  }
  if (state.succeeded) {
    return (


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box>
          <Typography id="modal-title" variant="h6" component="h2">
            Message Envoyé
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Merci pour votre demande, je reviendrai vers vous au plus vite pour vous confirmer celle-ci
          </Typography>
        </Box>

      </Modal>


    );  // A CHANGER
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
              <TextField
                required
                type='text'
                fullWidth
                id='firstName'
                name="firstName"
                label="Prénom"
                autoComplete='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
                
              />
              {/* <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="firstName">Prénom</InputLabel>
                <OutlinedInput
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  label="Prénom"
                />
              </FormControl> */}
              <ValidationError prefix='Prenom' field='firstname' errors={state.errors} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type='text'
                fullWidth
                id='lastName'
                label='Nom'
                name='LastName'
                autoComplete='family-name'
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
              {/* <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="lastName">Nom</InputLabel>
                <OutlinedInput
                  id="lastName"
                  name="LastName"
                  label="Nom"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </FormControl> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type='email'
                fullWidth
                id='emailAddress'
                label='Adresse Email'
                name='EmailAddress'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete='EMAIL'
              />
              {/* <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="emailAddress">Adresse Email</InputLabel>
                <OutlinedInput 
                  type='email'
                  id="emailAddress"
                  name="EmailAddress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Adresse Email"
                />
              </FormControl> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <PhoneNumberInput />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              fullWidth
              multiline
              id="message"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
              />
              {/* <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="message">Message</InputLabel>
                <OutlinedInput multiline
                  id="message"
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl> */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant='contained' type='submit' onClick={handleOpen} disabled={state.submitting}>Reserver</Button>

            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
