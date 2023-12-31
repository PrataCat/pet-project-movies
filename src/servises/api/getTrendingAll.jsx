import axios from 'axios';

const API_KEY = 'dcb571cd23b92080c89a6cccb7d6e9ea';
const MAIN_URL = 'https://api.themoviedb.org/3/trending/';

const getTrendingAll = async category => {
  const URL = `${MAIN_URL}${category}/week?api_key=${API_KEY}`;

  const res = await axios.get(URL);

  return res.data.results;
};

export default getTrendingAll;
