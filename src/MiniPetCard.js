import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  break: {
    flexBasis: "100%",
    height: "0",
  },
});

export default function PetCard() {
  const classes = useStyles();
  const pets = useSelector((state) => state);

  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(pets.filter((pet) => pet.like === true));
  }, [pets]);

  if (active) {
    console.log(active);
    return active.map((active) => (
      <Card className={classes.root}>
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
      </Card>
    ));
  } else {
    return <h3>Loading</h3>;
  }
}
