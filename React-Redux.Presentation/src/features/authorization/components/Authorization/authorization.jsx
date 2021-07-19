import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from 'Features/authorization/components/LoginForm/loginForm';
import RegisterForm from 'Features/authorization/components/RegisterForm/registerForm';
import { logout } from 'Features/authorization/actions/authActions';

import styles from './authorization.css';


function Authorization() {
  const { user, isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (isLogged) {
    return (
      <>
        <UserGreeting
          username={user.username}
        />
        <button
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <Login />
  );
}

function UserGreeting({ username }) {
  return (
    <div>
      <span>
        {`Hi, ${username}`}
      </span>
    </div>
  );
}

function Login() {
  const [
    open,
    setOpen,
  ] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button
        type="button"
        onClick={onOpenModal}
      >
        Login
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
      >
        <div className={styles['authorization-modal']}>
          <LoginForm />
          <RegisterForm />
        </div>

      </Modal>
    </div>
  );
}

UserGreeting.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Authorization;
