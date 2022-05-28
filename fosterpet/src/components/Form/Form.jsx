import { useState } from "react";
import { useEnableButton } from "../CustomHooks/useEnableButton";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";

const Form = ({ title, inputArray, actionCreator, onPress }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(inputArray);
  const enableButton = useEnableButton(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {};
    input.forEach(
      (element) => (newData = { ...newData, [element.name]: element.value })
    );
    dispatch(actionCreator(newData));
    if (title === "Sign Up") {
      alert("Usuario Creado");
      onPress(e, true);
    }
    setInput(inputArray);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {input?.map((element, i) => (
        <Input
          key={i}
          id={i}
          name={element.name}
          type={element.type}
          placeholder={element.placeholder}
          setInput={setInput}
          input={input}
        />
      ))}
      <button className={styles.btn} disabled={enableButton}>
        {title}
      </button>
    </form>
  );
};
export default Form;
