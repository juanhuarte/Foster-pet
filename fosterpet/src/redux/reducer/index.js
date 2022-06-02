import {
  GET_ANIMALS,
  SIGN_IN,
  ADD_FAVORITE,
  GET_FAVORITES,
  DELETE_FAV,
  SIGN_OUT,
  CREATE_ADOPTION,
  EDIT_USER_INFO,
  CHANGE_USER_PASSWORD,
  GET_ADOPTIONS,
  CANCEL_ADOPTION,
  CREATE_ANIMAL,
  FILTER,
  FILTER_FAVORITES,
} from "../action/actionTypes";
import { filter } from "./filter";
const initialState = {
  animals: [],
  animalsCopy: [],
  user: {},
  // JSON.parse(window.localStorage.getItem("logUser"))
  //   ? JSON.parse(window.localStorage.getItem("logUser")).user
  //   : {},
  token: null,
  // JSON.parse(window.localStorage.getItem("logUser"))
  //   ? JSON.parse(window.localStorage.getItem("logUser")).token
  //   : null,
  message: null,
  favorites: [],
  favoritesCopy: [],
  success: false,
  adoptions: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ANIMALS:
      return {
        ...state,
        animals: payload,
        animalsCopy: payload,
      };
    case SIGN_IN:
      if (payload.message) return { ...state, message: payload.message };
      window.localStorage.setItem("logUser", JSON.stringify(payload));
      return {
        ...state,
        user: payload.user,
        // JSON.parse(window.localStorage.getItem("logUser")).user,
        token: payload.token,
        // JSON.parse(window.localStorage.getItem("logUser")).token,
        message: null,
      };
    case ADD_FAVORITE:
      return { ...state, favorites: payload };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
        favoritesCopy: payload,
      };
    case DELETE_FAV:
      return { ...state, favorites: payload };
    case SIGN_OUT:
      return {
        ...state,
        adoptions: [],
        favorites: [],
        favoritesCopy: [],
        user: {},
        token: null,
      };
    case CREATE_ADOPTION:
      return {
        ...state,
        message: payload.success,
        adoptions: [...state.adoptions, payload.data],
      };
    case EDIT_USER_INFO:
      return {
        ...state,
        user: payload.user,
        success: payload.success,
      };
    case CHANGE_USER_PASSWORD:
      return { ...state, success: payload.success };
    case GET_ADOPTIONS:
      return {
        ...state,
        adoptions: payload,
      };
    case CANCEL_ADOPTION:
      return {
        ...state,
        success: payload.success,
      };
    case CREATE_ANIMAL:
      return {
        ...state,
        success: payload.success,
        aniamls: [...state.animals, payload.data],
        animalsCopy: [...state.animalsCopy, payload.data],
      };
    case FILTER:
      return {
        ...state,
        animalsCopy: filter(state.animals, payload),
      };
    case FILTER_FAVORITES:
      return {
        ...state,
        favoritesCopy: filter(state.favorites, payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
