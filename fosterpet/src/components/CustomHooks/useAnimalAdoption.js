import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAnimals } from "../../redux/action/index";

export const useAnimalAdoption = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAnimals());
  }, []);
  const allAnimals = useSelector((state) => state.allAnimals);
  return allAnimals?.find((animal) => animal.id === id);
};
