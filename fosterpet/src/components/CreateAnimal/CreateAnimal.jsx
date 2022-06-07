import Form from "../Form/Form";
import styles from "../Register/Register.module.css";
import { createRescueAnimal } from "../Input/dataInput";
import { createAnimal } from "../../redux/action/index";

const CreateAnimal = () => {
  return (
    <div className={styles.container}>
      <Form
        title="Rescued Animal"
        inputArray={createRescueAnimal}
        actionCreator={createAnimal}
      />
    </div>
  );
};
export default CreateAnimal;
