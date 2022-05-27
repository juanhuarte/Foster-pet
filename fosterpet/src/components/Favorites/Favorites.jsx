import { useSelector } from "react-redux";
import Animals from "../Animals/Animals";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  return <Animals animalsArray={favorites} />;
};

export default Favorites;
