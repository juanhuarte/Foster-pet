import { useSelector } from "react-redux";

export const useAnimalDetail = (id) => {
  const animals = useSelector((state) => state.animals);
  const user = useSelector((state) => state.user);
  let animal = animals?.find((animal) => animal.id === id);
  return {
    animal: animal,
    isTheRescuer: animal?.user === user.id ? true : false,
  };
  // return animals?.find((animal) => animal.id === id);
};
