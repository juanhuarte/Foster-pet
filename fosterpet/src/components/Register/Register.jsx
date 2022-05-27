import { useEffect, useState } from "react";
import { useEnableButton } from "../CustomHooks/useEnableButton";
import Input from "../Input/Input";
import { inputArray } from "../Input/dataInput";
import { createUser } from "../../redux/action/index";
import { useDispatch } from "react-redux";
import styles from "./Register.module.css";
import Form from "../Form/Form";

const Register = ({ onPress }) => {
  return (
    <div>
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
