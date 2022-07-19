// import { useSelector } from "react-redux";
import EachAdoption from "../EachAdoption/EachAdoption";
import styles from "./AdoptionHistory.module.css";

const AdoptionHistory = ({ adoptionsArray, task, title }) => {
  // const adoptions = useSelector((state) => state.adoptions);

  return (
    <div className={styles.adoptions}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {adoptionsArray?.length !== 0 ? (
          adoptionsArray?.map((adoption) => (
            <EachAdoption
              key={adoption.id}
              data={{
                date: adoption.date,
                status: adoption.status,
                rescuer: adoption.rescuer,
                animal: adoption.animal,
                id: adoption.id,
                user: adoption.user,
                task,
              }}
            />
          ))
        ) : (
          <p className={styles.message}>You have never made a request</p>
        )}
      </div>
    </div>
  );
};
export default AdoptionHistory;
