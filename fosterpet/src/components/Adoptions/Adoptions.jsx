import { useEffect } from "react";
import AdoptionHistory from "../AdoptionHistory/AdoptionHistory";
import styles from "./Adoptions.module.css";
import { getAdoptions } from "../../redux/action/index";
import { useDispatch } from "react-redux";

const Adoptions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdoptions());
  }, []);
  return (
    <div className={styles.detail}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <AdoptionHistory />
      </div>
    </div>
  );
};
export default Adoptions;
