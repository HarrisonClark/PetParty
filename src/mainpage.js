<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Card, 
        CardActionArea,
        CardContent, 
        CardActions,
        CardMedia, 
        Button, 
        Typography } from '@material-ui/core';

import { importPets, getNewPet, reviewPet } from './store/actions.js';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Main() {
    const classes = useStyles();
    return (
        <>
            <h1>
                This is our main page
            </h1>
            <div>
                <Card className={classes.root}> 
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://images.dog.ceo/breeds/dingo/n02115641_4265.jpg"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dog Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
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
           </div>
        </>
    )
}
=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { importPets, getNewPet, reviewPet } from "./store/actions.js";

export default function Main() {
  return (
    <>
      <h1>This is our main page</h1>
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
>>>>>>> 122c55ee706bf47998a4e501c24eb7b41decd438
