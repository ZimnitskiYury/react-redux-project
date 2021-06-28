import { useState } from 'react';


export const useSlider = (initialValue) => {
  const [
    value,
    setValue,
  ] = useState(initialValue);

  return {
    value,
    setValue,
    onChange(event) {
      setValue(event.target.value);
    },
  };
};

export default useSlider;
