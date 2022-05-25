import { GET_ANIMALS } from "../action/index";
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
    default:
      return state;
  }
}

export default rootReducer;
