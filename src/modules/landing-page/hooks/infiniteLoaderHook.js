import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadNextBeers } from '../actions/searchBeersActions';


export const useInfiniteLoader = (
  options, catalog, searchParameters,
) => {
  const containerRef = useRef(null);
  const [
    page,
    setPage,
  ] = useState(1);
  const [
    isLoading,
    setLoading,
  ] = useState(false);
  const dispatch = useDispatch();

  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isLoading) {
      dispatch(loadNextBeers(
        searchParameters.value,
        searchParameters.alcoValue,
        searchParameters.ibuValue,
        searchParameters.ebcValue,
        page,
      ));
      setPage(page + 1);
      setLoading(true);
    }
  };

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        callback,
        options,
      );
      if (containerRef.current) observer.observe(containerRef.current);
      setLoading(false);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    },
    [catalog],
  );

  return [containerRef];
};

export default useInfiniteLoader;
