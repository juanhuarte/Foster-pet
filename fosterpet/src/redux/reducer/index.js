import {
  GET_ANIMALS,
  CREATE_USER,
  SIGN_IN,
  ADD_FAVORITE,
  GET_FAVORITES,
  DELETE_FAV,
  SIGN_OUT,
} from "../action/index";
const initialState = {
  animals: [],
  animalsCopy: [],
  user: JSON.parse(window.localStorage.getItem("logUser"))
    ? JSON.parse(window.localStorage.getItem("logUser")).user
    : {},
  token: JSON.parse(window.localStorage.getItem("logUser"))
    ? JSON.parse(window.localStorage.getItem("logUser")).token
    : null,
  message: null,
  favorites: [],
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
    case SIGN_IN:
      if (payload.message) return { ...state, message: payload.message };
      window.localStorage.setItem("logUser", JSON.stringify(payload));
      return {
        ...state,
        user: JSON.parse(window.localStorage.getItem("logUser")).user,
        token: JSON.parse(window.localStorage.getItem("logUser")).token,
        message: null,
      };
    case ADD_FAVORITE:
      return { ...state, favorites: payload };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };
    case DELETE_FAV:
      return { ...state, favorites: payload };
    case SIGN_OUT:
      return {
        ...state,
        favorites: [],
        user: {},
        token: null,
      };
    default:
      return state;
  }
}

export default rootReducer;
