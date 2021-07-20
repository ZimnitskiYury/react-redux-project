import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from 'Features/authorization/components/LoginForm/loginForm';
import RegisterForm from 'Features/authorization/components/RegisterForm/registerForm';
import { logout } from 'Features/authorization/actions/authActions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

import styles from './authorization.css';


function Authorization() {
  const { user, isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (isLogged) {
    return (
      <div className={styles.authorization}>
        <UserGreeting
          username={user.username}
        />
        <DirectionsWalkIcon
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </DirectionsWalkIcon>
      </div>
    );
  }

  return (
    <Login />
  );
}

function UserGreeting({ username }) {
  return (
    <Link to="/profile">
      <span className={styles.authorization__greetings}>
        {`Hi, ${username}`}
      </span>
    </Link>
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
      <ExitToAppIcon
        type="button"
        onClick={onOpenModal}
      >
        Login
      </ExitToAppIcon>
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
