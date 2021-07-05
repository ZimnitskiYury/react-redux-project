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

async function ValidateToken(jwt) {
  const url = new URL(
    'auth/validate',
    URL_AUTHAPI,
  );
  url.searchParams.set(
    'token',
    jwt,
  );
  const response = await fetch(url);

  if (response.status === 200) {
    return true;
  }

  return false;
}

function RegisterUser(
  username, password, firstname, lastname, email, birthDate,
) {}

export { authUser, ValidateToken, RegisterUser };
