import { useSelector } from "react-redux";

export const useAnimalAdoption = (id) => {
  const animals = useSelector((state) => state.animals);
  return animals?.find((animal) => animal.id === id);
};
