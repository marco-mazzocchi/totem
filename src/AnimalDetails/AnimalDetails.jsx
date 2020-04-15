import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

function AnimalDetails() {
   const { id } = useParams();
   const history = useHistory();
   const [animal, setAnimal] = useState(false);
   useEffect(() => {
      ReactGA.pageview(`/animals/${id}`);
      axios.get(`/api/animals/${id}`).then(response => {
         if (response.status === 200) {
            setAnimal(response.data);
         }
      });
   }, [id]);

   const useStyles = makeStyles(theme => ({
      card: {
         position: 'relative',
         width: '100%',
         maxWidth: 500,
         marginBottom: 20,
         marginTop: 20,
         marginLeft: 'auto',
         marginRight: 'auto'
      },
      author: {
         color: theme.palette.secondary
      },
      shortDescription: {
         marginBottom: theme.spacing(3)
      },
      tags: {
         marginTop: theme.spacing(3)
      },
      chip: {
         margin: theme.spacing(0.5),
         marginTop: theme.spacing(1)
      },
      categoryChip: {
         position: 'absolute',
         top: theme.spacing(1),
         right: theme.spacing(1)
      }
   }));

   const classes = useStyles();

   if (!animal) return <LinearProgress />;

   const tags = animal.tags.map(tag => {
      return (
         <Chip
            key={tag.id}
            className={classes.chip}
            onClick={e => {
               e.preventDefault();
               e.stopPropagation();
               history.push(`/tags/${tag.id}`);
            }}
            label={tag.name}
            color="primary"
            size="small"
            variant="outlined"
            clickable={true}
         />
      );
   });

   return (
      <Card className={classes.card}>
         <CardMedia
            component="img"
            alt={animal.name}
            height="240"
            image={animal.picture}
            title={animal.name}
         />
         <Chip
            label={animal.category.name}
            color="default"
            size="small"
            className={classes.categoryChip}
            onClick={e => {
               e.preventDefault();
               e.stopPropagation();
               history.push(`/category/${animal.category.id}`);
            }}
            clickable={true}
         />
         <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {animal.name}
            </Typography>

            {animal.author && (
               <Typography className={classes.author} paragraph>
                  Autore: {animal.author}
               </Typography>
            )}

            <Typography className={classes.shortDescription}>
               {animal.short_description}
            </Typography>

            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>Descrizione fisica</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>{animal.physical_description}</Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>Comportamento</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>{animal.behavior_description}</Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>Habitat</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>{animal.habitat_description}</Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>
            <div className={classes.tags}>{tags}</div>
         </CardContent>
      </Card>
   );
}

export default AnimalDetails;
