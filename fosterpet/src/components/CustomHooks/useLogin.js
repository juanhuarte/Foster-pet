import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export const useLogin = () => {
  const history = useHistory();
  const token = useSelector((state) => state.token);
  const message = useSelector((state) => state.message);

  if (token) history.push("/");
  if (message) return message;
};
