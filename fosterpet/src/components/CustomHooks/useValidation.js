import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { verifyToken } from "../../redux/action/index";

export const useValidation = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return true;
  }
  if (!token) {
    const tokenLocalStorage = JSON.parse(
      window.localStorage.getItem("logUser")
    );
    if (tokenLocalStorage) {
      dispatch(verifyToken(`Bearer ${tokenLocalStorage.token}`)).then((res) => {
        if (res) {
          window.localStorage.removeItem("logUser");
          axios.defaults.headers.common["Authorization"] = "";
          console.log(res);
          return false;
        }
      });
      return true;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
      return false;
    }
  }
};
