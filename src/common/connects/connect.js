/* function GetData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.punkapi.com/v2/beers/');
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
} */
async function getData() {
  const response = await fetch('https://api.punkapi.com/v2/beers/');
  const data = await response.json();
  return data;
}

export default getData;
