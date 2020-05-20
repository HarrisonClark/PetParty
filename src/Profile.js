import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import MiniPetCard from "./MiniPetCard";
import { importPets, getNewPet, reviewPet } from "./store/actions.js";

export default function Profile() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography style={{ marginTop: "50px" }} variant="h3">
          Dogs You've Liked
        </Typography>
        <MiniPetCard />
      </Box>
    </>
  );
}
