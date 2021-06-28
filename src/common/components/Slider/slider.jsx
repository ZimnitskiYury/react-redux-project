import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider.css';


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
    <label
      htmlFor={tag}
      className={styles.slider}
    >
      <p className={styles.slider__title}>
        {`${tag}:`}
      </p>
      <p className={styles.slider__value}>{sliderValue}</p>
      <input
        id={tag}
        type="range"
        name={name}
        min={min}
        max={max}
        value={sliderValue}
        onChange={sliderOnChange}
        step={step}
      />
    </label>
  );
}

export default Slider;

Slider.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
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
