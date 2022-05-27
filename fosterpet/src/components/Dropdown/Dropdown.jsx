import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown.module.css";
import { signOut } from "../../redux/action/index";

const DropdownUser = () => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const openCloseDrop = () => {
    setDropdown(!dropdown);
  };

  const signOutUser = () => {
    window.localStorage.removeItem("logUser");
    dispatch(signOut());
    history.push("/");
  };
  return (
    <div>
      <Dropdown isOpen={dropdown} toggle={openCloseDrop} size="sm">
        <DropdownToggle className={styles.iconButton} caret>
          <BiUserCircle
            size="40"
            style={{
              color: "#00b4d8",
              marginTop: "2vh",
              marginRight: "1vw",
            }}
          />
        </DropdownToggle>
        {dropdown && (
          <DropdownMenu>
            {token ? (
              <DropdownItem onClick={() => signOutUser()}>
                Sign Out
              </DropdownItem>
            ) : (
              <DropdownItem onClick={() => history.push("/signin")}>
                Sign In
              </DropdownItem>
            )}
          </DropdownMenu>
        )}
      </Dropdown>
    </div>
  );
};
export default DropdownUser;