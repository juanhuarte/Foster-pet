import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const useEdit = () => {
  const navigate = useNavigate();
  const success = useSelector((state) => state.success);

  if (success) navigate("/");
};
