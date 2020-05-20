import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { importPets, getNewPet, reviewPet } from "./store/actions";
import initPets from "./store/data.json";

const useStyles = makeStyles({
  root: {
    marginTop: "50px",
    width: "40%",
    height: "90%",
  },
  media: {
    height: "600px",
  },
  break: {
    flexBasis: "100%",
    height: "0",
  },
  // card: {
  //   "margin-left": "35%",
  // },
});

export default function PetCard() {
  const classes = useStyles();
  const pets = useSelector((state) => state);

  const [active, setActive] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(importPets(initPets));
    dispatch(getNewPet());
  }, [dispatch]);

  useEffect(() => {
    setActive(pets.filter((pet) => pet.pending === true)[0]);
  }, [pets]);

  if (active) {
    console.log(active);
    return (
      <Card className={classes.root}>
        {/* <CardActionArea> */}
        <CardMedia className={classes.media} image={active.image} />
        <CardContent className={classes.card}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Typography gutterBottom variant="h5" component="h2">
              {active.name}
            </Typography>
            <div className={classes.break}></div>
            <Typography variant="body2" color="textSecondary" component="p">
              Breed: {active.breed}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            width="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Button
              onClick={() => {
                dispatch(reviewPet(true));
                dispatch(getNewPet());
              }}
              size="small"
              color="primary"
            >
              Like
            </Button>
            <div style={{ width: "25px" }} />
            <Button
              onClick={() => {
                dispatch(reviewPet(false));
                dispatch(getNewPet());
              }}
              size="small"
              color="primary"
            >
              Dislike
            </Button>
          </Box>
        </CardActions>
      </Card>
    );
  } else {
    return <h3>Loading</h3>;
  }
}
