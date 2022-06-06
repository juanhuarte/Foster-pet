import { loginArray } from "../Input/dataInput";
import Form from "../Form/Form";
import { signIn } from "../../redux/action/index";
import styles from "./Login.module.css";

const Login = ({ onPress }) => {
  return (
    <div className={styles.container}>
      <Form title="Sign In" inputArray={loginArray} actionCreator={signIn} />
      <div className={styles.account}>
        <p>Don't have an account?</p>
        <button className={styles.button} onClick={(e) => onPress(e, false)}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
