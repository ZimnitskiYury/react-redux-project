import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import useDebounce from 'common/hooks/debounceHook';


export const useQueryInput = (
  initialValue, searchParam,
) => {
  const history = useHistory();
  const location = useLocation();
  const [
    value,
    setValue,
  ] = useState(new URLSearchParams(location.search).get(searchParam) || initialValue);

  function updateQuery(newValue) {
    const params = new URLSearchParams(location.search);

    if (!newValue) {
      params.delete(searchParam);
    } else if (params.get(searchParam)) {
      params.set(
        searchParam,
        newValue,
      );
    } else {
      params.append(
        searchParam,
        newValue,
      );
    }

    history.replace({
      pathname: location.pathname,
      search: params.toString(),
    });
  }

  const debounce = useDebounce(
    (newValue) => updateQuery(newValue),
    1000,
  );

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
      debounce(event.target.value);
    },
  };
};

export default useQueryInput;
