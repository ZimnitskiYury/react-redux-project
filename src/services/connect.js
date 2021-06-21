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

async function getData() {
  const response = await fetch('https://api.punkapi.com/v2/beers/');
  const data = await response.json();
  return data;
}

export default getDataXML;
