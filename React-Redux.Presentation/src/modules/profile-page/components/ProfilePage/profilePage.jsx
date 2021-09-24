import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import moment from 'moment';

import useInput from 'common/hooks/inputHook';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

import { Redirect } from 'react-router-dom';
import styles from './profilePage.css';


function EditableProps({ user }) {
  const [
    isEditMode,
    setMode,
  ] = useState(false);
  function clickHandler() {
    setMode(!isEditMode);
  }

  const { value: username, onChange: onChangeUsername } = useInput(user.username);
  const { value: email, onChange: onChangeEmail } = useInput(user.email);
  const { value: firstName, onChange: onChangeFirstName } = useInput(user.firstName);
  const { value: lastName, onChange: onChangeLastName } = useInput(user.lastName);
  const { value: birthDate, onChange: onChangeBirthDate } = useInput(moment(user.birthDate).format('DD MMM, YYYY'));

  const submitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form
      className={styles.profile__form}
      onSubmit={submitHandler}
    >
      <div className={styles['profile__input-container']}>
        <label
          className={styles['profile__input-title']}
          htmlFor="username"
        >
          <AccountBoxOutlinedIcon />
          Username
        </label>
        <input
          id="username"
          value={username}
          type="text"
          name={username}
          onChange={onChangeUsername}
          disabled={!isEditMode}
        />
      </div>
      <div className={styles['profile__input-container']}>
        <label
          className={styles['profile__input-title']}
          htmlFor="email"
        >
          <MailOutlineIcon />
          Email
        </label>
        <input
          id="email"
          value={email}
          type="text"
          name={email}
          onChange={onChangeEmail}
          disabled={!isEditMode}
        />
      </div>
      <div className={styles['profile__input-container']}>
        <label
          className={styles['profile__input-title']}
          htmlFor="firstName"
        >
          <AssignmentOutlinedIcon />
          First Name
        </label>
        <input
          id="firstName"
          value={firstName}
          type="text"
          name={firstName}
          onChange={onChangeFirstName}
          disabled={!isEditMode}
        />
      </div>
      <div className={styles['profile__input-container']}>
        <label
          className={styles['profile__input-title']}
          htmlFor="lastName"
        >
          <AssignmentOutlinedIcon />
          Last Name
        </label>
        <input
          id="lastName"
          value={lastName}
          type="text"
          name={lastName}
          onChange={onChangeLastName}
          disabled={!isEditMode}
        />
      </div>
      <div className={styles['profile__input-container']}>
        <label
          className={styles['profile__input-title']}
          htmlFor="birthDate"
        >
          <CakeOutlinedIcon />
          Birth Date
        </label>
        <input
          id="birthDate"
          value={birthDate}
          type="text"
          name={birthDate}
          onChange={onChangeBirthDate}
          disabled={!isEditMode}
        />
      </div>
      <div className={styles['profile__input-container']}>
        <p className={styles['profile__input-title']}>
          <VpnKeyOutlinedIcon />
          Token
        </p>
        <p className={styles.profile__content}>{user.token}</p>
      </div>
      {!isEditMode
        ? (
          <button
            type="button"
            onClick={clickHandler}
          >
            Edit
          </button>
        )
        : (
          <div>
            <button
              type="button"
              onClick={clickHandler}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={clickHandler}
            >
              Save
            </button>
          </div>
        )}
    </form>
  );
}

function ProfilePage() {
  const auth = useSelector((state) => state.auth);

  if (!auth.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <section className={styles.profile}>
      <EditableProps user={auth.user} />
      <div className={styles['profile__photo-container']}>
        <img
          className={styles.profile__photo}
          src={auth.user.urlPhoto || 'src/resources/images/staff-placeholder-male.jpg'}
          alt="User"
        />
      </div>
    </section>
  );
}

EditableProps.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProfilePage;
