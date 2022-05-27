import { useEffect, useState } from "react";

export const useEnableButton = (input) => {
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    let count = 0;
    input?.forEach((element) => {
      if (!element.hasOwnProperty("error")) ++count;
      else if (element.error) ++count;
    });
    if (count === 0) setEnableButton(false);
    if (input[0].hasOwnProperty("enableButton")) setEnableButton(false);
    else setEnableButton(true);
    count = 0;
  }, [input]);
  return enableButton;
};
