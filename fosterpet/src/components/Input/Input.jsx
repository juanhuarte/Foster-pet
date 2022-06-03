import { useState } from "react";
import styles from "./Input.module.css";
import { validation } from "../validationFunc/validation";

const Input = ({ type, name, placeholder, id, setInput, input }) => {
  const [eachInput, setEachInput] = useState({
    value: "",
    error: false,
    errorMessage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let arr;
    const validate = validation(name, value);
    if (validate)
      setEachInput((oldinput) => {
        const newInput = {
          ...oldinput,
          value: name === "image" ? e.target.files[0] : value,
          error: true,
          errorMessage: validate,
        };
        arr = input;
        arr[id] = { ...input[id], ...newInput };
        setInput([...arr]);
        return newInput;
      });
    else {
      setEachInput((oldinput) => {
        const newInput = {
          ...oldinput,
          value: name === "image" ? e.target.files[0] : value,
          error: false,
          errorMessage: "",
        };
        arr = input;
        arr[id] = { ...input[id], ...newInput };
        setInput([...arr]);
        return newInput;
      });
    }
  };
  return (
    <div className={styles.container}>
      {name === "description" ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.textarea}
          value={eachInput.value}
          onChange={handleChange}
        />
      ) : name === "image" ? (
        <input type={type} name={name} onChange={handleChange} />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          value={eachInput.value}
          onChange={handleChange}
        />
      )}
      <p className={styles.text}>
        {eachInput.errorMessage.length > 0 ? eachInput.errorMessage : ""}
      </p>
    </div>
  );
};

export default Input;
