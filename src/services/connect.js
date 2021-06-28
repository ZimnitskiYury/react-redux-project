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

export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default {
  getData,
  getDataXML,
};
