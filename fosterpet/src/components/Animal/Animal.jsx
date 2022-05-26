import { NavLink } from "react-router-dom";
import styles from "./Animal.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function Animal({ gender, size, image, temporaryName, id }) {
  const handleClick = (e) => {
    e.preventDefault();
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
      <button onClick={handleClick} className={styles.icon}>
        <AiOutlineHeart
          size="25"
          style={{
            color: "#f8edeb",
            backgroundColor: "none",
            marginTop: "1vh",
            // marginRight: "1vw",
          }}
        />
      </button>
    </div>
  );
}
