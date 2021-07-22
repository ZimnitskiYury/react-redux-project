import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { register } from 'features/authorization/actions/authActions';
import useInput from 'common/hooks/inputHook';

import styles from './registerForm.css';


function RegisterForm() {
  const { value: username, reset: resetUsername, onChange: onChangeUsername } = useInput('');
  const { value: password, reset: resetPassword, onChange: onChangePassword } = useInput('');
  const { value: firstname, reset: resetFirstname, onChange: onChangeFirstname } = useInput('');
  const { value: lastname, reset: resetLastname, onChange: onChangeLastname } = useInput('');
  const { value: email, reset: resetEmail, onChange: onChangeEmail } = useInput('');
  const [
    birthdate,
    setBirthdate,
  ] = useState(new Date());
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (username
      && password
      && firstname
      && lastname
      && birthdate
      && email) {
      dispatch(register(
        username,
        password,
        firstname,
        lastname,
        email,
        birthdate,
      ));
    } else {
      resetUsername();
      resetPassword();
      resetEmail();
      resetFirstname();
      resetLastname();
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form
        className={styles['register-form']}
        onSubmit={handleSubmit}
      >
        <input
          className={styles['register-form__input']}
          type="text"
          placeholder="Username"
          id="Username"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          className={styles['register-form__input']}
          type="text"
          placeholder="Password"
          id="Password"
          value={password}
          onChange={onChangePassword}
        />
        <input
          className={styles['register-form__input']}
          type="text"
          placeholder="Email"
          id="Email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          className={styles['register-form__input']}
          type="text"
          placeholder="Firstname"
          id="Firstname"
          value={firstname}
          onChange={onChangeFirstname}
        />
        <input
          className={styles['register-form__input']}
          type="text"
          placeholder="Lastname"
          id="Lastname"
          value={lastname}
          onChange={onChangeLastname}
        />
        <DatePicker
          format="DD/MM/yyyy"
          value={birthdate}
          onChange={(date) => setBirthdate(date)}
        />

        <button
          type="submit"
          className={styles['register-form__button']}
        >
          Register
        </button>
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default RegisterForm;
