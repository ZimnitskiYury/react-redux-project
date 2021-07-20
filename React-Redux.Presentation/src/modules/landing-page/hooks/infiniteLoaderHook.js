import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadMoreBeers, searchBeers } from '../actions/searchBeersActions';


export const useInfiniteLoader = (
  options, catalog,
) => {
  const containerRef = useRef(null);
  const isLoading = useRef(false);
  const hasMore = useRef(true);
  const page = useRef(1);
  const dispatch = useDispatch();
  const location = useLocation();
  let query = new URLSearchParams(location.search);

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting
        && !isLoading.current
        && hasMore.current) {
      isLoading.current = true;
      hasMore.current = false;
      dispatch(loadMoreBeers(
        query.get('beer_name'),
        query.get('abv_lt'),
        query.get('ibu_lt'),
        query.get('ebc_lt'),
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
      page.current = 2;
      query = new URLSearchParams(location.search);
      dispatch(searchBeers(
        query.get('beer_name'),
        query.get('abv_lt'),
        query.get('ibu_lt'),
        query.get('ebc_lt'),
      ));
    },
    [location.search],
  );

  return [containerRef];
};

export default useInfiniteLoader;
