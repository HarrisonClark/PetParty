import React from "react";
import Pet from "./Pet";
import { importPets, getNewPet, reviewPet } from "./store/actions.js";

export default function Main() {
  return (
    <>
      <h1>This is our main page</h1>
      <div>
        <Pet />
      </div>
    </>
  );
}
