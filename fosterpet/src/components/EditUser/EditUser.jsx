import { useState } from "react";
import imgSettings from "../../Images/signup.jpg";
import ChangePassword from "../ChangePassword/ChangePassword";
import ChangeUserData from "../ChangeUserData/ChangeUserData";
import { usePress } from "../CustomHooks/usePress";
import styles from "../User/User.module.css";
const EditUser = () => {
  const { press, onPress } = usePress();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgSettings} alt="login" />
      {press ? (
        <ChangeUserData onPress={onPress} />
      ) : (
        <ChangePassword onPress={onPress} />
      )}
    </div>
  );
};

export default EditUser;
