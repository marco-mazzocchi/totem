import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

function AnimalDetails() {

    const {id} = useParams();
    const [animal, setAnimal] = useState(false);
    useEffect(() => {
      axios.get(`/api/animals/${id}`).then(response => {
                if (response.status === 200) {
                    setAnimal(response.data);
                }
            }); 
    }, [id]);

    const useStyles = makeStyles(theme => ({
        card: {
            maxWidth: 345,
            marginBottom: 20,
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }));

    const classes = useStyles();

    if(!animal) return <LinearProgress />;

    return (
        <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={animal.name}
          height="140"
          image={animal.picture}
          title={animal.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {animal.name}
          </Typography>
          
          
          <Typography>
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
          <Typography>
            {animal.physical_description}
          </Typography>
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
          <Typography>
            {animal.behavior_description}
          </Typography>
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
          <Typography>
            {animal.habitat_description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

        </CardContent>
    </Card>
    );
}

export default AnimalDetails;