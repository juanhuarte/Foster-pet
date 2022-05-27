import styles from "./Animals.module.css";
import Loading from "../Loading/Loading";
import Animal from "../Animal/Animal";

const Animals = ({ animalsArray }) => {
  return animalsArray ? (
    <div className={styles.container}>
      {animalsArray?.map((animal) => (
        <Animal
          key={animal.id}
          //   type={animal.type}
          // description={animal.description}
          gender={animal.gender}
          size={animal.size}
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
