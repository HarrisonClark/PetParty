import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Card, 
        CardActionArea,
        CardContent, 
        CardActions,
        CardMedia, 
        Button, 
        Typography } from '@material-ui/core';
import PetCard from "./PetCard";
import { importPets, getNewPet, reviewPet } from "./store/actions.js";

export default function Main() {
  return (
    <>
      <h1>This is our main page</h1>
      <div>
        <PetCard />
      </div>
    </>
  );
}
