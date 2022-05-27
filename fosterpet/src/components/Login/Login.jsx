import { loginArray } from "../Input/dataInput";
import Form from "../Form/Form";
import { signIn } from "../../redux/action/index";
import styles from "./Login.module.css";
import { useLogin } from "../CustomHooks/useLogin";

const Login = ({ onPress }) => {
  let errorMessage = useLogin();
  return (
    <div>
      <Form title="Sign In" inputArray={loginArray} actionCreator={signIn} />
      {errorMessage && <p className={styles.text}>{errorMessage}</p>}
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
