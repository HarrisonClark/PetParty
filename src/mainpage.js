import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import PetCard from "./PetCard";
import { importPets, getNewPet, reviewPet } from "./store/actions.js";

export default function Main() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <PetCard />
      </Box>
    </>
  );
}
