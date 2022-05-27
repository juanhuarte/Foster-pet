import { useState } from "react";

export const usePress = () => {
  const [press, setPress] = useState(true);

  function onPress(e, boolean) {
    e.preventDefault();
    setPress(boolean);
  }

  return { press, onPress };
};
