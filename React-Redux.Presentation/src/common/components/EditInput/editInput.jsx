import React from 'react';
import PropTypes from 'prop-types';

import styles from './editInput.css';


function EditInput({ isEditMode, value, label }) {
  if (isEditMode) {
    return (
      <div className={styles['edit-input']}>
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          value={value}
        />
      </div>
    );
  }

  return (
    <div className={styles['edit-input']}>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
}

EditInput.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default EditInput;
