import { useState } from "react";
import styles from "./Input.module.css";
import { validation } from "../validationFunc/validation";

const Input = ({ type, name, placeholder, id, setInput, input }) => {
  let arr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    arr = input;
    arr[id] = {
      ...input[id],
      value: name === "image" ? e.target.files[0] : value,
      error: false,
      errorMessage: "",
    };
    setInput([...arr]);
  };

  return (
    <div className={styles.container}>
      {name === "description" ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.textarea}
          value={input[id].value}
          onChange={handleChange}
          onBlur={(e) => validation(name, e.target.value, setInput)}
        />
      ) : name === "image" ? (
        <input type={type} name={name} onChange={handleChange} />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          value={input[id].value}
          onChange={handleChange}
          onBlur={(e) => validation(name, e.target.value, setInput, id, input)}
        />
      )}
      <p className={styles.text}>
        {input[id].errorMessage.length > 0 && input[id].errorMessage}
      </p>
    </div>
  );
};

export default Input;

/*const [eachInput, setEachInput] = useState({
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
  */
