import React from "react";
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
