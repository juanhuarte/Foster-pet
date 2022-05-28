import { changepassword } from "../Input/dataInput";
import { changeUserPassword } from "../../redux/action/index";
import styles from "../Login/Login.module.css";
import Form from "../Form/Form";
import { useEdit } from "../CustomHooks/useEdit";

const ChangePassword = ({ onPress }) => {
  let statusChange = useEdit();
  return (
    <div className={styles.container}>
      <Form
        title="Change"
        inputArray={changepassword}
        actionCreator={changeUserPassword}
      />
      <div className={styles.account}>
        <button className={styles.buttonU} onClick={(e) => onPress(e, true)}>
          Edit User
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
