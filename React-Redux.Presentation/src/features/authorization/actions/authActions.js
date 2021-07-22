import { LOGIN, LOGOUT, REGISTER } from 'features/authorization/constants/authConstants';


function login(
  username, password,
) {
  return {
    type: LOGIN,
    payload: [
      username,
      password,
    ],
  };
}

function register(
  username, password, firstname, lastname, email, birthDate,
) {
  return {
    type: REGISTER,
    payload: [
      username,
      password,
      firstname,
      lastname,
      email,
      birthDate,
    ],
  };
}
function logout() {
  return {
    type: LOGOUT,
  };
}
export { login, register, logout };
