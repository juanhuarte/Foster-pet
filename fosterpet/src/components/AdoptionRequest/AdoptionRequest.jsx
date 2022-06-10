import { useSelector } from "react-redux";
import AdoptionHistory from "../AdoptionHistory/AdoptionHistory";
import styles from "../Adoptions/Adoptions.module.css";

const AdoptionRequest = () => {
  const adoptionsRequest = useSelector((state) => state.adoptionsRequest);

  return (
    <div className={styles.detail}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <AdoptionHistory adoptionsArray={adoptionsRequest} task="request" />
      </div>
    </div>
  );
};

export default AdoptionRequest;
