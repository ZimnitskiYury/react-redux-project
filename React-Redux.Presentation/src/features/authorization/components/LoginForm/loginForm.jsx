import React from 'react';
import { useDispatch } from 'react-redux';

import useInput from 'common/hooks/inputHook';
import { login } from 'features/authorization/actions/authActions';

import styles from './loginForm.css';


function LoginForm() {
  const { value: username, reset: resetUsername, onChange: onChangeUsername } = useInput('');
  const { value: password, reset: resetPassword, onChange: onChangePassword } = useInput('');
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (username && password) {
      dispatch(login(
        username,
        password,
      ));
    } else {
      resetUsername();
      resetPassword();
    }
  };

  return (
    <form
      className={styles['login-form']}
      onSubmit={handleSubmit}
    >
      <input
        className={styles['login-form__input']}
        value={username}
        onChange={onChangeUsername}
        type="text"
        placeholder="Username"
        id="Username"
      />
      <input
        className={styles['login-form__input']}
        type="text"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
        id="Password"
      />

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
