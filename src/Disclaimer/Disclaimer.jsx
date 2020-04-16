import React from 'react';
import { Typography, Button } from '@material-ui/core';

export default function Disclaimer() {
   return (
      <>
         <Typography variant="h4">Benvenuto</Typography>
         <Typography paragraph>
            Su TotemScout puoi sfogliare e cercare tra tantissimi totem
         </Typography>

         <Typography variant="h5">Questo sito usa i Cookie</Typography>
         <Typography paragraph>
            Salva nell'archivio locale del browser (localStorage) le tue
            preferenze (es. il tema o i segnalibri)
         </Typography>
         <Typography paragraph>
            Tramite Google Analytics registra i tuoi comportamenti (es. quando
            visiti una pagina) per permetterci di capire come migliorare
         </Typography>
         <Typography paragraph>
            L'applicazione Usa i cookie per gestire l'autenticazione al pannello
            di amministrazione Premendo su "Ho capito"
         </Typography>
         <Button>Ho capito</Button>
      </>
   );
}
