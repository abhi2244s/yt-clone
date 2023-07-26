import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '054ea8a664mshc81570903c668a6p1ed47ejsnf794b481add0',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async(url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
};