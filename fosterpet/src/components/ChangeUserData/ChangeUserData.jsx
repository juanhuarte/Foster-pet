import { edituser } from "../Input/dataInput";
import { editUserInfo } from "../../redux/action/index";
import styles from "../Login/Login.module.css";
import Form from "../Form/Form";
import { useEdit } from "../CustomHooks/useEdit";

const ChangeUserData = ({ onPress }) => {
  //   let errorMessage = useLogin();
  let statusChange = useEdit();
  return (
    <div className={styles.container}>
      <Form
        title="Edit User"
        inputArray={edituser}
        actionCreator={editUserInfo}
      />
      {/* <p className={styles.text}>{errorMessage ? errorMessage : ""}</p> */}
      {/* {errorMessage && <p className={styles.text}>{errorMessage}</p>} */}
      <div className={styles.account}>
        <button className={styles.buttonU} onClick={(e) => onPress(e, false)}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangeUserData;