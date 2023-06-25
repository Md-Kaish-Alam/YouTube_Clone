import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    params: {
      // part: 'snippet',
      // videoId: 'M7FIvfx5J10',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'ccd849aeb8mshb7100d9d25d5e59p120f90jsn2d9aa4889a91',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }