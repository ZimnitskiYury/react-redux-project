import React from 'react';
import PropTypes from 'prop-types';
import './slider.css';


export function Slider({
  tag,
  name,
  min,
  max,
  step,
  sliderValue,
  sliderOnChange,
}) {
  return (

    <label htmlFor={tag}>

      <input id={tag} type="range" name={name} min={min} max={max} value={sliderValue} onChange={sliderOnChange} step={step} />
      <div>{sliderValue}</div>

    </label>

  );
}

export default Slider;

Slider.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.string,
  step: PropTypes.string,
  sliderValue: PropTypes.number,
  sliderOnChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  name: 'slider',
  min: 0,
  max: 1,
  step: 0.1,
  sliderValue: 0,
};
