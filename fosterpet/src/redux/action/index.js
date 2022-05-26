import axios from "axios";
export const GET_ANIMALS = "GET_ANIMALS";
export const CREATE_USER = "CREATE_USER";

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
    }
  };
};
