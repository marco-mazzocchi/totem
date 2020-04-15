import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const useStyles = makeStyles(theme => ({
   card: {
      width: '100%',
      maxWidth: 345,
      marginBottom: 20,
      marginTop: 20
   },
   media: {
      height: 140
   },
   chip: {
      margin: theme.spacing(0.5),
      marginTop: theme.spacing(1)
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

function AnimalList({ animals, navigation }) {
   const history = useHistory();
   const { pathname } = history.location;
   const classes = useStyles();
   const page = navigation ? navigation.page : null;
   const CenteredPagination = withStyles({
      ul: {
         justifyContent: 'center'
      }
   })(Pagination);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [page]);

   const animalsRender = animals.map(animal => {
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
         <Card className={classes.card} key={animal.id}>
            <CardActionArea component="a" href={`/app/animals/${animal.id}`}>
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
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     {animal.short_description || ''}
                  </Typography>
                  {tags}
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
                  component="a"
                  href={`/app/animals/${animal.id}`}
               >
                  Dettagli
               </Button>
            </CardActions>
         </Card>
      );
   });

   if (!animals.length) return false;
   let pageCount;
   if (navigation) {
      const resultPerPage = 10;
      const resultCount = navigation.count;
      pageCount = Math.ceil(resultCount / resultPerPage);
   }

   return (
      <>
         <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
         >
            {animalsRender}
         </Grid>
         {navigation && (
            <CenteredPagination
               page={page}
               count={pageCount}
               color="primary"
               renderItem={item => (
                  <PaginationItem
                     component={Link}
                     to={`${pathname}${
                        item.page === 1 ? '' : `?page=${item.page}`
                     }`}
                     {...item}
                  />
               )}
               className={classes.pagination}
            />
         )}
      </>
   );
}

export default AnimalList;
