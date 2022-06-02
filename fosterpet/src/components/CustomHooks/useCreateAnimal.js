import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../redux/action/index";

export const useCreateAnimal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);

  if (success) {
    dispatch(getAnimals());
    navigate("/");
  }
};
