import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 600,
  },
  card: {
    'margin-left': '35%',
  }, 
});

export default function PetCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.dog.ceo/breeds/dingo/n02115641_4265.jpg"
        />
        <CardContent className={classes.card }>
          <Typography gutterBottom variant="h5" component="h2">
            Dog Name
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p">
            Breed: Dalmatian
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="primary">
          Dislike
        </Button>
      </CardActions>
    </Card>
  );
}
