import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from 'features/authorization/components/LoginForm/loginForm';
import RegisterForm from 'features/authorization/components/RegisterForm/registerForm';
import { logout } from 'features/authorization/actions/authActions';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

import 'styles/react-responsive-modal.css';
import styles from './authorization.css';


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
  const [
    isLoginShown,
    setIsLoginShown,
  ] = useState(true);
  const [
    isRegisterShown,
    setIsRegisterShown,
  ] = useState(false);

  const switchModes = (type) => {
    switch (type) {
      case 'login': { setIsLoginShown(true); setIsRegisterShown(false); break; }
      case 'register': { setIsRegisterShown(true); setIsLoginShown(false); break; }
      default: break;
    }
  };
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
          <LoginForm
            isLoginShown={isLoginShown}
            handler={switchModes}
          />
          <RegisterForm
            isRegisterShown={isRegisterShown}
            handler={switchModes}
          />
        </div>
      </Modal>
    </div>
  );
}

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

UserGreeting.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Authorization;
