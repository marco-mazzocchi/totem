import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

function AnimalList({animals}) {
    const history = useHistory();

    const useStyles = makeStyles(theme => ({
        card: {
            maxWidth: 345,
            marginBottom: 20,
            marginTop: 20
        },
        media: {
            height: 140,
        },
        chip: {
            margin: theme.spacing(0.5),
            marginTop: theme.spacing(1),
        },
        detailsButton: {
            marginLeft: 'auto'
        },
        categoryChip: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1)
        } 
    }));

    const classes = useStyles();

    const animalsRender = animals.map(animal => {
        
        const tags = animal.tags.map((tag) => {
            return (
               
                    <Chip
                        key={tag.id} 
                    className={classes.chip} 
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        history.push(`/tags/${tag.id}`);
                    }
                    }
                        label={tag.name} 
                        color="primary" 
                        size="small"
                        variant="outlined"
                        clickable={true}
                    />
            );
        });

        return (
            <Card className={classes.card} key={animal.id}>
                <CardActionArea component='a' href={`/animals/${animal.id}`}>
                    <CardMedia
                        className={classes.media}
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
                        <Typography variant="body2" color="textSecondary" component="p">
                            {animal.short_description || ''}
                     </Typography>
                    { tags }
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="share">
                        <BookmarkBorder />
                    </IconButton>
                    <Button 
                    size="small" 
                    color="primary" 
                    className={classes.detailsButton}
                    component='a' 
                    href={`/animals/${animal.id}`}
                    >
                        Dettagli
                </Button>
                </CardActions>
            </Card>
        );
    });

    if(!animals.length) return false;

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
        {animalsRender}
        </Grid>
    );

}

export default AnimalList;