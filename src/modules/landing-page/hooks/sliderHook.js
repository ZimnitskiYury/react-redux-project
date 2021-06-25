import { useState } from 'react';


export const useSlider = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    isChanged: false,
    onChange(event) {
      setValue(event.target.value);
      this.isChanged = true;
    },
  };
};

export default useSlider;
