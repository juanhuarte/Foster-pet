import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import DropdownUser from "../Dropdown/Dropdown";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.home} to="/">
        <h3>Home</h3>
      </NavLink>
      <NavLink className={styles.favorites} to="/favorites">
        <h3>Favorites</h3>
      </NavLink>
      <NavLink className={styles.adoptions} to="/adoptions">
        <h3>Adoptions</h3>
      </NavLink>
      <NavLink className={styles.rescue} to="/rescue">
        <h3>Rescue Pet</h3>
      </NavLink>
      <DropdownUser className={styles.user} />
    </div>
  );
}
