import { useEffect, useState } from "react";
import { useEnableButton } from "../CustomHooks/useEnableButton";
import Input from "../Input/Input";
import { inputArray } from "../Input/dataInput";
import { createUser } from "../../redux/action/index";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(inputArray);
  const enableButton = useEnableButton(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {};
    input.forEach(
      (element) => (user = { ...user, [element.name]: element.value })
    );
    dispatch(createUser(user));
    setInput(inputArray);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
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
      <button disabled={enableButton}>Sign Up</button>
    </form>
  );
};
export default Register;
