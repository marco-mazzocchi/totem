import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Box, Link } from '@material-ui/core';
import ReactGA from 'react-ga';
import indian from '../images/indian-557261_1280.jpg';

const useStyles = makeStyles(theme => ({
   paper: {
      padding: theme.spacing(4)
   },
   image: {
      maxWidth: '100%'
   }
}));

export default function HistoryPage() {
   useEffect(() => {
      ReactGA.pageview(`/app/history`);
   }, []);
   const classes = useStyles();
   return (
      <Paper className={classes.paper}>
         <img
            src={indian}
            alt="Foto di Tomasz Proszek"
            className={classes.image}
         />
         <Box fontSize={12} mb={4} textAlign="right">
            Foto di{' '}
            <Link href="https://pixabay.com/it/users/TomaszProszek-613139/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=557261">
               Tomasz Proszek
            </Link>{' '}
            da{' '}
            <Link href="https://pixabay.com/it/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=557261">
               Pixabay
            </Link>
         </Box>
         <Typography variant="h4" gutterBottom>
            La storia dei totem
         </Typography>
         <Box fontSize={22} lineHeight={1.2}>
            La parola “Totem” è indiana e significa semplicemente “Insegna” o
            “Stemma” della famiglia che lo usa. Questa insegna o stemma era
            abitualmente dipinta o incisa su tutti gli oggetti usati dal
            proprietario. Le famiglie Indiane d’America avevano il loro Totem
            scolpiti su alti pali di cedro intagliati: l’insegna stava in cima
            ad essi ed era generalmente costituita da un animale. Le tribù
            ritenevano che questi totem fossero dei portafortuna e che
            vegliassero su di loro per preservarli dai pericoli.
         </Box>
         <Box fontSize={18} fontStyle="italic" mb={6}>
            <blockquote>
               ricevetti presso gli Zulù il soprannome di “Imhlala-Panzi”,
               letteralmente “l’uomo che si sdraia per sparare”
               <br />
               <strong>- Lord Baden Powell of Giwell</strong>
            </blockquote>
         </Box>
         <Typography paragraph>
            Il Totem deve evidenziare le buone qualità, gli aspetti fisici e
            caratteriali della persona a cui viene attribuito.
            <br />
            Esso non deve mai essere assolutamente una presa in giro, né tanto
            meno un nomignolo umiliante. <br />
            Non è detto che il Totem debba essere per forza un animale; Si
            possono utilizzare anche elementi e/o fenomeni naturali. <br />
            La tradizione della totemizzazione non costituisce parte integrante
            del metodo scout di nessuna associazione. La validità del Totem e
            della totemizzazione va dunque valutata nel contesto educativo entro
            cui si colloca.
         </Typography>
         <Typography variant="h6">I totem negli scout</Typography>
         <Typography paragraph>
            In ogni gruppo scout, il Totem viene consegnato a varie annate
            diverse: ai squadriglieri che hanno affrontato il loro primo campo,
            ai ragazzi che sono entrati in Alta Squadriglia oppure ai ragazzi
            che affrontano l’Hike di passaggio dal Reparto alla branca R/S. Se
            si vuole “rispettare” le tradizioni delle tribù che consegnavano i
            Totem, il tempo migliore per consegnare il Nome di caccia è quando
            il ragazzo raggiunge la maturità nell’arco della vita di Reparto.
            Però, dato che la totemizzazione non fa parte del Metodo, ogni
            gruppo si senta libero di decidere qual è il tempo corretto.
         </Typography>
         <Typography variant="h6">La cerimonia</Typography>
         <Typography paragraph>
            Il Totem viene consegnato attraverso una cerimonia, dove dovrà
            superare delle prove che testimonieranno il suo valore; anche questo
            punto è fonte di discussione: in alcuni reparti preferiscono farla
            in segreto con le sole persone che devono ricevere il Totem, altri
            in condivisione con tutto il reparto, altri ancora consegnano il
            Nome di caccia dopo alcuni eventi come l'Hike, Missioni, Imprese o
            sul finire del primo campo estivo. <br />
            Ogni cerimonia si può enfatizzare come più si desidera o addirittura
            rievocare una vera e propria serata tema Pellerossa, con tamburi,
            pitture ai canditati ecc. <br />
            L’importante è che la cerimonia, le prove e il Totem non siano fonte
            di forte umiliazione, che ci sia anche un momento in cui si
            valorizza l’importanza del ragazzo: in questo momento si deve
            ricordare che è lui il protagonista e che sta per vivere
            un’esperienza importante del suo percorso Scout.{' '}
         </Typography>
         <Typography variant="h6">Lo scopo del sito</Typography>
         <Typography paragraph>
            Questo sito che abbiamo sviluppato, ha l’obiettivo principale di
            aiutare voi Capi Scout ad individuare al meglio il Nome di
            Caccia/Totem più adatto al ragazzo e che vi possa a far comprendere
            lo scopo e la bellezza della cerimonia dei Totem. <br />
            Speriamo che le schede informative possano aiutarvi a farvi una idea
            di base sull’animale, elemento o fenomeno individuato, per poi
            approfondirlo ulteriormente.{' '}
         </Typography>
         <Typography paragraph>
            Se ritenete che le schede siano errate, siano incomplete o
            addirittura che manchino delle schede di alcuni animali/elementi, vi
            chiediamo di segnalarcelo e di correggere/implementare/creare le
            schede, contattandoci attraverso il canale apposito.
         </Typography>
         <Typography>
            Buona Caccia,
            <br />
            Lo Staff tecnico supervisore del sito
            <br />
            Marco (Gufo Capace) & Claudio (Gorilla Generoso)
         </Typography>
      </Paper>
   );
}
