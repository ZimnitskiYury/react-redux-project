import { URL_PUNKAPI } from './connectConstants';


const initial = new Map([
  ['page', 1],
  ['per_page', 16],
]);

async function getDataXML() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function getJsonData() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 300) {
          reject(xhr.responseText);
        } else {
          resolve(xhr.response);
        }
      }
    };
    xhr.open('get', 'https://api.punkapi.com/v2/beers/', true);
    xhr.send();
  });
}

export async function getData(searchParams) {
  const url = new URL(URL_PUNKAPI);
  initial.forEach((value, key) => url.searchParams.set(key, value));
  if (searchParams) {
    searchParams.forEach((value, key) => url.searchParams.set(key, value));
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getDataById(id) {
  const url = new URL(`${URL_PUNKAPI}/${id}`);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default { getData, getDataById };
