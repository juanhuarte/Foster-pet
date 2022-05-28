import { useSelector } from "react-redux";
import Animals from "../Animals/Animals";
import styles from "../Home/Home.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className={styles.home}>
      {favorites.length === 0 && (
        <p className={styles.text}>
          You don't have any animal mark as favorite
        </p>
      )}
      <div>
        <Animals animalsArray={favorites} />;
      </div>
    </div>
  );
};

export default Favorites;
