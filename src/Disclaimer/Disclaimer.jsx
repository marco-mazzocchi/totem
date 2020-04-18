import React from 'react';
import { Typography, Button, Paper, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import headdress from '../images/headdress.svg';
import bg from '../images/photo-1508341421810-36b8fc06075b.jpeg';

const useStyles = makeStyles(theme => ({
   grid: {
      height: '100%',
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
   },
   paper: {
      padding: theme.spacing(4),
      maxWidth: 600
   },
   logo: {
      marginBottom: theme.spacing(2)
   }
}));

export default function Disclaimer({ onConfirm }) {
   const classes = useStyles();
   return (
      <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
         className={classes.grid}
      >
         <Grid item>
            <Paper className={classes.paper}>
               <Box textAlign="center">
                  <img
                     className={classes.logo}
                     alt="logo"
                     src={headdress}
                     width={120}
                  />
               </Box>
               <Typography variant="h4">Benvenuto</Typography>
               <Typography paragraph>
                  "Totem" è una parola indiana che significa "Stemma" ed era
                  usata dalle tribù indiane per rappresentare la propria
                  famiglia.
                  <br />
                  I nativi americani ritenevano che questi totem fossero dei
                  portafortuna e che vegliassero su di loro per preservarli dai
                  pericoli.
                  <br />
                  Su <strong>totemscout.com</strong> puoi sfogliare e cercare
                  tra tantissimi totem. Che tu sia un capo scout in cerca di
                  ispirazione o un visitatore curioso, su questo sito troverai
                  tante informazioni e curiosità.
               </Typography>

               <Typography variant="h6">Questo sito usa i Cookie</Typography>
               <Box fontSize={12}>
                  Il sito salva nell'archivio locale del browser (localStorage)
                  le tue preferenze (es. il tema o i segnalibri)
                  <br />
                  Tramite Google Analytics registra i tuoi comportamenti (es.
                  quando visiti una pagina) per permetterci di capire come
                  migliorare
                  <br />
                  L'applicazione Usa i cookie per gestire l'autenticazione al
                  pannello di amministrazione
                  <br />
                  Premendo su "Ho capito" accetti i nostri termini e condizioni
                  e potrai quindi accedere all'applicazione
               </Box>
               <Box textAlign="center" mt={4}>
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={() => {
                        onConfirm();
                     }}
                  >
                     Ho capito
                  </Button>
               </Box>
            </Paper>
         </Grid>
      </Grid>
   );
}
