import { useSelector } from "react-redux";

export const useFavorites = (id) => {
  const favorites = useSelector((state) => state.favorites);

  if (favorites?.find((animal) => animal.id === id)) return true;
  return false;
};
