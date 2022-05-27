import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useAnimalDetail } from "../CustomHooks/useAnimalDetail";
import styles from "./AnimalDetail.module.css";
import { createAdoption } from "../../redux/action/index";
import { useValidation } from "../CustomHooks/useValidation";

const AnimalDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const validation = useValidation();
  const animal = useAnimalDetail(id);
  const handleClick = () => {
    if (validation)
      dispatch(
        createAdoption({
          date: new Date().toLocaleDateString(),
          adoptionCode: Math.random(),
          rescuer: animal.user,
          animal: id,
        })
      );
    else history.push("/signin");
  };
  return (
    <div className={styles.detail}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div className={styles.name}>
          <span className={styles.spanname}>{animal.temporaryName}</span>
        </div>
        <div className={styles.gender}>
          <span className={styles.spanTitle}>Gender : </span>
          <span className={styles.span}>{animal.gender}</span>
        </div>
        <div className={styles.size}>
          <span className={styles.spanTitle}>Size : </span>
          <span className={styles.span}>{animal.size}</span>
        </div>
        <div className={styles.age}>
          <span className={styles.spanTitle}>Age : </span>
          <span className={styles.span}>{animal.age}</span>
        </div>
        <div className={styles.type}>
          <span className={styles.spanTitle}>Type : </span>
          <span className={styles.span}>{animal.type}</span>
        </div>
        <div className={styles.description}>
          <span className={styles.spanTitle}>Description : </span>
          <p className={styles.pDdescription}>{animal.description}</p>
        </div>
        <div className={styles.imgcontainer}>
          <img className={styles.img} src={animal.image} alt="AnimalImg" />
        </div>
        <div className={styles.adopt}>
          <button className={styles.btn} onClick={handleClick}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
