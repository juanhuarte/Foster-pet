import axios from "axios";
export const GET_ANIMALS = "GET_ANIMALS";
export const CREATE_USER = "CREATE_USER";
export const SIGN_IN = "SIGN_IN";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const DELETE_FAV = "DELETE_FAV";
export const SIGN_OUT = "SIGN_OUT";

export const getAnimals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/animal");
      dispatch({
        type: GET_ANIMALS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const createUser = (inputData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/user", inputData);
      dispatch({
        type: CREATE_USER,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const signIn = (inputDate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/user?mail=${inputDate.mail}&password=${inputDate.password}`
      );
      dispatch({
        type: SIGN_IN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const addFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/favorite/${id}`);
      dispatch({
        type: ADD_FAVORITE,
        payload: data.favoritesAnimals,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("favorite");
      dispatch({
        type: GET_FAVORITES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const deleteFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/favorite/${id}`);
      dispatch({
        type: DELETE_FAV,
        payload: data.favoritesAnimals,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
