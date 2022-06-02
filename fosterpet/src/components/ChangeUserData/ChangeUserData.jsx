import { edituser } from "../Input/dataInput";
import { editUserInfo } from "../../redux/action/index";
import styles from "../Login/Login.module.css";
import Form from "../Form/Form";
import { useEdit } from "../CustomHooks/useEdit";
import { deleteAcount, signOut } from "../../redux/action/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ChangeUserData = ({ onPress }) => {
  let statusChange = useEdit();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteAcount());
    dispatch(signOut());
    window.localStorage.removeItem("logUser");
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <Form
        title="Edit User"
        inputArray={edituser}
        actionCreator={editUserInfo}
      />
      <div className={styles.account}>
        <button className={styles.buttonU} onClick={(e) => onPress(e, false)}>
          Change Password
        </button>
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        Delete Acount
      </button>
    </div>
  );
};

export default ChangeUserData;
