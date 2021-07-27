import React, { useReducer } from 'react';
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
    isOpenModal,
    toggleModal,
  ] = useReducer(
    (state) => !state,
    false,
  );

  const [
    switcher,
    toggleSwitcher,
  ] = useReducer(
    (state) => ({
      ...state,
      isLoginShown: !state.isLoginShown,
      isRegisterShown: !state.isRegisterShown,
    }),
    {
      isLoginShown: true,
      isRegisterShown: false,
    },
  );

  return (
    <div>
      <ExitToAppIcon
        type="button"
        onClick={toggleModal}
      >
        Login
      </ExitToAppIcon>
      <Modal
        open={isOpenModal}
        onClose={toggleModal}
        center
      >
        <div className={styles['authorization-modal']}>
          <LoginForm
            isLoginShown={switcher.isLoginShown}
            handler={toggleSwitcher}
          />
          <RegisterForm
            isRegisterShown={switcher.isRegisterShown}
            handler={toggleSwitcher}
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
