import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import initPets from "./store/data.json";

export default function Testing() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state);

  useEffect(() => {
    console.log(initPets[0]);
    dispatch({ type: "IMPORT_PET", pet: initPets[0] });
    dispatch({ type: "IMPORT_PET", pet: initPets[1] });
    dispatch({ type: "IMPORT_PET", pet: initPets[2] });
  }, [dispatch]);

  if (!pets) {
    return <div></div>;
  } else {
    console.log(pets);
    return (
      <div>
        {pets.map((pet) => (
          <div>
            {pet.name} {pet.pending ? "pending" : "stored"}{" "}
            {pet.like ? "like" : ""}
          </div>
        ))}
        <button onClick={() => dispatch({ type: "NEW_PENDING" })}>
          Pending
        </button>

        <button onClick={() => dispatch({ type: "REVIEW", like: true })}>
          Like
        </button>

        <button onClick={() => dispatch({ type: "REVIEW", like: false })}>
          Dislike
        </button>
      </div>
    );
  }
}
