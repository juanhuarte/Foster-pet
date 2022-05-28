import axios from "axios";
export const GET_ANIMALS = "GET_ANIMALS";
export const CREATE_USER = "CREATE_USER";
export const SIGN_IN = "SIGN_IN";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const DELETE_FAV = "DELETE_FAV";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_ADOPTION = "CREATE_ADOPTION";
export const EDIT_USER_INFO = "EDIT_USER_INFO";
export const CHANGE_USER_PASSWORD = "CHANGE_USER_PASSWORD";
export const GET_ADOPTIONS = "GET_ADOPTIONS";
export const CANCEL_ADOPTION = "CANCEL_ADOPTION";
export const CREATE_ANIMAL = "CREATE_ANIMAL";

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

export const editUserInfo = (newInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("user", newInfo);
      dispatch({
        type: EDIT_USER_INFO,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const changeUserPassword = (newInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("user/password", newInfo);
      dispatch({
        type: CHANGE_USER_PASSWORD,
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

export const createAdoption = (inputData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/adopt", inputData);
      dispatch({
        type: CREATE_ADOPTION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const getAdoptions = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("adopt");
      dispatch({
        type: GET_ADOPTIONS,
        payload: data.adoptionHistory,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const updateAdoption = ({ id, status }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/adopt/request/${id}`, { status });
      dispatch({
        type: CANCEL_ADOPTION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const createAnimal = (inputData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/animal", inputData);
      dispatch({
        type: CREATE_ANIMAL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};
