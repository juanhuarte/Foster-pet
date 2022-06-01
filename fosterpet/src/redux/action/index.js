import axios from "axios";
import * as actionType from "./actionTypes";

export const getAnimals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/animal");
      dispatch({
        type: actionType.GET_ANIMALS,
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
        type: actionType.CREATE_USER,
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
        type: actionType.SIGN_IN,
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
        type: actionType.EDIT_USER_INFO,
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
        type: actionType.CHANGE_USER_PASSWORD,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const deleteAcount = () => {
  return async (dispatch) => {
    try {
      await axios.delete("/user");
      dispatch({
        type: actionType.DELETE_ACOUNT,
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
        type: actionType.ADD_FAVORITE,
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
        type: actionType.GET_FAVORITES,
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
        type: actionType.DELETE_FAV,
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
    type: actionType.SIGN_OUT,
  };
};

export const createAdoption = (inputData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/adopt", inputData);
      dispatch({
        type: actionType.CREATE_ADOPTION,
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
        type: actionType.GET_ADOPTIONS,
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
        type: actionType.CANCEL_ADOPTION,
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
        type: actionType.CREATE_ANIMAL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

// export const filter = (data) => {
//   return {
//     type: actionType.FILTER,
//     payload: data,
//   };
// };

export const filter = (data) => {
  return {
    type: actionType.FILTER,
    payload: data,
  };
};

export const filterFav = (data) => {
  return {
    type: actionType.FILTER_FAVORITES,
    payload: data,
  };
};
