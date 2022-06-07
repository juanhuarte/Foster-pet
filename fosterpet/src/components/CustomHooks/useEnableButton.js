import { useEffect, useState } from "react";

export const useEnableButton = (input) => {
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    let count = 0;
    input?.forEach((element) => {
      if (element.error || element.value.length === 0) ++count;
    });
    if (count === 0) setEnableButton(false);

    if (count > 0) setEnableButton(true);
    if (input[0].hasOwnProperty("enableButton")) setEnableButton(false);
    count = 0;
  }, [input]);
  return enableButton;
};
