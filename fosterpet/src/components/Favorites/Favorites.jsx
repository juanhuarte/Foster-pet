import { useSelector } from "react-redux";
import Animals from "../Animals/Animals";
import styles from "../Home/Home.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className={styles.home}>
      <div>
        <Animals animalsArray={favorites} />;
      </div>
    </div>
  );
};

export default Favorites;
