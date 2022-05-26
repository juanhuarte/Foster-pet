import { GET_ANIMALS, CREATE_USER } from "../action/index";
const initialState = {
  animals: [],
  animalsCopy: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ANIMALS:
      return {
        ...state,
        animals: payload,
        animalsCopy: payload,
      };
    case CREATE_USER:
      return { ...state };
    default:
      return state;
  }
}

export default rootReducer;
