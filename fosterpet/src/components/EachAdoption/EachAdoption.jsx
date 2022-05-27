import { useDispatch, useSelector } from "react-redux";
import { useAnimalAdoption } from "../CustomHooks/useAnimalAdoption";
import { updateAdoption, getAdoptions } from "../../redux/action/index";
import styles from "./EachAdoption.module.css";

const EachAdoption = ({ data }) => {
  const { date, status, rescuer, animal, id } = data;
  const dispatch = useDispatch();
  const { temporaryName, image } = useAnimalAdoption(animal);

  const handleCancel = () => {
    if (status === "pending")
      dispatch(updateAdoption({ id: id, status: "cancel" }));
    if (status === "cancel")
      dispatch(updateAdoption({ id: id, status: "pending" }));
    dispatch(getAdoptions());
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{temporaryName}</span>
      <img className={styles.img} src={image} alt="AnimalImg" />
      <span className={styles.text}>{date}</span>
      <span className={styles.text}>Status: {status}</span>
      {(status === "pending" || status === "cancel") && (
        <button className={styles.btn} onClick={handleCancel}>
          {status === "pending" ? "Cancel" : "Adopt"}
        </button>
      )}
    </div>
  );
};
export default EachAdoption;
