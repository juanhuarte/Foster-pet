import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import DropdownUser from "../Dropdown/Dropdown";
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from "react-redux";

export default function NavBar() {
  const adoptionsRequest = useSelector((state) => state.adoptionsRequest);
  // console.log(adoptionsRequest);
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
      <NavLink className={styles.notification} to="/request">
        <IoIosNotifications
          size="30"
          style={{
            color: "#584444", //"#00b4d8",
          }}
        />
        <p className={styles.number}>
          {adoptionsRequest.length > 0 && adoptionsRequest.length}
        </p>
      </NavLink>
    </div>
  );
}
