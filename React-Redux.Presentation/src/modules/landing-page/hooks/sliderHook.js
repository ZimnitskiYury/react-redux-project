import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export const useSlider = (
  initialValue, searchParam,
) => {
  const history = useHistory();
  const location = useLocation();
  const [
    value,
    setValue,
  ] = useState(new URLSearchParams(location.search).get(searchParam) || initialValue);

  /// Reset sliders to initial value to initial value when redirect to url without query
  useEffect(
    () => {
      setValue(new URLSearchParams(location.search).get(searchParam) || initialValue);
    },
    [location.search],
  );

  return {
    value,
    setValue,
    onChange(event) {
      setValue(event.target.value);
    },
    onMouseUp(event) {
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
