const URL_AUTHAPI = 'http://localhost:5050/';

async function authUser(
  username, password,
) {
  const url = new URL(
    'auth/login',
    URL_AUTHAPI,
  );
  const response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    },
  );
  const profile = await response.json();

  return profile;
}

function ValidateToken(jwt) {}

function RegisterUser(
  username, password, firstname, lastname, email, birthDate,
) {}

export { authUser, ValidateToken, RegisterUser };
