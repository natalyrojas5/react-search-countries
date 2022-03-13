const baseUrl = "https://restcountries.com/v3.1/";

const getAll = async () => {
  const url = `${baseUrl}/all`;
  return await fetch(url);
};

const getSearch = async (name) => {
  const url = `${baseUrl}/name/${name}`;
  return await fetch(url);
};

export const countriesServices = {
  getAll,
  getSearch,
};
