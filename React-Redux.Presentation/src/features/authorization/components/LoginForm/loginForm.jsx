import { login } from 'Features/authorization/actions/authActions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './loginForm.css';


function LoginForm() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login(
      'urirae',
      'Uri123.',
    ));
  };

  return (
    <form
      className={styles['login-form']}
      onSubmit={handleSubmit}
    >
      <input
        className={styles['login-form__input']}
        type="text"
        placeholder="Username"
        id="Username"
      />
      <input
        className={styles['login-form__input']}
        type="text"
        placeholder="Password"
        id="Password"
      />
      <input
        className={styles['login-form__input']}
        type="checkbox"
        name="remember-me"
        id="remember-me"
      />
      <label htmlFor="remember-me">Remember Me?</label>

      <button
        type="submit"
        className={styles['login-form__button']}
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
