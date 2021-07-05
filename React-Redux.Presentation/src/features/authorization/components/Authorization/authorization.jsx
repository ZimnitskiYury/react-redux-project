import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { useSelector } from 'react-redux';

import LoginForm from 'Features/authorization/components/LoginForm/loginForm';
import RegisterForm from 'Features/authorization/components/RegisterForm/registerForm';

import styles from './authorization.css';


function Authorization() {
  const { user, isLogged } = useSelector((state) => state.auth);

  if (isLogged) {
    return (
      <UserGreeting username={user.username} />
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

Authorization.propTypes = {
  isLogged: PropTypes.bool,
};

Authorization.defaultProps = {
  isLogged: false,
};

export default Authorization;
