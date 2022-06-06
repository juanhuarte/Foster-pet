import { useState } from "react";
import { useEnableButton } from "../CustomHooks/useEnableButton";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";

const Form = ({ title, inputArray, actionCreator, onPress }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(inputArray);
  const [errorAnswer, setErrorAnswer] = useState(null);
  const enableButton = useEnableButton(input);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newData;
    if (title === "Rescued Animal") {
      newData = new FormData();
      input.forEach((element) => newData.append(element.name, element.value));
    } else {
      newData = {};
      input.forEach(
        (element) => (newData = { ...newData, [element.name]: element.value })
      );
    }
    const respuesta = await dispatch(actionCreator(newData));
    if (respuesta) setErrorAnswer(respuesta);
    if (!respuesta && title === "Sign Up") {
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
      <p className={styles.text}>{errorAnswer && errorAnswer}</p>
    </form>
  );
};
export default Form;
