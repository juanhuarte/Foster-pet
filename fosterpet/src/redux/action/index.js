import axios from "axios";
import * as actionType from "./actionTypes";

export const getAnimals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/animal");
      if (!data.success) return data.error;
      // if (data.success)
      dispatch({
        type: actionType.GET_ANIMALS,
        payload: data.animals,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const getAllAnimals = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/animals");
      if (!data.success) return data.error;
      // if (data.success)
      dispatch({
        type: actionType.GET_ALL_ANIMALS,
        payload: data.animals,
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
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
      const { data } = await axios.delete("/user");
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
      // if (data.success)
      dispatch({
        type: actionType.GET_FAVORITES,
        payload: data.favorites,
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
      // if (data.success)
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
      const { data } = await axios.put(`/adopt/${id}`, { status });
      if (!data.success) return data.error;
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
      if (!data.success) return data.error;
      dispatch({
        type: actionType.CREATE_ANIMAL,
        payload: data,
      });
      // return data.success;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const deleteAnimal = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/animal/${id}`);
      if (!data.success) return data.error;
      dispatch({
        type: actionType.DELETE_ANIMAL,
        // payload: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

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

export const verifyToken = (token) => {
  return async (dispatch) => {
    const { data } = await axios.get("/user/verify", {
      headers: {
        Authorization: token,
      },
    });
    if (!data.success) return data.error;
    dispatch({
      type: actionType.SIGN_IN,
      payload: {
        token: token.substring(7),
        user: data.data,
      },
    });
  };
};

export const getAdoptionRequest = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("adopt/request");
      if (!data.success) return data.error;
      // if (data.success)
      dispatch({
        type: actionType.GET_ADOPTION_REQUEST,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const answerRequest = ({ id, status }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/adopt/request/${id}`, { status });
      if (!data.success) return data.error;
      dispatch({
        type: actionType.ANSWER_ADOPTION_REQUEST,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};
