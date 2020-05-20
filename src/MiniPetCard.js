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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { importPets, getNewPet, reviewPet } from "./store/actions";
import initPets from "./store/data.json";

const useStyles = makeStyles({
  root: {
    margin: "50px",
    minWidth: "200px",
    width: "20%",
    height: "20%",
  },
  media: {
    height: "200px",
  },
  card: {
    "margin-left": "35%",
  },
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
    setActive(pets.filter((pet) => pet.like === true));
  }, [pets]);

  if (active) {
    console.log(active);
    return active.map((active) => (
      <Card className={classes.root}>
        {/* <CardActionArea> */}
        <CardMedia className={classes.media} image={active.image} />
        <CardContent className={classes.card}>
          <Typography gutterBottom variant="h5" component="h2">
            {active.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Breed: {active.breed}
          </Typography>
        </CardContent>
      </Card>
    ));
  } else {
    return <h3>Loading</h3>;
  }
}
