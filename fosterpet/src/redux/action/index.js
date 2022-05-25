import axios from "axios";
export const GET_ANIMALS = "GET_ANIMALS";

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
