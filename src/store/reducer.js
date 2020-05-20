const initialState = [];
let id = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "IMPORT_PET": {
      return [
        ...state,
        {
          ...action.pet,
          pending: false,
          reviewed: false,
          like: null,
          pk: id++,
        },
      ];
    }
    case "NEW_PENDING": {
      let currentPending = state.filter((pets) => pets.pending === true);
      // if there is already a pending pet, do nothing
      if (currentPending.length !== 0) {
        console.log("Already Pending Pets");
        return state;
      } else {
        let copyPets = [...state];
        // return the state with a non-reviewed pet pending
        copyPets.some((pet) => {
          if (pet.reviewed === false) {
            pet.pending = true;
            return true;
          } else {
            return false;
          }
        });
        return copyPets;
      }
    }
    // REVIEW passes like or dislike in action.like and changes it on pending
    case "REVIEW": {
      let currentPending = state.filter((pets) => pets.pending === true);
      // if there is already a pending pet, do nothing
      if (currentPending.length !== 1) {
        console.log("No Pending Pet");
        return state;
      } else {
        let copyPets = [...state];
        // return the state with a non-reviewed pet pending
        copyPets.some((pet) => {
          if (pet.pending === true) {
            pet.like = action.like;
            pet.pending = false;
            pet.reviewed = true;
            return true;
          } else {
            return false;
          }
        });
        return copyPets;
      }
    }
    default: {
      return state;
    }
  }
}
