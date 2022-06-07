import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { useAnimalDetail } from "../CustomHooks/useAnimalDetail";
import styles from "./AnimalDetail.module.css";
import {
  createAdoption,
  getAdoptions,
  deleteAnimal,
  getAnimals,
} from "../../redux/action/index";
import { useValidation } from "../CustomHooks/useValidation";
import { useAdoption } from "../CustomHooks/useAdoption";

const AnimalDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = useValidation();
  const enableButton = useAdoption(id);
  const { animal, isTheRescuer } = useAnimalDetail(id);

  const handleClick = async (e) => {
    e.preventDefault();
    if (validation) {
      if (e.target.name === "delete") {
        dispatch(deleteAnimal(id));
        const answer = await dispatch(getAnimals());
        if (!answer) navigate("/");
      } else {
        dispatch(
          createAdoption({
            date: new Date().toLocaleDateString(),
            adoptionCode: Math.random(),
            rescuer: animal.user,
            animal: id,
          })
        );
        dispatch(getAdoptions());
      }
    } else navigate("/signin");
  };
  return (
    <div className={styles.detail}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div className={styles.name}>
          <span className={styles.spanname}>{animal?.temporaryName}</span>
        </div>
        <div className={styles.gender}>
          <span className={styles.spanTitle}>Gender : </span>
          <span className={styles.span}>{animal?.gender}</span>
        </div>
        <div className={styles.size}>
          <span className={styles.spanTitle}>Size : </span>
          <span className={styles.span}>{animal?.size}</span>
        </div>
        <div className={styles.age}>
          <span className={styles.spanTitle}>Age : </span>
          <span className={styles.span}>{animal?.age}</span>
        </div>
        <div className={styles.type}>
          <span className={styles.spanTitle}>Type : </span>
          <span className={styles.span}>{animal?.type}</span>
        </div>
        <div className={styles.description}>
          <span className={styles.spanTitle}>Description : </span>
          <p className={styles.pDdescription}>{animal?.description}</p>
        </div>
        <div className={styles.imgcontainer}>
          <img className={styles.img} src={animal?.image} alt="AnimalImg" />
        </div>
        <div className={styles.adopt}>
          {isTheRescuer && (
            <button
              className={styles.button}
              onClick={handleClick}
              name="delete"
              // disabled={enableButton}
            >
              Delete
            </button>
          )}
          <button
            className={enableButton ? styles.disableBtn : styles.btn}
            onClick={handleClick}
            disabled={enableButton}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
