import React from 'react';

import styles from './registerForm.css';


function RegisterForm() {
  return (
    <form className={styles['register-form']}>
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="Username"
        id="Username"
      />
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="Password"
        id="Password"
      />
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="Email"
        id="Email"
      />
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="FirstName"
        id="FirstName"
      />
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="LastName"
        id="LastName"
      />
      <input
        className={styles['register-form__input']}
        type="text"
        placeholder="BirthDate"
        id="BirthDate"
      />

      <button
        type="submit"
        className={styles['register-form__button']}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
