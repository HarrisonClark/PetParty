import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Testing() {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);

  if (!pets) {
    return <div></div>;
  } else {
    return (
      <div>
        {pets.map((pet) => (
          <div>{pet}</div>
        ))}
      </div>
    );
  }
}
