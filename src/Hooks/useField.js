import { useState } from "react";

export const useField = ({ init, type }) => {
  const [value, setValue] = useState(init);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    type,
    onChange,
  };
};
