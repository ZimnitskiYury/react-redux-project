const URL_PUNKAPI = new URL('https://api.punkapi.com/v2/beers');

const initial = new Map([
  [
    'page',
    1,
  ],
  [
    'per_page',
    15,
  ],
]);

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function getDataById(id) {
  const url = new URL(`${URL_PUNKAPI}/${id}`);
  const data = await getData(url);

  return data;
}

async function getDataByParams(searchParams) {
  const url = new URL(URL_PUNKAPI);
  initial.forEach((
    value, key,
  ) => url.searchParams.set(
    key,
    value,
  ));

  if (searchParams) {
    searchParams.forEach((
      value, key,
    ) => url.searchParams.set(
      key,
      value,
    ));
  }
  const data = await getData(url);

  return data;
}

async function getDataXML(url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  return new Promise((
    resolve, reject,
  ) => {
    xhr.onreadystatechange = function getJsonData() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 300) {
          reject(xhr.responseText);
        } else {
          resolve(xhr.response);
        }
      }
    };
    xhr.open(
      'get',
      url,
      true,
    );
    xhr.send();
  });
}
export {
  getData,
  getDataById,
  getDataByParams,
  getDataXML,
};
