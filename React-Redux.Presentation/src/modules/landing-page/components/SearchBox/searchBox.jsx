import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Slider from 'common/components/Slider/slider';
import useSlider from 'modules/landing-page/hooks/sliderHook';
import useQueryInput from 'modules/landing-page/hooks/inputWithQueryHook';
import { searchBeers } from 'modules/landing-page/actions/searchBeersActions';

import styles from './searchBox.css';


function SearchBox() {
  const tag = 'searchBox';
  const dispatch = useDispatch();

  const [
    areFiltersShown,
    setFiltersShown,
  ] = useState(false);
  const { value, reset, onChange } = useQueryInput(
    '',
    'beer_name',
  );

  const { value: alcoValue, onChange: alcoHandler, onMouseUp: alcoMouseUpHandler } = useSlider(
    14,
    'abv_lt',
  );

  const { value: ibuValue, onChange: ibuHandler, onMouseUp: ibuMouseUpHandler } = useSlider(
    120,
    'ibu_lt',
  );

  const { value: ebcValue, onChange: ebcHandler, onMouseUp: ebcMouseUpHandler } = useSlider(
    80,
    'ebc_lt',
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
        sliderOnMouseUp={alcoMouseUpHandler}
      />
      <Slider
        tag="IBU"
        name="IBU"
        min={0}
        max={120}
        sliderValue={ibuValue}
        sliderOnChange={ibuHandler}
        sliderOnMouseUp={ibuMouseUpHandler}
      />
      <Slider
        tag="EBC"
        name="ColorEBC"
        min={4}
        max={80}
        sliderValue={ebcValue}
        sliderOnChange={ebcHandler}
        sliderOnMouseUp={ebcMouseUpHandler}
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
      </div>
      {areFiltersShown && sliders}

    </form>
  );
}

export default SearchBox;
