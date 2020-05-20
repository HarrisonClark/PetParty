export function importPet(pet) {
  return {
    type: "IMPORT_PET",
    pet,
  };
}

export function importPets(pets) {
  return {
    type: "IMPORT_PETS",
    pets,
  };
}

export function getNewPet() {
  return {
    type: "NEW_PENDING",
  };
}

export function reviewPet(review) {
  return {
    type: "NEW_PENDING",
    review,
  };
}
