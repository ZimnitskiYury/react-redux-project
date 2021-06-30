import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loadNextBeers } from '../actions/searchBeersActions';


export const useInfiniteLoader = (
  options, catalog, searchParameters,
) => {
  const containerRef = useRef(null);
  const isLoading = useRef(false);
  const hasMore = useRef(true);
  const page = useRef(1);
  const dispatch = useDispatch();

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting && !isLoading.current && hasMore.current) {
      isLoading.current = true;
      hasMore.current = false;
      dispatch(loadNextBeers(
        searchParameters.value,
        searchParameters.alcoValue,
        searchParameters.ibuValue,
        searchParameters.ebcValue,
        page.current,
      ));
      page.current += 1;
    }

    if (!entry.isIntersecting && hasMore.current) {
      isLoading.current = false;
    }
  };

  // prevents sending new requests, if previous return no new data
  useEffect(
    () => {
      const observer = new IntersectionObserver(
        callback,
        options,
      );
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      hasMore.current = true;

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    },
    [catalog.length],
  );

  // reset page count for search parameters
  useEffect(
    () => {
      if (searchParameters.page) {
        page.current = 2;
      }
    },
    [searchParameters],
  );

  return [containerRef];
};

export default useInfiniteLoader;
