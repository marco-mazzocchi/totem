import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Link } from '@material-ui/core';
import ReactGA from 'react-ga';

const useStyles = makeStyles(theme => ({
   paper: {
      padding: theme.spacing(4)
   }
}));

export default function CreditsPage() {
   useEffect(() => {
      ReactGA.pageview(`/app/credits`);
   }, []);
   const classes = useStyles();
   return (
      <Paper className={classes.paper}>
         <Typography variant="h4" gutterBottom>
            Credits
         </Typography>
         <Typography variant="h5">Ringraziamenti</Typography>
         <Typography paragraph>
            Un grandissimo grazie a <strong>Claudio Campioni</strong> per aver
            sostenuto e collaborato al progretto inserendo, tra le altre cose,
            tantissime schede
         </Typography>
         <Typography paragraph>
            Grazie a Paolo Campioni per aver adattato il logo dell'applicazione
         </Typography>
         <Typography paragraph>
            Grazie anche a tutti coloro che hanno dato il loro contributo:
         </Typography>
         <ul>
            <li>Tommaso Groppi</li>
         </ul>
         <Typography variant="h5">Immagini e icone</Typography>
         <Typography paragraph>
            <strong>Logo</strong>: Icons made by{' '}
            <Link
               href="https://www.flaticon.com/authors/freepik"
               title="Freepik"
            >
               Freepik
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" title="Flaticon">
               www.flaticon.com
            </Link>
            <br />
            <strong>Immagine di sfondo all'apertura:</strong>{' '}
            <Link
               href="https://unsplash.com/@heftiba?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
               target="_blank"
               rel="noopener noreferrer"
               title="Download free do whatever you want high-resolution photos from Toa Heftiba"
            >
               Toa Heftiba
            </Link>
         </Typography>
      </Paper>
   );
}
