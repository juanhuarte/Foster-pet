import styles from "./Animals.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAnimals } from "../../redux/action/index";
import Loading from "../Loading/Loading";
import Animal from "../Animal/Animal";

const Animals = () => {
  const dispatch = useDispatch();
  const { animalsCopy } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAnimals());
  }, []);

  return animalsCopy ? (
    <div className={styles.container}>
      {animalsCopy?.map((animal) => (
        <Animal
          key={animal.id}
          //   type={animal.type}
          description={animal.description}
          image={animal.image}
          temporaryName={animal.temporaryName}
          id={animal.id}
        />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default Animals;
