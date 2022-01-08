import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8d1096f95aac46b08dd513ef0dca8ed0',
    language: 'es-ES',
  },
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
  },
});

export default movieDB;
