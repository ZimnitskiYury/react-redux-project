import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { register } from 'features/authorization/actions/authActions';
import useLoadImage from 'features/authorization/hooks/useLoadImage';
import DoneIcon from '@material-ui/icons/Done';
import useInput from 'common/hooks/inputHook';

import styles from './registerForm.css';


function RegisterForm({ isRegisterShown, handler }) {
  const { url, onChange, onClick } = useLoadImage();
  const { value: username, reset: resetUsername, onChange: onChangeUsername } = useInput('');
  const { value: password, reset: resetPassword, onChange: onChangePassword } = useInput('');
  const { value: firstname, reset: resetFirstname, onChange: onChangeFirstname } = useInput('');
  const { value: lastname, reset: resetLastname, onChange: onChangeLastname } = useInput('');
  const { value: email, reset: resetEmail, onChange: onChangeEmail } = useInput('');
  const {
    value: birthdate,
    onChange: onChangeBirthDate,
  } = useInput(new Date().toJSON());
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
        url,
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
    <>
      <div className={classNames(
        'register-cover',
        { 'register-cover-open': isRegisterShown },
        { 'register-cover-close': !isRegisterShown },
      )}
      >
        <button
          type="button"
          className={styles['register-cover__button']}
          onClick={() => handler('register')}
        >
          Register
        </button>
      </div>
      <form
        className={styles['register-form']}
        onSubmit={handleSubmit}
      >
        <p className={classNames('register-form__title')}>Register New User</p>
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
        <input
          className={styles['register-form__input']}
          value={birthdate}
          onChange={onChangeBirthDate}
        />
        <div className={styles['register-form__input-photo']}>

          <input
            type="file"
            onChange={onChange}
          />
          <button
            type="button"
            onClick={onClick}
          >
            Upload Image
          </button>

        </div>
        <button
          type="submit"
          className={styles['register-form__button']}
        >
          Register
        </button>
      </form>
    </>
  );
}

RegisterForm.propTypes = {
  isRegisterShown: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};

export default RegisterForm;
