import { changepassword } from "../Input/dataInput";
import { changeUserPassword } from "../../redux/action/index";
import styles from "../Login/Login.module.css";
import Form from "../Form/Form";

const ChangePassword = ({ onPress }) => {
  //   let errorMessage = useLogin();
  return (
    <div className={styles.container}>
      <Form
        title="Change Password"
        inputArray={changepassword}
        actionCreator={changeUserPassword}
      />
      {/* <p className={styles.text}>{errorMessage ? errorMessage : ""}</p> */}
      {/* {errorMessage && <p className={styles.text}>{errorMessage}</p>} */}
      <div className={styles.account}>
        <button className={styles.buttonU} onClick={(e) => onPress(e, true)}>
          Edit User
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;