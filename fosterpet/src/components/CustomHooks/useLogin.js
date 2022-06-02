import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const useLogin = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const message = useSelector((state) => state.message);

  // if (token) navigate("/");
  if (message) return message;
};
