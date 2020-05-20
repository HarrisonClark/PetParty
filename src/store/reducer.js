const initialState = [];

export default function reducer(state = initialState, action) {
  let id = 0;
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
      let copyPets = [...state];
      copyPets[-1].pending = true;
      return copyPets;
    }
    // REVIEW passes like or dislike in action.like and changes it on pending
    case "REVIEW": {
      let copyPets = [...state];
      let pet = copyPets.filter((pets) => pets.pending === true);
      pet.reviewed = true;
      pet.like = action.like;

      return copyPets;
    }
    default: {
      return state;
    }
  }
}
