import { useSelector } from "react-redux";
import axios from "axios";

export const useValidation = () => {
  const token = useSelector((state) => state.token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return true;
  }
  return false;
};
