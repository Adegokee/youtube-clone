import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
   
   
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '6f7cf6cfa0mshb519ed6082e1f3ep149bd4jsne79dfa9d07b8',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

}