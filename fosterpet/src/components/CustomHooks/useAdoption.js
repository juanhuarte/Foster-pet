import { useSelector } from "react-redux";

export const useAdoption = (id) => {
  const adoptions = useSelector((state) => state.adoptions);

  if (adoptions?.find((adopt) => adopt.animal === id)) return true;
  else return false;
};
