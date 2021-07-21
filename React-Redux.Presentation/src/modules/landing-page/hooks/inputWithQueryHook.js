import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


export const useQueryInput = (
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
    reset: () => {
      setValue('');
      const params = new URLSearchParams(location.search);
      params.delete(searchParam);
      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
    },
    onChange: (event) => {
      setValue(event.target.value);
      const params = new URLSearchParams(location.search);

      if (!event.target.value) {
        params.delete(searchParam);
      } else if (params.get(searchParam)) {
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

export default useQueryInput;
