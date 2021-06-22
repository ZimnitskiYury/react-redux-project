import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useInput from 'Modules/landing-page/hooks/searchInputHook';

import { Slider } from 'Modules/landing-page/components/Slider/slider';

import styles from './searchBox.css';


function SearchBox() {
  const tag = 'searchBox';
  const [IsShownFilters, setShowFilters] = useState(false);
  const { value, reset, onChange } = useInput('');
  const [alcoValue, setAlcoValue] = useState('2');
  const alcoHandler = (event) => {
    setAlcoValue(event.target.value);
  };
  const [ibuValue, setIBUValue] = useState('0');
  const ibuHandler = (event) => {
    setIBUValue(event.target.value);
  };
  const [colorValue, setColorValue] = useState('4');
  const colorHandler = (event) => {
    setColorValue(event.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    reset();
  };

  const sliders = (
    <>
      <Slider tag="Alcohol" name="Alcohol" min="2" max="14" sliderValue={alcoValue} sliderOnChange={alcoHandler} />
      <Slider tag="IBU" name="IBU" min="0" max="120" sliderValue={ibuValue} sliderOnChange={ibuHandler} />
      <Slider tag="ColorEBC" name="ColorEBC" min="4" max="80" sliderValue={colorValue} sliderOnChange={colorHandler} />
    </>
  );

  return (
    <form action="/" method="get" className={styles['landing-page__search']} onSubmit={handleSubmit}>
      <label htmlFor={tag}>
        Search:
        <input id={tag} type="text" name="searchQuery" placeholder="Search beers..." value={value} onChange={onChange} onFocus={() => setShowFilters(true)} />
      </label>
      {IsShownFilters ? sliders : (<span> Start to type your search</span>)}
      <button type="submit">
        <SearchIcon />
        {' '}
        Search
      </button>
    </form>
  );
}

export default SearchBox;
