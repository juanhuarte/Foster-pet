import { useSelector } from "react-redux";
import Animals from "../Animals/Animals";
import Filter from "../Filter/Filter";
import styles from "../Home/Home.module.css";
import { filterFav } from "../../redux/action/index";

const Favorites = () => {
  const favorites = useSelector((state) => state.favoritesCopy);
  console.log("favorites", favorites);
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
