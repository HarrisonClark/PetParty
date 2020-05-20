export function importPets(pets) {
    return {
        type: "IMPORT_PET",
        pets
    }
}

export function getNewPet() {
    return {
        type: "NEW_PENDING",
    }
}

export function reviewPet(review) {
    return {
        type: "NEW_PENDING",
        review
    }
}