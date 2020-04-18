import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ReactGA from 'react-ga';

const useStyles = makeStyles(theme => ({
   paper: {
      padding: theme.spacing(4)
   },
   donateButton: {
      textAlign: 'center',
      marginTop: theme.spacing(4)
   },
   alert: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
   }
}));

export default function CreditsPage() {
   useEffect(() => {
      ReactGA.pageview(`/app/donate`);
   }, []);
   const history = useHistory();
   const query = new URLSearchParams(history.location.search);
   const result = query.get('result') || null;
   const classes = useStyles();
   const paypalButtonId = process.env.hasOwnProperty(
      'REACT_APP_PAYPAL_BUTTON_ID'
   )
      ? process.env.REACT_APP_PAYPAL_BUTTON_ID
      : null;
   let message = null;

   if (result === 'completed') {
      message = (
         <Alert severity="success" className={classes.alert}>
            Grazie per il tuo aiuto! E' dai piccoli gesti che si riconsce il
            valore delle persone
         </Alert>
      );
   } else if (result === 'cancel') {
      message = (
         <Alert severity="error" className={classes.alert}>
            Qualcosa è andato storto! Riprova di nuovo se non ti spiace
         </Alert>
      );
   }

   return (
      <Paper className={classes.paper}>
         <Typography variant="h4" gutterBottom>
            Supportaci
         </Typography>
         {message}
         <Typography paragraph>
            Se ti piace il progetto supportaci con una piccola donazione. Ci
            aiuterai a ripagare le spese di mantenimento dell'applicazione!
         </Typography>
         <Typography paragraph>
            Premi sul tasto qui sotto e dona la cifra che preferisci attraverso
            PayPal.
         </Typography>

         {paypalButtonId && (
            <div className={classes.donateButton}>
               <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
               >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                     type="hidden"
                     name="hosted_button_id"
                     value={paypalButtonId}
                  />
                  <input
                     type="image"
                     src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif"
                     border="0"
                     name="submit"
                     title="PayPal - The safer, easier way to pay online!"
                     alt="Fai una donazione con il pulsante PayPal"
                  />
               </form>
            </div>
         )}
      </Paper>
   );
}
