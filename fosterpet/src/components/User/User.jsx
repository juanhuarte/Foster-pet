import imgLogin from "../../Images/signup.jpg";
import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./User.module.css";

const User = () => {
  const [press, setPress] = useState(true);

  function onPress(e, boolean) {
    e.preventDefault();
    setPress(boolean);
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgLogin} alt="login" />
      {press ? <Login onPress={onPress} /> : <Register onPress={onPress} />}
    </div>
  );
};

export default User;
