import React from 'react';
import './slider.css';


export function Slider({
  tag,
  name,
  min,
  max,
  sliderValue,
  sliderOnChange,
}) {
  return (

    <label htmlFor={tag}>

      <input id={tag} type="range" name={name} min={min} max={max} value={sliderValue} onChange={sliderOnChange} step="0.1" />
      <div>{sliderValue}</div>

    </label>

  );
}

export default Slider;
