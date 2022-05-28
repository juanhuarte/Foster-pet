import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../redux/action/index";

export const useCreateAnimal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);

  if (
    typeof success !== "boolean" &&
    (success.includes("cat") || success.includes("dog"))
  ) {
    dispatch(getAnimals());
    history.push("/");
  }
};
