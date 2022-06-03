import { NavLink } from "react-router-dom";
import styles from "./Animal.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useValidation } from "../CustomHooks/useValidation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addFavorite, deleteFav } from "../../redux/action/index";
import { useFavorites } from "../CustomHooks/useFavorites";

export default function Animal({ gender, size, image, temporaryName, id }) {
  const validation = useValidation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFav = useFavorites(id);
  const handleClick = (e) => {
    if (validation) {
      if (!isFav) dispatch(addFavorite(id));
      else dispatch(deleteFav(id));
    } else navigate("/signin");
  };
  return (
    <div className={styles.container}>
      <NavLink className={styles.nav} to={`/animal/${id}`}>
        <img src={image} alt={temporaryName} className={styles.img} />
      </NavLink>
      <h3 className={styles.title}>{temporaryName}</h3>
      <div className={styles.details}>
        <p className={styles.text}>Gender</p>
        <p className={styles.text}>Size</p>
      </div>
      <div className={styles.details}>
        <p className={styles.text}>{gender}</p>
        <p className={styles.text1}>{size}</p>
      </div>
      <div className={styles.containerButton}>
        <button onClick={handleClick} className={styles.icon}>
          {!isFav ? (
            <AiOutlineHeart
              size="25"
              style={{
                color: "#f8edeb",
                backgroundColor: "none",
                marginTop: "1vh",
              }}
            />
          ) : (
            <AiFillHeart
              size="25"
              style={{
                color: "#d62828",
                backgroundColor: "none",
                marginTop: "1vh",
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}
