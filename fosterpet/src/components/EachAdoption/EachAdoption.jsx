import { useDispatch } from "react-redux";
import { useAnimalAdoption } from "../CustomHooks/useAnimalAdoption";
import {
  updateAdoption,
  getAdoptions,
  answerRequest,
  getAdoptionRequest,
  getAnimals,
} from "../../redux/action/index";
import styles from "./EachAdoption.module.css";

const EachAdoption = ({ data }) => {
  const { date, status, rescuer, animal, id, task } = data;
  const dispatch = useDispatch();
  const dataAnimal = useAnimalAdoption(animal);

  const handleClick = (e) => {
    if (task === "history" && status === "pending")
      dispatch(updateAdoption({ id, status: "cancel" }));
    if (task === "history" && status === "cancel")
      dispatch(updateAdoption({ id, status: "pending" }));
    if (task === "request") {
      dispatch(answerRequest({ id, status: e.target.name }));
      dispatch(getAdoptionRequest());
      dispatch(getAnimals());
    }
    dispatch(getAdoptions());
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{dataAnimal?.temporaryName}</span>
      <img className={styles.img} src={dataAnimal?.image} alt="AnimalImg" />
      <span className={styles.text}>{date}</span>
      <span className={styles.text}>Status: {status}</span>
      {task === "history" && (status === "pending" || status === "cancel") && (
        <button className={styles.btn} onClick={handleClick}>
          {status === "pending" ? "Cancel" : "Adopt"}
        </button>
      )}
      {task === "request" && (
        <div className={styles.btnContainer}>
          <button name="approved" className={styles.btn} onClick={handleClick}>
            Approve
          </button>
          <button name="cancel" className={styles.btn} onClick={handleClick}>
            Decline
          </button>
        </div>
      )}
    </div>
  );
};
export default EachAdoption;
