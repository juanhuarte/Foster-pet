import { useEffect } from "react";
import AdoptionHistory from "../AdoptionHistory/AdoptionHistory";
import styles from "./Adoptions.module.css";
import { getAdoptions } from "../../redux/action/index";
import { useDispatch, useSelector } from "react-redux";

const Adoptions = () => {
  const dispatch = useDispatch();
  const adoptions = useSelector((state) => state.adoptions);

  useEffect(() => {
    dispatch(getAdoptions());
  }, []);
  return (
    <div className={styles.detail}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <AdoptionHistory
          adoptionsArray={adoptions}
          task="history"
          title="Adoption History"
        />
      </div>
    </div>
  );
};
export default Adoptions;
