import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export const useEdit = () => {
  const history = useHistory();
  const success = useSelector((state) => state.success);

  if (success) history.push("/");
  //   if (message) return message;
};
