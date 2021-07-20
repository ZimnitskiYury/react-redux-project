import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export const useSlider = (
  initialValue, searchParam,
) => {
  const [
    value,
    setValue,
  ] = useState(initialValue);
  const history = useHistory();
  const location = useLocation();

  return {
    value,
    setValue,
    onChange(event) {
      setValue(event.target.value);
      const params = new URLSearchParams(location.search);

      if (params.get(searchParam)) {
        params.set(
          searchParam,
          event.target.value,
        );
      } else {
        params.append(
          searchParam,
          event.target.value,
        );
      }

      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
    },
  };
};

export default useSlider;
