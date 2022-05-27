import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import Animals from "../Animals/Animals";

export default function Home() {
  const animalsCopy = useSelector((state) => state.animalsCopy);
  return (
    <div className={styles.home}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <Animals animalsArray={animalsCopy} />
      </div>
    </div>
  );
}
