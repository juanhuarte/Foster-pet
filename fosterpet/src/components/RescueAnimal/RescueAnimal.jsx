import catdog from "../../Images/catdog.jpg";
import CreateAnimal from "../CreateAnimal/CreateAnimal";
import styles from "./RescueAnimal.module.css";
const RescueAnimal = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={catdog} alt="catdog" />
      <CreateAnimal />
    </div>
  );
};

export default RescueAnimal;
