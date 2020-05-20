import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import PetCard from "./PetCard";
import { importPets, getNewPet, reviewPet } from "./store/actions.js";
import Messaging from './Messaging';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Main() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <PetCard />
        <Messaging />
      </Box>
      <div style={{marginBottom: 50}}/>
      <CssBaseline />
    </>
  );
}
