import { useSelector } from "react-redux";

export const useFavorites = (id) => {
  const favorites = useSelector((state) => state.favorites);
  console.log("1", favorites);
  if (
    Array.isArray(favorites) &&
    favorites?.length > 0 &&
    favorites?.find((animal) => animal.id === id)
  )
    return true;
  return false;
};
