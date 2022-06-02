import { useDispatch, useSelector } from "react-redux";
import Animals from "../Animals/Animals";
import Filter from "../Filter/Filter";
import styles from "../Home/Home.module.css";
import { filterFav, getFavorites } from "../../redux/action/index";
import { useEffect } from "react";

const Favorites = () => {
  const favorites = useSelector((state) => state.favoritesCopy);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className={styles.home}>
      {favorites.length === 0 && (
        <p className={styles.text}>
          You don't have any animal mark as favorite
        </p>
      )}
      <div>
        <Filter actionCreator={filterFav} />
        <Animals animalsArray={favorites} />;
      </div>
    </div>
  );
};

export default Favorites;
