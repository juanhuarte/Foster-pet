import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown.module.css";
import { signOut } from "../../redux/action/index";

const DropdownUser = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const openCloseDrop = () => {
    setDropdown(!dropdown);
  };

  const signOutUser = () => {
    window.localStorage.removeItem("logUser");
    dispatch(signOut());
    navigate("/");
  };
  return (
    <div>
      <Dropdown
        isOpen={dropdown}
        toggle={openCloseDrop}
        size="sm"
        direction="down"
      >
        <DropdownToggle className={styles.iconButton}>
          <BiUserCircle
            size="40"
            style={{
              color: "#584444", //"#00b4d8",
              marginTop: "2vh",
              marginRight: "1vw",
            }}
          />
        </DropdownToggle>
        {dropdown && token && (
          <DropdownMenu className={styles.menu}>
            <DropdownItem className={styles.item} onClick={() => signOutUser()}>
              Sign Out
            </DropdownItem>
            <DropdownItem
              className={styles.item}
              onClick={() => navigate("/edituser")}
            >
              Edit
            </DropdownItem>
          </DropdownMenu>
        )}
        {dropdown && !token && (
          <DropdownMenu className={styles.menu}>
            <DropdownItem
              className={styles.item}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </DropdownItem>
          </DropdownMenu>
        )}
      </Dropdown>
    </div>
  );
};
export default DropdownUser;
