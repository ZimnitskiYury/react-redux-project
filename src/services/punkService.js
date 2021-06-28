import { getData } from './connect';
import { URL_PUNKAPI } from './connectConstants';


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

export async function getDataById(id) {
  const url = new URL(`${URL_PUNKAPI}/${id}`);
  const data = await getData(url);

  return data;
}

export async function getDataByParams(searchParams) {
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

export default {
  getDataById,
  getDataByParams,
};