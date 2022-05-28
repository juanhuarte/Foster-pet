import { inputArray } from "../Input/dataInput";
import { createUser } from "../../redux/action/index";
import styles from "./Register.module.css";
import Form from "../Form/Form";

const Register = ({ onPress }) => {
  return (
    <div className={styles.container}>
      <Form
        title="Sign Up"
        inputArray={inputArray}
        actionCreator={createUser}
        onPress={onPress}
      />
      <div className={styles.account}>
        <p>Already have an account?</p>
        <button className={styles.button} onClick={(e) => onPress(e, true)}>
          Sign in
        </button>
      </div>
    </div>
  );
};
export default Register;
