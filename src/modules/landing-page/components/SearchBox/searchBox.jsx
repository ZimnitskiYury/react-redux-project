import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '@material-ui/icons/Search';
import useInput from 'Modules/landing-page/hooks/searchInputHook';
import Slider from 'Common/components/Slider/slider';
import useSlider from 'Modules/landing-page/hooks/sliderHook';
import { searchBeers } from 'Modules/landing-page/actions/searchBeersActions';

import { useDispatch } from 'react-redux';
import styles from './searchBox.css';


function SearchBox({ setSearchParameters }) {
  const tag = 'searchBox';
  const dispatch = useDispatch();

  const [
    areFiltersShown,
    setFiltersShown,
  ] = useState(false);
  const { value, reset, onChange } = useInput('');

  const { value: alcoValue, onChange: alcoHandler } = useSlider(14);

  const { value: ibuValue, onChange: ibuHandler } = useSlider(120);

  const { value: ebcValue, onChange: ebcHandler } = useSlider(80);

  useEffect(
    () => {
      setSearchParameters({
        value,
        alcoValue,
        ibuValue,
        ebcValue,
      });
    },
    [],
  );
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchParameters({
      value,
      alcoValue,
      ibuValue,
      ebcValue,
      page: 1,
    });
    dispatch(searchBeers(
      value,
      alcoValue,
      ibuValue,
      ebcValue,
    ));
    reset();
  };

  const sliders = (
    <div className={styles['landing-page__sliders-box']}>
      <p className={styles['landing-page__sliders-box-header']}>Additional filters</p>
      <Slider
        tag="ABV"
        name="Alcohol"
        min={2}
        max={14}
        sliderValue={alcoValue}
        sliderOnChange={alcoHandler}
      />
      <Slider
        tag="IBU"
        name="IBU"
        min={0}
        max={120}
        sliderValue={ibuValue}
        sliderOnChange={ibuHandler}
      />
      <Slider
        tag="EBC"
        name="ColorEBC"
        min={4}
        max={80}
        sliderValue={ebcValue}
        sliderOnChange={ebcHandler}
      />
    </div>
  );

  return (
    <form
      action="/"
      method="get"
      className={styles['landing-page__search']}
      onSubmit={handleSubmit}
    >
      <div className={styles['landing-page__search-box']}>
        <label htmlFor={tag}>
          <input
            className={styles['landing-page__search-input']}
            id={tag}
            type="text"
            name="searchQuery"
            placeholder="Search beers..."
            value={value}
            onChange={onChange}
            onFocus={() => setFiltersShown(true)}
          />
        </label>
        <button
          type="submit"
          className={styles['landing-page__search-button']}
        >
          <SearchIcon className={styles['landing-page_search-icon']} />
          Search
        </button>
      </div>
      {areFiltersShown && sliders}

    </form>
  );
}

SearchBox.propTypes = {
  setSearchParameters: PropTypes.func.isRequired,
};

export default SearchBox;
