import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadNextBeers } from '../actions/searchBeersActions';


export const useInfiniteLoader = (options) => {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dispatch(loadNextBeers(page));
      setPage((page) + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, page]);

  return [containerRef, page];
};

export default useInfiniteLoader;
