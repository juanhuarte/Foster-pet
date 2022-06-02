import { useSelector } from "react-redux";

export const useFavorites = (id) => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  if (favorites?.length > 0 && favorites?.find((animal) => animal.id === id))
    return true;
  return false;
};
