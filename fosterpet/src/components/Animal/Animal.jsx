import { NavLink } from "react-router-dom";
import styles from "./Animal.module.css";

export default function Animal({ description, image, temporaryName, id }) {
  return (
    <div className={styles.container}>
      <NavLink className={styles.nav} to={`/animal/${id}`}>
        <img src={image} alt={temporaryName} className={styles.img} />
        <h3 className={styles.title}>{temporaryName}</h3>
        <p className={styles.text}>{description}</p>
      </NavLink>
    </div>
  );
}
